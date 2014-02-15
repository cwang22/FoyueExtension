$(document).ready(function() {
	var url = "http://www.keyfc.net/bbs/tools/tudou.aspx";

	$("#encode").click(function() {
		var content = $("#content").val();
		$.post(url, {
			"orignalMsg" : encodeURIComponent(content),
			"action" : "Encode"
		}, function(data) {
			$("#content").val($(data).find("Message").text());
		});
	});

	$("#decode").click(function() {
		var content = $("#content").val();
		if (content.search(/[(佛曰：)(如是我闻：)]/) != -1) {
			$.post(url, {
				"orignalMsg" : encodeURIComponent(content),
				"action" : "Decode"
			}, function(data) {
				$("#content").val($(data).find("Message").text());
			});
		}
	});
});

