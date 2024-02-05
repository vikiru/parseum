document 
	 = elements: (list / newline / emptyLine / header / horizontalRule / comment / link / paragraph )+  { 
        return { elements }
    }
    / !.

space = space:([ \t]) { return space };

list
 = spaces:(space)* t:item+ {
      let html = '';
      let original = '';
      let lists = t.flat(Infinity);
      lists[0].indentLevel = (spaces.length / 4) + 1;
      lists.forEach((list) => {
          list.subLists = lists.filter(l => l.indentLevel === list.indentLevel + 1 && lists.indexOf(l) > lists.indexOf(list));
      });
      
      lists.forEach((list) => {
          list.parent = lists.find(l => l.subLists.includes(list)) || {};
      });

      for (let i = 0; i < lists.length; i++) {
          let list = lists[i];
          let parent = list.parent;
          let subLists = parent.subLists || [];
          let listType = list.type;
          let listIndent = list.indentLevel;
          let prevItem = lists[i - 1] || {};
          let nextItem = lists[i + 1] || {};
          let prevIndent = prevItem.indentLevel;
          let nextIndent = nextItem.indentLevel;
          let prevType = prevItem.type;
          let nextType = nextItem.type;
          let noNewList = listIndent === prevIndent && listType === prevType;
          let dontEndList = listIndent === nextIndent && listType === nextType;
          if (noNewList) {
             list.html = list.html.replace(`<${listType}>`, '');
          } else if (dontEndList) {
             list.html = list.html.replace(`</${listType}>`, '');
          } else if (!dontEndList && subLists.includes(list) && subLists.indexOf(list) === subLists.length - 1) {
              list.html += `</li></${parent.type}>`;
          }
          original += list.original;
          html += list.html;
      }
      return { type: 'list', html: html, original: original, subItems: lists };
}

item
 = spaces:(space)* t:(orderedList / unorderedList) {
      const indentLevel = (spaces.length / 4) + 1;
      const { lists } = t;
      const updatedList = lists.map(list => ({ ...list, indentLevel }));
      return updatedList;
 }

orderedList
 = spaces:(space)* t:([0-9] "." " " text ("\n" / !.))+ {
      const objs = t.map((item) => ({
          type: 'ol',
          original: item.flat(Infinity).join(''),
          html: `<ol><li>${item[3].flat(Infinity).join('')}</li></ol>`,
          subLists: [],
          indentLevel: -1
      }));
      return { lists: objs };
 }

unorderedList
 = spaces:(space)* t:([-] " " text ("\n" / !.))+ {
      const objs = t.map((item) => ({
          type: 'ul',
          original: item.flat(Infinity).join(''),
          html: `<ul><li>${item[2].flat(Infinity).join('')}</li></ul>`,
          subLists: [],
          indentLevel: -1
      }));
      return { lists: objs } ;
 }

image
 = "!" "[" altText:$( (!"]") . )* "]" "(" url:$( (!")") . )* ")" {
       const html = `<img src="${url}" alt="${altText}"/>`; 
       const original = "!" + "[" + altText + "]" + "(" + url + ")"; 
       return { type: 'img', original: original, html: html };
       }
       
header_content
 = content:(newline / list / emptyLine / horizontalRule / comment / link / paragraph)* { return content }

header
 = header:("#"+ space+ (text / image)+ )+ id:("{" [^\}]* "}" space* "\n"?)* content:(header_content) "\n"?
 {
    const listFlattened = header.flat(Infinity);
    const idFlattened = id.flat(Infinity);
    const headerLevel = listFlattened.filter((h) => h === '#').length;
    let original = '';
    listFlattened.forEach((l) => {
       if (typeof(l) === 'string') { original += l}
       else { original += l.original }
    })
    let html = `<h${headerLevel}`;
    let customId = '';
    if (headerLevel > 6) { return { type: 'p', original: original, html: `<p>${original}</p>` }}
    if (id.length > 0){
       const idText = id[0][1].join('');
       customId = ` id="${idText}"`;
    }
    html += `${customId}>`;
    content.forEach((c) => {
       original += c.original;
       html += c.html;
    });
    html += `</h${headerLevel}>`;
    return { type: 'header', headerLevel, original: original, html: html, subItems: content.flat(Infinity)};
 }

paragraph
  = t:(text)+ "\n"?  {
     const paragraphItems = t.flat(Infinity).filter(i => i !== null);
     const subItems = [];
     let html = '<p>';
     let original = '';
     const length = paragraphItems.length;
     for (const item of paragraphItems){
        if (typeof(item) === 'object'){
           subItems.push(item);
           original += item.original;
           html += item.html;
        }
        else if (typeof(item) === 'string'){
           original += item;
    	   if (item === '\n' && paragraphItems.indexOf(item) !== length - 1){
              subItems.push({type: 'br', original: item, html: '<br>'});
              html += item.replace('\n', '<br>');
           }
           else {
              html += item.replace('\n', '');
           }
        }
     }
     html += '</p>';
     return { original: original, html: html, subItems: subItems};
  }



newline
  = "\n" ("\n" / !.)
  { return { type: 'newline', original: '\n', html: '' }; }
  / "\n"
  { return { type: 'newline', original: '\n', html: '' }; }
  
emptyLine
  = t:(" " ![^ ])+ / t:("\n" !"\n")+ { return { type: 'empty', original: t.join(''), html: ''} }
  
