// Arrays to store students and courses
let students = [];
let courses = [];

// Function to get course by name
function getCourseByName(courseName) {
  return courses.find((course) => course.courseName === courseName);
}

// Function to add a new course
function addCourse(courseName, duration, dateOfStarting) {
  let newCourse = {
    courseName: courseName,
    duration: duration,
    dateofStarting: dateOfStarting,
  };
  courses.push(newCourse);
  console.log(`Course '${courseName}' added successfully!`);
}

// Function to enroll a student in a course
function enrollStudent(studentName, courseName) {
  let course = getCourseByName(courseName);
  if (course) {
    console.log(`\nEnrollment Confirmation for ${studentName}:`);
    console.log(`Course Name: ${course.courseName}`);
    console.log(`Duration: ${course.duration}`);
    console.log(`Start Date: ${course.dateofStarting}\n`);
  } else {
    console.log(`Course '${courseName}' not found.`);
  }
}

// Example usage
addCourse("Node JS", "60H", "12-12-2025");
addCourse("Python Programming", "45H", "01-01-2026");

enrollStudent("John Doe", "Node JS");
enrollStudent("Jane Smith", "Python Programming");
enrollStudent("Alice", "Java"); // Course not found
