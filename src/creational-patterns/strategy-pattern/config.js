const fs = require('fs');
const objectPath = require('object-path') // performs like lodash.get()

// When config is initialized, we're going to have to know
// which strategy we want to use initially.
// Once we pass that in, then we can decide how algorithms of the same
// family are chosen.

function Config(strategy) {
  this.data = {};
  this.strategy = strategy;
}

Config.prototype.get = (path) => {
  return objectPath.get(this.data, path);
}

Config.prototype.set = () => {
  return objectPath.set(this.data, path, value);
}

Config.prototype.read = function(file) {
  console.log('Deserializing from ' + file);
  this.data = this.strategy.deserialize(fs.readFileSync(file, 'utf-8'));
}

Config.prototype.save = function(file) {
  console.log('Serializing to ' + file);
  fs.writeFileSync(file, this.strategy.serialize(this.data));
}

module.exports = Config;