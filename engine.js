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
        if (obj === undefined) {
            return objects;
        }
        const newObj = {};
        for (const key in objects) {
            if (objects[key]['__class__'] === obj) {
                newObj[key] = objects[key];
            }
        }
        return newObj;
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
            const loadedData = JSON.parse(data);
    
            for (const key in loadedData) {
                const className = loadedData[key].__class__;
                const cls = require('./' + className.toLowerCase() + '.js');
                const instance = new cls();

                for (const prop in loadedData[key]) {
                    instance[prop] = loadedData[key][prop];
                }
    
                objStorage.new(instance);
            }
    
        } catch (err) {
            return;
        }
    }    
}
objStorage.load();
module.exports = objStorage;