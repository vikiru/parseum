document 
	= elements: (list  / paragraph / emptyLine / header / horizontalRule / comment / link )+ { 
     let lineNumber = 0;
     elements.forEach((ele) => ele.lineNumber = lineNumber += 1);
     return { elements }
    }

list
  = spaces:(" ")* t:item+ {
      const lists = t.map(item => item.updatedList).flat();
      let original = '';
      let html = '';
      const firstList = lists[0];
      firstList.html = lists[0].html.replace('</li>', '');
      lists.forEach((list) => list.subLists = lists.filter(l => list.indentLevel + 1 === l.indentLevel && lists.indexOf(l) > lists.indexOf(list)));
      const allLists = [];
      lists.forEach((list) => {
         const listType = list.type;
         const listIndent = list.indentLevel;
         const index = lists.indexOf(list);
         const prevIndex = index - 1 > 0 ? index - 1 : -1;
         const nextIndex = index + 1 < lists.length ? index + 1 : -1;
         const prevItem = lists[prevIndex] || {};
         const nextItem = lists[nextIndex] || {};
         const prevIndent = prevItem.indentLevel;
         const nextIndent = nextItem.indentLevel;
         const prevType = prevItem.type;
         const nextType = nextItem.type;
         const prevIndentCheck = listIndent === prevIndent;
         const nextIndentCheck = listIndent === nextIndent;
         const prevTypeCheck = listType === prevType;
         const nextTypeCheck = listType === nextType;
         const noNewList = prevIndentCheck && prevTypeCheck;
         const dontEndList = nextIndentCheck && nextTypeCheck;
         if (noNewList){
            list.html = list.html.replace(`<${listType}>`, '');
            html += list.html;
         }
         else if (dontEndList || list.subLists.length > 0){
         	list.html = list.html.replace(`</${listType}>`, '');
         	html += list.html;
         }
         else if (!noNewList && !dontEndList){
            html += list.html;
         }
         const spaces = " ".repeat(listIndent * 4);
         original += spaces + list.original;
      })
      html += `</li></${firstList.type}>`;
      return {  html: html, original: original }}

item
  = spaces:(" ")* t:(orderedList / unorderedList) {
     const indentLevel = spaces.length / 4;
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
      t.forEach((item) => objs.push({type: 'ol', original: item.flat().join(''), html: `<ol><li>${item[3]}</li></ol>` , subLists: []}));
      return {
       lists: objs
    }}

unorderedList
  = t:([-] " " text ("\n" / !.))+ {
      const objs = [];
      t.forEach((item) => objs.push({type: 'ul', original: item.flat().join(''), html: `<ul><li>${item[2]}</li></ul>`, subLists: []}));
      return {
       lists: objs
    }}
    
header 
  = h:("#")* words:(" "+ text "\n"?)+ customId:("{" id:([^\}]*) "}")? {
    const headerLevel = h.length;
    if (headerLevel > 6) { return { original: '' , html: '' }}
    let id = '';
	if (customId.length === 3){
      const idAttribute = customId[1].join('');
      id = idAttribute !== '' ? ` id="${idAttribute}"` : '';
    }
    let startTag = `<h${headerLevel}` + id + '>';
    let html = startTag + words.flat().join('').replace('\n', `</h${headerLevel}>`);
    return { type: `h${headerLevel}`, original: h.join('') + words.flat().join(''), html: html }
  } 

paragraph
  = t:(" "? text "\n"?)+ { return { original: t.map(([s, w]) => (s ? s : '') + w).join(''), html: '<p>' + t.map(([s, w]) => (s ? s : '') + w).join('') + '</p>' }; }

emptyLine
  = t:("\n" / " ")+ { return { original: '', html: ''} }
  
text
  = chars:([a-zA-Z0-9 ]+ / boldItalic / bold / italic / code / strikethrough / emphasis / subScript / superScript )+ { return chars.join('').replaceAll(',', ''); }

code
 = code: "`" chars:[a-zA-Z0-9.]+ "`" { return '<code>' + chars.join('') + '</code>'; }
 
italic
 = italic: ("*" words:text+ "*")+ {
   const listFlattened = italic.flat(Infinity);
   const filtered = listFlattened.filter((i) => i !== '*');
   const original = listFlattened.join('');
   const html = '<em>' + filtered.join('') + '</em>';
   return { type: 'em', original: original, html: html};
 }
 
bold
 = bold:("**" words:text+ "**")+ {
   const listFlattened = bold.flat(Infinity);
   const filtered = listFlattened.filter((i) => i !== '**');
   const original = listFlattened.join('');
   const html = '<strong>' + filtered.join('') + '</strong>';
   return { type: 'strong', original: original, html: html};
 }
 
boldItalic
 = boldItalic:("***" words:text+ "***")+ {
   const listFlattened = boldItalic.flat(Infinity);
   const filtered = listFlattened.filter((i) => i !== '***');
   const original = listFlattened.join('');
   const html = '<em><strong>' + filtered.join('') + '</strong></em>';
   return { type: 'em strong', original: original, html: html};
 }
 
strikethrough
 = strikethrough:("~~" words:text+ "~~")+ {
   const listFlattened = strikethrough.flat(Infinity);
   const filtered = listFlattened.filter((i) => i !== '~~');
   const original = listFlattened.join('');
   const html = '<del>' + filtered.join('') + '</del>';
   return { type: 'del', original: original, html: html};
 }

emphasis
 = emphasis:("==" words:text+ "==")+ {
   const listFlattened = emphasis.flat(Infinity);
   const filtered = listFlattened.filter((i) => i !== '==');
   const original = listFlattened.join('');
   const html = '<mark>' + filtered.join('') + '</mark>';
   return { type: 'mark', original: original, html: html};
 }

subScript
 = subScript:("~" words:text+ "~")+ {
   const listFlattened = subScript.flat(Infinity);
   const filtered = listFlattened.filter((i) => i !== '~');
   const original = listFlattened.join('');
   const html = '<sub>' + filtered.join('') + '</sub>';
   return { type: 'sub', original: original, html: html};
 }
 
superScript
 = superScript:("^" words:text+ "^")+ {
   const listFlattened = superScript.flat(Infinity);
   const filtered = listFlattened.filter((i) => i !== '^');
   const original = listFlattened.join('');
   const html = '<sup>' + filtered.join('') + '</sup>';
   return { type: 'sup', original: original, html: html};
 }

horizontalRule
 = rule:("---" "-"* "\n") { return { original: rule.join(''), html: '<hr>'} ; }

link
 = link:(title:("[" [a-zA-Z0-9. ]+ "]")+ url:("(" [a-zA-Z0-9.]+ ")")+) { return { original: link.flat().join('')}; }

comment 
 = comment:("["  [a-zA-Z0-9. ]+ "]" ":" " " "#")+ { return {type: 'comment', original: '', html: ''} }


// TODO: add better handling for links. Update original, html for all tags, and add  type to all.
// TODO: add rule for HTML tags : <tag></tag> and <tag/> or <tag />. In this case, original and html will be the same.
// TODO: combine markdown rules into a single rule seperated by /, then do document: markdown / html at the end.
// TODO: Fix nested list closing. Example input: '1. list 1\n    - list 2\n    - list 2\n1. k\n'
// TODO: Handle lists with paragraphs or other elements within them and figure out how to handle continuation of list
// TODO: Handle auto numbering of ordered lists.
// TODO: Update text formatting to handle nested formatting. Update paragraphs to handle new paragraph vs paragraph seperated
// by <br>
