import React, { useEffect, useRef, useState } from 'react';

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
            divRef.current.scrollTop =
                textareaScrollRatio * (divRef.current.scrollHeight - divRef.current.clientHeight);
        }
    };

    return (
        <div>
            <NavBar />
            <div className="flex">
                <section id="markdown-input" className="w-1/2">
                    <textarea
                        ref={textareaRef}
                        placeholder=""
                        className="textarea textarea-bordered textarea-lg h-full w-full"
                        rows={20}
                        value={text}
                        onChange={handleChange}
                        onScroll={handleScroll}
                    ></textarea>
                </section>
                <section id="html-output" className="w-1/2">
                    <div ref={divRef} className="prose pl-6" dangerouslySetInnerHTML={{ __html: html }} />
                </section>
            </div>
        </div>
    );
}

export default App;
