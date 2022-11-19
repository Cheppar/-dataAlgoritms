// MAP METHOD - RETURNS A DIFFERENT ARRAY
const users = [
	{id:1, name:'godfrey'},
	{id:2, name:'nobella'},
	{id:3, name:'janet'},
	{id:4, name:'gift'},
	{id:5, name:'alice'},
	{id:6, name:'christine'},
	{id:7, name:'pablo'},
	];

const ids = users.map(function(user){
	// return user.name[6];
	return user.name;
});

console.log(ids);
