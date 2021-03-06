function thunk(fn) {
  return (...args) => callback => {
    args.push(callback)
    return fn.apply(null, args)
  }
}

function co (gen) {
  let g = gen()

  function next(data) {
    let r = g.next(data)
    if (r.done) return
    r.value(x => next(x))
  }

  next()
}

function add(a, b, cb){
  setTimeout(cb, 1000, a + b)
}

let add2 = thunk(add)

co(function* gen() {
  // 多任务
  let r = [yield add2(1, 2), yield add2(11, 22)]
  console.log('r', r)
})
