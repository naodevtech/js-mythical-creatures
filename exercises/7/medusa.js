const Person = require('./person');
class Medusa{
    constructor(name){
        this._name = name
        this._statues = []
    }

    get name(){
        return this._name
    }

    get statues(){
        return this._statues
    }

    stare(victim) {
        this.statues.push(victim);
        if(this.statues.length > 3) {
          this.statues.shift();
        }
    }
}

module.exports = Medusa


  