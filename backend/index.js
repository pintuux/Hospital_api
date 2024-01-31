//import express to create a express server
import express from 'express';
import cors from 'cors'
 // import https from 'https'
// import body-paser for parsing the data which is coming from user site
import {ConnectToMongoDb} from './src/config/mongodb.js';
import bodyParser from 'body-parser';
// import router
import router from './src/route/doctor.route.js';
const app = express();
app.use(cors())
// const httpsserver = https.createServer(app)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api',router);
app.get('/',(req,res)=>{
    res.status(200).send('Welcome to Hospital Api');
});

app.listen(3100,()=>{
    console.log('server is running up on port:',3100);
    ConnectToMongoDb();
});