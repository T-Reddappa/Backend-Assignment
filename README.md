# Backend-Assignment
Node.js Backend Application with authentication and user profile, posts and comment routes.

**Prerequisites**
1. Node.js: Ensure you have Node.js installed on your machine. You can download it from nodejs.org.

2. MongoDB Account: Create an account on MongoDB Atlas or use an existing MongoDB instance.

3.Postman app to test API routes

**Installation**
1.Clone the respository => git clone "this repo link"
2. Install Dependencies => npm install


**Configuration**
1. MongoDB Connection:
 ->  Open config/db.js.
 ->  Replace the connectionString with your MongoDB connection string. This is usually obtained from MongoDB Atlas.
   
2. Express Server:
 ->  Open index.js.
 ->  Ensure the port specified in const port = 3000; is available, or change it if necessary.

   
**Running the Server**
 -> Start the server:  => node index.js

This will launch the Express server, and you should see a message in the console: "Server is running on port 3000" (or your specified port).

**API End Points**

  **Authentication Routes**
   1.Register a User:
    -> POST yourLocalAddress/auth/register 
     -> Request Body should include:
       -> email: User's email
       -> username: User's username
       -> password: User's password
   2. Login:
   -> POST yourLocalAddress/auth/login 
     -> Request Body should include:
       -> email: User's email
       -> password: User's password
   
    
