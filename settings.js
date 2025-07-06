import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumber = '' //Ejemplo: 573218138672

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
// <-- Número @s.whatsapp.net -->
  ['51936994155', '🎄 Propietario', true],
  ['51957764960', 'creador 2 🌛', true]
];

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.suittag = ['51936994155'] 
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.libreria = 'Baileys'
global.baileys = 'V 6.7.17' 
global.vs = '2.2.0'
global.nameqr = 'Eazzy V2'
global.namebot = 'Eazzy X Bot'
global.sessions = 'Sessions'
global.jadi = 'JadiBots' 
global.blackJadibts = true

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = 'ᴇᴀᴢᴢʏ ꜱᴛɪᴄᴋᴇʀ 🤍'
global.botname = 'ᴇᴀᴢᴢʏ ᴀᴄᴛᴜᴀʟɪᴢᴀᴅᴏ ᴠ2 🤍'
global.wm = 'ᴇᴀᴢᴢʏ x ʙᴏᴛ 🤍'
global.author = 'ᴇᴀᴢᴢʏ x ʙᴏᴛ 🤍'
global.dev = 'ᴇᴀᴢᴢʏ x ʙᴏᴛ 🤍'
global.bot = 'ᴇᴀᴢᴢʏ x ʙᴏᴛ 🤍'
global.textbot = 'ᴇᴀᴢᴢʏ x ʙᴏᴛ 🤍'
global.etiqueta = 'ᴇᴀᴢᴢʏ x ʙᴏᴛ 🤍'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.moneda = 'coins'
global.welcom1 = 'ᴇᴅɪᴛᴀ ᴇʟ ᴡᴇʟᴄᴏᴍᴇ ᴄᴏɴ .ꜱᴇᴛᴡᴇʟᴄᴏᴍᴇ 🤍'
global.welcom2 = 'ᴇᴅɪᴛᴀ ʟᴀ ᴅᴇꜱᴘᴇᴅɪᴅᴀ ᴄᴏɴ .ꜱᴇᴛʙʏᴇ 🤍'
global.banner = 'https://qu.ax/cqUYc.jpg'
global.avatar = 'https://qu.ax/cqUYc.jpg'
global.logo = 'https://qu.ax/cqUYc.jpg'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.gp1 = 'https://chat.whatsapp.com/IFkJ3LVePPC0FDGFuDul98'
global.comunidad1 = 'https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m'
global.channel = 'https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m'
global.channel2 = 'https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m'
global.md = 'https://github.com'
global.correo = 'yallico20224@gmail.com'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.ch = {
ch1: '120363419947391620@newsletter',
}
global.multiplier = 60

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
