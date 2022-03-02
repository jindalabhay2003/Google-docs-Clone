import mongoose from "mongoose";

const connection = async ()=> {
    const URL = `mongodb+srv://abhay:YjoPQSn6ktaK0MzQ@cluster0.zit2j.mongodb.net/Cluster0?retryWrites=true&w=majority`;

    try{
       await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser: true});
       console.log("Database Connected Succesfully");
    }catch(error){
        console.log("Error While connecting to MongoDB: ",error);
    }

}

export default connection;