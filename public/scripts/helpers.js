    // Puts the number (with color red if nagative) in the innerText of target
const counterDisplay = (trgControl, countChar) => {
  if (countChar < 0) {
    trgControl.addClass("red-counter");
  } else {
    trgControl.removeClass("red-counter");
  }
  trgControl.text(countChar);
};

// Validates the form input: returns true if all ok
// returns false if length 0 or over 140
const validateLength = (formElement) => {
  $errMsgLabel = $(formElement).parent().find("span");
  const txtTweetLength = $(formElement).find("textarea").val().length;
  $errMsgLabel.slideUp(); // Animation effect for error message
  if (!txtTweetLength) {
    $errMsgLabel.text("Blank tweet not allowed!");
    $errMsgLabel.slideDown(); // Animation effect for error message
    $errMsgLabel.display = true;
    return false;
  } else if (txtTweetLength > 140) {
    $errMsgLabel.slideDown(); // Animation effect for error message
    $errMsgLabel.text("You have exceeded character limit!");
    $errMsgLabel.display = true;
    return false;
  }
  return true;
};

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};
 
const timeAgo = function (date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  var interval = seconds / (60 * 60 * 24* 365);
  if (interval > 1) {
    return Math.floor(interval) + " year(s)";
  }
  interval = seconds / (60 * 60 * 24 * 30);
  if (interval > 1) {
    return Math.floor(interval) + " month(s)";
  }
  interval = seconds / (60 * 60 * 24);
  if (interval > 1) {
    return Math.floor(interval) + " day(s)";
  }
  interval = seconds / (60 * 60);
  if (interval > 1) {
    return Math.floor(interval) + " hour(s)";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minute(s)";
  }
  return Math.floor(seconds) + " second(s)";
};
