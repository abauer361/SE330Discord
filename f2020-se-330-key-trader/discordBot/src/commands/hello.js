// Tests the discord bot connection. (Responds with with "Hello, firstname lastname!")

exports.run = async (client, message, args) => {
    message.channel.send("Hello ${client}").catch(console.error);
}
