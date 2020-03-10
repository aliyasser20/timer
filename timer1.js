const arguments = process.argv.slice(2);

const timer1 = (times) => {
  if (times.length < 1) {
    return;
  }

  times.forEach(el => {
    const number = Number(el);
    if (number && el > 0)
      setTimeout(() => {
        process.stdout.write("\x07");
        // console.log(number);
        // console.log("--");
      }, number * 1000);
  });
};

timer1(arguments);