/*
 * @Author: 吴文洁
 * @Date: 2020-05-12 15:24:02
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-05-14 16:15:27
 * @Description: 
 */

const fs = require('fs');
const path = require('path');
const express = require('express');
const multiparty = require('multiparty');
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
    res.json({
      code: 200,
      success: true,
      result: article.id
    });
  } catch (error) {
    res.json({
      code: 500,
      success: false,
      message: '创建失败'
    });
  }
});

route.get('/', async (req, res) => {
  const articles = await Article.find();
  try {
    res.json({
      code: 200,
      success: true,
      result: {
        records: articles
      }
    });
  } catch (error) {
    res.json({
      code: 500,
      success: false,
      message: '获取失败'
    });
  }
});

route.post('/upload', async (req, res) => {
  const form = new multiparty.Form();
  form.parse(req, (err, fields, files) => {
    console.log(fields, files)
    try {
      const { file } = files;
      const { path, originalFilename } = file[0];
      fs.writeFileSync(`public/${originalFilename}`, fs.readFileSync(path));
      fs.unlinkSync(path);
      res.end();
    } catch (error) {
      throw Error(error);
    }
  });
});
module.exports = route;