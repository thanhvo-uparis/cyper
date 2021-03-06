const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express()
const PORT = 3000  

//question 10
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
})

//Error Handling
app.use((req, res, next) => {
    const error = new Error("Route not found.");
    error.status = 404;
    next(error)
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

//question 11
app.use(express.static('public'));
app.use(express.static('images'));
app.use(express.static('files'));

app.use('/static', express.static('public'));
app.use('/static', express.static(__dirname + '/public'));

//get and run server
app.get('/', (req, res) => {
    return res.send("Hello word");
})

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`))