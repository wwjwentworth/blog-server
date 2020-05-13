/*
 * @Author: 吴文洁
 * @Date: 2020-05-12 15:21:57
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-05-12 15:23:35
 * @Description: 
 * @Copyrigh: © 2020 杭州杰竞科技有限公司 版权所有
 */

const mongoose = require('mongoose');

const ArticleScheme = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  markdown: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Article', ArticleScheme);
