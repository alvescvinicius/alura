import mongoose, { mongo } from "mongoose";

async function conectaNaDatabase() {
  mongoose.connect("mongodb+srv://developer:developer@cluster0.gphz3ab.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0");
  return mongoose.connection;
};

export default conectaNaDatabase;