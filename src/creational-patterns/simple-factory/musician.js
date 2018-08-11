'use strict'

/**
 * @interface Musician
 * @desc Interface outlining how to create a Musician.
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