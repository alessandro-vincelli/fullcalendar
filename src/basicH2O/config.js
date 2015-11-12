
fcViews.basich2o = {
	'class': BasicH2OView
};

fcViews.basicDayh2o = {
	type: 'basich2o',
	duration: { days: 1 }
};

fcViews.basicWeekh2o = {
	type: 'basich2o',
	duration: { weeks: 1 }
};

fcViews.monthh2o = {
	'class': MonthH2OView,
	duration: { months: 1 }, // important for prev/next
	defaults: {
		fixedWeekCount: true
	}
};