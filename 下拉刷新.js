/*
		 * @name: 下拉刷新
		 * @Author: Sky
		 * @version: 1.6
		 * @description: 位于页面顶端时下拉刷新
		 * @include: *
		 * @createTime: 2020-3-6 01:00
		 * @updateTime: 2020-6-4 20:30
		 */
		(function() {
			const
				/*等号后的数表示最小触发下拉距离*/
				min_dY = 300,
				/*－－－－以下勿改－－－－*/
				key = encodeURIComponent('下拉刷新:执行判断');
			if (window[key]) {
				return;
			}
			try {
				window[key] = true;
				let strtX, strtY = 0,
					rchTp, onePt = false;
				document.addEventListener('touchstart', function(e) {
					if (onePt) {
						rchTp = false;
					} /*超过一点触碰时不刷新*/
					else {
						onePt = true;
						rchTp = (document.body.scrollTop || document.documentElement.scrollTop) < 50;
						strtX = e.touches[0].pageX;
						strtY = e.touches[0].pageY;
					}
				}, {
					'passive': true
				});
				document.addEventListener('touchend', function(e) {
					if (rchTp) {
						const dY = Math.floor(e.changedTouches[0].pageY - strtY);
						if (dY > min_dY && Math.abs(e.changedTouches[0].pageX - strtX) < (0.4 * dY)) {
							location.reload();
						}
						rchTp = false;
					}
					onePt = false;
				}, {
					'passive': true,
					'capture': true
				});
			} catch (err) {
				console.log('下拉刷新：', err);
			}
		})();