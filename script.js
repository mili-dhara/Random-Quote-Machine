const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs"
    },
    {
      text: "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs"
    },
    {
      "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
      "author": "Thomas Edison"
    },
    {
      "text": "You can observe a lot just by watching.",
      "author": "Yogi Berra"
    },
    {
      "text": "A house divided against itself cannot stand.",
      "author": "Abraham Lincoln"
    },
    {
      "text": "Difficulties increase the nearer we get to the goal.",
      "author": "Johann Wolfgang von Goethe"
    },
    {
      "text": "Fate is in your hands and no one elses",
      "author": "Byron Pulsifer"
    },
    {
      "text": "Be the chief but never the lord.",
      "author": "Lao Tzu"
    },
    {
      "text": "Nothing happens unless first we dream.",
      "author": "Carl Sandburg"
    },
    {
      "text": "Well begun is half done.",
      "author": "Aristotle"
    },
    {
      "text": "Life is a learning experience, only if you learn.",
      "author": "Yogi Berra"
    },
    {
      "text": "Self-complacency is fatal to progress.",
      "author": "Margaret Sangster"
    },
    {
      "text": "Peace comes from within. Do not seek it without.",
      "author": "Buddha"
    },
    {
      "text": "What you give is what you get.",
      "author": "Byron Pulsifer"
    },
    {
      "text": "We can only learn to love by loving.",
      "author": "Iris Murdoch"
    },
    {
      "text": "Life is change. Growth is optional. Choose wisely.",
      "author": "Karen Clark"
    },
    {
      "text": "You'll see it when you believe it.",
      "author": "Wayne Dyer"
    },
    
  ];
  
  const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };
  
  const handleClick = () => {
    const quote = getRandomQuote();
    const quoteMachine = document.querySelector('#quote-machine');
    const randomColor = getRandomColor();
  
    quoteMachine.innerHTML = `
      <div class="quote-text">
        "
        ${quote.text}"
      </div>
      <div class="quote-author">- ${quote.author}</div>
      <div class="button-container">
        <button class="quote-button" onclick="handleClick()">New Quote</button>
      </div>
    `;
    quoteMachine.style.backgroundColor = randomColor;
  };
  
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  handleClick();
  