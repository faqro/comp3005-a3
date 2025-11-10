var pool = null

//set the database object for the interface functions
const setDb = (db) => {
    pool = db
}

//get all students in the table sorted by student_id
const getAllStudents = async() => {
    const res = await pool.query('SELECT * FROM students ORDER BY student_id')
    console.log('All students:', res.rows)
    return res.rows
}

//add a student to the table and return the resulting entry
const addStudent = async(first_name, last_name, email, enrollment_date) => {
    try {
        const res = await pool.query(
            `INSERT INTO students (first_name, last_name, email, enrollment_date)
            VALUES ($1, $2, $3, $4) RETURNING *`,
            [first_name, last_name, email, enrollment_date]
        );
        console.log('Added student:', res.rows[0])
        return res.rows[0]
    } catch(err) {
        console.error('Error adding student:', err.message)
        throw err
    }
}

//update the email of an existing student in the table
const updateStudentEmail = async(student_id, new_email) => {
    const res = await pool.query(
        `UPDATE students
        SET email = $1
        WHERE student_id = $2
        RETURNING *`,
        [new_email, student_id]
    );
    console.log('Updated student:', res.rows[0])
    return res.rows[0]
}

//delete a student by id in the table
const deleteStudent = async(student_id) => {
    const res = await pool.query(
        `DELETE FROM students
        WHERE student_id = $1
        RETURNING *`,
        [student_id]
    );
    console.log('Deleted student:', res.rows[0]);
    return res.rows[0];
}

// Export functions for use/testing
module.exports = { setDb, getAllStudents, addStudent, updateStudentEmail, deleteStudent };