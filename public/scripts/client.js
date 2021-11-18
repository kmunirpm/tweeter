/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

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
          <p>${escape(tweet.content.text).replaceAll("%20", " ")}</p>
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
    });
  };


  // calls the function to load tweets
  loadTweets(); 

});