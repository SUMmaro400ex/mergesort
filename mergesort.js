const mergeSort = arr => {
  const { length } = arr;
  if (length < 2) return arr;
  const mid = Math.floor(length/2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  let l = 0;
  let r = 0;
  const result = [];
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l++])
    } else {
      result.push(right[r++])
    }
  }
  return result.concat(left.slice(l)).concat(right.slice(r));
}
console.log(mergeSort([3,7,8,4,2,1,5]))