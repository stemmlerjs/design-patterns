'use strict'

/**
 * @desc MusicianFactory, responsible for creating
 * new Musician objects.
 */

const Musician = require('./musician')

module.exports = {
  create: (name, instrument) => {

    /**
     * Additional logic for deciding which object exactly 
     * gets created could be added here...
     * 
     * We could do something like:
     * 
     * if (influentialMusicians.search(name)) {
     *   return new InfluentialMusician(name, instrument)
     * }
     * 
     * Where perhaps the InfluentialMusician object has additional
     * properties and methods that the Musician object doesn't have.
     */

    return new Musician(name, instrument)
  }
}