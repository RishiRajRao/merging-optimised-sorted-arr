function mergeSorted(arr1, arr2) {
  let arr3 = [],
    i,
    j,
    k;
  i = j = k = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      arr3.push(arr1[i]);
      i++, k++;
    } else {
      arr3.push(arr2[j]);
      j++, k++;
    }
  }
  while (i < arr1.length) {
    arr3.push(arr1[i]);
    k++, i++;
  }
  while (j < arr2.length) {
    arr3.push(arr2[j]);
    k++, j++;
  }
  console.log("res==", arr3, i, j, k);
}

mergeSorted([2, 3, 4, 5], [10, 14, 17, 20, 25]);
