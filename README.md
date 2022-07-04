# Northcoders House of Games API

## Background

This project is the back-end project of the Northcoders Bootcamp. It was build using TDD and implemented using Express and Postgres to create a functional API.


**To clone my project**

To clone the project fork it from my repo and run

'git clone "your_fork's_url"' on your machine
Installing
To install all of the dependencies on your machine navigate to the project directory and run

**'npm install'**
this will install everything you need for the API to work locally on your machine
Seeding the Database
#.env files

In order to successfully connect to the databases and run it locally you will have to create a .env files
and set the correct database name for the correct environment.

You can do this by adding 'PGDATABASE=db-name' where db-name is going to be the correct DB name.
You can find information of DB names in /db/setup.sql file. Also make sure you
.gitignore this files so you dont share your environment variables.

To seed the database locally you need to run the scripts provided with the following commands

-'npm run setup-dbs'
-to set up the Database
'npm run seed'
-to seed the Database
Running Tests
To run the tests you will have to run
