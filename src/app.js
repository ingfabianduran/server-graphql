import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';
import graphqlHttp from 'express-graphql';
import schema from "./schema";

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use("/graphql", graphqlHttp({
    graphiql: true,
    schema: schema
}));

app.use('/', indexRouter);

module.exports = app;
