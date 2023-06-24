/**
 * 该函数确保给定的字符串具有指定的后缀。
 * @public
 * @param s - 我们要确保具有特定的后缀的字符串。
 * @param suffix - suffix
 * 参数是一个字符串，我们要确保它位于输入字符串的结尾。如果输入的字符串已经以后缀结尾，我们直接将它返回作为结果，
 * 否则，该函数将后缀添加到输入字符串的结尾并返回结果字符串。
 * @returns
 * 函数“str_ensure_suffix”返回一个字符串。如果输入字符串“s”以“suffix”字符串结尾，则该函数按原样返回“s”。否则，它返回一个新字符串，它是“suffix”字符串和原始“s”字符串的串联。
 * @example
 * ```ts
 * const str = 'abc'
 * const text = str_ensure_suffix(str, '.txt') // 'abc.txt'
 * ```
 */
function str_ensure_prefix(s: string, prefix: string) {
  return s.startsWith(prefix) ? s : `${prefix}${s}`
}

/**
 * 该函数确保给定的字符串以指定的后缀结尾。
 * @public
 * @param s - 我们要确保以特定后缀结尾的字符串。
 * @param suffix - “suffix”参数是一个字符串，它表示需要添加到“s”字符串末尾（如果不存在）的所需后缀。
 * @returns 函数“str_ensure_suffix”返回一个字符串。具体来说，如果它已经以 `suffix` 参数结尾，它返回原始字符串 `s`，或者如果 `s` 还没有以 `suffix`
 * 结尾，它返回一个新的字符串，它是 `s` 和 `suffix` 的连接。
 */
function str_ensure_suffix(s: string, suffix: string) {
  return s.endsWith(suffix) ? s : `${s}${suffix}`
}

/**
 * 该函数将给定字符串的第一个字母大写。
 * @public
 * @param str - 参数“str”是一个字符串输入，表示需要大写的文本。
 * @returns 函数 `str_capital` 返回一个新字符串，第一个字符大写，其余字符不变。
 */
function str_capital(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
* 该函数将给定字符串中每个单词的首字母大写。
* @public
* @param str - 包含一个或多个由空格分隔的单词的字符串。
* @returns 函数 str_capital_all 返回一个新字符串，其中输入字符串中的所有单词都大写。
*/
function str_capital_all(str: string) {
  return str.split(' ').map(str_capital).join(' ')
}

export {
  str_ensure_prefix,
  str_ensure_suffix,
  str_capital,
  str_capital_all
}