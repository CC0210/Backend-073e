const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:8001/survey', function (err, client) {
  if (err) throw err

  const db = client.db('survey')
})