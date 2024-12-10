# Incorrect Usage of $inc Operator in MongoDB Update Operation
This example demonstrates an incorrect usage of the `$inc` operator in a MongoDB update operation.  The `$inc` operator is designed to increment a numeric field. Using a string value will result in the operation failing to increment the counter.  The solution demonstrates the correct usage of the `$inc` operator with a numeric value.

## Bug
The bug is in the `updateOne` operation.  It uses a string '10' for the increment value instead of a number 10. 

## Solution
The solution corrects the `updateOne` operation by using the number 10 for the increment value ensuring the counter is properly updated.