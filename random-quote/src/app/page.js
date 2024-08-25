"use client";

import { useState } from 'react';
import quoteData from './quote.json';

export default function Home() {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  function getQuote() {
    const newQuote = quoteData.quotes[Math.floor(Math.random() * quoteData.quotes.length)];
    setText(newQuote.quote);
    setAuthor(newQuote.author);
    console.log(text+author);
  }

  return (
    <main id="quote-box" className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div id="text">{text}</div>
        <div id="author">{author}</div>
      </div>
      <div>
        <button id="new-quote" onClick={getQuote}>Get me new quote</button>
        <a id="tweet-quote" target="_blank" href="twitter.com/intent/tweet">Tweet!</a>
      </div>
      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
    </main>
  );
}


