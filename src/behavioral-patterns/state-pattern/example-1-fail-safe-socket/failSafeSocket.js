'use strict'

const OfflineState = require('./offlineState')
const OnlineState = require('./onlineState')

function FailsafeSocket (options) {
  this.options = options;
  this.queue = queue;
  this.currentState = null;
  this.socket = null;
  this.states = {
    offline: new OfflineState(this),
    online: new OnlineState(this)
  }
  this.changeState('offline')
}

FailsafeSocket.prototype.changeState = (state) => {
  console.log('Activating state: ' + state);
  this.currentState = this.states[state];
  this.currentState.activate();
}

FailsafeSocket.prototype.send = (data) => {
  this.currentState.send(data)
}

module.exports = (options) => {
  return new FailsafeSocket(options)
}