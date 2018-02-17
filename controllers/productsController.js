exports.list_all_products = function(req, res) {	
	var ret = [
	{
		name: 'Apple',
		description: 'Fuji Apple',
		price: 21.50
	},
	{
		name: 'Banana',
		description: 'Cavendish',
		price: 12.75
	},
	{
		name: 'Basil',
		description: 'Basil',
		price: 12.75
	},
	{
		name: 'Carrots',
		description: 'Basil',
		price: 1.50
	},
	{
		name: 'Durian',
		description: 'Durian',
		price: 12.75
	},
	{
		name: 'Dog food',
		description: 'Cavendish',
		price: 12.75
	},
	{
		name: 'Eggplant',
		description: 'Eggplant',
		price: 12.75
	},
	{
		name: 'Egg',
		description: 'Cavendish',
		price: 12.75
	},
	{
		name: 'Fig',
		description: 'Fig',
		price: 12.75
	},
	{
		name: 'Guava',
		description: 'Guava',
		price: 12.75
	},
	{
		name: 'Grapes',
		description: 'Grapes',
		price: 12.75
	},
	{
		name: 'Grapefruit',
		description: 'Grapefruit',
		price: 12.75
	},
	{
		name: 'Honeydew',
		description: 'Honeydew',
		price: 12.75
	},
	{
		name: 'Jackfruit',
		description: 'Cavendish',
		price: 12.75
	},
	{
		name: 'Jujube',
		description: 'Jujube',
		price: 12.75
	},
	{
		name: 'Kiwi',
		description: 'Kiwi',
		price: 12.75
	},
	{
		name: 'Kale',
		description: 'Cavendish',
		price: 12.75
	},

	];

	//console.log('list_all_products return: ' + JSON.stringify(ret));
	//return JSON.stringify(ret);
	res.send(ret);
};

exports.save_cart = function(req, res) {
	console.log(req.body);
	debugger;
	res.send('Request was received by the server');
};