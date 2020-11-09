# What is TypeScript

- TypeScript is a layer around JS with more features
- files.ts ---COMPILER--- file.js


## Features

- Types
- Interfaces
- Decorators

(plus all the ES6 features, classes, arrow functions...)

## Types

```
let name: string;
name = 'Edwin'
```

some types: number, string[] (array of strings), boolean, string, *any*

```
let isDone: boolean = false
let posts: number[] = [1,2,3] 
let whatever: any = ' Hello :=) '
```

## Interfaces

- Define how or data or functionalitites should be modeled
- No data in the Interface
- Just a definition

```
interface Post{
    title: string;
}
```

- A model of how we want the data

```
let post: Post = {
    title: form.title
}

```

## Decorators

- Funnctions that are invoked with a prefixed @ symbol
- **OJO!!!**:  They returned the same data that we passed in (or modifiying, etc...)

```
@Component(foo)

returns foo (maybe changed)
```

- We can decorate Classes, methods, properties and parameters

## Compiling

### Manual with TSC

```
tsc example.ts //This will generate a js file
```

### Using Visual Studio Code (We can use web storm as well)

1. Create tsconfig file
```
tsc --init
``` 

2. Control+B for compiling using the tsconfig file

3. OJO: for watching mode (autocompiling), just write in the terminal "tsc -watch file.ts"

### Using Online Editor

https://www.typescriptlang.org/play