import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';
import graphqlHttp from 'express-graphql';
import schema from "./schema";
import {connect} from "./database/database";
import cors from "cors";
import compression from 'compression';
import bodyParser from "body-parser";
import jwt from "express-jwt";
import dotenv from "dotenv";
import token from "./token";

var app = express();
dotenv.config();

const auth = jwt({
    secret: process.env.SECRET,
    credentialsRequired: false
});

connect();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());
app.use(compression());
app.use(bodyParser.json());

app.use(token.checkHeaders);

app.use("/graphql", bodyParser.json(), auth, graphqlHttp((req) => {
   
    return {
        graphiql: true,
        schema: schema,
        context: {
            user: req.user
        }
    }
}));

app.use('/', indexRouter);

module.exports = app;