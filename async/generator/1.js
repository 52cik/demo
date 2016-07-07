function* gen(x){
  let y = yield x + 2
  return y
}

let g = gen(11)
console.log(g.next(22))
console.log(g.next(33))
