import 'whatwg-fetch'
import 'es6-promise'

//将对象拼接成key1=val&key2=val2&key3=val3  这种字符串形式
function obj2params(obj) {
  var result = ''
  var item
  for (item in obj) {
    result += '&' + item + '=' + encodeURIComponent(obj[item])
  }

  if (result) {
    result = result.slice(1)
  }
  
  return result
}


export function post(url,paramsObj) {
  var result = fetch(url, {
    method:'POST',
    credentials:'include',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-type': 'application/x-www-form-urlencoded'
    },
    body:obj2params(paramsObj)
  })
  return result
}