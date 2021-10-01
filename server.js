const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

mongoose.connect(
  'mongodb+srv://admin:admin@api-node.dfxg1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

require('./src/Routes/index')(app);

app.listen(3333);