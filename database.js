const { MongoClient } = require('mongodb');

const URI = 'mongodb+srv://rushipawar:VFp6Zw94EGedXBLI@cluster0.nwitnhg.mongodb.net/';

const client = new MongoClient(URI);

const dbName = 'testDb';

async function main() {
  await client.connect()
  console.log("connected successfully")
  const db = client.db(dbName)
  const collection = db.collection("userInfo")

  const data = {
    firstName: 'Deepika',
    lastName: "patel",
    gender: 'Female'
  }
  const insertResult = await collection.insertOne(data)
  console.log("inserted data", insertResult)

  const findResult = await collection.find({}).toArray()
  console.log("data fetch from Db", findResult)

const doc = await collection.countDocuments({ firstName: "Deepika" });
//const doc = await collection.find({ firstName: "Deepika" });
// const arrayDocs = await doc.toArray()
// const count  = arrayDocs.length
console.log("result => ", doc);
  return 'done'

}

main().then(console.log).catch(console.error).finally(client.close())

