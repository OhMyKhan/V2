global.owner = ['6288221569310', '62881080256055']  
global.mods = ['6285860357430'] 
global.prems = ['6288221569310']
global.nameowner = 'Kahn'
global.numberowner = '6288221569310' 
global.mail = 'support@pitucode.com' 
global.gc = 'https://chat.whatsapp.com/'
global.instagram = 'https://instagram.com/pitucode'
global.wm = '©Kahn'
global.wait = '_tunggu sedang di proses..._'
global.eror = '_*Server Error*_'
global.stiker_wait = '_tunggu sedang di proses..._'
global.packname = 'com'
global.author = 'com'
global.maxwarn = '2' // Peringatan maksimum
global.ppthumb = 'https://telegra.ph/file/16acf2c8b946324cfaeae.jpg'
global.channelwa = 'https://whatsapp.com/channel/0029VaID06dEgGfE1gYriX2Y'

//INI WAJIB DI ISI!//
global.btc = 'xkECpHx3' 
//Daftar terlebih dahulu https://api.botcahx.eu.org

//INI OP7botNAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'YOUR_APIKEY_HERE'
//Daftar https://api.betabotz.eu.org 

global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.eu.org': 'APIKEY' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
