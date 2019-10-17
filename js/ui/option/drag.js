window.onload = function () {
    //获取元素
    var dvs = document.getElementsByClassName('dv');
    //全局记录活动的的dv
    var nowDv = null;

    for (let i = 0; i < dvs.length; i++) {
        let dv = dvs[i];

        var x = 0;
        var y = 0;
        var l = 0;
        var t = 0;
        var isDown = false;

        //局部:鼠标按下
        dv.onmousedown = function (e) {
            //写入活动Dv
            nowDv = dv;
            //获取x坐标和y坐标
            x = e.clientX;
            y = e.clientY;

            //获取左部和顶部的偏移量
            l = dv.offsetLeft;
            t = dv.offsetTop;
            //开关打开
            isDown = true;
            //设置样式  
            dv.style.cursor = 'move';
        }

        //局部:鼠标抬起
        dv.onmouseup = function (e) {
            //释放活动Dv
            nowDv = null;
            //开关关闭
            isDown = false;
            dv.style.cursor = 'default';

            //获取x和y
            let nx = e.clientX;
            let ny = e.clientY;
            //计算移动后的左偏移量和顶部的偏移量
            let nl = nx - (x - l);
            let nt = ny - (y - t);

            dv.style.left = nl + 'px';
            dv.style.top = nt + 'px';
        }
    }

    //全局:鼠标移动
    window.onmousemove = function (e) {
        if (nowDv == null)
            return;
        let dv = nowDv;
        if (isDown == false) {
            nowDv = null;//维护nowDv的释放
            return;
        }
        //获取x和y
        let nx = e.clientX;
        let ny = e.clientY;
        //计算移动后的左偏移量和顶部的偏移量
        let nl = nx - (x - l);
        let nt = ny - (y - t);

        dv.style.left = nl + 'px';
        dv.style.top = nt + 'px';
    }

    //全局:鼠标释放
    window.onmouseup = function (e) {
        if (nowDv == null)
            return;
        let dv = nowDv;
        //开关关闭
        isDown = false;
        dv.style.cursor = 'default';

        //获取x和y
        let nx = e.clientX;
        let ny = e.clientY;
        //计算移动后的左偏移量和顶部的偏移量
        let nl = nx - (x - l);
        let nt = ny - (y - t);

        dv.style.left = nl + 'px';
        dv.style.top = nt + 'px';
    }
}

