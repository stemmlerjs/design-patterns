# Simple Factory

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

