const server = require('./server')
const PORT = 3000

server.listen(PORT, ()=>{
  console.log(`listen on port  ${PORT}`)
})

