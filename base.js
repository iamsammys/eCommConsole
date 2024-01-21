#!/usr/bin/node
/**
 * implements the base model for the ecomm console
 */

const fs = require('fs');

class baseClass() {
    constructor() {
        if (new.target === baseClass) {
            throw new TypeError("Cannot construct baseClass instances directly");
        }
        this.id = this.generateId();
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    generateId() {
        return this.newId? ++this.newId : this.newId = 1;
    }
    
    toJson() {
        json = {};
        attrs = Object.getOwnPropertyNames(this);
        for (const attr of attrs) {
            json[attr] = this[attr];
        }
        return json;
    }

    toDict() {
        return toJson;
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