text
  = chars:([a-zA-Z0-9 ]+ / boldItalic / bold / italic / code / strikethrough / emphasis / subScript / superScript)+ { 
     return chars;
  }

code
 = code:("`" words:text+ "`")+ {
   const listFlattened = code.flat(Infinity);
   const filtered = listFlattened.filter((i) => i !== '`');
   let original = '`';
   let html = '<code>';
   const subItems = [];
   filtered.forEach((item) => {
      if (typeof(item) === 'object'){
          original += item.original;
          html += item.html;
          subItems.push(item);
      }
      else if (typeof(item) === 'string'){
         original += item;
         html += item;
      }
   })
   html += '</code>';
   original += '`';
   return { type: 'code', original: original, html: html, subItems: subItems};
 }
 
italic
 = italic: ("*" words:text+ "*")+ {
   const listFlattened = italic.flat(Infinity);
   const filtered = listFlattened.filter((i) => i !== '*');
   let original = '*';
   let html = '<em>';
   const subItems = [];
   filtered.forEach((item) => {
      if (typeof(item) === 'object'){
          original += item.original;
          html += item.html;
          subItems.push(item);
      }
      else if (typeof(item) === 'string'){
         original += item;
         html += item;
      }
   })
   html += '</em>';
   original += '*';
   return { type: 'em', original: original, html: html};
 }
 
bold
 = bold:("**" text:text+ "**")+ {
   const listFlattened = bold.flat(Infinity);
   const filtered = listFlattened.filter((i) => i !== '**');
   let original = '**';
   let html = '<strong>';
   const subItems = [];
   filtered.forEach((item) => {
      if (typeof(item) === 'object'){
          original += item.original;
          html += item.html;
          subItems.push(item);
      }
      else if (typeof(item) === 'string'){
         original += item;
         html += item;
      }
   })
   original += '**';
   html += '</strong>';
   return {  type: 'strong', original: original, html: html, subItems: subItems };
 }
 
boldItalic
 = boldItalic:("***" words:text+ "***")+ {
   const listFlattened = boldItalic.flat(Infinity);
   const filtered = listFlattened.filter((i) => i !== '***');
   let original = '***';
   let html = '<em><strong>';
   const subItems = [];
   filtered.forEach((item) => {
      if (typeof(item) === 'object'){
          original += item.original;
          html += item.html;
          subItems.push(item);
      }
      else if (typeof(item) === 'string'){
         original += item;
         html += item;
      }
   })
   html += '</em></strong>';
   original += '***';
   return { type: 'em strong', original: original, html: html, subItems: subItems};
 }
 
strikethrough
 = strikethrough:("~~" words:text+ "~~")+ {
   const listFlattened = strikethrough.flat(Infinity);
   const filtered = listFlattened.filter((i) => i !== '~~');
   let original = '~~';
   let html = '<del>';
   const subItems = [];
   filtered.forEach((item) => {
      if (typeof(item) === 'object'){
          original += item.original;
          html += item.html;
          subItems.push(item);
      }
      else if (typeof(item) === 'string'){
         original += item;
         html += item;
      }
   })
   html += '</del>';
   original += '~~';
   return { type: 'del', original: original, html: html, subItems: subItems};
 }

emphasis
 = emphasis:("==" words:text+ "==")+ {
   const listFlattened = emphasis.flat(Infinity);
   const filtered = listFlattened.filter((i) => i !== '==');
   let original = '==';
   let html = '<mark>';
   const subItems = [];
   filtered.forEach((item) => {
      if (typeof(item) === 'object'){
          original += item.original;
          html += item.html;
          subItems.push(item);
      }
      else if (typeof(item) === 'string'){
         original += item;
         html += item;
      }
   })
   html += '</mark>';
   original += '==';
   return { type: 'mark', original: original, html: html, subItems: subItems};
 }

subScript
 = subScript:("~" words:text+ "~")+ {
   const listFlattened = subScript.flat(Infinity);
   const filtered = listFlattened.filter((i) => i !== '~');
   let original = '~';
   let html = '<sub>';
   const subItems = [];
   filtered.forEach((item) => {
      if (typeof(item) === 'object'){
          original += item.original;
          html += item.html;
          subItems.push(item);
      }
      else if (typeof(item) === 'string'){
         original += item;
         html += item;
      }
   })
   html += '</sub>';
   original += '~';
   return { type: 'sub', original: original, html: html, subItems};
 }
 
superScript
 = superScript:("^" words:text+ "^")+ {
   const listFlattened = superScript.flat(Infinity);
   const filtered = listFlattened.filter((i) => i !== '^');
   let original = '^';
   let html = '<sup>';
   const subItems = [];
   filtered.forEach((item) => {
      if (typeof(item) === 'object'){
          original += item.original;
          html += item.html;
          subItems.push(item);
      }
      else if (typeof(item) === 'string'){
         original += item;
         html += item;
      }
   })
   html += '</sup>';
   original += '^';
   return { type: 'sup', original: original, html: html, subItems: subItems};
 }

horizontalRule
 = rule:("---" "-"* "\n") { return { original: rule.join(''), html: '<hr>'} ; }

link
 = link:(title:("[" [a-zA-Z0-9. ]+ "]")+ url:("(" [a-zA-Z0-9.]+ ")")+) { return { original: link.flat().join('')}; }

comment 
 = comment:("["  [a-zA-Z0-9. ]+ "]" ":" " " "#")+ { return {type: 'comment', original: '', html: ''} }
