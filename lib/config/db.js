import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://ishagupta:isshh1105@cluster0.bylvr2p.mongodb.net/blogs-app')
    console.log("DB Connected");
}