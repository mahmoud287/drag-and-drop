self.addEventListener("message", () => {
  for (let i = 0; i < 10000; i++) {
    for (let j = 0; j < 10000; j++) {
      for (let k = 0; k < 1000; k++) {
        console.log(Math.sqrt(i * j * k));
      }
    }
  }
  self.postMessage("finish");
});
