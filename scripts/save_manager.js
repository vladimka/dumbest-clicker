let save = {
	user : {
		balance : new Decimal(0),
		income : new Decimal(1),
		upIncome1Cost : new Decimal(10),
		upIncome2Cost : new Decimal(1e2)
	},
	settings : {
		autoSave : true
	}
}

function resetSave(){
	save = {
		user : {
			balance : new Decimal(0),
			income : new Decimal(1),
			upIncome1Cost : new Decimal(10),
			upIncome2Cost : new Decimal(1e2)
		},
		settings : {
			autoSave : true
		}
	}
	_save();
}

function _save(){
	localStorage.setItem('save', JSON.stringify(save));
}

function load(){
	save = JSON.parse(localStorage.getItem('save')) || {};

	save.user.balance = new Decimal(save.user.balance);
	save.user.income = new Decimal(save.user.income);
	save.user.upIncome1Cost = new Decimal(save.user.upIncome1Cost);
	save.user.upIncome2Cost = new Decimal(save.user.upIncome2Cost);
}

document.body.onload = () => {
	if(localStorage.getItem('save') == null)
		return;

	load();
}