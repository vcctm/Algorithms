function matFunction() {
  let x = 0;
  function add(num = 1) {
    x += num;
    console.log(x);
  }
  function decrease(num = 1) {
    x -= num;
    console.log(x);
  }
  return {
    add,
    decrease,
  };
}

const mat = matFunction();

mat.add();
mat.add(4);
mat.decrease(5);
