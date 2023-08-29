/**
 * 对象复制
 *
 * @param {*} o
 * @returns
 */
function copy(o) {
  return JSON.parse(JSON.stringify(o));
}

// 正在表达式检测值是否为数值
function isNumber(val) {
  var regrex = new RegExp("^(-?\\d+)(\\.\\d+)?$");
  return typeof val === "number" ? true : regrex.test(val);
}

// 检测是否为对象
function isObject(val) {
  return Object.getPrototypeOf(val) === Object.prototype;
}

function hyphenate(text) {
  return text.replace(/\B([A-Z])/g, "-$1").toLowerCase();
}

function isString(val) {
  return typeof val == "string";
}

function comma(num) {
  if (num) {
    let values = (num + "").split(".");
    values[0] = values[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return values.join(".");
  } else {
    return num;
  }
  // return !(number + "").includes(".")
  //   ? // 就是说1-3位后面一定要匹配3位
  //     (number + "").replace(/\d{1,3}(?=(\d{3})+$)/g, (match) => {
  //       return match + ",";
  //     })
  //   : (number + "").replace(/\d{1,3}(?=(\d{3})+(\.))/g, (match) => {
  //       return match + ",";
  //     });
}

function limitScale(num, scale) {
  console.log("num", num, String(num).includes("."));
  let text = String(num);
  if (text.includes(".")) {
    return text.substring(0, text.indexOf(".") + 1 + scale);
  }
  return num;
}

function isNotNull(val) {
  return val != undefined && val != null;
}

export default { copy, isNumber, isObject, hyphenate, isString, comma, limitScale, isNotNull };
