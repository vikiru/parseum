document
	 = elements: (codeBlock / list / newLine / emptyLine / header / horizontalRule / comment / link / paragraph )+  {
        return { elements }
    }
    / !.

space = space:([ \t]) { return space };

codeBlock
 = "```" content:(!"```" .)* "```" {
    let original = '```';
    let html = '<pre><code>';
    const items = content.flat(Infinity);
    items.forEach((c) => {
       if (typeof(c) === 'string'){
          original += c;
          if (c !== '\n'){
             html += c;
          }
       }
    }
    );
    html += '</code></pre>';
    return { type: 'code block', original, html }
 }

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
      return { type: 'list', html, original, subItems: lists };
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
       return { type: 'img', original, html };
       }

header
  = hashes:("#"+)+ space+ headerText:(formatting / text )* "\n"?  {
    const headerLevel = hashes.length;
    const text = headerText.flat(Infinity);
    const startIndex = text.indexOf('{');
    const endIndex = text.indexOf('}');
    let customId = startIndex !== -1 && endIndex !== -1 ? text.slice(startIndex + 1, endIndex).join('') : '';
    let original = '';
    let html = `<h${headerLevel}`;
    if (customId !== '') {
       html += ` id="${customId}">`;
    }
    else {
       html += ">";
    }
    original += hashes.flat(Infinity).join('') + ' ';
    const endingIndex = startIndex === -1 ? text.length : startIndex - 1;
    const slicedText = text.slice(0, endingIndex);
    slicedText.forEach((t) => {
       if (typeof(t) === 'string') {
          original += t;
          html += t;
       }
       else if (typeof(t) === 'object') {
          original += t.original;
          html += t.html;
       }
    });
    html += `</h${headerLevel}>`;
    return { type: 'header', headerLevel, original, html};
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
     return { type: 'p', original, html, subItems: subItems};
  }

newLine
  = lines:(!text "\n") { return { type: 'new line', original: lines.join(''), html: '' }}

emptyLine
  = spaces:(" " / "\t")+ !text newLine? { return { type: 'empty', original: spaces.join(''), html: '' }}

text
 = chars:(escapedCharacters / specialCharacters / [a-zA-Z0-9 ]+ / formatting )+ {
     return chars;
 }

code
 = code:("`" text:(formatting / !"`" .)+ "`")+ {
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
   return { type: 'code', original, html, subItems: subItems};
 }

italic
 = italic: ("*" text:(formatting / !"*" .)+ "*")+ {
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
   return { type: 'em', original, html};
 }

bold
 = bold:("**" text:(formatting / !"**" . )+ "**")+ {
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
    return { type: 'strong', original, html, subItems: subItems };
 }

boldItalic
 = boldItalic:("***" text:(formatting /  !"***" .)+ "***")+ {
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
   return { type: 'em strong', original, html, subItems: subItems};
 }

strikethrough
 = strikethrough:("~~" text:(formatting / !"~~" .)+"~~")+ {
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
   return { type: 'del', original, html, subItems: subItems};
 }

emphasis
 = emphasis:("==" text:(formatting / !"==" .)+ "==")+ {
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
   return { type: 'mark', original, html, subItems: subItems};
 }

subScript
 = subScript:("~" text:(formatting / !"~" .)+ "~")+ {
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
   return { type: 'sub', original, html, subItems};
 }

superScript
 = superScript:("^" text:(formatting / !"^" .)+ "^")+ {
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
   return { type: 'sup', original, html, subItems: subItems};
 }

horizontalRule
 = rule:( !formatting "---" "-"* / !formatting "***" "*"* /  !formatting "___" "_"*)+ !(text) "\n"? { return { original: rule.flat(Infinity).join(''), html: '<hr>'} ; }

link
 = "[" altText:text+ "]" "(" url:text+  title:(' "' [a-zA-Z0-9 ]+ '"')? ")"

comment
 = comment:("["  [a-zA-Z0-9. ]+ "]" ":" " " "#")+ { return {type: 'comment', original: '', html: ''} }

formatting
  = boldItalic / bold / italic / code / strikethrough / emphasis / subScript / superScript

specialCharacters
 = !escapedCharacters !formatting char:("?" / "!" / "~" / "@" / "#" / "$" / "%" / "^" / "&" / "*" / "(" / ")" / "_" / "-" / "+" / "=" / "{" / "}" / "[" / "]" / "|" / "\\" / "`" / ":" / ";" / "<" / ">" / "," / "." / "/") {
    return char;
 }

escapedCharacters
  = "\\" char:(.) { return char; }


// TODO: update item rule to accept other elements such as paragraphs, code blocks, blockquotes, headings, images, links, tables
// TODO: add other markdown elements and formatting alternate syntax, header alternate syntax, escape characters
// TODO: once the above is done merge and start work on next proj.