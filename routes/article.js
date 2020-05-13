/*
 * @Author: 吴文洁
 * @Date: 2020-05-12 15:24:02
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-05-13 19:38:46
 * @Description: 
 * @Copyrigh: © 2020 杭州杰竞科技有限公司 版权所有
 */

const express = require('express');
const route = express.Router();

const Article = require('../models/article');

route.post('/', async (req, res) => {
  const { title, description, markdown } = req.body;
  let article = new Article();
  article.title = title;
  article.description = description;
  article.markdown = markdown;

  try {
    article = await article.save();
    res.send({
      code: 200,
      success: true,
      result: article.id
    });
  } catch (error) {
    res.send({
      code: 500,
      success: false,
      message: '创建失败'
    });
  }
});

route.get('/', async (req, res) => {
  const articles = await Article.find();
  res.send({
    code: 200,
    success: true,
    result: {
      records: articles
    }
  });
});


module.exports = route;