
const Musician = require('./musician')

/**
 * Bassist
 * 
 * @class Bassist
 * @extends Musician
 */

class Bassist extends Musician {
  constructor(name) {
    this.name = name
  }

  prepareInstrument() {
    console.log(`${this.name} is preparing their instrument.`)
  }

  tuneInstrument() {
    console.log(`${this.name} is preparing tuning their instrument.`)
  }

  play() {
    console.log(`${this.name} is playing their instrument`)
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~ boom boom boom dobobo boom")
  }
}

module.exports = Bassist;

