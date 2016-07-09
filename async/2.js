function add(a, b) {
  return new Promise(resolve => setTimeout(resolve, 1000, a + b))
}

async function run() {
  for (let i=0; i < 5; i++) {
    let r = await add(i, 2)
    console.log(r)
  }
}

run()
