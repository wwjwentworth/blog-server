/*
 * @Author: 吴文洁
 * @Date: 2020-05-12 15:24:02
 * @LastEditors: 吴文洁
 * @LastEditTime: 2020-05-13 16:02:45
 * @Description: 
 * @Copyrigh: © 2020 杭州杰竞科技有限公司 版权所有
 */

const express = require('express');
const route = express.Router();

route.post('/', (req, res) => {
  res.send({
    code: 200
  });
});


module.exports = route;