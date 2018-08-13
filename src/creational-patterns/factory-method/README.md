# 🏭 Factory Method
--------------
### Category: Creational

Real world example

> Consider the case of a hiring manager. It is impossible for one person to interview for each of the positions. Based on the job opening, she has to decide and delegate the interview steps to different people. 

In plain words

> It provides a way to delegate the instantiation logic to child classes. 

Wikipedia says

> In class-based programming, the factory method pattern is a creational pattern that uses factory methods to deal with the problem of creating objects without having to specify the exact class of the object that will be created. This is done by creating objects by calling a factory method—either specified in an interface and implemented by child classes, or implemented in a base class and optionally overridden by derived classes—rather than by calling a constructor.

When to use?

> Useful when there is some generic processing in a class but the required sub-class is dynamically decided at runtime. Or putting it in other > words, when the client doesn't know what exact sub-class it might need.
### Discussion

- An increasingly popular definition of factory method is: `a static method of a class that returns an object of that class' type`. But unlike a constructor, the actual object it returns might be an instance of a subclass (as we can see in our example, if we wanted to create an EstablishedMusician object which would have additional methods and properties).
- Factory Methods are usually called within [Template Methods](https://en.wikipedia.org/wiki/Template_method_pattern).
- Often, designs start out using Factory Method (less complicated, more customizable, subclasses proliferate) and evolve toward Abstract Factory Method, Prototype, or Builder (more flexible, more complex) as the designer discovers where more flexibility is needed.
- Some Factory Method advocates recommend that as a matter of language design (or failing that, as a matter of style) absolutely all constructors should be private or protected.

### Additional Reading
