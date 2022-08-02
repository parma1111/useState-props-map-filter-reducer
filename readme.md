what is the difference between Props and State? explore
Ans. State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.

Explain the useState API? explore
Ans. The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.
A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components.

Explain the how map, filter, reduce work 
Ans. 
map(), filter() and reduce() work in the same way: They each accept a function and a sequence of elements and return the result of applying the received function to each element in the sequence.

map() creates a new array from calling a function for every array element. map() calls a function once for each element in an array. map() does not execute the function for empty elements. map() does not change the original array.

The filter() method creates a new array filled with elements that pass a test provided by a function. The filter() method does not execute the function for empty elements. The filter() method does not change the original array.

reduce: it takes the values in an array, from the first till the last element, and applies functionality such that it changes the array into one singular value. 