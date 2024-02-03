const https = require('https');

var handler = async (m, { conn, args,  usedPrefix, command }) => {
    if (!args[0]) throw `*Cara penggunaan :*\n\n${usedPrefix + command} https://vt.tiktok.com/ZS8ABHoGU`
   // try {
   //     m.reply('_Sedang diproses..._')
   //     const { thumbnail, video, audio } = await tiktokdl(args[0])
   //     const url = video
   //     if (!url) throw 'Can\'t download video!'
   //     await conn.sendMessage(m.chat, { video: { url: url } }, m)
   // } catch (e) {
   //     console.log(e)
   //     m.reply(`_Server error utama error, sedang menghubungkan server 2, mohon ditunggu_`)
   // }
    try {
        let p = await fetch(`https://pitucode.com/downloader/musically?apikey=wanzet&url=${args[0]}`)
        let v = await p.json()
        let o = v.result.url_nowm
        await m.reply('_proses..._')
        await conn.sendFile(m.chat, o, '', 'Done', m)
      } catch (e) {
        console.log(e)
        m.reply(`_Server error / sedang perbaikan_`)
      }
}


handler.help = ['tiktok'];
handler.command = /^(tiktok|tt|tiktokdl|tiktoknowm)$/i
handler.tags = ['downloader'];
handler.limit = true;
handler.group = false;
handler.premium = false;
handler.owner = false;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;
handler.private = false;

module.exports = handler;
