const toggleAutoSave = () => save.settings.autoSave = !save.settings.autoSave;
const upgradeIncome = () => {
	if(save.user.balance.lt(save.user.upIncomeCost))
		return;

	save.user.balance = save.user.balance.sub(save.user.upIncomeCost);
	save.user.upIncomeCost = save.user.upIncomeCost.mul(1.17);
	save.user.income = save.user.income.mul(1.25);
}