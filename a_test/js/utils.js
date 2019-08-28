var utils = {
  ksort: function (obj) {
    var keys = []
    for (var key in obj) {
      keys.push(key)
    }
    return keys.sort()
  },
  toDictionary: function toDictionary(str) {
    var strArr = decodeURIComponent(str).split("&")
    // var strArr = str.split("&")
    var dictionary = {}

    for (var j = 0; j < strArr.length; j++) {
      var params = strArr[j]
      var index = params.indexOf("=")
      var paramName = params.substring(0, index)
      var paramValue = params.substring(index + 1)
      dictionary[paramName] = paramValue
    }
    return dictionary
  },
  toQueryStr: function objToQueryStr(obj, ksort, encode) {
    var result = []
    if (ksort) {
      var len = ksort.length
      for (let i = 0; i < len; ++i) {
        var key = ksort[i]
        result.push(key + '=' + obj[key])
      }
    } else {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          result.push(key + '=' + obj[key])
        }
      }
    }
    return result.join('&')
  },
  parseTime: function parseTime(time, cFormat) {
    if (arguments.length === 0) {
      return null
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
      date = time
    } else {
      if (('' + time).length === 10) {
        time = parseInt(time, 10) * 1000
      }
      date = new Date(time)
    }
    const formatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
      let value = formatObj[key]
      if (key === 'a') {
        return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
      }
      if (result.length > 0 && value < 10) {
        value = '0' + value
      }
      return value || 0
    })
    return time_str
  }
}