'use strict'

const CommunityExecutive = require('./communityExecutive')
const HiringManager = require('./hiringManager')

/**
 * @class MarketingManager
 * @extends HiringManager
 * @desc The marketing manager communicates with community executives
 * and may need to promote one of them to be an interviewer for their
 * hiring practice.
 */

class MarketingManager extends HiringManager {
  makeInterviewer() {
    return new CommunityExecutive();
  }
}

module.exports = MarketingManager;