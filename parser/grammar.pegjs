document
  = elements: (blockquote / codeBlock / newLine / emptyLine / header / horizontalRule / comment / definitionList / taskList / altHeader / htmlTag / nestedParagraph / list)+  {
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
 = (header / image / link / emptyLine / newLine / blockquote / nestedParagraph / list)+

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

nestedParagraph
= paragraphs:(paragraph)+ "\n"? {
	return { paragraphs }
}


paragraph
 = !(spaces:(" ")* ([-] / [0-9] ".")) t:(text)+ '\n'?{
    const text = t.flat(Infinity);
    let original = '';
    let html = '<p>';
    for (const t of text){
    	if (typeof t === 'object'){
        	original += t.original;
            html += t.html;
        }
        else {
        	original += t;
            html += t;
        }
    }
    html += '</p>';
    return { type: 'paragraph', original, html};
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
    return chars; 
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
  = "`" code:(text:(formatting / !"`" .)+)+  "`"{
    const text = code.flat(Infinity);
    const original = '`' + text.join('') + '`';
    const html = `<code>${text.join('')}</code>`;
    return { type: 'code', original, html };
  }

italic
  = "*" italic:(text:(formatting / !"*" .)+)+  "*"{
    const text = italic.flat(Infinity);
    const original = '*' + text.join('') + '*';
    const html = `<em>${text.join('')}</em>`;
    return { type: 'italic', original, html };
  }

bold
 = "**" bold:(text:(formatting / !"**" . )+)+ "**" {
    const text = bold.flat(Infinity);
    const original = '**' + text.join('') + '**';
    const html = `<strong>${text.join('')}</strong>`;
    return { type: 'bold', original, html };
 }

boldItalic
 = "***" boldItalic:(text:(formatting / !"***" .)+)+ "***" {
    const text = boldItalic.flat(Infinity);
    const original = '***' + text.join('') + '***';
    const html = `<strong><em>${text.join('')}</em></strong>`;
    return { type: 'bold italic', original, html };
 }

strikethrough
 = "~~" strikethrough:(text:(formatting / !"~~" .)+)+ "~~"  {
    const text = strikethrough.flat(Infinity);
    const original = '~~' + text.join('') + '~~';
    const html = `<del>${text.join('')}</del>`;
    return { type: 'strikethrough', original, html };
 }

emphasis
 = "==" emphasis:(text:(formatting / !"==" .)+)+ "=="{
    const text = emphasis.flat(Infinity);
    const original = '==' + text.join('') + '==';
    const html = `<mark>${text.join('')}</mark>`;
    return { type: 'emphasis', original, html };
 }

subScript
 = "~" subScript:(text:(formatting / !"~" .)+)+ "~" {
    const text = subScript.flat(Infinity);
    const original = '~' + text.join('') + '~';
    const html = `<sub>${text.join('')}</sub>`;
    return { type: 'subscript', original, html };
 }

superScript
  = "^" superScript:(text:(formatting / !"^" .)+)+ "^"  {
    const text = superScript.flat(Infinity);
    const original = '^' + text.join('') + '^';
    const html = `<sup>${text.join('')}</sup>`;
    return { type: 'superscript', original, html };
  }

horizontalRule
 = rule:(!formatting "---" "-"* / !formatting "***" "*"* / !formatting "___" "_"*)+ !(text) "\n"? {
    const text = rule.flat(Infinity);
    const original = text.join('');
    const html = `<hr>`;
    return { type: 'horizontal rule', original, html };
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
