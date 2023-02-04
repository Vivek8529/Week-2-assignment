let addnumbers = (...args) => {
  let sum = 0;
  for (let x of args) sum += x;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve(sum)
      reject(sum);
    }, 3000);
  });
};

let testfunc = async () => {
  try {
    let sum = await addnumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    console.log(sum);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Finally");
  }

  async function add() {}
  // addnumbers(1,2,3,4,5,6,7,8,9,10).then((reuslts) =>{
  //     console.log(reuslts);
  // }).catch((err)=>{
  //     console.log(err);
  // })
};

testfunc();
