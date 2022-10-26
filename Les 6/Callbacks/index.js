function orderPizza(size, saus, toppings){
	console.log('bestelling plaatsen');
	setTimeout(()=> {
		console.log(`Maak deeg voor ${size} pizza`);
		setTimeout(()=>{
			console.log(`Smeer ${saus} op pizza`);
			setTimeout(()=>{
				console.log(`beleg pizza met ${toppings.join()}`);
				setTimeout(()=> {
					console.log('Pizza in de oven');
					setTimeout(() => {
						console.log('kies doos');
						setTimeout(()=> {
							console.log('bestelling leveren');
							setTimeout(() => {
								console.log('bestelling geleverd');
							}, 1000);
						},2000);
					}, 10000);
				},5000);
			},1000);
		},2000);
	},2000);
}

orderPizza('large', 'tomatensaus', ['ham', 'spek', 'mozzerella']);

console.log('blabediebla');