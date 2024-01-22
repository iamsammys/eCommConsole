#!/usr/bin/node
/**
 * implements the base model for the ecomm console
 */
const objStorage = require('./engine');
const fs = require('fs');


class baseClass {
    constructor() {
        if (new.target === baseClass) {
            throw new TypeError("Cannot construct baseClass instances directly");
        }
        this.id = baseClass.generateId();
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    static generateId() {
        return baseClass.lastId? ++baseClass.lastId : baseClass.lastId = 1;
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
        objStorage.new(this);
        objStorage.save();
    }

    update() {
        this.updatedAt = new Date();
        objStorage.save();
    }
}
module.exports = baseClass;