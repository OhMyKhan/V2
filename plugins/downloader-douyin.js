const fetch = require('node-fetch');
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    throw `Masukkan URL!\n\ncontoh:\n${usedPrefix + command} https://v.douyin.com/ikq8axJ/`;
  }
    if (!args[0].match(/douyin/gi)) {
      throw `URL Tidak Ditemukan!`;
    }
    m.reply('*Mohon tunggu...*');
    try {
    const api = await fetch(`https://pitucode.com/downloader/douyin?apikey=${btc}&url=${args[0]}`);
    const res = await api.json();
    var {
      title, 
      duration, 
      play,
      music
    } = res.result
    var {
      download_count, 
      share_count, 
      play_count,
      comment_count
    } = res
  
     
  conn.sendFile(m.chat, play, null, `*Deskripsi:* ${title}\n*Durasi:* ${duration}\n*Total Share*: ${share_count}\n*Total Download:* ${download_count}\n*Total Play:* ${play_count}\n*Total Komentar:* ${comment_count}\n*Audio:* ${music}`, m);
  } catch (e) {
    console.log(e);
    throw `Terjadi kesalahan!`;
  }
};
handler.help = ['douyin'];
handler.command = /^(douyin)$/i;
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
