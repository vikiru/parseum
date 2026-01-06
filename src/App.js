import React, { useEffect, useRef, useState } from 'react';

import Footer from './components/Footer/Footer.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import { parse } from './parser/parser.js';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

function App() {
  const [text, setText] = useState('');
  const [html, setHTML] = useState('');
  const debouncedText = useDebounce(text, 500);
  const textareaRef = useRef(null);
  const divRef = useRef(null);

  useEffect(() => {
    const savedMarkdown = localStorage.getItem('markdown');
    if (savedMarkdown) {
      setText(savedMarkdown);
    }
  }, []);

  useEffect(() => {
    if (debouncedText) {
      const parsedHTML = parse(debouncedText);
      setHTML(parsedHTML.html);
    } else {
      setHTML('');
    }
  }, [debouncedText]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleScroll = () => {
    if (textareaRef.current && divRef.current) {
      const textareaScrollRatio =
        textareaRef.current.scrollTop / (textareaRef.current.scrollHeight - textareaRef.current.clientHeight);
      divRef.current.scrollTop = textareaScrollRatio * (divRef.current.scrollHeight - divRef.current.clientHeight);
    }
  };

  const saveMarkdown = () => {
    localStorage.setItem('markdown', text);
  };

  const clearMarkdown = () => {
    setText('');
    localStorage.removeItem('markdown');
  };

  return (
    <div>
      <NavBar clearMarkdown={clearMarkdown} saveMarkdown={saveMarkdown} />
      <div className="flex">
        <section className="m-2 w-1/2" id="markdown-input">
          <textarea
            className="textarea textarea-bordered textarea-lg h-full w-full"
            id="input"
            onChange={handleChange}
            onScroll={handleScroll}
            placeholder="Type your markdown here. View the rendered HTML on the right."
            ref={textareaRef}
            rows={20}
            style={{ resize: 'none' }}
            value={text}
          ></textarea>
        </section>
        <section className="m-2 w-1/2 overflow-auto" id="html-output">
          <div className="prose pl-6" dangerouslySetInnerHTML={{ __html: html }} ref={divRef} />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
