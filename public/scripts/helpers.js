// Puts the number (with color red if nagative) in the innerText of target
const counterDisplay = (trgControl, countChar) => {
  if (countChar < 0) {
    trgControl.addClass('red-counter');
  } else {
    trgControl.removeClass('red-counter');
  }
  trgControl.text(countChar);
};






const createTweetDomElement  = tweet => {  
  const $tweet = $(`
    <article class="tweet">
    <header>
      <div class="user">
        <div>
          <img src=${tweet.user.avatars} alt="avatar">
          <span>${tweet.user.name}</span>
        </div>
        <span class="handle">${tweet.user.handle}</span>
      </div>
      <p>${tweet.content.text}</p>
    </header>
    <footer>
      <div>
        <span>${Math.floor((new Date() - new Date(tweet.created_at))/(1000 * 60 * 60 * 24))} Day(s) ago - ${Date(tweet.created_at)}</span>
        <span class="icons">icons</span>
      </div>
    </footer>
  </article>`);
  return $tweet;
};


// Puts all the tweets in tweet container section dynamically
const renderTweets = tweets => {
  tweets.forEach((tweet) => {
    let $tweet = createTweetDomElement(tweet);
    $('#tweets-container').append($tweet);
  });
};


// Fetches tweets from /tweets page
const loadTweets = () => {
  $.ajax({
    url: '/tweets',
    method: 'GET'
  })
  .then((tweetsJson) => {
    renderTweets(tweetsJson)
    console.log(tweetsJson);
  });
};

loadTweets(); 