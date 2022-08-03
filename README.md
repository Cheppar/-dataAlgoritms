# dataStrucAlgo
A summary of my data and algorithms practise notes 

### aim of this course
- write fast and elegant code that will ensure that your software will run quickly and smoothly 
- enhance expertise as a software engineer.


Source `A common-Sense Guide to Data Structures and Algothms by Jay Wengrow`

read notes in order

## Chapter 1 : `Why do Data Structures matter`
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

`Reading` from a set is exactly the same as reading from an array - it takes
just one step for the computer to look up what is contained within a particular
index. 

`Searching` a set also turns out to be no different than searching an array - it
takes up to N steps to search to see if a value exists within in a set.

`Insertion` is where arrays and sets diverge. Reason: With an array, the computer can insert a value at its end in a single step. With a set, however, the computer first needs to determine that this value
doesn’t already exist in this set - because that’s what sets do: They prevent
duplicate data. So every insert first requires a search.

Insertion into a set in a best case scenario will take N + 1 steps for N elements. This is because there are N steps of search to ensure that the value doesn’t already exist within the set, and then 1 step for the actual insertion.

`Now, does this mean that you should avoid sets just because insertion is slower for sets than regular arrays? `

`Ans` - Absolutely not. Sets are important when you need to ensure that there is no duplicate data. But when you don’t have such a need, an array may be preferable, since insertions for arrays are more efficient than insertions for sets. You must analyze the needs of your own application and decide which data structure is a better fit.

- sets and their attributes
- binary search

## Chapter 2 : `Why Algorithms matter`

Choosing the right data structure can significantly affect the performance of our code.

There is another major factor that can affect the efficiency of our code: The proper selection of which algorithm to use.

An `algorithm` is simply a particular process for solving a problem. an algorithm refers to a process for going about a particular operation. 

There are multiple algorithms that can achieve a particular operations.

a new data structure, the `ordered array`. We’ll see how there is more than one algorithm for searching an ordered
array, and we’ll learn how to choose the right one.

#### Ordered Arrays

The only difference is that ordered arrays require that the values are always kept in order. 
That is, every time a value is added it gets placed in the proper cell so that the values of the array remain sorted. 

In a standard array, on the other hand, values can be added to the end of the array without taking the order of the values into consideration.

`Insertion in an ordered Array`

While insertion is less efficient by an ordered array than in a regular array, the ordered array has a secret superpower when it comes to the search operation. 

It takes 6 steps to add an a value to an ordered array with 5 values. This makes it in-effective.

`Searching in an ordered Array`


An array of ` [3, 17, 80, 202]` and add number 75.

Explanation: In ascending order

Step #1: We check the value at index 0, to determine whether the value we
want to insert - the 75 - should go to its left or to its right:

Step #2: We inspect the value at the next cell:75 is greater than 17, so we need to move on.

Step #3: We check the value at the next cell: We’ve encountered the value 80, which is greater than the 75 that we wish to insert. Since we’ve reached the first value which is greater than 75, we can conclude that the 75 must be placed immediately to the left of this 80 to maintain the order of this ordered array. To do that, we need to shift data to make room for the 75.

Step #4: Move the final value to the right:

Step #5: Move the next to last value to the right:

Step #6: We can finally insert the 75 into its correct spot: ` [3, 17, 75, 80, 202]`


####Key points 

- It emerges that when inserting into an ordered array, we need to always
  conduct a search before the actual insertion to determine the correct spot for
  the insertion. That is one key difference (in terms of efficiency) between a
  standard array and an ordered array.
  
- While insertion is less efficient by an ordered array than in a regular array,
  the ordered array has a secret superpower when it comes to the search operation. The secret power is searching an ordered array.
  
## Searching and ordered array.

A regular array is charactised by the linear search: we check each cell one at a time - from left to right - until we find the value we're looking for.

#### Difference between a searching a regular array vs ordered array.

Array use case :  `[17, 3, 75, 202, 80]`

Explanation :

If we were to search for the value 22 - which happens to be nonexistent in our example - we need to search each and every element because the 22 can potentially be anywhere
in the array. The only time we can stop our search before we reach the array’s end is if we happen to find the value we’re looking for before we reach the end.


Explanation 2 : `[3, 17, 75, 80, 202]`

With an ordered array, however, we can stop a search early even if the value
isn’t contained within the array. We can stop the search as soon as we reach
the 75, since it’s impossible that the 22 is anywhere to the right of it.

Implementation of linear search in an ordered array:

array = [3, 17, 75, 80, 202];

function linearSearch(array, value) {

// We iterate through every element in the array:

    for (let element of array){
    
// If we find the value we're looking for, we return it:

        if (element == value){
            return value 
        } else if (element > value){
            break
        }
    };
// We return nil if we do not find the value within the array:
      return null
}`




