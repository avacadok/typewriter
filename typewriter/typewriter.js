const sentence = "hello there from lighthouse labs";

const timeout = function() {
  //set initial delay to zero because we will only need to add 50ms after the first one
  let delay = 0;
  for (const char of sentence) {

    setTimeout(() => {
    //if we use console.log each char will be printed on a new column
      process.stdout.write(char);
    },delay);
    delay += 50;
  }
};

timeout();
//or \n for line break
console.log("------");
