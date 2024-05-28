const express = require('express')
const datefns = require('date-fns')
const addDays = require('date-fns/addDays')
let app = express()

let d = 100

app.get('/', (request, response) => {
  let date = new Date()
  let newDate = addDays(date, d)
  response.send(
    `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`,
  )
})

module.exports = app
