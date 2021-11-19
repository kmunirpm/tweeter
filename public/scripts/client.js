/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  const $form = $('section.new-tweet form'); // creates form object from the page

  // Sends the tweet text to the server after its validation
  const sendTweet = function(event) {
    event.preventDefault();
    if (validateLength(this)) {
      const data = $(this).serialize();
      console.log($(this), data)
      $.ajax({
        url: '/tweets',
        method: 'POST',
        data
      }).then (() => {
        $(this).find('textarea').val(''); // Reset the text area after successful tweet
        $(this).find('output.counter').text('140'); // Reset the counter area after successful tweet
        $('#tweets-container').empty(); // Clears the tweets container area
        $form.find('span').text('').display = false; // Clears error message
        loadTweets(); // Reloads the tweets container area
      });
    }
  };

  // form submission handler - Makes an Ajax request to call sendTweet function
  $form.on('submit', sendTweet);


  // Toggles write new section visible/invisible
  const writeNewTweet = () => {
    $newTweet = $('section.new-tweet');
    if ($newTweet.css('display') === 'none') {
      $newTweet.slideDown();
      $('#tweet-text').focus();
    } else {
      $newTweet.slideUp();
    }
  };

  // calls writeNewTweet function on button click
  $('nav button').on('click', writeNewTweet);


  // Createss TweetDom object to display tweets dynamically
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
          <p>${escape(tweet.content.text)}</p>
        </header>
        <footer>
          <div>
            <span>${Math.floor((new Date() - new Date(tweet.created_at))/(1000 * 60 * 60 * 24))} Day(s) ago - ${Date(tweet.created_at)}</span>
            <span class="icons"><span class="emoji">&#127988</span><span class="emoji">&#128257</span><span class="emoji">&#128155</span></span>
          </div>
        </footer>
      </article>`);
    return $tweet;
  };

  // Loads all the tweets in tweet container section dynamically
  const renderTweets = tweets => {
    const sortedTweets = tweets.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at); // ascending
    })
    sortedTweets.forEach((tweet) => {
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