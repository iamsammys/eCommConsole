#!/usr/bin/node
/**
 * implements the product model for the ecomm console
 */
const baseClass = require('./base.js');


class product extends baseClass {
    constructor(name, category, price) {
        super();
        this.name = name;
        this.category = category;
        this.price = price;
    }
}
module.exports = product;
