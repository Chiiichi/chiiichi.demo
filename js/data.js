var data=[];
var dataStr = '1、花石楼<br>\
<br>\
内容：花石楼<br>\
<br>\
<br>\
2、花石楼黑白<br>\
<br>\
内容：花石楼黑白<br>\
<br>\
<br>\
3、教堂<br>\
<br>\
内容：教堂<br>\
<br>\
<br>\
4、屋顶<br>\
<br>\
内容：屋顶<br>\
<br>\
<br>\
5、花石楼<br>\
<br>\
内容：花石楼<br>\
<br>\
<br>\
6、花石楼黑白<br>\
<br>\
内容：花石楼黑白<br>\
<br>\
<br>\
7、屋顶<br>\
<br>\
内容：教堂<br>\
<br>\
<br>\
8、教堂<br>\
<br>\
内容：屋顶<br>\
';
var d =dataStr.split('<br><br><br>');
for (var i = 0; i < d.length; i++) {
	var c = d[i].split('<br><br>');
	data.push({
		img: c[0].replace('、','')+'.jpg',
		caption: c[0].split('、')[1],
		desc : c[1]
	});
	console.log(c[0].replace('、','')+'.jpg');
};