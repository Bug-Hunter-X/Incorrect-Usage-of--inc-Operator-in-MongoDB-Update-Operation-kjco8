```javascript
// Correct usage of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne( { "_id": ObjectId("6515f90a1a681245d7e71234") }, { $inc: { "count": 10 } } );
```