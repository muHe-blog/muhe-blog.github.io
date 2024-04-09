//禁止右键
document.oncontextmenu = new Function("event.returnValue=false;") //禁用右键

// 监听按键
document.onkeydown = function () {
    // f12
    if (window.event && window.event.keyCode == 123) {
        alert("F12被禁用");
        event.keyCode = 0;
        event.returnValue = false;
    }
    // ctrl+shift+i
    if (window.event.ctrlKey && window.event.shiftKey && window.event.keyCode == 73) {
        alert("ctrl+shift+i被禁用");
        event.keyCode = 0;
        event.returnValue = false;
    }
    // ctrl+s
    if (window.event.ctrlKey && window.event.keyCode == 83) {
        alert("ctrl+s被禁用");
        event.keyCode = 0;
        event.returnValue = false;
    }
     // ctrl+p
    if (window.event.ctrlKey && window.event.keyCode == 80) {
        alert("ctrl+p被禁用");
        event.keyCode = 0;
        event.returnValue = false;
    }
}

//禁止先打开控制台然后强行进入
function a() {
	// 这里我做的是跳转首页，可以根据实际需要进行其他限制
    var domain = window.location.host;// 获取当前域名
    window.location.href = "https://" + domain;
    return false;
}
if (window.outerHeight - window.innerHeight > 150) {
    a()
}
if (window.outerWidth - window.innerWidth > 150) {
    a()
}