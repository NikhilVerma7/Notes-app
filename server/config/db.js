const mongoose = require("mongoose");
mongoose.set('strictQuery',false);

const connectDB = async()=>{

       try{
        
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        
        console.log(`Database Connected : ${conn.connection.host}`);
       }

       catch(err){
          console.log(error);
       }
}

module.exports = connectDB;