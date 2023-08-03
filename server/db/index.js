const mongoose = require('mongoose');

const DB = "mongodb://localhost:27017/assignment";
//const DB = "mongodb://mongo:27017/cinema";



 const db =mongoose.connect(DB,{
  useNewUrlParser:true,
  useUnifiedTopology: true
}).then(()=>{
  console.log(`connection successfull`)
}).catch((err)=>{
  console.log("no connection")
})
module.exports=db;