/**
 * 此函数接受任何类型的数组并返回一个仅包含唯一值的新数组。
 * @public
 * @param arr - 参数“arr”是一个类型为T的数组，其中T可以是字符串、数字、布尔值、对象等任意数据类型。函数“arr_unique”将这个数组作为输入，返回一个只有唯一元素的新数组.它使用 Set 对象来删除重复项
 * @returns 函数“arr_unique”返回一个“T”类型的唯一元素数组。
 * @example
 * ```ts
 * const arr = ['a', 'b', 'c', 'c', 'a']
 * arr_unique(arr)
 * // ['a', 'b', 'c']
 * ```
 */
function arr_unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr))
}

function arr_remove<T>(arr: T[], value: T) {
  if (!arr) { return false }
  const index = arr.indexOf(value)
  if (index >= 0) {
    arr.splice(index, 1)
    return true
  }
  return false
}

export {
  arr_unique,
  arr_remove
}