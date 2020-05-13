/*
 * @Author: 吴文洁
 * @Date: 2020-05-12 15:19:22
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-05-13 19:26:01
 * @Dscription: 
 * @Copyrigh: © 2020 杭州杰竞科技有限公司 版权所有
 */

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const articleRoute = require('./routes/article');

const app = express();

mongoose.connect('mongodb://localhost/blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// 接受json数据格式
app.use( bodyParser.json() );
app.use((bodyParser.urlencoded({ extended: true })));

// 跨域处理
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Token");
  next();
});

// 文章路由
app.use('/article', articleRoute);

app.listen(5000);
