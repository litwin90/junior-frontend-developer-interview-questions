// Множество
class Set {
    constructor(items = {}){
      //  this.items = items;
    }

    has(value) {    
      //  return this.items.hasOwnProperty(value);
    }

    get(value) {
      //  return this.has(value) ? this.items[value] : undefined;
    }

    set(value) {
     // return this.items[value] = value;
    }

    remove(value) {
       // return this.has(value) ? delete this.items[value] : false;
    }

    length() {
       // return Object.keys(this.items).length;
    }

    values() {
      //return Object.keys(this.items);
    }
}

module.exports = Set;