// require your server and launch it here
const server = require('./api/server')

const PORT = process.env.port || 4000

server.listen(PORT, () =>
    console.log(`listening on port ${PORT}`))