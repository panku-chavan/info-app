const express = require('express');
const app = express();
const { MongoClient,ObjectId } = require("mongodb");
const cors = require('cors');

app.use(express.json());
app.use(cors());

const port = 8080;
let db;
let connectionLink = `mongodb+srv://pankuchavan:Panku%40789@cluster0.t1zxiat.mongodb.net/test`;
let DB_NAME = 'MyTodo';
let COLLECTION_NAME = 'todo';

const todoRoutes = express.Router();
app.use('/todos', todoRoutes);


//get data
todoRoutes.route("/").get((req, res) => {
    db.collection(COLLECTION_NAME).find().toArray((err, items) => {
        res.send(items);
    });
});

//insert data
todoRoutes.route("/add").post((req, res) => {
    const data = req.body;
    db.collection(COLLECTION_NAME).insertOne(data, (err, info) => {
        res.json(info);
    })
})

//update data

todoRoutes.route("/update/:id").put((req, res) => {
    const recordId = req.params.id;
    const body=req.body;
    db.collection(COLLECTION_NAME).findOneAndUpdate({ _id: new ObjectId(recordId) },
        {
            $set: {
                name: body.name,
                gender:body.gender,
                dob:body.dob,
                mob:body.mob,
                status:body.status

            }
        }, ()=>{
            res.send("Updated Successfully....!")
        });
});
// delete item

todoRoutes.route("/delete/:id").delete((req,res)=>{
    const recordId=req.params.id;
    db.collection(COLLECTION_NAME).deleteOne({_id:new ObjectId(recordId)},()=>{
        res.send("Deleted Succsessfully...!")
    })
})


MongoClient.connect(connectionLink, { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log("Connection Failed !");
    } else {
        console.log("Connection Successfull...!");
        db = client.db(DB_NAME);
        app.listen(port, () => {
            console.log(`Server is running on Port :${port}.`);
        });
    }
});

