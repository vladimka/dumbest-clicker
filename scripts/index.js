function logicLoop(){
	save.user.balance = save.user.balance.add(save.user.income.divide(10));
}

setInterval(_save, 5000);
setInterval(render, 100);
setInterval(logicLoop, 100);