#!/usr/bin/node
/**
 * implements the cart model for the ecomm console
 */
const baseClass = require('./base.js');


class cart extends baseClass {
    constructor(userId, productId) {
        super();
        this.userId = userId;
        this.productId = productId;
    }
}
module.exports = cart;