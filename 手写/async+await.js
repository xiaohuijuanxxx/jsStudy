var getNumbers = () => {
    return Promise.resolve([1, 2, 3])
  }
  var multi = num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (num) {
          resolve(num * num)
        } else {
          reject(new Error('num not specified'))
        }
      }, 1000)
    })
  }
  
  //这里并不会每隔1秒打印出一个数字，而是1秒后 一块输出出来
  async function test () {
    var nums = await getNumbers()
    nums.forEach(async x => {
      var res = await multi(x)
      console.log(res)
    })
  }
  test()