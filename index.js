const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();


//middlewares:
app.use(cors());
app.use(express.json());


//mongoDB setup:
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@cluster0.nlpim.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        await client.connect();
        const productCollection = client.db('Apple-Mania').collection('product');

        app.get('/product', async(req, res)=>{
            const query = {};
            const cursor = productCollection.find(query);
            const products = await cursor.toArray();
            res.send(products);
        });
    }   
    finally{

    }
}

run().catch(console.dir);


//routes:
app.get('/', (req, res)=>{
    res.send('running Apple-Mania server');
});

app.listen(port, ()=>{
    console.log('Port no:',port);
})
