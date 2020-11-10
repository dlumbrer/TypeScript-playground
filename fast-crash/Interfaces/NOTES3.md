# Interface

- A way to describe data
- An interface defines the syntax that any entity must adhere to. It describes the rules you must follow when you use it.

## Defininf and using Interfaces

- You can define the method of an interface inside the object when instanciaing it, or can asign a function that is defined later

## Implementing interfaces to functions

- Basically, when you define a function you can pass the Interface as a type in the parameters.

## Implementing interfaces to classes

- Syntax: `class XXXXXX implements YYYYYYYYYinterface {}`
- Needed a constuctor
- Examples of how to create objects

## Interface inheritance

- Interface that extends another one: `interface XXXXXXXXinterface extends YYYYYYYYinterface {}`
- IMPORTANT (OJO): For an optional parameter we put a `?`: `interface AutomobileInterface { brand?: string; }`
    - If an interface wants those parameters MANDATORY, just have to overwrite them (see the code)