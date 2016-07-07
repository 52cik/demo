function* gen(x){
  let r = yield new Promise(resolve => resolve(x))
  return r
}

let g = gen(11)
let res = g.next(22)

res.value.then(x => console.log(x))

console.log(g.next(33))
