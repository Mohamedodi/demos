const studentsDiv = document.getElementById('students');
let students;
const allStudentScores = JSON.parse(localStorage.getItem('students'));


function updateScore(id, score){
	// let allStudentScores = JSON.parse(localStorage.getItem('students'));

	// if(allStudentScores==null){
	// 	allStudentScores = [];
	// }

	let student = allStudentScores.find(x => x.id == id);

	if(student==null){
		student = { id: id, scores: []};
		allStudentScores.push(student);
	}

	student.scores.push(score);
	localStorage.setItem('students', JSON.stringify(allStudentScores));

	// eslint-disable-next-line no-use-before-define
	loadStudent(students);
  
}

function getScores(id){
	
	// let allStudentScores = JSON.parse(localStorage.getItem('students'));

	// if(allStudentScores==null){
	// 	return null;
	// }

	let student = allStudentScores.find(x => x.id == id);

	if(student==null){
		return null;
	}

	return student.scores;

}

function loadStudent(students){
	studentsDiv.innerHTML ='';
	students.forEach(element => {
		const div = document.createElement('div');
		const p = document.createElement('p');
		p.innerText = `${element.firstname} ${element.lastname}`;
		const input = document.createElement('input');
		input.type = 'number';
		input.value = 0;
		div.append(p);
		div.append(input);

		const scores = getScores(element.id);
		const scoresUl = document.createElement('ul');
		if(scores!=undefined || scores!= null){
			scores.forEach((score)=> {
				const scoreLi = document.createElement('li');
				scoreLi.innerText = score;
				scoresUl.append(scoreLi);
			});
		}
		const button = document.createElement('button');
		button.classList.add('btn', 'btn-primary');
		button.innerText = 'Add';
		div.append(button);
		div.append(scoresUl);
		studentsDiv.append(div);

		button.addEventListener('click', ()=> {
			updateScore(element.id, input.value);
		});
	});
}

fetch('students.json').then(response => response.json()).then(data => {
	students = data.students;
	loadStudent(data.students);
});