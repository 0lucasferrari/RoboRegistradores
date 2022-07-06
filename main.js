const puppeteer = require('puppeteer')
const fs = require('fs')

const readStream = fs.createReadStream('data.txt', 'utf-8')

let data = ''

readStream
.on('data', function (chunk) {
    data += chunk
})

console.log(data)