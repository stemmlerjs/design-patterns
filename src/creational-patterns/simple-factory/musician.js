'use strict'

/**
 * @interface Musician
 * @desc Interface outlining how to create a Musician.
 * 
 * constructor(name, instrument)
 * getName(): string
 * getInstrument() : string
 */

/**
 * @class Musician
 * @desc Implementation of the Musician Interface
 */

class Musician {
  constructor (name, instrument) {
    name = name;
    instrument = instrument;
  }

  getName () {
    return this.name;
  }

  getInstrument () {
    return this.instrument;
  }
}

module.exports = Musician;