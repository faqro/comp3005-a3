# COMP 3005 A3-Q1
Made by Faraaz Jan 101298165

Nov 9 2025

## Overview
This project sets up a PostgreSQL database with a `students` table and provides functions to manipulate the table using the nodejs `pg` library.

Video Demo of program: https://youtu.be/hlE0C8-BpiE

## Prerequisites
- PostgreSQL running locally
- Node.js
- npm (Node Package Manager)

## Setup
1. run `npm i` to install all necessary modules
2. create a new file called `.env` which contains the following values:
  - "PGHOST" (optional) -> the IP address of the SQL server (this should be `localhost` by default)
  - "PGPORT" (optional) -> the port of the SQL server (this should be `5432` by default)
  - "PGUSER" (optional) -> the username of the PostgreSQL user (this should be `postgres` by default)
  - GPWD" -> the password of the PostgreSQL user
3. if PostgreSQL is not already running, start it. (note: the database used by the program is `a3db`)
4. in the terminal run `psql -U <INSERT USERNAME> -f setup.sql`. This will initiate the database, the `students` table, and the initial entries of the table.
5. test the node.js program with `npm run start` (the functions used are written in index.js)

### Example .env:
```
PGUSER=postgres
PGPWD=Ariba786!
PGHOST=localhost
PGPORT=5432
```
