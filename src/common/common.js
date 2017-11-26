export const showPrice = (price) => {

  let temp = Array.from(price.toString());
  let count = 0;
  let result = [];

  for (let i = 1, length = temp.length; i <= length; i++) {

    count++;
    result.unshift(temp[length - i]);
    if (count === 3) {
      if (i < temp.length) {
        result.unshift(".");
      }
      count = 0;
    }
  }
  result.push(" ");

  return result;
}

export const showSubTotal = (price, quantity) => {
  return price * quantity;
}