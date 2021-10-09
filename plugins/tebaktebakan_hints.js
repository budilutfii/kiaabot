let handler = async (m, { conn }) => {
    conn.tebaktebakan = conn.tebaktebakan ? conn.tebaktebakan : {}
    let id = m.chat
    if (!(id in conn.tebaktebakan)) throw false
    let json = conn.tebaktebakan[id][1]
    let ans = json.result.jawaban.trim()
    let clue = ans.replace(/[AIUEO]/g, '_')
    m.reply('```' + clue + '```')
}
handler.command = /^tebak$/i
handler.limit = true
module.exports = handler