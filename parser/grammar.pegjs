document
  = elements: (blockquote / codeBlock / newLine / emptyLine / header / horizontalRule / comment / definitionList / taskList / altHeader / paragraph / list)+  {
    return elements;
  }
  / !.

definitionList
  = term:termDefinition+ {
    return { type: 'definition list', items: term };
  }

termDefinition
  = term:text+ ":" (spaces:(" ")* definition:text+ "\n")+ {
    return { term, definition };
  }

taskList
  = "-" " " items:taskItem+ {
    return { type: 'task list', items };
  }

taskItem
  = spaces:(" ")* checkbox:("[ ]" / "[x]") " " text:text+ "\n"? {
    return { type: 'task item', checked: checkbox === '[x]', text };
  }


altHeader
  = t:(text)+ "\n" underline:("="+ / "-"+) "\n"? {
    const level = underline.length ===  1 ?  2 :  1;
    return { type: 'header', level, t };
  }


blockquoteContent
 = (header / image / link / emptyLine / newLine / blockquote / paragraph / list)+

blockquote
  = quotes:(">"+ " "*)+ content:(blockquoteContent+ "\n"*) {
    return { quotes, content };
  }

codeBlock
  = "``` " content:(!"" .)* "```"

list
 = spaces:(" ")* t:item+ {
    return { type: 'list', items: t };
 }

item
 = spaces:(" ")* t:(orderedList / unorderedList / header / image / link / emptyLine / newLine / blockquote / paragraph) {
    return { type: 'item', content: t };
 }

orderedList
  = spaces:(" ")* t:([0-9] "." " " text ("\n" / !.))+ {
    return { type: 'ordered list', items: t };
  }

unorderedList
  = spaces:(" ")* t:([-] " " text ("\n" / !.))+ {
    return { type: 'unordered list', items: t };
  }

paragraph
 = !(spaces:(" ")* t:([-] / [0-9] ".")) t:(text)+ "\n"? {
    return { type: 'paragraph', text: t };
 }

header
 = hashes:("#"+)+ " " headerText:(formatting / text )* '\n'? {
    const hashArr = hashes.flat(Infinity);
    const text = headerText.flat(Infinity);
 	  const headerLevel = hashArr.length;
    const original = `${hashArr.join('')}${text.join('')}`;
	  if (headerLevel > 6) return { type: 'paragraph', original: original, html: `<p>${original}</p>`};
    const html = `<h${headerLevel}>${text.join('')}</h${headerLevel}>`;
    return { type: 'header', headerLevel, original, html };
 }

newLine
  = "\n" { return { type: 'new line' }; }

emptyLine
  = spaces:(" " / "\t")+ "\n"? { return { type: 'empty line' }; }

text
  = chars:(escapedCharacters / specialCharacters / formatting / [a-zA-Z0-9 \t]+ / !newLine !emptyLine .)+ {
    return chars.flat(Infinity).join(''); 
  }

formatting
  = boldItalic / bold / italic / code / strikethrough / emphasis / subScript / superScript / link / autoLink / image 

specialCharacters
  = !escapedCharacters !formatting char:("?" / "!" / "~" / "@" / "#" / "$" / "%" / "^" / "&" / "*" / "(" / ")" / "_" / "-" / "+" / "=" / "{" / "}" / "[" / "]" / "|" / "\\" / "`" / ":" / ";" / "<" / ">" / "," / "." / "/" / "'" / "`" / "<" / ">" / "!" / "+" / "=" / "-" / ":" / "|" / "/") {
    return char;
  }

escapedCharacters
  = "\\" char:(.) { return char; }

code
  = code:("`" text:(formatting / !"`" .)+ "`")+ {
    return { type: 'code', code };
  }

italic
  = italic: ("*" text:(formatting / !"*" .)+ "*")+ {
    return { type: 'italic', italic };
  }

bold
  = bold:("**" text:(formatting / !"**" . )+ "**")+ {
    return { type: 'bold', bold };
  }

boldItalic
  = boldItalic:("***" text:(formatting /  !"***" .)+ "***")+ {
    return { type: 'bold italic', boldItalic };
  }

strikethrough
  = strikethrough:("~~" text:(formatting / !"~~" .)+"~~")+ {
    return { type: 'strikethrough', strikethrough };
  }

emphasis
  = emphasis:("==" text:(formatting / !"==" .)+ "==")+ {
    return { type: 'emphasis', emphasis };
  }

subScript
  = subScript:("~" text:(formatting / !"~" .)+ "~")+ {
    return { type: 'subscript', subScript };
  }

superScript
  = superScript:("^" text:(formatting / !"^" .)+ "^")+ {
    return { type: 'superscript', superScript };
  }

horizontalRule
  = rule:(!formatting "---" "-"* / !formatting "***" "*"* /  !formatting "___" "_"*)+ !(text) "\n"? {
    return { type: 'horizontal rule', rule };
  }

image
  = "!" "[" altText:$((!"]") . )* "]" "(" url:$( (!")") . )* title:(' "' [a-zA-Z0-9 ]+ '"')? ")" {
    return { type: 'image', altText, url, title };
  }
  
link
  = "[" altText:$( (!"]") . )* "]" "(" url:$( (!")") . )* title:(' "' [a-zA-Z0-9 ]+ '"')? ")" {
    return { type: 'link', altText, url, title };
  }
  
scheme
  = "http" "://" / "https" "://" / "www" "."
  
autoLink
  = scheme (!">" .)* { return text().replace(/^<|>$/g, ''); }

comment
  = comment:("["  [a-zA-Z0-9. ]+ "]" ":" " " "#"  text+)+ {
    return { type: 'comment', comment };
  }

htmlTag
  = "<" tagName:([a-zA-Z0-9]+) ">" content:(htmlTag / (!("<" / ">") .))* "</" tagName2:([a-zA-Z0-9]+) ">"
  / "<" tagName:([a-zA-Z0-9]+) "/>"
