/* eslint-disable no-unused-vars */

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


const employeeList = [
    {
        "name":" Mrs. Julia Mensah",
        "dob": "13/04/1978",
        "department": "Accounts",
        
        
    },
    {
        "name":"Mr. Kwaku Fordjour",
        "dob": "12/12/1990",
        "department": "IT",
    },
    {
        "name":"Ms. Yvette Mawu",
        "dob":"14/03/1988",
        "department":"Marketing",

    },
    {
        "name":"Mrs. Frema Obeng",
        "dob": "07/03/1978",
        "department":"Manager's Office",
    },
    {
        "name":"Mr. Mark Darko",
        "dob":"10/08/1992",
        "department":"HR",
    }
]

const todoList =[
    {
        "department":"HR",
         "todo":"Send Memos, Recieve employee complaints",


    },
    {
        "department":"Manager's Office",
        "todo": "Send Letters to other departments, schedule meetings",
    },
    {
        "department": "Accounts",
        "todo":"Check employee accounts, pay employee salary",
    },
    {
        "department":"IT",
        "todo":"Check eployee emails, Check company network",
    },
]

app.get('/' ,(req, res)=>{
    res.render("todoList" ,{
        todoList
    });
});

app.get('/',(req,res)=>{
    res.render("homepage",{
     employeeList   
    });

});
app.get ('/ todoList/: id',(req, res)=>{
    const id =req.params.id;
    const dolist = todoList[id];
    res.render("todoList",{
        dolist,
        title: 'todoList'
    });

});
app.get('/employeeList/:id',(req,res)=>{
    const id = req.params.id;
    const worker= employeeList[id];
    res.render("employeeList",{
        worker,
        title: 'employeeList'
    });
});

// eslint-disable-next-line no-undef
const MongoClient = require('mongodb').MongoClient;
// eslint-disable-next-line no-undef
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'todoList';

MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);

    client.close();
  });
  const insertDocuments = function(db, callback) {
    const collection = db.collection('documents');
    collection.insertMany([
        {a : 1}, {a : 2}, {a : 3}
      ], function(err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        console.log("Inserted 2 documents into the collection");
        callback(result);
      });
    

MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
  
    const db = client.db(dbName);
  
    insertDocuments(db, function() {
      client.close();
    });
  });
  const findDocuments = function(db, callback) {
    const collection = db.collection('documents');
    collection.find({}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs)
        callback(docs);
      });
    }
    const url = 'mongodb://localhost:27017';
    const dbName = 'rodoList';
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected correctly to server");
      
        const db = client.db(dbName);
      
        insertDocuments(db, function() {
          findDocuments(db, function() {
            client.close();
          });
        });
      });




const Port  =3000;
// eslint-disable-next-line no-empty
app.listen(Port,()=>{{

}
    newFunction(Port);
 });
      function newFunction(Port) {
          console.log(`Server is listening on port ${Port}`);
      }}