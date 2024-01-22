#!/usr/bin/node
/**
 * implements the base model for the ecomm console
 */
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


class baseClass {
    constructor() {
        if (new.target === baseClass) {
            throw new TypeError("Cannot construct baseClass instances directly");
        }
        this.id = uuidv4();
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    static generateId() {
        return baseClass.id ? ++baseClass.id : (baseClass.id = 1);
    }

    toJson() {
        const json = {};
        const attrs = Object.getOwnPropertyNames(this);
        for (const attr of attrs) {
            json[attr] = this[attr];
        }
        json['__class__'] = this.constructor.name;
        return json;
    }

    toDict() {
        return this.toJson();
    }

    save() {
        // Import objStorage only when needed to break the circular dependency
        const objStorage = require('./engine');
        objStorage.new(this);
        objStorage.save();
    }

    update() {
        this.updatedAt = new Date();
        // Import objStorage only when needed to break the circular dependency
        const objStorage = require('./engine');
        objStorage.save();
    }
}

module.exports = baseClass;
