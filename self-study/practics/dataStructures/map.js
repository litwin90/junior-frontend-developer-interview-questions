// Map или словарь
// Хранит инфу как пару ключ = значение, где ключ уникальный
class Map {
    constructor() {
        this.items = {};
    }

    has(key) {
      // return this.items.hasOwnProperty(key);
    }

    get(key) {
      // return this.has(key) ? this.items[key] : undefined;
    }

    set(key, value) {
       // return this.items[key] = value;
    }

    delete(key) {
       //return this.has(key) ? delete this.items[key] : false; 
    }

    length() { 
      // return Object.keys(this.items).length;
    }

    keys() {
      //  return Object.keys(this.items);
    }

    values() {
       return Object.keys(this.items).map((key) => [this.items[key]]);
    }
}


module.exports = Map;