function digital_root(n) {
  let numStr = n.toString();
  while (numStr.length > 1) {
    numStr = numStr
      .split("")
      .map(x => +x)
      .reduce((cur, acc) => cur + acc)
      .toString();
  }
  return parseInt(numStr, 10);
}

// function digital_root(n) {
//   let numStr = n.toString();
//   do {
//     if (/^[0-9]+$/.test(numStr)) {
//       numStr = numStr.toString();
//     } else {
//       numStr = numStr
//         .split("")
//         .map(n => +n)
//         .reduce((cur, acc) => cur + acc);
//     }
//   } while (!numStr.length === 1);
//   console.log(numStr);
// }

// function digital_root(n) {
//   let arr = n.toString();
//   console.log(arr.length);
//   for (let i = arr.length; i > 1; i--) {
//     if(arr.length > 1) {
//       let valueArr =
//     }
//   }

// }

digital_root(16);
digital_root(456);
// digital_root(123456789);
