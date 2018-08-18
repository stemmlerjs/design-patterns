
/**
 * The decorator pattern is interesting.
 * It's similar to that of a Proxy pattern with the difference that it wraps itself
 * around the exiting object and simply adds new methods while delegating the 
 * existing ones.
 */


// Compositional way to decorate components.
// We wrap the component.
function decorate (component) {

  const proto = Object.getPrototypeOf(component);
  
  function Decorate (component) {
    this.component = component;
  }

  Decorate.prototype = Object.create(proto);

  // Add new methods
  Decorate.prototype.newMethod = () => {
    console.log('this is a new method that is awesome')
  }

  // Delegate existing methods.
  Decorate.prototype.existingMethod = () => {
    this.component.existingMethod.apply(this.component, arguments)
  }

  // Delegate other methods ...
  // The downside to this approach is that we would have to
  // know about all of the methods to delegate and delegate them all.
  // Also, if new methods are added, we have to delegate those as well.

  return new Decorate(component);
}

// Monkey patching way to decorate a component;
// Monkey patching === object augmentation
function decorate (component) {
  component.newMethod = () => {
    console.log('new method')
  }

  return component;
}

// Object augmentation is the most pragmatic, simple and effective way to 
// decorate objects with additional capabilities.

