function sleep(t) {
  return new Promise(resolve => setTimeout(resolve, t))
}

async function run() {
  console.log('开始:', new Date())
  await sleep(3000)
  console.log('结束:', new Date())
}

run()
