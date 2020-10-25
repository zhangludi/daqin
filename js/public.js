$(function() {

	//鍒楄〃璺宠浆椤甸潰
	$("#listClick,#listClick2,#listClick3,#listClick4,#listClick5,#listClick6").on("click", ">div", function() {
		var url = $(this).attr("data-url");
		if (url != "" && url) {
			location.href = url;
		}

	})

	//杩斿洖涓婁竴绾�
	$("#backBtn").click(function() {
		history.go(-1);
	})
})

function GetRequest() {
	var url = decodeURI(location.search); //鑾峰彇url涓�"?"绗﹀悗鐨勫瓧涓�
	var theRequest = new Object();
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
		for (var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
		}
	}
	return theRequest;
}