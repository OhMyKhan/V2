var fetch = require('node-fetch');
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
try {
  await m.reply(wait)
  var apii = await fetch(`https://pitucode.com/entertainment/bard?query=${text}&apikey=${btc}`)
  var res = await apii.json()
  await m.reply(res.result)
} catch (err) {
  console.error(err)
  throw "Terjadi kesalahan dalam menjawab pertanyaan"
}
}
handler.command = handler.help = ['bard','bardai'];
handler.tags = ['tools'];
handler.limit = true
handler.premium = false
module.exports = handler;
