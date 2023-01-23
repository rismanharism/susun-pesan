let data = [
  ['besok', 4],
  ['kita', 1],
  ['akan', 2],
  ['menyerang', 3],
  ['pagi', 5],
]

function susunPesan(arr) {
  let result = '';
  let counter = 1;

	for (let i = 0; counter <= arr.length; i++) {
    // console.log(arr[i][1], counter, arr[i][0], i);
    if (arr[i][1] === counter) {
      result += `${arr[i][0]} `;
      i = -1;
      counter++;
    }
  }

  return result;
}

console.log(susunPesan(data));
// outputnya : 'kita akan menyerang besok pagi'