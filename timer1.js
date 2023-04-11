let timer = function() {
  const time = process.argv.slice(2);
  for (let i = 0; i < time.length; i++) {
    if (time[i] <= 0 || isNaN(time[i])) {
      continue;
    }
    setTimeout(() => {
      process.stdout.write('\x07');
    }, (time[i] * 1000));
    console.log(time[i]);
  }
  return;
};


timer();


// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.