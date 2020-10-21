
let express  = require('express');
let bodyparser = require('body-parser');

let DataStore = require('nedb');
let db = new DataStore('month.db');
db.loadDatabase();
let app = express();
app.use(bodyparser.json());

let monthTracker = [];

// app.get('/',(request,response)=>{
//     response.send("this is a response");
// });

app.post('/selectedmonth', (request,response)=> {
    console.log(request.body);
    let currentDate = Date();
    let obj = {
    date: currentDate,
    month: request.body
}
    db.insert(obj,(err,newDocs)=>{
        if(err){
            res.json({task: "task failed"});
        } else {
        }
})
})

app.use('/',express.static('public'));

app.get('/about', (request, response)=>{
    response.send("this is an about page"); 
});

app.get('/data', (request, response)=>{
    let sampleData = {
        'name' : 'dorian'
    }
    response.json(sampleData);
});

app.listen(3000, ( ) => {
    console.log("hello");
});

//add route to get #month

app.get('/getMonth', (req,res)=>{
    let obj = {data: monthTracker}
    res.json(obj);
})