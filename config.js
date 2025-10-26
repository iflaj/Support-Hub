const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/iflaj/Support-Hub/blob/main/img/Host%20By%20Lk_20251006_222348_0000.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 Support-Hub Is Alive Now😍*",
BOT_OWNER: '94722136082',  // Replace with the owner's phone number



};
