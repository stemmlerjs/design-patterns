'use strict'

/**
 * simple-factory pattern
 */

// Create the Musicians using the MusicianFactory
const MusicianFactory = require('./musicianFactory')
const nickCave      = MusicianFactory.create('Nick Cave', 'Vocals / Piano')
const rowlandHoward = MusicianFactory.create('Rowland S Howard', 'Guitar')

console.log(nickCave.getName())       // => 'Nick Cave'
console.log(nickCave.getInstrument()) // => 'Vocals / Piano'

