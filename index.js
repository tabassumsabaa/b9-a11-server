const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());

console.log(process.env.DB_PASS);
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ppdndxv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

   const hairCollection = client.db('fitZone').collection('hairservices');
   const facialCollection = client.db('fitZone').collection('facialservices');
   const yogaCollection = client.db('fitZone').collection('yogaServices');
   const gymCollection = client.db('fitZone').collection('gymservices');
   const bookingCollection = client.db('fitZone').collection('bookings');


   // for hair
   app.get('/hairservices', async(req, res) =>{
       const cursor = hairCollection.find();
       const result = await cursor.toArray();
       res.send(result);
   })

   app.get('/hairservices/:id', async(req,res) =>{
       const id = req.params.id;
       const query = {_id: new ObjectId(id)};

       const options = {
        projection : {  title: 1, price: 1, service_id: 1, description: 1, img: 1}
       }

       const result = await hairCollection.findOne(query, options);
       res.send(result);
   })

   //for facial
   app.get('/facialservices', async(req, res) =>{
       const cursor = facialCollection.find();
       const result = await cursor.toArray();
       res.send(result);
   })

   app.get('/facialservices/:id', async(req,res) =>{
       const id = req.params.id;
       const query = {_id: new ObjectId(id)};

       const options = {
        projection : {  title: 1, price: 1, servicef_id: 1, service_description: 1, img: 1}
       }

       const result = await facialCollection.findOne(query, options);
       res.send(result);
   })

     //for yoga
     app.get('/yogaServices', async(req, res) =>{
        const cursor = yogaCollection.find();
        const result = await cursor.toArray();
        res.send(result);
    })
 
    app.get('/yogaServices/:id', async(req,res) =>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)};
 
        const options = {
         projection : {  title: 1, price: 1, provide_id: 1, provide_description: 1, img:1}
        }
 
        const result = await yogaCollection.findOne(query, options);
        res.send(result);
    })

        //for gym
        app.get('/gymservices', async(req, res) =>{
            const cursor = gymCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })
     
        app.get('/gymservices/:id', async(req,res) =>{
            const id = req.params.id;
            const query = {_id: new ObjectId(id)};
     
            const options = {
             projection : {  title: 1, price: 1, provide_id: 1, provide_description: 1, img: 1 }
            }
     
            const result = await gymCollection.findOne(query, options);
            res.send(result);
        })

        // bookings

        app.get('/bookings', async(req, res) =>{
            console.log(req.query.email);
            let query = {};
            if (req.query?.email) {
                query = {email: req.query.email}                
            }
            const result = await bookingCollection.find().toArray();
            res.send(result);            
        })
        app.post("/bookings", async(req, res) =>{
            const booking = req.body;
            console.log(booking);
            const result = await bookingCollection.insertOne(booking);
            res.send(result);
        })

        app.delete("/bookings/:id", async(req, res) =>{
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await bookingCollection.deleteOne(query);
            res.send(result);
        })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
   // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send("SabFitZone server is running")
})

app.listen(port, () => {
    console.log(`SabFitZONE running on Port ${port}`);
})