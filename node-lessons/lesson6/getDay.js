function getDay(day, date) {
	var dt = date ? new Date(date) : new Date();
	var dif = day - dt.getDay();
	dt.setDate(dt.getDate() + dif);

	return [
		dt.getFullYear(), 
		dt.getMonth()+1, 
		dt.getDate()
	].join('-');
}

exports.getDay = getDay;
