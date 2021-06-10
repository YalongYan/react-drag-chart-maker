export function deepCopy(target: any) {
  if (typeof target == 'object') {
    const result: any = Array.isArray(target) ? [] : {};
    for (const key in target) {
      if (typeof target[key] == 'object') {
        result[key] = deepCopy(target[key]);
      } else {
        result[key] = target[key];
      }
    }

    return result;
  }

  return target;
}

export function swap(arr: any[], i: number, j: number) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// export function $(selector) {
//     return document.querySelector(selector)
// }
