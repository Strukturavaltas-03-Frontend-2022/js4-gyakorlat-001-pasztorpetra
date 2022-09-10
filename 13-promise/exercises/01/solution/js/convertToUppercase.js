// 1. Írj egy függvényt, `convertToUppercase()` néven, mely paraméterként kap egy tömböt. 
// A függvény visszatérési érték egy Promise. Amennyiben a tömb minden eleme string, 
// és sikeresen nagybetűssé alakíthatók a Promise resolved lesz és visszaad egy új tömböt, 
// ami az eredeti tömb összes elemét nagybetűssé alakítva tartalmazza. Ellenkező esetben a Promise 
// rejected lesz, a visszatérési érték a következő string: 'Error: Not all items in the array are strings!'

'use strict'

const convertToUppercase = (arr = []) => {
  return new Promise ((resolve, reject) => {
    if (arr.every(item => (typeof item === 'string'))) {
      resolve(arr.map ((item) => item.toUpperCase()))
    } else {
      reject ('Error: Not all items in the array are strings!')
    }
  })
};

export default convertToUppercase;
