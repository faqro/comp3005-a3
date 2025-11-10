-- CREATE DATABASE a3db;
SELECT 'CREATE DATABASE a3db'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'a3db')\gexec
\c a3db

-- Create students table
CREATE TABLE IF NOT EXISTS students (
    student_id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    enrollment_date DATE
);

-- Empty all items in the table, useful for when running multiple times
TRUNCATE TABLE students;

-- Insert initial data
INSERT INTO students (first_name, last_name, email, enrollment_date) VALUES
('John', 'Doe', 'john.doe@example.com', '2023-09-01'),
('Jane', 'Smith', 'jane.smith@example.com', '2023-09-01'),
('Jim', 'Beam', 'jim.beam@example.com', '2023-09-02')
ON CONFLICT (email) DO NOTHING;