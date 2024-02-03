const fetch = require('node-fetch');

let handler = async (m, {
  conn,
  args,
  text,
  usedPrefix,
  command
}) => {
//if (command == 'ffstalk') {
//  if (!text) throw `Example : ${usedPrefix + command} 919044185`;
//  try {
//    let ff = await fetch(`https://api.botcahx.eu.org/api/stalk/ff?id=${text}&apikey=${btc}`).then(res => res.json());
//    await conn.reply(m.chat, ff.result.userNameGame, m);
//  } catch (e) {
//    console.log(e);
//    throw `*Error:* ${eror}`;
//  }
//}
    if (command == 'mlstalk') {
    if (text.length < 2) throw `Contoh: ${usedPrefix + command} 2480197|2001`;
    let [id, server] = text.split('|');
    try {
      let ml = await fetch(`https://pitucode.com/stalker/nickml2?apikey=wanzet&id=${id}&server=${server}&apikey=${btc}`).then(res => res.json());
      await conn.reply(m.chat, ml.result.Username, m);
    } catch (e) {
      console.log(e);
      throw `*Error:* ${eror}`;
    }
  }

}

handler.command = handler.help = [ 'mlstalk']
handler.tags = ['stalk']
handler.limit = true

module.exports = handler              
