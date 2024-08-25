

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id="quote-box">
        <div id="text">lorem text </div>
        <div id="author">author</div>
      </div>
      <div>
        <button id="new-quote">Get me new quote</button>
        <a id="tweet-quote" target="_blank" href="twitter.com/intent/tweet">Tweet!</a>
      </div>
    </main>
  );
}
