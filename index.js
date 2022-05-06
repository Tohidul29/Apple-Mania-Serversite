const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();


//middlewares:
app.use(cors());
app.use(express.json());

//routes:
app.get('/', (req, res)=>{
    res.send('running Apple-Mania server');
});

app.listen(port, ()=>{
    console.log('Port no:',port);
})
