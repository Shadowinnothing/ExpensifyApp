// a nice little refresher on promises for lecture 144

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'Ryan',
    //   age: 23
    // });
    reject('something went wrong');
  }, 3000);

});

console.log('before');

promise.then((data) => {
  console.log(data);
})
.catch((err) => {
  console.log(err)
});

console.log('after');
