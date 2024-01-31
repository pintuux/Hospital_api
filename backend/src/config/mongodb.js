// here we are going to stablise a connect from server to mongoDB database 
// for that first we import a module Name is MongoClient form monodb library
import { MongoClient } from "mongodb";
// create url for comunication of server and database
const url = "mongodb://127.0.0.1:27017"
const client = new MongoClient(url);

const dbName = "doctorDb"
async function ConnectToMongoDb(){
    
    await client.connect();
    
    // console.log('server sconnected')
}
async function getDatabase(){
    
    return client.db(dbName)
    
    
    
    
}
export {ConnectToMongoDb,getDatabase};



