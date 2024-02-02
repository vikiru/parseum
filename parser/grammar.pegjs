document 
	= elements: (list / paragraph / emptyLine / header)+ { return elements; }
    
list
  = t:([0-9]? "."+ " "? text ("\n" / !.))+ {
      return {
        type: 'ol',
        original: t.flat().join(''),
        html: '<ol>' + t.map(([num, dot, space, text]) => '<li>' + text + '</li>').join('') + '</ol>'
    }}
  /
  t:([-]? " "? text ("\n" / !.))+ {
      return {
        type: 'ul',
        original: t.map(([dash, space, text, newLine = '']) => dash + space + text + newLine).join(''),
        html: '<ul>' + t.map(([dash, space, text, newLine = '']) => '<li>' + text + '</li>').join('') + '</ul>'
    }}
    
header 
  = h:"######" t:(" "+ text "\n"?)+ { return { type: 'h6', original: h + t.map(([s, w]) => s + w).join(''), html: '<h6>' + t.map(([s, w]) => s + w).join('').trim() + '</h6>' }; }
  / h:"#####" t:(" "+ text "\n"?)+ { return { type: 'h5', original: h + t.map(([s, w]) => s + w).join(''), html: '<h5>' + t.map(([s, w]) => s + w).join('').trim() + '</h5>' }; }
  / h:"####" t:(" "+ text "\n"?)+ { return { type: 'h4', original: h + t.map(([s, w]) => s + w).join(''), html: '<h4>' + t.map(([s, w]) => s + w).join('').trim() + '</h4>' }; }
  / h:"###" t:(" "+ text "\n"?)+ { return { type: 'h3', original: h + t.map(([s, w]) => s + w).join(''), html: '<h3>' + t.map(([s, w]) => s + w).join('').trim() + '</h3>' }; }
  / h:"##" t:(" "+ text "\n"?)+ { return { type: 'h2', original: h + t.map(([s, w]) => s + w).join(''), html: '<h2>' + t.map(([s, w]) => s + w).join('').trim() + '</h2>' }; }
  / h:"#" t:(" "+ text "\n"?)+ { return { type: 'h1', original: h + t.map(([s, w]) => s + w).join(''), html: '<h1>' + t.map(([s, w]) => s + w).join('').trim() + '</h1>' }; }

paragraph
  = t:(" "? text "\n"?)+ { return { original: t.map(([s, w]) => (s ? s : '') + w).join(''), html: '<p>' + t.map(([s, w]) => (s ? s : '') + w).join('').trim() + '</p>' }; }

emptyLine
  = t: "\n" { return { original: t, html: '<br/>'} }

text
  = chars:([a-zA-Z0-9 ]+ / bolditalic / bold / italic / code / strikethrough)+ { return chars.join('').replaceAll(',', ''); }

bold
 = bold: "**" chars:[a-zA-Z0-9.]+ "**" { return '<strong>' + chars.join('') + '</strong>'; }

code
 = code: "`" chars:[a-zA-Z0-9.]+ "`" { return '<code>' + chars.join('') + '</code>'; }
 
italic
 = italic: "*" chars:[a-zA-Z0-9.]+ "*" { return '<em>' + chars.join('') + '</em>'; }
 
bolditalic
 = bolditalic: "***" chars:[a-zA-Z0-9]+ "***" { return '<em><strong>' + chars.join('') + '</strong></em>'; }
 
strikethrough
 = strikethrough: "~~" chars:[a-zA-Z0-9.]+ "~~" { return '<del>' + chars.join('') + '</del>'; }