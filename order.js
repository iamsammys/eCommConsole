#!/usr/bin/node
/**
 * implements the order model for the ecomm console
 */
const baseClass = require('./base.js');


class order extends baseClass {
    constructor(userId, cartId) {
        super();
        this.userId = userId;
        this.cartId = cartId;
    }
}
module.exports = order;