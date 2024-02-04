document 
	 = elements: (list / newline / emptyLine / header / horizontalRule / comment / link / paragraph)+  { 
        return { elements }
    }
    / !.


list
  = spaces:(" ")* t:item+ {
      return {  t }}

item
  = spaces:(" ")* t:(orderedList / unorderedList) {
     const indentLevel = spaces.length / 4 + 1;
     const prevLevel = indentLevel > 0 ? indentLevel - 1 : indentLevel;
     const { lists } = t;
     const updatedList = [];
     if (lists && lists.length >= 1){
        const firstItem = lists[0];
        firstItem.indentLevel = indentLevel;
        updatedList.push(firstItem);
        const remainderLists = lists.slice(1);
        remainderLists.forEach((list) => list.indentLevel = prevLevel);
        remainderLists.forEach((list) => updatedList.push(list));
     }
      return { updatedList: updatedList }; 
     }
 
orderedList
  = spaces:(" ")* t:([0-9] "." " " text ("\n" / !.))+ {
      const objs = [];
      t.forEach((item) => objs.push({type: 'ol', original: item.flat(Infinity).join(''), html: `<ol><li>${item[3].flat().join('')}</li></ol>` , subLists: []}));
      return {
       lists: objs
    }}

unorderedList
  = t:([-] " " text ("\n" / !.))+ {
      const objs = [];
      t.forEach((item) => objs.push({type: 'ul', original: item.flat(Infinity).join(''), html: `<ul><li>${item[2].flat().join('')}</li></ul>`, subLists: []}));
      return {
       lists: objs
    };}

image
  = "!" "[" altText:$( (!"]") . )* "]" "(" url:$( (!")") . )* ")" { return { type: 'image', altText, url }; }
  
header_content
 = content:(newline / list / emptyLine / horizontalRule / comment / link / paragraph)* { return content }

header 
  = header:("#"+ space+ text+) id:("{" [^\}]* "}" space* "\n")? content:(header_content) "\n"?
  {
    const listFlattened = header.flat(Infinity);
    const headerLevel = listFlattened.filter((h) => h === '#').length;
    const subItems = [];
    if (headerLevel > 6) { return { type: '', original: original, html: '' }}   
    return {h: header.flat(Infinity), id, content: content.flat(Infinity)}
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

space 
  = [ \t] 

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
