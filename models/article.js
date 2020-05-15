/*
 * @Author: 吴文洁
 * @Date: 2020-05-12 15:21:57
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-05-15 14:11:58
 * @Description: 
 * @Copyrigh: © 2020 杭州杰竞科技有限公司 版权所有
 */

const mongoose = require('mongoose');

const ArticleScheme = new mongoose.Schema({
  // 文章标题
  title: {
    type: String,
    required: true
  },
  // 文章封面
  cover: {
    type: String,
  },
  // 文章简介
  description: {
    type: String,
  },
  // 文章内容
  markdown: {
    type: String,
  },
  // 创建时间
  createTime: {
    type: Date,
    default: Date.now
  },
  // 是否已经发布
  isPublish: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Article', ArticleScheme);
