header 
  = h:"######" t:(" "* text)* { return { original: h + t.map(([s, w]) => s + w).join(''), html: '<h6>' + t.map(([s, w]) => s + w).join('').trim() + '</h6>' }; }
  / h:"#####" t:(" "* text)* { return { original: h + t.map(([s, w]) => s + w).join(''), html: '<h5>' + t.map(([s, w]) => s + w).join('').trim() + '</h5>' }; }
  / h:"####" t:(" "* text)* { return { original: h + t.map(([s, w]) => s + w).join(''), html: '<h4>' + t.map(([s, w]) => s + w).join('').trim() + '</h4>' }; }
  / h:"###" t:(" "* text)* { return { original: h + t.map(([s, w]) => s + w).join(''), html: '<h3>' + t.map(([s, w]) => s + w).join('').trim() + '</h3>' }; }
  / h:"##" t:(" "* text)* { return { original: h + t.map(([s, w]) => s + w).join(''), html: '<h2>' + t.map(([s, w]) => s + w).join('').trim() + '</h2>' }; }
  / h:"#" t:(" "* text)* { return { original: h + t.map(([s, w]) => s + w).join(''), html: '<h1>' + t.map(([s, w]) => s + w).join('').trim() + '</h1>' }; }

text
  = chars:[a-zA-Z0-9]+ { return chars.join(''); }
  / bolditalic: "**" chars:[a-zA-Z0-9]+ "**" { return '<em><strong>' + chars.join('') + '</strong></em>'; }
  / bold: "**" chars:[a-zA-Z0-9]+ "**" { return '<strong>' + chars.join('') + '</strong>'; }
  / italic: "*" chars:[a-zA-Z0-9]+ "*" { return '<em>' + chars.join('') + '</em>'; }
  / code: "`" chars:[a-zA-Z0-0]+ "`" { return '<code>' + chars.join('') + '</code>'; }
  / strikethrough: "~~" chars:[a-zA-Z0-9]+ "~~" { return '<del>' + chars.join('') + '</del>'; }
  / newline: "\n" { return '<br>'; }