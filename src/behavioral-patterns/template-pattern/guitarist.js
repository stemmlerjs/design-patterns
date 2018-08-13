
const Musician = require('./musician')

/**
 * Guitarist
 * 
 * @class Guitarist
 * @extends Musician
 */

class Guitarist extends Musician {
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
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~ do do do do")
  }
}

module.exports = Guitarist;

