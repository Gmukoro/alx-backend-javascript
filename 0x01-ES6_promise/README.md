0x01-ES6_promise
Promises in JavaScript
What is a Promise?
A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. It allows you to write asynchronous code that looks and behaves more like synchronous code, making it easier to read and maintain.

How Promises Work
Pending: The initial state, neither fulfilled nor rejected.
Fulfilled: The operation completed successfully.
Rejected: The operation failed.
When a promise is created, it starts in the "pending" state. It can either be fulfilled with a value or rejected with a reason (error). Once a promise is fulfilled or rejected, it is settled and will not change state.

Why Use Promises?
Improved Readability: Promises help avoid deeply nested callbacks, known as "callback hell".
Error Handling: Promises provide a single catch method to handle errors.
Composability: Promises can be chained, making complex asynchronous operations easier to manage.
