// Tests the discord bot connection. (Responds with with "Hello, firstname lastname!")

const { createUser } = require("../../../webapp/key-trader/backend/db");

exports.run = async (client, message, args) => {
    message.channel.send("Hello " + message.author.toString() + "!").catch(console.error);
}
