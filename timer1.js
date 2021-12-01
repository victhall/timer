const input = process.argv
.filter(input => !isNaN(input))
.filter(input => input >= 0);

input.forEach((input) => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, input * 1000);
});