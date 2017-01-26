Create a new repo/folder

Generate an express app

Create a DB connection to the database you created yesterday

Create a query.js file to hold all of your DB queries

Create the following routes:
  POST /auth/signup
    Follow the flow diagram here

    validate required fields, else send an error

    Check if email is unique, else send an error

    hash password with bcrypt

    insert into db

    send a json response with the user object

    Do not set a cookie, just send a json response with the user object from the DB
    

  POST /auth/login
    Follow the flow diagram here

    validate required fields, else send an error

    check if email in db, else send an error

    compare password with hashed password in db, else send an error

    send a json response with the user object

    Do not set a cookie, just send a json response with the user object from the DB

Push to github and add your URL here

Deploy to Heroku and add your URL here
