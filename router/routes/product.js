"use strict";

var Product = require('../../models/Product'); 
var restify = require('express-restify-mongoose');

module.exports = function (router) {
    restify.serve(router, Product);
};