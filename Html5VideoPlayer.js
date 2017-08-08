/*
html5版的视频播放器
@author zsdroid
*/
var Html5VideoPlayer = function(config)
{
	this.isUseBlob = !(config.isUseBlob !== undefined && config.isUseBlob === false);
	this.vWidth = config.vWidth || 200;
	this.vHeight = config.vHeight || 100;
	this.vSrc = config.vSrc || '';
	this.vZIndex = config.vZIndex || 100;
	this.vPoster = config.vPoster || "";
	this.vShowLightSwitch = config.vShowLightSwitch != undefined ? config.vShowLightSwitch : true;
	this.vHaveLight =
	{
		onText:"开灯",
		onIcon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAABh0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjEwcrIlkgAAAnlJREFUOE9tk01oWkEQx1ftoemlXyAEcioNtBGhPQZKEHrPJSiigpDY0gTUKhT1JFERcggGT1WQ6KHaSyu1KthopfEjJlVbjKgFBTWCX4nEg+hBfZ19VSu8LPzYeTM7/5l9u0sjCALh4XK5yJlOpyMajfYEzKfj8fgugEajUXc4HOb7/X5hMBiQ65RKJTkjLIBxOp0YGgit+Xw+Rblcdl9eXkYrlUook8l8BP9bs9m8tr+/TwNmeTPDbrcjh8Ox4vF4lL1e70+n08k2m82f2Wz2WyQS8V9cXJzZbDaFTqdb0Wq1VAGr1YosFgsXKnuvr6/z7XY71Wq1kvl8PnR0dPT59PQ0kMvl3Gq1mqtSqagCBwcHyGQySbrdbhYSyeRarRZPpVL+QCDwKRaLecB3JpPJXkmlUqqAwWBAer1+a1L1O66Mk4PBoBt3kEwm/dBVXCKRbMGgCmg0GgTtrR8fHzvS6fQPnIQr4zmRSHwtlUpRiH0QiUTrQqGQKqBQKJBcLl8CkZ1qtXoSj8d90Wj0C1T2FQqFEPzQs+3t7R0ej7cE3CwA+0Obm5urRqNRAwkZ2EawWCyGrq6usru7uxoul7uKk28UEAgEaAKdz+dvhMNhJxzdCXQTwzYkbwB0AGGm92dmTAOTeXlvb+9do9H4Xa/Xf2Eb/MvzaygCLBaLVJ6wIBaL38CJnOOtYBv8C9M4k8mkdvDvYiPE4XBIETab/drr9RJwNwgGg/EeF8BMB6WDWWQiggXgBxJut5sUmI/Pv6H/rcBDhMBt4D6wiAXg/InDw8OpwCL4HwB38KO9qQMGBO4Bj4Bn8KRfAAHgHL5fAs+Bx8BD4NZU4C9hkBlGyPjr5wAAAABJRU5ErkJggg==",
		offText:"关灯",
		offIcon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAm5JREFUeNp0U81vElEQf+/tB9sFSiFCKSTWiolA7cdBYzTRYLQ3z8ZrD5oYD3r10Hjy4B/QkyZ60IMfJxOT2sZmQ4ipacTSSAmliBzED6CUApWF/XAesC00dJLJzM7M7/dmdt7Duq4jKq8eYmQIxsgPJgApO82C3QWNKypKqGq7ZvZxG8eiXqEsl23u4Nnx0J2QzTPqrddzeuln5lcy8jaynUt7IL9MOQ0AMRxVQ0jTUdA2cub8ldlndx3HA+MIq2JdzvGqkPVfuPng9qD79EXoYqqpHJy4T6ABAbQ3NXnt3lVVqxFNazRpgwwjIEUpK6WdFTw9cysEBOcU7YBgfwSlPduxIY/PpygVGbh1AGqy/AfImxgIVYd3bLShoGFdP5qAbcgFpba3qWJMWuBqdYslxEQ4bggjnWlCX6QvQWeufDYeSQ56yXS1mvxHT2YYnphMHmw2n+R+bKwlgeB3918n3R0AyaeV9y+/mgcm6jzv5AXBzYiij5jNpxgTd6K+/GY+Bj9b6nTbS4Da+07vFIufl17ML7iHrwtWa5CI4hgBa3r35NHibikfgZrNvh2UqwhV9lpdLKbj0fT3b/F1nndxLGthtmJf1jOJVQpcOHRveu9BR1U4JZxY/bgBYI5hLDz1oSRMy44kkGI98VQ2GZUxZjAhLKY+jRnJ5x/6bEFaa+uNGRdyOp21cJRkJiMDrlQqheaeyvZLE6hm1HXL4beAXi/9RaFQELwiCgT8qNHgUT9gvy1QXwC1S5I0QgOFQgGVy3kjT2MOULEbh43njGFgMNZO0SB8W8DOgXqg5j7YbdAKaIkuDWKtq/dfgAEARTYbucps2QYAAAAASUVORK5CYII=",
	};
};
Html5VideoPlayer.prototype.CallBack = function(vCallBack)
{
	this.vCallBack = vCallBack;
};
//全屏
var FullScreen = function(video)
{
	var fullscreen = false;
	video.addEventListener('dblclick',function()
	{
		if(!fullscreen)
		{
			if (video.requestFullscreen)
			{
				video.requestFullscreen();
			}
			//FireFox
			else if (video.mozRequestFullScreen)
			{
				video.mozRequestFullScreen();
			}
			//Chrome等
			else if (video.webkitRequestFullScreen)
			{
				video.webkitRequestFullScreen();
			}
			//IE11
			else if (video.msRequestFullscreen)
			{
				video.msRequestFullscreen();
			}
		}
		else
		{
			if (document.exitFullscreen)
			{
				document.exitFullscreen();
			}
			else if (document.mozCancelFullScreen)
			{
				document.mozCancelFullScreen();
			}
			else if (document.webkitCancelFullScreen)
			{
				document.webkitCancelFullScreen();
			}
			else if (document.msExitFullscreen)
			{
				document.msExitFullscreen();
			}
		}
		fullscreen = !fullscreen;
	},false);
};
//开关灯
var LightSwitch = function(that,videoDiv)
{
	//关灯效果
	var shadow = document.createElement('div');
	shadow.className = 'shadow';
	shadow.style.display = "none";
	shadow.style['z-index'] = that.vZIndex;
	videoDiv.appendChild(shadow);
	
	//开/关灯按钮
	var closeLight = '<img src="' + that.vHaveLight.offIcon + '"/>' + that.vHaveLight.offText;
	var openLight = '<img src="' + that.vHaveLight.onIcon + '"/>' + that.vHaveLight.onText;
	var light = document.createElement('span');
	light.id = "light_" + new Date().getTime();
	light.className = "close-light";
	light.style.top = 20;
	light.style.position = "absolute";
	light.style['z-index'] = that.vZIndex + 2;
	light.style.left = that.vWidth;
	light.innerHTML = closeLight;
	//开/关灯按钮点击事件
	light.addEventListener('click',function()
		{
			if(this.className == "close-light")
			{
				//关灯
				this.innerHTML = openLight;
				this.className = "open-light";
				shadow.style.display = "block";
			}
			else
			{
				//开灯
				this.innerHTML = closeLight;
				this.className = "close-light";
				shadow.style.display = "none";
			}
		});
	videoDiv.appendChild(light);
};
//使用blob
Html5VideoPlayer.prototype.blob = function(video,src)
{
	var xhr = new XMLHttpRequest();
	xhr.open('GET', src, true);
	xhr.responseType = 'blob';
	xhr.onload = function(e)
	{
		if (this.status == 200)
		{
			var blob = this.response;
			video.src = URL.createObjectURL(blob);
		}
	};
	xhr.send(null);
};
Html5VideoPlayer.prototype.Create = function(querySelector)
{
	this.videoPlayerQuerySelector = document.querySelector(querySelector);
	//div
	var videoDiv = document.createElement('div');
	videoDiv.id = "Html5VideoPlayer_" + new Date().getTime();
	this.videoPlayerQuerySelector.appendChild(videoDiv);
	
	//视频控件
	var video = document.createElement('video');
	video.id = "video_" + new Date().getTime();
	video.innerHTML = "您的浏览器不支持html5 video!";
	video.autoplay = 1;
	video.loop = 1;
	video.controls = 1;
	
	//自定义右键
	this.contextmenu(videoDiv,video);
	
	video.style.position = "absolute";
	video.style['z-index'] = this.vZIndex + 2;
	if(this.vPoster != '')
	{
		video.poster = this.vPoster;
	}
	video.width = this.vWidth;
	video.height = this.vHeight;
	
	if(this.isUseBlob)
	{
		this.blob(video,this.vSrc);
	}
	else
	{
		video.src = this.vSrc;
	}
	video.style['object-fit'] = 'fill';
	videoDiv.appendChild(video);
	
	//双击全屏
	FullScreen(video);
	//开/关灯
	this.vShowLightSwitch && LightSwitch(this,videoDiv);
	//键盘控制
	document.addEventListener("keydown",function(event)
		{
			var currentTime = CallbackReturnObj.GetCurrentTime();
			var currentVolume = CallbackReturnObj.GetVolume();
			switch(event.keyCode)
			{
				//左键
				case 37:
					returnObj.SetCurrentTime(currentTime - 5);
					break;
				//右键
				case 39:
					returnObj.SetCurrentTime(currentTime + 5);
					break;
				//上键
				case 38:
					returnObj.SetVolume(currentVolume + 0.1);
					break;
				//下键
				case 40:
					returnObj.SetVolume(currentVolume - 0.1);
					break;
				//空格键
				case 32:
					CallbackReturnObj.GetInfo("paused") ? returnObj.SetPlay() : returnObj.SetPause();
					break;
			}
		},false);
	if(video.error != null)
	{
		var errorMsg =
		{
			1:'用户终止',
			2:'网络错误',
			3:'解码错误',
			4:'URL无效',
		};
		console.log(video.error.code,errorMsg[video.error.code]);
		return;
	}
	
	var that = this;
	//回调
	//用户页面操作 --(事件监听)--> Html5VideoPlayer --(事件回调)--> 页面开发者
	var CallbackReturnObj = 
	{
		//获取信息
		GetInfo : function(key)
		{
			key = key || null
			var info = 
			{
				paused		:video.paused,
				ended		:video.ended,
				duration	:video.duration,
				muted		:video.muted,
				currentTime	:video.currentTime,
				volume		:video.volume,
			};
			if(key != null && info[key] != undefined)
			{
				return info[key];
			}
			return info;
		},
		//获取音量
		GetVolume : function()
		{
			return video.muted ? 0 : video.volume;
		},
		//获取当前播放的时间
		GetCurrentTime : function()
		{
			return video.currentTime;
		},
	};
	var videoEventCallback = function(e)
	{
		video.addEventListener(e,function()
		{
			if(that.vCallBack != undefined && that.vCallBack[e] != undefined)
			{
				that.vCallBack[e].call(CallbackReturnObj);
			}
		},false);
	}
	videoEventCallback("loadstart"); //客户端开始请求数据
	videoEventCallback("suspend"); //延迟下载
	videoEventCallback("abort"); //客户端主动终止下载
	videoEventCallback("progress"); //客户端正在请求数据
	videoEventCallback("error"); //请求数据时遇到错误
	videoEventCallback("stalled"); //网速失速
	videoEventCallback("play"); //play()和autoplay开始播放时触发
	videoEventCallback("pause"); //pause()触发
	videoEventCallback("loadedmetadata"); //成功获取资源长度
	videoEventCallback("waiting"); //等待数据，并非错误
	videoEventCallback("playing"); //开始回放
	videoEventCallback("canplay"); //可以播放，但中途可能因为加载而暂停
	videoEventCallback("canplaythrough"); //可以播放，歌曲全部加载完毕
	videoEventCallback("seeking"); //寻找中
	videoEventCallback("seeked"); //寻找完毕
	videoEventCallback("timeupdate"); //播放时间改变
	videoEventCallback("ended"); //播放结束
	videoEventCallback("ratechange"); //播放速率改变
	videoEventCallback("durationchange"); //资源长度改变
	videoEventCallback("volumechange"); //volume属性(音量)被改变或muted属性(静音)被改变
	
	//返回对象
	//页面开发者 --(执行Html5VideoPlayer的返回对象)--> Html5VideoPlayer --(设置video对象)--> 用户页面操作
	var returnObj = 
	{
		//设置当前播放的时间
		SetCurrentTime : function(time)
		{
			video.currentTime = time || 0;
		},
		//设置音量
		SetVolume : function(volume)
		{
			video.volume = volume || 0;
		},
		//设置静音
		SetMuted : function(muted)
		{
			video.muted = muted || true;
		},
		//设置暂停
		SetPause : function()
		{
			video.pause();
		},
		//设置播放
		SetPlay : function()
		{
			video.play();
		},
	};
	return returnObj;
};

