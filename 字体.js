
	/*
	 * @name: 更换字体
	 * @Author: Sky
	 * @version: 0.2
	 * @description: 更换网页内容字体
	 * @include: *
	 * @createTime: 2020-6-7 18:00
	 * @updateTime: 2020-6-16 11:10
	 */
	(function(){const
	/*等号后的数表示选择的字体*/
	 id = 2,
	/* 0:阿里巴巴普惠体(Medium)
	   1:濑户字体简体
	   2:OPPO Sans(Medium)
	   3:方正楷体
	   4:方正书宋
	   5:资源圆体(Medium) */
	/*－－－－以下勿改－－－－*/
	 key = encodeURIComponent('更换字体:执行判断');
	 if(window[key] || navigator.connection.type != 'wifi'){return;}
	 try {
	  window[key] = true;
	  let fn;
	  switch(id){
	   case 0:fn = "AliPuHui";break;
	  case 1:fn = "NaihuSC";break;
	   case 2:fn = "OPPOSans";break;
	   case 3:fn = "fzKaiTi";break;
	   case 4:fn = "fzShuSong";break;
	   case 5:fn = "zyYuanTi";break;
	   default:fn = "error";
	  }
	  const css = document.createElement('link');
	  css.href = "data:text/css,@font-face{font-family:via-font;src:url('https://cdn.jsdelivr.net/gh/IlysvlVEizbr/via-font@0.2/"+fn+".woff2')}html,*{font-family:via-font!important}";
	  css.rel = 'stylesheet';
	  document.head.append(css);
	 } catch(err){console.log('更换字体：', er);}
	})();
	