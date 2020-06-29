/*
UnoBot
Fatto da @LeddaZ
*/

//Moduli npm
var TelegramBot = require("node-telegram-bot-api");
var dotenv = require('dotenv').config();

//Insulti
var t1 = "troia";
var t2 = "coglion";
var t3 = "ritardat";
var t4 = "autistic";
var t5 = "puttana";
var t6 = "scem";
var t7 = "stupid";
var t8 = "down";
var t9 = "baldracca";
var t10 = "troietta";
var t11 = "puttanella";
var t12 = "piezo di merda";
var t13 = "pezzo di merda";
var t14 = "tua madre";
var t15 = "piccola zoccola";
var t16 = "finocchio";
var t17 = "frocetto";
var t18 = "handicappat";
var t19 = "ochetta";
var t20 = "fai schifo";
var t21 = "stronz";

//Lettura della token del bot da .env
var token = process.env.TOKEN;

//Testo di /start
var start = "<b>UnoBot</b>\nBot per contare i +1\nFatto da @LeddaZ"

//Codice del bot
const bot = new TelegramBot(token, { polling: true });

//Risposta a /start
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, start, { parse_mode: "HTML" });
});

//Risposte agli insulti
bot.on("message", (msg) => {

    //Risposte ai trigger
    if (msg.text.toString().toLowerCase().includes(t1))
        bot.sendMessage(msg.chat.id, "+1 a " + msg.from.first_name);

    if (msg.text.toString().toLowerCase().includes(t2))
        bot.sendMessage(msg.chat.id, "+1 a " + msg.from.first_name);

    if (msg.text.toString().toLowerCase().includes(t3))
        bot.sendMessage(msg.chat.id, "+1 a " + msg.from.first_name);

    if (msg.text.toString().toLowerCase().includes(t4))
        bot.sendMessage(msg.chat.id, "+1 a " + msg.from.first_name);

    if (msg.text.toString().toLowerCase().includes(t5))
        bot.sendMessage(msg.chat.id, "+1 a " + msg.from.first_name);

    if (msg.text.toString().toLowerCase().includes(t6))
        bot.sendMessage(msg.chat.id, "+1 a " + msg.from.first_name);

    if (msg.text.toString().toLowerCase().includes(t7))
        bot.sendMessage(msg.chat.id, "+1 a " + msg.from.first_name);

    if (msg.text.toString().toLowerCase().includes(t8))
        bot.sendMessage(msg.chat.id, "+1 a " + msg.from.first_name);

    if (msg.text.toString().toLowerCase().includes(t9))
        bot.sendMessage(msg.chat.id, "+1 a " + msg.from.first_name);

    if (msg.text.toString().toLowerCase().includes(t10))
        bot.sendMessage(msg.chat.id, "+1 a " + msg.from.first_name);

    if (msg.text.toString().toLowerCase().includes(t11))
        bot.sendMessage(msg.chat.id, "+1 a " + msg.from.first_name);

    if (msg.text.toString().toLowerCase().includes(t12))
        bot.sendMessage(msg.chat.id, "+1 a " + msg.from.first_name);

    if (msg.text.toString().toLowerCase().includes(t13))
        bot.sendMessage(msg.chat.id, "+1 a " + msg.from.first_name);

    if (msg.text.toString().toLowerCase().includes(t14))
        bot.sendMessage(msg.chat.id, "+1 a " + msg.from.first_name);

    if (msg.text.toString().toLowerCase().includes(t15))
        bot.sendMessage(msg.chat.id, "+1 a " + msg.from.first_name);

    if (msg.text.toString().toLowerCase().includes(t16))
        bot.sendMessage(msg.chat.id, "+1 a " + msg.from.first_name);

    if (msg.text.toString().toLowerCase().includes(t17))
        bot.sendMessage(msg.chat.id, "+1 a " + msg.from.first_name);

    if (msg.text.toString().toLowerCase().includes(t18))
        bot.sendMessage(msg.chat.id, "+1 a " + msg.from.first_name);

    if (msg.text.toString().toLowerCase().includes(t19))
        bot.sendMessage(msg.chat.id, "+1 a " + msg.from.first_name);

    if (msg.text.toString().toLowerCase().includes(t20))
        bot.sendMessage(msg.chat.id, "+1 a " + msg.from.first_name);

    if (msg.text.toString().toLowerCase().includes(t21))
        bot.sendMessage(msg.chat.id, "+1 a " + msg.from.first_name);

});