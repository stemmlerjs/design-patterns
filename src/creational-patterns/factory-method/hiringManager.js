"use strict";

/**
 * @class HiringManager
 * @desc The hiring manager will need to get the appropriate
 * interviewer. If you're a Developer hiring manager, you need
 * to get a developer of yours to ask questions (because you're
 * just a hiring manager, you don't know what to ask).
 */

class HiringManager {
  takeInterview() {
    // Notice that makeInterviewer() isn't a property of
    // this class yet? It's going to have to be inherited by
    // some subclass that can make and interviewer.
    const interviewer = this.makeInterviewer();
    interviewer.askQuestions();
  }
}

export default HiringManager;




