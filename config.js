global.owner = ['6287737771400', '62859106872944']  
global.mods = ['6287737771400'] 
global.prems = ['6287737771400']
global.nameowner = '7bot'
global.numberowner = '62859106872944' 
global.mail = 'support@pitucode.com' 
global.gc = 'https://chat.whatsapp.com/'
global.instagram = 'https://instagram.com/pitucode'
global.wm = '© 7bot'
global.wait = '_tunggu sedang di proses..._'
global.eror = '_*Server Error*_'
global.stiker_wait = '_tunggu sedang di proses..._'
global.packname = 'Pitubot.com'
global.author = 'Pitubot.com'
global.maxwarn = '2' // Peringatan maksimum
global.ppthumb = 'https://telegra.ph/file/16acf2c8b946324cfaeae.jpg'
global.channelwa = 'https://whatsapp.com/channel/0029VaID06dEgGfE1gYriX2Y'

//INI WAJIB DI ISI!//
global.btc = '' 
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
