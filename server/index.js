const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());
const API_KEY = 'f4d3a20d04e7a798f4c14fa0e5971cb7';

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/weather/:cityId', async (req, res) => {
  const { cityId = 0} = req.params;
  if(!cityId) {
    res.status(400).json({ msg: 'Incorrect city provided' })
  }

  try {
    const { data } = await axios.get(`htttps://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${API_KEY}&units=metric`)
    // console.log(data);
    res.send({msg: 'Success', data});
  } catch (error) {
    res.status(500).json({ msg: 'Error while fetching data' }); 
  }
});

//start server
app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
