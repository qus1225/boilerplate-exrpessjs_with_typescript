import express from "express";
import dotenv from "dotenv";
import path from "path";
import bodyParser from "body-parser";
import expressVue from "express-vue";
import { RequestHandlerParams } from "express-serve-static-core";
import homeController from "./controllers/homeController";


// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env.production" });


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


app.set("port", process.env.PORT || 3001);

// ExpressVue Setup
const vueOptions: any = {
  rootPath: path.join(__dirname, "../views"),
  head: {
    title: "Common Title",
    scripts: [
      // { src: "/js/lib/simplemde.min.js" }
    ],
    styles: [
      { style: "/css/main.css" },
      // { style: "/css/lib/simplemde.min.css" },
    ],
  },
};
const expressVueMiddleware = expressVue.init(vueOptions);
app.use(expressVueMiddleware as RequestHandlerParams);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

// Router
app.use("/", homeController);

/**
 * API examples routes.
 */
// app.get("/api", apiController.getApi);

/**
 * OAuth authentication routes. (Sign in)
 */
// app.get("/auth/facebook", passport.authenticate("facebook", { scope: ["email", "public_profile"] }));

export default app;