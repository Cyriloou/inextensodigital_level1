//utils function to immutably replace array item at index
export function replaceAt(array, index, value) {
  const ret = array.slice(0);
  ret[index] = value;
  return ret;
}
