const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.post('/login', (req, res) => {

  // userame 
  // password

  // query your database table i.e user table
  // and find out if the user is present or not

  // if user is present
  // then generate a token and send the token to the frontend react application


  res.json({
    token: 'test123'
  })
})

// app.get('/test', (req,res)=> {
//   res.json({
//     hello: 'all'
//   })
// })



const PORT = process.env.PORT || 5003
app.listen(PORT, ()=>{
  console.log(`My server is running on PORT number : ${PORT}`)
})