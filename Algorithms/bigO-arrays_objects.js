// An object is a collection of key value pairs
// ***** TIME COMPLEXITY OF BIG-O with objects, arrays and methods.
// You can either insert or remove, the time complexity is constant

// No matter what amount of properties are in an object, it takes the same amount of time to remove or insert a property.
// --- insert 0(1) , remove 0(1), Access 0(1)

// However, if you want to search, the time complexity is linear 
// linear 0(n)

// ****** METHODS ********
Object.keys() - 0(n)  -- Returns the keys
Object.values() - 0(n) -- Returns the values
Object.entries() - 0(n) -- Returns entries

// ******* ARRAYS *******
The difference between an array and object is that array is ordered.
Starts at 0 and increments by 1.

- When inserting or removing a property from an aaray, the time complexity is constant. '0(1)'
- When removing or inserting from an array at the beginning, it is linear 0(n). because the index has to be reset for every remaining element in the array.
- Accessing -  0(1) constant
- Searching an element is o(n)- linear
- Push and Pop are 0(1)
- shift, unshift, concat, slice, splice - 0(n)
- forEach / map / filter/ reduce - 0(n) - IMP -- when solving a problem using forEach, filter the callback function may contain a for loop, in such a scenario, your time complexity is quadratic , and the interviwer may not be happy.