function sleep(t) {
  return new Promise(resolve => setTimeout( _ => { resolve(+new Date) }, t))
}

async function run() {
  // 顺序
  let a = await sleep(100)
  let b = await sleep(200)

  // 并发1
  let c = await Promise.all([sleep(100), sleep(200), sleep(300)])

  // 并发2
  let d = await Promise.all([100, 200, 300].map(t => sleep(t)))

  // 并发3
  let list = [sleep(100), sleep(200), sleep(300)]
  let e = []
  for (let fn of list) {
    e.push(await fn)
  }

  console.log(
    '',
    'a:', a, '\n',
    'b:', b, '\n',
    'c:', c, '\n',
    'd:', d, '\n',
    'e:', e, '\n'
  )
}

run()
