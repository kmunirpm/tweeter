// Puts the number (with color red if nagative) in the innerText of target
const counterDisplay = (trgControl, countChar) => {
  if (countChar < 0) {
    trgControl.addClass('red-counter');
  } else {
    trgControl.removeClass('red-counter');
  }
  trgControl.text(countChar);
};


// Validates the form input: returns true if all ok
// returns false if length 0 or over 140
const validateLength = (formElement) => {
  $errMsgLabel = $(formElement).parent().find('span');
  const txtTweetLength = $(formElement).find('textarea').val().length;
  if (!txtTweetLength) {
    $errMsgLabel.text('Blank tweet not allowed!');
    return false;
  } else if (txtTweetLength > 140) {
    $errMsgLabel.text('You have exceeded character limit!');
    return false;
  }
  return true;
};