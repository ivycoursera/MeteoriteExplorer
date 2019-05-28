const express = require('express');
const cors = require('cors');
const axios = require('axios');

require('dotenv').config();

const app = express();
const { PORT, APP_TOKEN } = process.env;

const url = process.env.API_ENDPOINT;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

app.get('/api', async (req, res) => {
  await axios
    .get(`${url}?$$app_token=${APP_TOKEN}`)
    .then((response) => res.send(response.data))
    .catch((error) => console.log(error));
});
