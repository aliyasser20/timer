const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding("utf8");
stdin.on("data", (key) => {
  if (key === "b") {
    console.log("\rbeep");
  }
  if (Number(key) <= 9 && Number(key) >= 1) {
    console.log(`\rsetting timer for ${key} seconds...`);
    setTimeout(() => {
      console.log("\rbeep");
    }, key * 1000);
  }
  if (key === "\u0003") {
    console.log("Thanks for using me, ciao!\n");
    process.exit();
  }
});

