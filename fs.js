var fs = require('fs');

const data = fs.readFileSync('./chartdata.json')

const datajson = JSON.parse(data)

console.log(datajson);