class Unicorn {
  constructor(name, color) {
    this._name = name
    this._color = color || "white"
  }

  get name(){
    return this._name
  }

  get color(){
    return this._color
  }


  isWhite(){
    return false
  }

  says(message){
    return `**;* ${message} *;**`
  }

}

module.exports = Unicorn;
