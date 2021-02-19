function render(){
	document.getElementById('balance').innerText = save.user.balance.toFixed(2);
	document.getElementById('income').innerText = save.user.income.toFixed(2);
	document.getElementById('autoSaveBtn').innerText = save.settings.autoSave ? "Enabled" : "Disabled";
	document.getElementById('upIncome1Cost').innerText = save.user.upIncome1Cost.toFixed(2);
	document.getElementById('upIncome2Cost').innerText = save.user.upIncome2Cost.toFixed(2);
}