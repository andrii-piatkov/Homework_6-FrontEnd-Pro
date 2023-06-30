function power(num, degree) {
  if (degree == 0) {
    return 1;
  } else {
    return num * power(num, degree - 1);
  }
}
const result = power(5, 2);
console.log(result);
