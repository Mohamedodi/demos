const studentsUl = document.getElementById('students');

let studentData;

function renderStudents() {
	studentData.students.forEach(element => {
		const li = document.createElement('li');
		li.innerText = element.firstname;
		studentsUl.append(li);
	});
}

fetch('students.json').then (response=> {
	return response.json();
}).then((json)=> {
	studentData = json;
	renderStudents();
});




