function sleep(t) {
  return new Promise(resolve => setTimeout(resolve, t, +new Date))
}

async function run() {
  // 顺序
  let a = await sleep(100)
  let b = await sleep(200)

  // 并发
  let c = await Promise.all([sleep(100), sleep(200), sleep(300)])

  // 并发2
  let list = [sleep(100), sleep(200), sleep(300)]
  let d = []
  for (let fn of list) {
    d.push(await fn);
  }

  console.log('',
    'a:', a, '\n',
    'b:', b, '\n',
    c, '\n',
    d, '\n'
  )
}

run()
