
const rewards = {
  limit: 20,
};

const cooldown = 86400000;
let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender];
  if (new Date() - user.lastclaim < cooldown) {
    let remainingTime = user.lastclaim + cooldown - new Date();
    let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    remainingTime -= days * (1000 * 60 * 60 * 24);
    let hours = Math.floor(remainingTime / (1000 * 60 * 60));
    remainingTime -= hours * (1000 * 60 * 60);
    let minutes = Math.floor(remainingTime / (1000 * 60));
    throw `Kamu sudah claim limit hari ini ,silahkan tunggu waktu *${days} hari, ${hours} jam, ${minutes} menit* untuk claim lagi`;
  }
  let text = '';
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue;
    user[reward] += rewards[reward];
    text += `Selamat kamu telah mengclaim limit hari ini sebanyak *+${rewards[reward]}*\n`;
  }
  conn.reply(m.chat, text.trim(), m);
  user.lastclaim = new Date() * 1;
};

handler.help = ['claim'];
handler.tags = ['main'];
handler.command = /^(claim)$/i;
handler.cooldown = cooldown;
module.exports = handler;
