import express from "express";
import mainRouter from "./routers/index.js";
import handlebars from "express-handlebars";
import { __dirname } from "./utils.js";
import viewsRouter from "./routers/views.router.js";
import { initWsServer } from "./services/socket.js";
import http from "http";
import chatRouter from "./routers/chatview.js";
import authRouter from "./routers/auth.js";
import mockingRouter from "./routers/mockingproducts.js";
import MongoStore from "connect-mongo";
import session from "express-session";
import passport from "passport";
import flash from "connect-flash";
import initializePassport from "./config/passport.config.js";
import cookieParser from "cookie-parser";
import { config } from "./config/env.config.js";
import connectToDB from "./Dao/db.js";
import compression from "express-compression";
import errorHandler from "./middlewares/errors/index.js";
const mongoURI = config.mongoURI;
////////express//////////////////
const app = express();
const myHttpServer = http.Server(app);
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
/////session///////////////////////////
const sessionStore = MongoStore.create({
  mongoUrl: mongoURI,
  collectionName: "my-sessions",
  ttl: 60 * 60, // 1 hour
});
app.use(
  session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
  })
);
app.use(flash());
//////////////////////////////////////////
//iniciando passport///
initializePassport();
app.use(passport.initialize());

//////////////////////////////////////////////
//iniciando handlebars////////////////////
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));
//////////////////////////////////////////

//////////////////rutas////////////////////
app.use(compression({ brotli: { enabled: true, zlib: {} } }));
app.use("/api", mainRouter); //manejador de rutas
app.use("/", viewsRouter); // ruta websocket
app.use("/", chatRouter); // ruta chat
app.use("/auth", authRouter); // ruta inicio sesion
app.use("/", mockingRouter);
initWsServer(myHttpServer);
app.use(errorHandler)
/////////middleware de ruta error///////////
app.use((req, res, next) => {
  return res.status(404).json({
    error: -2,
    descripcion: `ruta ${req.url} not implemented`,
  });
});

//Servidor Escuchando//
connectToDB(); ///////////////conectamos a la base de datos///////////////////
const PORT = config.PORT || 8080;
myHttpServer.listen(PORT, () => console.log("server listening on port", PORT));

export default myHttpServer;
