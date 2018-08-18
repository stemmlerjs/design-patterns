
var ini = require('ini'); //-> https://npmjs.org/package/ini

// First strategy, JSON strategy

module.exports.json = {
  deserialize: (data) => {
    return JSON.parse(data)
  },

  serialize: () => {
    return JSON.stringify(data, null, ' ');
  }
}

// Second strategy, INI strategy

module.exports.ini = {
  deserialize: function(data) {
    return ini.parse(data);
  },
  serialize: function(data) {
    return ini.stringify(data);
  }
}