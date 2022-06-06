const { MongoClient } = require('mongodb');

const client = new MongoClient(
  'mongodb+srv://user:user@cluster0.hnwv2vv.mongodb.net/?retryWrites=true&w=majority'
);

const start = async () => {
  try {
    await client.connect();
    console.log('Conection sucsesfull');
    await client.db().createCollection('users');
    const users = client.db().collection('users');
    await users.insertOne({ name: 'user', age: 20 });
    const user = await users.findOne({ name: 'user' });
    console.log(user);
  } catch (e) {
    console.log(e);
  }
};

start();
