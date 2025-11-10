require('dotenv').config()
const { setDb, getAllStudents, addStudent, updateStudentEmail, deleteStudent } = require('./studentInterface.js')
const { Pool } = require('pg')

//initiate connection to PostgreSQL db
const pool = new Pool({
    user: process.env.PGUSER || 'postgres',
    host: process.env.PGHOST || 'localhost',
    database: 'a3db',
    password: process.env.PGPWD,
    port: process.env.PGPORT || 5432,
})
setDb(pool)

//main program loop
const main = async() => {
    //test functions
    await deleteStudent(4)
    await getAllStudents()

    // Close the DB pool when done
    await pool.end();
}

//run the main script
main()
    .catch(err => {
        console.error('Error in main:', err);
        pool.end();
    });