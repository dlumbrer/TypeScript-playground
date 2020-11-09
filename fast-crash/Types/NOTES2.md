# Type Inference

## Types

- Type "any" for everything
- You can declare the type and initialice the variable in the same line (`types2.ts`)
- You must declare the types of the function parameters (`types3.ts`)
- You can declare the type of the returning value of a function (`types3.ts`)
- You can level the "strict" of the code putting the type on each variable (forcing) (`types3.ts`)

## Function as Types

Code at `function_types.js` shows levels of restrictions

## Object as Types

- For defining objects: `let x: {} = ...` and you can be more strict using the types inside the definition (`object_types.ts`)

## Union types

- there are more types, `void`, enum, tuple, --- in the documentation more...
- Very simple, concatenate types that you want using pipes (`|`)