let handler = async (m, { usedPrefix, command, conn, text }) => {
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let cap = `ššš­šššš¬š šššš­ šš§š¢ ${totalreg} šš¬šš«\nššš š¢š¬š­šš« šššš­ šš§š¢ ${rtotalreg} šš¬šš«`
conn.reply(m.chat, cap, fkontak)
}
handler.help = ['database', 'user']
handler.tags = ['info', 'database']
handler.command = /^(user|database|jumlahdatabase)$/i
handler.limit = true

export default handler