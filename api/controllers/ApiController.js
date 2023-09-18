/**
 * ApiController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const Tesseract = require('tesseract.js');
// const Pet = require('../models/Pet')

module.exports = {
  search : function (req, res){
    res.json({data : "this is search api"});
  },
  create : function (req, res){
    res.json({data : "this is create api"});
  },
  getText : function (req, res){
    Tesseract.recognize(
      'https://cdn1.acedms.com/w709/photos/listing/2023-08-17/f97662fd4569410bddf1a543c8cf4c83_extra_large.jpg',
      'eng'
    )
      .then(({ data: { text } }) => {
        res.json(text);
      })
      .catch(error => {
        res.json('failed');
      });
  },
  getmongo : async function (req, res){
      var results = await Pet.find({});
      res.json({data : results});
  }
};

