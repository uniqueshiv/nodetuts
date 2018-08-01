const express=require("express");
const mysql =require('mysql');



//crate connection
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'nodesql'
});

//connect

db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("mysql connected...");
})

const app=express();

app.get('/createdb',(req,res)=>{
    let sql='CREATE DATABASE nodesql';
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send('database Created..');
    })
})



app.get('/',(req,res)=>{
   res.send("hello world");
})


app.get('/api/courses',(req,res)=>{
    res.send([1,2,3]);
})

app.listen(3000,()=>console.log("listening on port 3000"))