const toggleAutoSave = () => save.settings.autoSave = !save.settings.autoSave;
const upgradeIncome1 = () => {
	if(save.user.balance.lt(save.user.upIncome1Cost))
		return;

	save.user.balance = save.user.balance.sub(save.user.upIncome1Cost);
	save.user.upIncome1Cost = save.user.upIncome1Cost.mul(2);
	save.user.income = save.user.income.mul(1.25);
}
const upgradeIncome2 = () => {
	if(save.user.balance.lt(save.user.upIncome2Cost))
		return;

	save.user.balance = save.user.balance.sub(save.user.upIncome2Cost);
	save.user.upIncome2Cost = save.user.upIncome2Cost.mul(1.5);
	save.user.income = save.user.income.mul(1.125);
}