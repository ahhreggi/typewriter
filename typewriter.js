const sentence = "the quick brown fox jumped over the lazy dog";

let delay = 0;
let newLineDelay = sentence.length * 50;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50;
}
setTimeout(() => {
  process.stdout.write('\n');
}, newLineDelay);