class Vampire{
    constructor(name, pet, drink){
        this._name = name
        this._pet = pet || "bat"
        this._drink = true
    }

    get name(){
        return this._name
    }

    get pet(){
        return this._pet 
    }

    drink(){
        return this._drink = false
    }

    get thirsty(){
        return this._drink
    }

}

module.exports = Vampire;