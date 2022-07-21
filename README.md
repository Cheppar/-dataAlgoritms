# dataStrucAlgo
A summary of my data and algorithms practise notes 

### aim of this course
- write fast and elegant code that will ensure that your software will run quickly and smoothly 
- enhance expertise as a software engineer.


Source `A common-Sense Guide to Data Structures and Algothms by Jay Wengrow`

read notes in order

`Why do Data Structures matter`
- Explain what data structures and Algorithms are?

  `data structure` - refers to how data is organized. 
  
  Array and Sets are the 2 main types of data structures

### Array
- a list of data elements
`array = ["apples", "bananas", "cucumbers", "dates", "elderberries"]`
- Index in an array is the number which identifies where a piece of data lives inside the array. 
`apple` = 0 , `dates` = 3
- data structures are used in four basic ways also refered to operations ;
    read, search, Insert, delete

**###### 1. Read** - which is looking up what value is contained at a particular index inside the array. Reading from an array takes one step, because the comp has the ability to jump to any                    particular index inside the array. The computer jumps to the memory address 1013, it returns the value, which is "dates".
  
**###### 2. Search** - looking for a particular value within a data structure. If the value exists within the array, and if so, which index it's at. To search for a value within an array, the computer starts at index 0, checks the value, and if it doesn’t find what it’s looking for, moves on to the next index. It does this until it finds the value it’s seeking.

`linear search` - basic search operation - in which the computer checks each cell one at a time

So it turns out that for an array of 5 cells, the maximum number of steps
that linear search would take is 5. For an array of 500 cells, the maximum
number of steps that linear search would take is 500. 

  
**###### 3. Insert** - Add another value in our data structure, adding value to an additional slot within an array.

The efficiency of inserting a new piece of data inside an array depends on
where inside the array you’d like to insert it.

Inserting a new piece of data at the beginning or the middle of an array,
however, is a different story. In these cases, we need to shift many pieces of
data to make room for what we’re inserting, leading to additional steps.

**###### 4. Delete** - removing a value from an array. Deletion from an array is the process of eliminating the value at a particular index.

Like insertion, the worst case scenario of deleting an element is deleting the
very first element of the array. This is because index 0 would be empty, which
is not allowed for arrays, and we’d have to shift all the remaining elements
to the left to fill the gap.

“fast” -  how many steps and operation takes. If Operation A takes 5 steps, and Operation B takes 500 steps, we can assume that Operation A will always be faster than Operation B on all pieces of hardware.

"fast" synonymns in ds are; efficiency, complexity, performance, speed



- Determine efficiency of an algorithm : Efficiency is determined by the number of steps during a process.
- Arrays and their attributes
  - Read, Search, Insert, Delete 

### Sets
A set is a data structure that does not allow duplicate values to be contained within it. There are different type of sets, but focus is on array-based set.

The only difference between this set and a classic array is that the set never allows duplicate values to be inserted into it.

- sets and their attributes
- binary search

`Why Algorithms matter`
