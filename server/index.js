const { conn } = require('./src/db');
const server = require('./src/server');

conn.sync({ force: true })
    .then(() => {
        server.listen('3001', () => {
            console.log('Server on port 3001');
        })
    })