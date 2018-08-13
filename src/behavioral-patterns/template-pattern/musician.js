
/**
 * Abstract Class Musician.
 * 
 * @class Musican
 */

class Musician {
  constructor() {
    if (this.constructor == Musician) {
      throw new Error("Abstract class can't be instantiated.")
    }
  }

  prepareInstrument() {
    throw new Error("Method 'prepareInstrument()' must be implemented")
  }

  tuneInstrument() {
    throw new Error("Method 'tuneInstrument()' must be implemented")
  }

  play () {
    throw new Error("Method 'play()' must be implemented")
  }

  /**
   * perform
   * 
   * @desc In classic OO languages, this 'perform' function should be 'final'
   * and not able to be overridden by any subtypes. 
   * 
   * @return void
   */

  perform () {
    // Template algorithm for how all musician subtypes will
    // perform.
    this.prepareInstrument();
    this.tuneInstrument();
    this.play();
  }
}

module.exports = Musician;