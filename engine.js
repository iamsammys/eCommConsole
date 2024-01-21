#!/usr/bin/node

/**
 * implements the objects of the objects for the ecomm console
 */

const fs = require('fs');

class objStorage {
    constructor() {
        if (new.target === objobjects) {
            throw new TypeError("Cannot construct objobjects instances directly");
        }
        this.objects = {};
        this.filename = 'database.json';
    }

    static new(obj) {
        key = obj.constructor.name + '.' + obj.id;
        this.objects[key] = obj;
    }

    static all() {
        return this.objects;
    }

    static get(id) {
        key = obj.constructor.name + '.' + id;
        return this.objects[key];
    }

    static delete(key) {
        key = obj.constructor.name + '.' + id;
        delete this.objects[key];
        this.save();
    }

    static save() {
        fs.writeFile(this.filename, JSON.stringify(this.objects), (err) => {
            if (err) throw err;
        });
    }

    static reload() {
        try {
            this.objects = JSON.parse(fs.readFileSync(this.filename));
        } catch (err) {
            this.objects = {};
        }
    }
}