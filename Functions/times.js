function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

let oneF = times(1, 1); // 1 * 1 = 1
let twoF = times(2, oneF); //2 * 1 = 2
let threeF = times(3, twoF); //3 * 2 = 6
let fourF = times(4, threeF); //4 * 6 = 24
let fiveF = times(5, fourF); //5 * 24 120