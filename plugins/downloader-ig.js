const fetch = require('node-fetch')
const {instagramdl, instagramdlv2, instagramdlv3, instagramdlv4} =  require ("@bochilteam/scraper")

let handler = async (m, { conn, args, usedPrefix, command }) => {
    try {
      if (!args[0]) throw `*Cara penggunaan :*\n\n${usedPrefix + command} https://www.instagram.com/p/CzwUIGvRa1a/`
      await m.reply('Sedang diproses...')
      const results = await instagramdl(args[0])
        .catch(async _ => await instagramdlv2(args[0]))
        .catch(async _ => await instagramdlv3(args[0]))
        .catch(async _ => await instagramdlv4(args[0]))
      for (const { url } of results) await conn.sendFile(m.chat, url, 'instagram.mp4', global.wm, m)
    } catch (e) {
      try {
        let p = await fetch(`https://pitucode.com/downloader/igdown/v2?apikey=wanzet&url=${args[0]}`)
          let v = await p.json()
          let o = v.result
          await m.reply('_proses..._')
          await conn.sendFile(m.chat, o, '', 'Done', m)
      } catch (e) {
        console.log(e)
        m.reply(`_server sedang maintenance kak, maaf yah_`)
      }
    }
  }

handler.help = ['instagram'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ig|instagram|igdl|instagramdl|igstroy)$/i
handler.limit = true

module.exports = handler

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
