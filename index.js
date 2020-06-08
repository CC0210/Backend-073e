const express = require('express')
const app = express()
const port = 8000

// add throttle middleware

app.get('/survey-data', function (req, res) {
    res.send('Got a POST request') 
    // TODO: save in backend
    // TODO: backend validation
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))