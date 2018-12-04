export function timeDess(time){
	var data=new Date().getTime();
	var decTime=data-time //以毫秒为单位
	var decDay=Math.floor(decTime/(1000 * 60 * 60 *24))//天数差
	var timeDate=new Date(time)
	if (decDay>1) {//现在时间 上午9:08
		let h=timeDate.getHours()
		let m=timeDate.getMinutes() + '' // 转化成字符串
		h= h>12 ? `下午${h -12}` : `上午${12}`	//判断自身是否大于小于12?如果大于12就是 :前段 否则就是:后面的那段
		m=returnDoubledate(m)
		return h+ ':'+m
	}else if (decDay === 1) {//昨天
		return '昨天'
	}else if (decDay > 1 && decDay <=5) {//星期几
		var week=timeDate.getDay()
		var weekArr = ['天', '一', '二', '三', '四', '五', '六']
		return `星期${weekArr[week]}`
	}else {
		//  月-日  07-02
    let M = returnDoubledate(timeDate.getMonth() + 1 + '')
    let d = returnDoubledate(timeDate.getDate() + '')
    return M + '-' + d
	}
}

//个位数加0,非个位不加0 //7 => 007  17 => 0017
function returnDoubledate(time){return ('00' + time).substr(time.length)}