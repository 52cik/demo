const http = require('http')

function fetch(url) {
  return new Promise(resolve => {
    http.get(url, function(res) {
      let str = ''
      res.on('data', data => str += data)
      res.on('end', () => resolve(str))
    })
  })
}

function co (gen) {
  let g = gen()
  g.next().value.then(x => g.next(x))
}

co(function* gen(){
  let r = yield fetch('http://www.baidu.com/')
  console.log(r)
})
