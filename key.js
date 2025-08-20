function generateKey() {
  let e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz12345678.,?@#$_&-*!%/\~| ';
  let key = {};
  let varArray = [];
  for (let i = 0; i < e.length; i++) {
    varArray.push(e[i]);
  }
  let usedIndex = [];

  function getRandom(arr, min, max) {
    let ran = Math.round(min + Math.random() * (max - min));
    if (arr.includes(ran)) {
      ran = getRandom(arr, min, max);
    }
    return ran;
  }

  varArray.forEach(value => {
    let index = getRandom(usedIndex, 0, e.length - 1);
    let newValue = e[index];

    usedIndex = [...usedIndex, index];

    key = { ...key, [value]: newValue };
    // console.log(usedIndex);
  });

  //console.log(key);
  return key;
}
function generateDecryptionKey(EnKey) {
  let entries = Object.entries(EnKey);
  let key = {};
  entries.forEach((entry, i) => {
    //console.log(entry);
    let newEntry = entry.reverse();
    let newValue = {};
    key = { ...key, [entry[0]]: entry[1] };
    // console.log(decryptionKey);
  });
  return key;
}
//generateKey();
/**
 *
 * h 119iv0 p v09b09v0arvh8v0rp0a1
 */
