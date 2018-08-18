
'use strict'

// First way to create a proxy

function createProxy (subject) {
  let subjectPrototype = Object.getPrototypeOf(subject)

  function Proxy (subject) {
    this.subject = subject;
  }

  Proxy.prototype = Object.create(subjectPrototype);

  // Intercepting and proxying methods
  // we do some custom logic
  Proxy.prototype.hello = () => {
    return this.subject.hello() + " world";
  }

  // Delegating methods
  // We simply pass off the request to the Subject
  Proxy.prototype.goodbye = () => {
    return this.subject.goodbye
      .apply(this.subject, arguments)
  }
  return new Proxy(subject);
}

// We could also probably create a proxy like this
// Pseudo-classical inheritance
module.exports = (Subject) => {
  class Proxy extends Subject {
    constructor() {
      super();
      this.ParentPrototype = Object.getPrototypeOf(Object.getPrototypeOf(this));
    }

    // Intercepting and proxying methods
    // we do some custom logic
    hello() {
      return this.ParentPrototype
        .hello() + " world";
    }

    // Delegating methods
    // We simply pass off the request to the Subject
    goodbye () {
      return this.ParentPrototype
        .goodbye.apply(ParentPrototype, arguments)
    }
  }

  return new Proxy();
}

// If we wanted to avoid all of that, we could also do this
function createProxy(subject) {
  return {
    //proxied method
    hello: function() {
      return subject.hello() + ' world!';
    },
    //delegated method
    goodbye: function() {
      return subject.goodbye.apply(subject, arguments);
    }
  };
}

// Or we could do monkey-patching and actually augment the object
// ourselves. It's the most convenient solution but yeah, we're
// changing the object which may have side effects if things change
// later with the subject.

function createProxy(subject) {
  var helloOrig = subject.hello;

  subject.hello = function() {
    return helloOrig.call(this) + ' world!';
  }

  return subject;
}