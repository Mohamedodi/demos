const studentsDiv = document.getElementById('students');
let students;

function updateScore(id, score){
	if(id==1){
		let scores = JSON.parse(localStorage.getItem('Gijs'));
		if(scores == null){
			localStorage.setItem('Gijs', JSON.stringify([score]));
		} else {
			scores.push(score);
			localStorage.setItem('Gijs', JSON.stringify(scores));

		}
	}

	if(id==2){
		let scores = JSON.parse(localStorage.getItem('Erwin'));
		if(scores == null){
			localStorage.setItem('Erwin', JSON.stringify([score]));
		} else {
			scores.push(score);
			localStorage.setItem('Erwin', JSON.stringify(scores));

		}
	}

	if(id==3){
		let scores = JSON.parse(localStorage.getItem('Mounir'));
		if(scores == null){
			localStorage.setItem('Mounir', JSON.stringify([score]));
		} else {
			scores.push(score);
			localStorage.setItem('Mounir', JSON.stringify(scores));

		}
	}
	if(id==4){
		let scores = JSON.parse(localStorage.getItem('Mykola'));
		if(scores == null){
			localStorage.setItem('Mykola', JSON.stringify([score]));
		} else {
			scores.push(score);
			localStorage.setItem('Mykola', JSON.stringify(scores));

		}
	}
	if(id==5){
		let scores = JSON.parse(localStorage.getItem('Dylan'));
		if(scores == null){
			localStorage.setItem('Dylan', JSON.stringify([score]));
		} else {
			scores.push(score);
			localStorage.setItem('Dylan', JSON.stringify(scores));

		}
	}
	if(id==6){
		let scores = JSON.parse(localStorage.getItem('Pieter'));
		if(scores == null){
			localStorage.setItem('Pieter', JSON.stringify([score]));
		} else {
			scores.push(score);
			localStorage.setItem('Pieter', JSON.stringify(scores));

		}
	}
	// eslint-disable-next-line no-use-before-define
	loadStudent(students);
  
}

function getScores(id){
	if(id == 1){
		return JSON.parse(localStorage.getItem('Gijs'));
	}
	if(id == 2){
		return JSON.parse(localStorage.getItem('Erwin'));
	}
	if(id == 3){
		return JSON.parse(localStorage.getItem('Mounir'));
	}
	if(id == 4){
		return JSON.parse(localStorage.getItem('Mykola'));
	}
	if(id == 5){
		return JSON.parse(localStorage.getItem('Dylan'));
	}
	if(id == 6){
		return JSON.parse(localStorage.getItem('Pieter'));
	}

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