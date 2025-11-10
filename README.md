# COMP 3005 A3-Q1
Made by Faraaz Jan 101298165
Nov 9 2025

## Overview
This project sets up a PostgreSQL database with a `students` table and provides functions to manipulate the table using the nodejs `pg` library.

## Prerequisites
- PostgreSQL running locally
- Node.js
- npm (Node Package Manager)

## Setup
1. run `npm i` to install all necessary modules
2. create a new file called `.env` which contains the following values:
a. "PGHOST" (optional) -> the IP address of the SQL server (this should be `localhost` by default)
b. "PGPORT" (optional) -> the port of the SQL server (this should be `5432` by default)
c. "PGUSER" (optional) -> the username of the PostgreSQL user (this should be `postgres` by default)
d. "PGPWD" -> the password of the PostgreSQL user
2. if PostgreSQL is not already running, start it. (note: the database used by the program is `a3db`)
3. in the terminal run `psql -U <INSERT USERNAME> -f setup.sql`. This will initiate the database, the `students` table, and the initial entries of the table.
4. test the node.js program with `npm run start` (the functions used are written in index.js)