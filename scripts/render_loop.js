function render(){
	document.getElementById('balance').innerText = save.user.balance.toFixed(2);
	document.getElementById('income').innerText = save.user.income.toFixed(2);
	document.getElementById('autoSaveBtn').innerText = save.settings.autoSave ? "Enabled" : "Disabled";
	document.getElementById('upIncomeCost').innerText = save.user.upIncomeCost.toFixed(2);
}