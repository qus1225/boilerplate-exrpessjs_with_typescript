import express from "express";
import dotenv from "dotenv";
import path from "path";
import bodyParser from "body-parser";
import mustacheExpress from "mustache-express";



// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env.production" });


// Controllers (route handlers)
import * as homeController from "./controllers/home";


// API keys and Passport configuration
// import * as passportConfig from "./config/passport";


// Create Express server
const app = express();


// Connect to MongoDB
// const mongoUrl = MONGODB_URI;
// (<any>mongoose).Promise = bluebird;
// mongoose.connect(mongoUrl, {useMongoClient: true}).then(
//   () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
// ).catch(err => {
//   console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
//   // process.exit();
// });


// Express configuration
app.set("port", process.env.PORT || 3000);
// Register '.mustache' extension with The Mustache Express
app.engine('mst', mustacheExpress());
app.set("view engine", "mst");
app.set("views", path.join(__dirname, "../views"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);


/**
 * Primary app routes.
 */
app.get("/", homeController.index);


/**
 * API examples routes.
 */
// app.get("/api", apiController.getApi);

/**
 * OAuth authentication routes. (Sign in)
 */
// app.get("/auth/facebook", passport.authenticate("facebook", { scope: ["email", "public_profile"] }));

export default app;