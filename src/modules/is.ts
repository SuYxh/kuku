/**
 * 该函数检查给定值是否是对象而不是数组。
 * @public
 * @param o - 参数 o 是 any 类型，这意味着它可以是任何数据类型。
 * @returns 一个布尔值，指示输入参数“o”是否为对象。
 */
function is_object(o: any): o is Exclude<object, Array<any>> {
  return o !== null && typeof o === 'object' && !Array.isArray(o)
}

/**
 * 该函数检查给定值是否为有限数。
 * @public
 * @param  n - 参数 `n` 是 `any` 类型，这意味着它可以是任何数据类型。
 * @returns 函数 is_number 返回一个布尔值。如果输入的“n”是有限数，它返回“true”，否则返回“false”。
 * @example
 * ```ts
 * is_number(1)// true
 * is_number(NaN)// false
 * is_number(Number.NEGATIVE_INFINITY)// false
 * ```
 */
function is_number(n: any): n is number {
  return typeof n === 'number' && isFinite(n)
}

export {
  is_object,
  is_number,
}