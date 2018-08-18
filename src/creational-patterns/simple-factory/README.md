# Simple Factory
--------------
### Category: Creational

Real world example

> Consider, you are building a house and you need doors. It would be a mess if every time you need a door, you put on your carpenter clothes > > and start making a door in your house. Instead you get it made from a factory.

One word explaination

> The simple factory generates an object for the client without exposing any of it's instantiation logic

Detailed explaination

> The simple factory is an object that will return "new" objects with varying prototypes as the result of a function / method call.

When do we use it?

> It makes sense to use a factory when there could be additional logic in creating objects, or it's not very DRY to create the object under normal object creation means in the current block of code.

When is it not necessary?

> When the object that's instantiated never
> changes, or instantiation takes place in an operation that subclasses can
> easily override (such as an initialization operation).

### Discussion

- An increasingly popular definition of factory method is: `a static method of a class that returns an object of that class' type`. But unlike a constructor, the actual object it returns might be an instance of a subclass (as we can see in our example, if we wanted to create an EstablishedMusician object which would have additional methods and properties).
- Factory Methods are usually called within [Template Methods](https://en.wikipedia.org/wiki/Template_method_pattern).
- Often, designs start out using Factory Method (less complicated, more customizable, subclasses proliferate) and evolve toward Abstract Factory Method, Prototype, or Builder (more flexible, more complex) as the designer discovers where more flexibility is needed.
- Some Factory Method advocates recommend that as a matter of language design (or failing that, as a matter of style) absolutely all constructors should be private or protected.

### Additional Reading

