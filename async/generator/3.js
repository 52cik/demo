function co (gen) {
  let g = gen()
  g.next().value.then(x => g.next(x))
}

co(function* gen(){
  let r = yield new Promise(resolve => resolve(123))
  console.log(r)
})
