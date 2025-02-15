const express = require('express')
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const objectId = require('mongodb').ObjectId
const app = express()
const port = 3000

const uri = process.env.MONGO_URI

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.use(express.json() )

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/:pasteId', (req, res) => {
  const pasteId = req.params.pasteId
  client.connect(err => {
    client.close();
  });

  collection = client.db("pasteIt").collection("pasteIt");
  collection.findOne({_id: new objectId(pasteId)})
    .then(v => {
      res.send(v)
    })
}) 

app.post('/', (req, res) => {
  const json = req.body
  client.connect(err => {  
    client.close();
    response = {
      status : "error",
      message : "database error"
    }
    res.send(response)
  });



  // save to json.text to db
  collection = client.db("pasteIt").collection("pasteIt");
  collection.insertOne(json)
    .then(v => {
      console.log(v)
      let response = {
        status : "ok",
        id : v.insertedId
      }
      res.send(response)
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})