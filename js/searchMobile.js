//页面加载读取上次TAB位置
$(document).ready(function() {
	var positionL = getCookie("positionTab");
	$(".searchchoose-wai").scrollLeft(positionL);
})
//点击清空文字按钮 情况搜索框文字
$(".top_search_close").on("click", function() {
	$(this).parents().find("#top_search_input").val("");
	$(this).hide();
})
$("#top_search_input").click(function() {
	$(".top_search_close").show();
	changeinput()
})
//搜索框有文字时 显示 清空文字按钮
function changeinput() {
	if($("#top_search_input").val() != "") {
		$(".top_search_close").show();
	} else {
		$(".top_search_close").hide();
	}
}
//页面顶部Tab分类选项切换
$(".search_tab").click(function() {
	$(this).addClass("choice").parent().siblings().children(".search_tab").removeClass("choice");
})

//点击存储当前TAB位置 并跳转页面
$(".tab_jump").on("click", function() {
	var sLeft = $(".searchchoose-wai").scrollLeft();
	setCookie("positionTab", sLeft);
	var jumpUrl = $(this).data("href");
	$(this).attr("href", jumpUrl);
})
//设置cookie值
function setCookie(name, value) {
	document.cookie = name + "=" + value + ";path=/";
}
//获取cookie值
function getCookie(name) {
	var arr = document.cookie.split("; ");
	for(var i = 0; i < arr.length; i++) {
		var arr2 = arr[i].split("=");
		if(arr2[0] == name) {
			return arr2[1];
		}
	}
	return "";
}