const students = [
    {
        fullName: "Daniel Rusev",
        studentID: "L30092930",
        age: 22,
        major: "Information Technology BS",
        gpa: 3.54,
        enrolled: true,
        courses: ["Web and Distributed Prog", "Discrete Math", "Encryption", "Operating Systems","Advanced Cybersecurity"],
        contact: {
            email: "danielgrusev@lewisu.edu",
            phone: "331-444-0030"
        }
    },
    {
        fullName: "Jack Pizzo",
        studentID: "L30092931",
        age: 34,
        major: "Information Technology BS",
        gpa: 3.48,
        enrolled: true,
        courses: ["Web and Distributed Prog","Operating Systems","Advanced Cybersecurity"],
        contact: {
            email: "jackpizzo@lewisu.edu",
            phone: "331-444-0031"
        }
    },
    {
        fullName: "Michael Brunner",
        studentID: "L30092932",
        age: 32,
        major: "Information Technology BS",
        gpa: 3.44,
        enrolled: true,
        courses: ["Web and Distributed Prog", "Discrete Math", "Encryption"],
        contact: {
            email: "michaelbrunner@lewisu.edu",
            phone: "331-444-0032"
        }
    }
];

function displayStudents() {
    const outputDiv = document.getElementById("output");
    let html = "";

    students.forEach(student => {
        html += `
        <div class="student-card">
        <p><strong>Name:</strong> ${student.fullName}</p>
        <p><strong>Student ID:</strong> ${student.studentID}</p>
        <p><strong>Age:</strong> ${student.age}</p>
        <p><strong>Major:</strong> ${student.major}</p>
        <p><strong>GPA:</strong> ${student.gpa.toFixed(2)}</p>
        <p><strong>Enrolled:</strong> ${student.enrolled ? "Yes" : "No"}</p>
        <p><strong>Courses:</strong> ${student.courses.join(", ")}</p>
        <p><strong>Email:</strong> <a href="mailto:${student.contact.email}">${student.contact.email}</a></p>
        <p><strong>Phone:</strong> <a href="tel:${student.contact.phone}">${student.contact.phone}</a></p>
      </div>
      `;
    });
    
  outputDiv.innerHTML = html;
}

displayStudents();