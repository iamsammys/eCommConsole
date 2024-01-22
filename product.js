#!/usr/bin/node
/**
 * implements the product model for the ecomm console
 */
const baseClass = require('./base.js');


class product extends baseClass {
    constructor(name, description, price, image) {
        super();
        this.name = name;
        this.description = description;
        this.price = price;
    }
}
module.exports = product;