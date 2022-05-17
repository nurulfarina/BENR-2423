var MongoClient = require('mongodb').MongoClient;
const { faker } = require('@faker-js/faker');
const bcrypt = require("bcryptjs")

var url = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.vjrl8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;

const randomName = faker.name.findName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomPass = faker.internet.password(); 
const randomAddress = faker.address.city();

const password = randomPass
const saltRounds = 10

const passhash = bcrypt.hashSync(randomPass,saltRounds)

  var dbo = db.db("Faker");
  var myobj = { name: randomName, address: randomAddress, email:randomEmail,pass:passhash};

  dbo.collection("we").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();4
  });
});
hello
