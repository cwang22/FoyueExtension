var script = document.createElement('script');
script.src = 'js/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

chrome.contextMenus.create({
	"title" : "佛易",
	"type" : "normal",
	"id" : "parent",
	"contexts" : ["selection"]
});

chrome.contextMenus.create({
	"title" : "解密",
	"type" : "normal",
	"id" : "Decode",
	"parentId" : "parent",
	"contexts" : ["selection"],
	"onclick" : getContent,
});

chrome.contextMenus.create({
	"title" : "加密",
	"type" : "normal",
	"id" : "Encode",
	"parentId" : "parent",
	"contexts" : ["selection"],
	"onclick" : getContent,
});

function getContent(info, tab) {
	var data = info.selectionText;
	var action = info.menuItemId;
	var url = "http://www.keyfc.net/bbs/tools/tudou.aspx";

	if (action == "Decode" && data.search(/[(佛曰：)(如是我闻：)]/) == -1) {
		return;
	}

	$.post(url, {
		"orignalMsg" : encodeURIComponent(data),
		"action" : action
	}, function(data) {
		prompt("结果：", $(data).find("Message").text());
	});
}

