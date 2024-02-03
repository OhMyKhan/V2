let fetch = require('node-fetch')

let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `*Example:* ${usedPrefix + command} pitucode`   
    try {     
        let json = await fetch(`https://pitucode.com/stalker/tiktok?username=${text}&apikey=${btc}`).then(res => res.json());
        let caption = `⦿  *T I K T O K - S T A L K*\n\n`
        caption += `	◦  *Username* : ${json.result.name}\n`
        caption += `	◦  *Description* : ${json.result.description}\n`
        caption += `	◦  *Followers* : ${json.result.followers}\n`
        caption += `	◦  *Following* : ${json.result.following}\n`
        conn.relayMessage(m.chat, {
            extendedTextMessage: {
                text: caption,
                contextInfo: {
                    externalAdReply: {
                        title: wm,
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: json.result.profile,
                        sourceUrl: ''
                    }
                }, mentions: [m.sender]
            }
        }, {})
    } catch (e) {     
        throw `Error: ${eror}`
    }
}
handler.help = ['ttstalk <username>']
handler.tags = ['stalk']
handler.command = /^(ttstalk|tiktokstalk)$/i
handler.limit = true

module.exports = handler
