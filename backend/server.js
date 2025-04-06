require('dotenv').config();
const express = require('express');
const app = express();
const dbConn = require('./config/dbConn');
const PORT = process.env.PORT || 3000;
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hello world")
})
app.get('/login', require('./routes/login'));
app.use('/register', require('./routes/register'));




dbConn()
    .then(() => {
      console.log('DB connected');
      app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`);
      })
    })
    .catch((err) => {
      console.log('Error occured while connecting to DB');
      process.exit(1);
    })