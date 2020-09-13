<script>
//运行时间
document.addEventListener('DOMContentLoaded', initLiveDay);
    function initLiveDay() {
        const birthTime = '2018/12/23 10:23:12';
        const template = (A, B, C, D) => `博客已成立 ${A}天 ${B}小时 ${C}分钟 ${D}秒.`;

        /* 锚点开始 */
        const container = footer.querySelector('.container');
        const p = document.createElement('p');
        container.insertBefore(p, container.firstElementChild);
        /* 锚点结束*/

        const msoad = 24 * 60 * 60 * 1000;
        const warp = n => n > 9 ? n : '0' + n;
        const toInt = n => warp(Math.floor(n));
        setInterval(() => {
            const lived = new Date() - new Date(birthTime);
            const days = lived / msoad;
            const intDays = toInt(days);
            const hours = (days - intDays) * 24;
            const intHours = toInt(hours);
            const minutes = (hours - intHours) * 60;
            const intMinutes = toInt(minutes);
            const seconds = (minutes - intMinutes) * 60;
            const intSeconds = toInt(seconds);
            p.innerHTML = template(intDays, intHours, intMinutes, intSeconds);
        }, 1000);
    }
</script>
