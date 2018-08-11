'use strict'

const Developer = require('./developer')
const HiringManager = require('./hiringManager')

/**
 * @class DevelopmentManager
 * @extends HiringManager
 * @desc The development manager is in charge of many developers.
 * The development manager is also a HiringManager and may have to 
 * make an interviewer.
 */

class DevelopmentManager extends HiringManager {
  makeInterviewer() {
    return new Developer();
  }
}

module.exports = DevelopmentManager;