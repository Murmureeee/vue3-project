/**
 * 获取assets静态资源
 * @param {*} url 图片地址
 * @returns
 */
const getAssetsImage = (url) => {
  return new URL(`../assets/image/${url}`, import.meta.url).href
}

/**
 * 数组里面的字符串是否在目标字符串中
 * @param {*} strList 字符串数组
 * @param {*} str 目标字符串
 * @returns
 */
function findArrayInStr(strList, str) {
  let find = false
  for (let i = 0; i < strList.length; i++) {
    find = str.indexOf(strList[i]) !== -1
    if (find) {
      break
    }
  }
  return find
}

export { getAssetsImage, findArrayInStr }
