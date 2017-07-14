// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const models = require('./db');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/login/createAccount',(req,res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    let newAccount = new models.Login({ //创建Entity
        id : req.body.id,
        region : req.body.region,
        describ : req.body.describ,
        isOnline : req.body.isOnline,
        code : req.body.code,
        date1 : req.body.date1,
        date2 : req.body.date2,
        date1str : req.body.date1str,
        date2str : req.body.date2str,
        resource : req.body.resource
    },{
        versionKey: false //不要那个 _v 属性
    });
    // 保存数据newAccount数据进mongoDB
    newAccount.save((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send('createAccount successed');
        }
    });
});
// 获取已有账号接口
router.get('/api/login/getAccount',(req,res) => {
    // 通过模型去查找数据库
    models.Login.find((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});
// 删除账号接口
router.post('/api/login/deleteAccount',(req,res) => {
    let ida = req.body.id;
    models.Login.remove({'id':ida},(err) => {
        if (err) {
            console.log('d , remove occur a error:', err);
        } else {
            console.log('d , remove success. ID: ' + ida);
            res.send('deleteAccount successed');
        }
    });
});

// 更新账号接口
router.post('/api/login/updateAccount',(req,res) => {
    let ida = req.body;
    models.Login.update({"id":ida.id},{
        "region":ida.region,
        "describ":ida.describ,
        "isOnline":ida.isOnline,
        "code":ida.code,
        "date1":ida.date1,
        "date2":ida.date2,
        "date1str":ida.date1str,
        "date2str":ida.date2str,
        "resource":ida.resource},(err) => {
        if (err) {
            console.log('d , update occur a error:', err);
        } else {
            console.log('d , update success.');
            res.send('updateAccount successed');
        }
    });
});

module.exports = router;