var bindEvent = function(elem,eventType,callback)
{
	callback = callback || function(){};
	var ieType = ["on" + eventType];
	if(ieType in elem)
	{
		elem[ieType] = callback;
	}
	else if("attachEvent" in elem)
	{
		elem.attachEvent(ieType,callback);
	}
	else
	{
		elem.addEventListener(eventType,callback,false);
	}
}
var menu_i = 0;
var addMenu = function(contextmenu,html,callback,event)
{
	event = event || 'click';
	var menu = document.createElement("div");
	menu.className = 'menu';
	menu.dataset['menu_id'] = menu_i++;
	menu.innerHTML = html;
	contextmenu.appendChild(menu);
	bindEvent(menu,event,callback);
	return menu;
};
//右键菜单
Html5VideoPlayer.prototype.contextmenu = function(videoDiv,video)
{
	//自定义菜单
	var contextmenu = document.createElement("div");
	contextmenu.className = "contextmenu";
	contextmenu.style.display = "none";
	contextmenu.style['z-index'] = this.vZIndex + 3;
	videoDiv.appendChild(contextmenu);
	
	//打开右键菜单
	bindEvent(video,"contextmenu",function(ev)
		{
			ev = ev || window.event;
			if(ev.button == 2)
			{
				contextmenu.style.left = ev.clientX +"px";
				contextmenu.style.top = ev.clientY +"px";
				contextmenu.style.display = "block";
			}
			//阻止原生右键
			return false;
		});
	//关闭右键菜单
	bindEvent(document,"mouseup",function()
		{
			contextmenu.style.display = "none";
		});
    
	addMenu(contextmenu,'about',function()
		{
			addMenu(contextmenu,'github',function()
			{
				window.open('https://github.com/zhusaidong/Html5VideoPlayer');
			});
		},'mouseover');
	addMenu(contextmenu,'github',function()
		{
			window.open('https://github.com/zhusaidong/Html5VideoPlayer');
		});
	
	//test
	for(var i = 0; i < 10; i++)
	{
		addMenu(contextmenu,'contextmenu' + (i + 1),function()
			{
				alert('developed by zsdroid');
			});
	}
};
