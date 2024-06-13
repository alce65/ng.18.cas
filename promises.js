const makeAsync = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const n = Math.random();
      if (n < 0.5) {
        //todo bien
        resolve(n);
      } else {
        //todo mal
        reject(new Error("Error " + n));
      }
    }, 2000);
  });
};

makeAsync()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error.message);
  })
  .finally(() => {
    console.log("Fin");
  });
