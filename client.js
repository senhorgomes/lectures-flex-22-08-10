const net = require("net")
//Here we are NOT creating a server, but a client that connects to our server(chatServer.js). In order for this to work, the server needs to be up and running.
const client = net.createConnection({host: "localhost", port: 3000}, () => {
  client.setEncoding("utf-8")
  //You need to handle incoming messages
  client.write("Hey server, how's it going?\n")
})

client.on("data", (data) => {
  // client.write(`Client said:${data}`)
  console.log(data)
})