import { get } from './get.js'
import { post } from './post.js'

export function getData() {
  //获取字符串
  var result = get('/api/1')
  result.then(res => {
    return res.text()
  }).then(text => {
    console.log(text)
  })
  //获取json
  var result1 = get('/api/2')
  result1.then(res => {
    return res.json()
  }).then(json => {
    console.log(json)
  })
}

export function postData() {
  var result = fetch('/api/post', {
    a:100,
    b:200
  })
  result.then(res => {
    res.json()
  }).then(json => {
    console.log(json)
  })
}