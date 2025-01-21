# TypeScript Type Error Bug

This repository demonstrates a common TypeScript error related to type mismatches. The `greeter` function expects a single string, but it receives an array. The solution shows how to handle this scenario correctly.

## Bug

The `bug.ts` file contains a function `greeter` which takes a string and returns a greeting. However, an array of strings is passed to this function, causing a type error.

## Solution

The `bugSolution.ts` file demonstrates a solution by either iterating through the array and greeting each element or by handling the array in another way such as joining the array elements into a single string.