const studentsUl = document.getElementById('students');

let studentData;

fetch('students.json').then (response=> {
	return response.json();
}).then((json)=> {
	studentData = json;
});


studentData.students.forEach(element => {
	const li = document.createElement('li');
	li.innerText = element.firstname;
	studentsUl.append(li);
});
