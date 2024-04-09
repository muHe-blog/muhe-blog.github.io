//禁止右键
document.oncontextmenu = function(event) {  
    event.preventDefault();  
    return false;  
};

// 监听按键
document.onkeydown = function () {
    // f12
    if (window.event && window.event.keyCode == 123) {
        event.keyCode = 0;
        event.returnValue = false;
    }
    // ctrl+shift+i
    if (window.event.ctrlKey && window.event.shiftKey && window.event.keyCode == 73) {
        event.keyCode = 0;
        event.returnValue = false;
    }
    // ctrl+s
    if (window.event.ctrlKey && window.event.keyCode == 83) {
        event.keyCode = 0;
        event.returnValue = false;
    }
     // ctrl+p
    if (window.event.ctrlKey && window.event.keyCode == 80) {
        event.keyCode = 0;
        event.returnValue = false;
    }
}

//禁止先打开控制台然后强行进入
function a() {
    alert("请关闭控制台后再访问本站！！！")
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
