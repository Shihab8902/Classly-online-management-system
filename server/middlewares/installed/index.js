const cors = require("cors");
const bodyParser = require('body-parser');
const rateLimit = require("express-rate-limit")
const morgan = require('morgan')



//Rate limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, //15 minutes window time
    limit: 100, //100 API calls per 15 minutes max
    standardHeaders: 'draft-8',
    legacyHeaders: false,
});


const applyInstalledMiddlewares = (app) => {
    app.use(cors({
        origin: "http://localhost:5173"
    }));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());
    app.use(limiter);

    morgan('tiny');
}


module.exports = applyInstalledMiddlewares;