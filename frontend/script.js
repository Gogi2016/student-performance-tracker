function fetchStudents() {
    fetch("http://localhost:5000/students")
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById("students-list");
            list.innerHTML = "";
            data.forEach(student => {
                const li = document.createElement("li");
                li.textContent = `${student.name} - ${student.grade} - ${student.subject} - ${student.score}`;
                list.appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching students:", error));
}
