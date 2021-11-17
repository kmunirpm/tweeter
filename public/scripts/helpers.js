// Puts the number (with color red if nagative) in the innerText of target
const counterDisplay = (trgControl, countChar) => {
  if (countChar < 0) {
    trgControl.addClass('red-counter');
  } else {
    trgControl.removeClass('red-counter');
  }
  trgControl.text(countChar);
};