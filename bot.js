const { Telegraf } = require('telegraf');
const { TELEGRAM_TOKEN } = require('./constants');

const bot = new Telegraf(TELEGRAM_TOKEN)

bot.start((ctx)=>{
    ctx.reply('Welcome Frank 2.0');
})

bot.launch();