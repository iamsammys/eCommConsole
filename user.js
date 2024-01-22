#!/usr/bin/node
/**
 * implements the user model for the ecomm console
 */
const baseClass = require('./base.js');

class user extends baseClass {
    constructor(firstName, lastName, email) {
        super();
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

module.exports = user;
