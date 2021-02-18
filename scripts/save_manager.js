let save = {
	user : {
		balance : new Decimal(0),
		income : new Decimal(1),
		upIncomeCost : new Decimal(10)
	},
	settings : {
		autoSave : true
	}
}

function _save(){
	localStorage.setItem('save', JSON.stringify(save));
}

function load(){
	save = JSON.parse(localStorage.getItem('save')) || {};

	save.user.balance = new Decimal(save.user.balance);
	save.user.income = new Decimal(save.user.income);
	save.user.upIncomeCost = new Decimal(save.user.upIncomeCost);
}

document.body.onload = () => {
	if(localStorage.getItem('save') == null)
		return;

	load();
}