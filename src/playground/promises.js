const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Andy',
      age: 30
    });
    reject('Something went wrong')
  }, 2000)
});

console.log('before');

promise.then((data) => {
  console.log(data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my other promise');
    }, 2000)
  });
}).then((str) => {
  console.log('does this run?', str)
}).catch((error) => {
  console.log('error: ', error);
});





console.log('after');