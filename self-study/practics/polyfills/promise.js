function promiseAll(arr) {
  return new Promise((res, rej) => {
    const len = arr.length;
    const result = Array(len);
    let promiseCount = 0;
    arr.forEach((item, indx) => {
      item
        .then(data => {
          result[indx] = data;
          promiseCount++;
          if (promiseCount === len) {
            res(result);
          }
        })
        .catch(err => rej(err));
    });
  });
}