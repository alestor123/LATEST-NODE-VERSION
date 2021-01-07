var axios = require('axios');
module.exports = async () =>{
var data = await axios('https://nodejs.org/dist/latest/SHASUMS256.txt')
return {current:process.version.replace('v',''),latest:data.data.split('-v')[1].split('-')[0]}
}