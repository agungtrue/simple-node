const express = require('express');

//start app
const app = express();
const router = express.Router()
app.enable('trust proxy')
const cors = require('cors')

app.use(cors());
app.options('*', cors());

//serving static files
// app.use(express.static(`${__dirname}/public`));

//test using middleware
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
})

app.use('/ping', (req, res) => {
    res.status(200).json({status: true, message: 'working!!!!'})
})

app.use('/', (req, res) => {
    res.status(200).json({status: 'success', message: 'welcome!!!'})
})

const port = 3002;
app.listen(port, () => {
    console.log(`running on port ${port}`)
});


