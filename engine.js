#!/usr/bin/node

/**
 * implements the objects of the objects for the ecomm console
 */

const fs = require('fs');
const objects = {};
fileName = './database.json';

class objStorage {
    constructor() {
        if (new.target === objStorage) {
            throw new TypeError("Cannot construct objobjects instances directly");
        }
        this.objects = objects;
        this.filename = fileName;
    }

    static new(obj) {
        const key = Object.constructor.name + 's' + obj.id;
        objects[key] = obj;
    }

    static all(obj) {
        for (const key in objects) {
            if (key.startsWith(obj.constructor.name)) {
                return objects[key];
            }
        }
        return objects;
    }

    static delete(objId) {
        const key = Object.constructor.name + 's' + objId;
        delete objects[key];
    }

    static save() {
        const dataToSave = {};
        
        for (const key in objects) {
            const inst = objects[key];
            dataToSave[key] = inst.toDict();
        }
    
        fs.writeFile(fileName, JSON.stringify(dataToSave), (err) => {
            if (err) throw err;
        });
    }
    
    static load() {
        try {
            const data = fs.readFileSync(fileName, 'utf8');
            const objects = JSON.parse(data);
            for (const key in objects) {

            }
        } catch (err) {
            return;
        }
    }
}
module.exports = objStorage;