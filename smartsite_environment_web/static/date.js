jQuery.extend({
	//本天
	"showToday": function() {
		var Nowdate = new Date();
		M = Number(Nowdate.getMonth()) + 1;
		if(M < 10) {
			M = "0" + M;
		}
		var getDate = Nowdate.getDate();
		if(getDate < 10) {
			getDate = "0" + getDate;
		}
		return Nowdate.getFullYear() + "-" + M + "-" + getDate;
	},
	//本天含年月日
	"showTodayDetail": function() {
		var Nowdate = new Date();
		M = Number(Nowdate.getMonth()) + 1;
		if(M < 10) {
			M = "0" + M;
		}
		var getDate = Nowdate.getDate();
		if(getDate < 10) {
			getDate = "0" + getDate;
		}
		return Nowdate.getFullYear() + "年" + M + "月" + getDate + '日';
	},
	//本周第一天不含年
	"showWeekingFirst": function() {
		var Nowdate = new Date();
		var day = Nowdate.getDay();
		var WeekFirstDay;
		if(day == 0) {
			WeekFirstDay = new Date(Nowdate.getTime() - 6 * 86400000);

		} else {
			WeekFirstDay = new Date(Nowdate.getTime() - (day - 1) * 86400000);
		}
		M = Number(WeekFirstDay.getMonth()) + 1;
		if(M < 10) {
			M = "0" + M;
		};
		var getDate = WeekFirstDay.getDate();
		if(getDate < 10) {
			getDate = "0" + getDate;
		};
		return M + "-" + getDate;
	},
	//本周最后一天不含年
	"showWeekingLast": function() {
		var WeekLastDay = new Date();
		M = Number(WeekLastDay.getMonth()) + 1;
		if(M < 10) {
			M = "0" + M;
		};
		var getDate = WeekLastDay.getDate();
		if(getDate < 10) {
			getDate = "0" + getDate;
		};
		return M + "-" + getDate;
	},
	//本周第一天
	"showWeekFirstDay": function() {
		var Nowdate = new Date();
		var day = Nowdate.getDay();
		var WeekFirstDay;
		if(day == 0) {
			WeekFirstDay = new Date(Nowdate.getTime() - 6 * 86400000);

		} else {
			WeekFirstDay = new Date(Nowdate.getTime() - (day - 1) * 86400000);
		}
		M = Number(WeekFirstDay.getMonth()) + 1;
		if(M < 10) {
			M = "0" + M;
		};
		var getDate = WeekFirstDay.getDate();
		if(getDate < 10) {
			getDate = "0" + getDate;
		};
		return WeekFirstDay.getFullYear() + "-" + M + "-" + getDate;

	},
	//本周最后一天
	"showWeekLastDay": function() {
		var WeekLastDay = new Date();
		M = Number(WeekLastDay.getMonth()) + 1;
		if(M < 10) {
			M = "0" + M;
		};
		var getDate = WeekLastDay.getDate();
		if(getDate < 10) {
			getDate = "0" + getDate;
		};
		return WeekLastDay.getFullYear() + "-" + M + "-" + getDate;
	},
	//本月第一天
	"showMonthFirstDay": function() {
		var Nowdate = new Date();
		var MonthFirstDay = new Date(Nowdate.getFullYear(), Nowdate.getMonth(), 1);
		M = Number(MonthFirstDay.getMonth()) + 1;
		if(M < 10) {
			M = "0" + M;
		};
		var getDate = MonthFirstDay.getDate();
		if(getDate < 10) {
			getDate = "0" + getDate;
		};
		return MonthFirstDay.getFullYear() + "-" + M + "-" + getDate;
	},
	//本月最后一天
	"showMonthLastDay": function() {
		var Nowdate = new Date();
		var MonthNextFirstDay = new Date(Nowdate.getFullYear(), Nowdate.getMonth() + 1, 1);
		var MonthLastDay = new Date(MonthNextFirstDay - 86400000);
		M = Number(MonthLastDay.getMonth()) + 1;
		if(MonthLastDay.getTime() > new Date().getTime()) {
			MonthLastDay = Nowdate;
		};
		if(M < 10) {
			M = "0" + M;
		};
		var getDate = MonthLastDay.getDate();
		if(getDate < 10) {
			getDate = "0" + getDate;
		};
		return MonthLastDay.getFullYear() + "-" + M + "-" + getDate;
	},
	//算出相差天
	"getDays": function(strDateStart, strDateEnd) {
		var strSeparator = "-"; //日期分隔符
		var oDate1;
		var oDate2;
		var iDays;
		oDate1 = strDateStart.split(strSeparator);
		oDate2 = strDateEnd.split(strSeparator);
		var strDateS = new Date(oDate1[0], oDate1[1] - 1, oDate1[2]);
		var strDateE = new Date(oDate2[0], oDate2[1] - 1, oDate2[2]);
		iDays = parseInt(Math.abs(strDateS - strDateE) / 1000 / 60 / 60 / 24) //把相差的毫秒数转换为天数
		return iDays;
	},
	//得到日期格式化
	"formatDate": function(date) {
		var Month = date.getMonth() + 1;
		if(Month < 10) {
			Month = '0' + Month;
		};
		var Date = date.getDate();
		if(Date < 10) {
			Date = '0' + Date;
		};

		return date.getFullYear() + '-' + Month + '-' + Date;
	},
	//得到日期格式化
	"formatDetail": function(date) {
		var Month = date.getMonth() + 1;
		if(Month < 10) {
			Month = '0' + Month;
		};
		var Date = date.getDate();
		if(Date < 10) {
			Date = '0' + Date;
		};
		var hour = date.getHours();
		if(hour < 10) {
			hour = '0' + hour;
		};
		var min = date.getMinutes();
		if(min < 10) {
			min = '0' + min;
		};
		var seconds = date.getSeconds();
		if(seconds < 10) {
			seconds = '0' + seconds;
		};
		var day = date.getDay();
		if(day == 1) {
			day = "星期一";
		} else if(day == 2) {
			day = "星期二";
		} else if(day == 3) {
			day = "星期三";
		} else if(day == 4) {
			day = "星期四";
		} else if(day == 5) {
			day = "星期五";
		} else if(day == 6) {
			day = "星期六";
		} else if(day == 0) {
			day = "星期日";
		}
		return date.getFullYear() + '年' + Month + '月' + Date + '日' + ' ' + hour + ':' + min + ':' + seconds + ' ' + day;
	},
	//根据nowdate获取上个星期六和这个星期五
	"getTaskdate": function() {
		var today = new Date();
		// 6 0 1 2 3 4 5
		var fay = today.getDay();

		var friday;
		var laststarday;
		if(fay == 6) {
			laststarday = today;
		} else {
			laststarday = new Date(today.getTime() - (fay + 1) * 86400000);
		}
		friday = new Date(laststarday.getTime() + 6 * 86400000);
		return $.formatDate(laststarday) + '~' + $.formatDate(friday)
	},
	//获取本周星期五
	"getFirday": function() {
		var today = new Date();
		// 6 0 1 2 3 4 5
		var fay = today.getDay();

		var friday;
		var laststarday;
		if(fay == 6) {
			laststarday = today;
		} else {
			laststarday = new Date(today.getTime() - (fay + 1) * 86400000);
		}
		friday = new Date(laststarday.getTime() + 6 * 86400000);
		return friday
	},
	//获取本周周一到周五并存入数组
	"getAllweekday": function() {
		var Nowdate = new Date();
		var day = Nowdate.getDay();
		var WeekFirstDay;
		var weekallday = [];
		if(day == 0) {
			WeekFirstDay = new Date(Nowdate.getTime() - 6 * 86400000);

		} else {
			WeekFirstDay = new Date(Nowdate.getTime() - (day - 1) * 86400000);
		}
		for(var i = 0; i < 5; i++) {
			var weekdate = new Date(WeekFirstDay.getTime() + i * 86400000);
			var M = Number(weekdate.getMonth()) + 1;
			if(M < 10) {
				M = "0" + M;
			};
			var getDate = weekdate.getDate();
			if(getDate < 10) {
				getDate = "0" + getDate;
			};
			weekallday.push(weekdate.getFullYear() + '-' + M + '-' + getDate)
		}

		return weekallday;
	},
	"lastshowWeekwhole": function(date) {
		var weekWhole = [];
		var firstweeking = new Date(date).getTime();
		var firstDay = new Date(firstweeking - 7 * 86400000);
		var lastDay = new Date(firstweeking - 86400000);
		weekWhole.push(firstDay, lastDay);
		return weekWhole;
	},
	"showsunday": function(date) {
		var sundaydetail;
		var firstweek = new Date(date).getTime();
		var sunday = new Date(firstweek + 6 * 86400000);
		var Month = sunday.getMonth() + 1;
		if(Month < 10) {
			Month = '0' + Month;
		};
		var riqi = sunday.getDate();
		if(riqi < 10) {
			riqi = '0' + riqi;
		};
		return sunday.getFullYear() + '-' + Month + '-' + riqi
	}

});

Date.prototype.Format = function(fmt) { //author: meizz 
	var o = {
		"M+": this.getMonth() + 1, //月份 
		"d+": this.getDate(), //日 
		"h+": this.getHours(), //小时 
		"m+": this.getMinutes(), //分 
		"s+": this.getSeconds(), //秒 
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
		"S": this.getMilliseconds() //毫秒 
	};
	if(/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for(var k in o)
		if(new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}