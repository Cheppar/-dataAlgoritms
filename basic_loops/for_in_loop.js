const user = {
	firstName : 'Gabriel',
	lastName : 'Pablo',
	age : 40
}

for(let x in user){
	console.log(`${x} : ${user[x]} `);
}