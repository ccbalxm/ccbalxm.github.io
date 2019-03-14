//函数自调用
(function() {
    var v3=document.getElementById("v3")
        v3.volume=0.5
        v3.playbackRate=1
        //找到图标的元素#btn3
 var btn3=document.getElementById("btn3")       

    //播放与暂停
    //获得当前视频状态
    // 1 当视频播放的时候，不显示播放图标
        v3.onplay=function(){
  btn3.style.display="none"
        }
    //1.1 当点击那个区域div时，显示此时应该显示状态，
    //并改变为点击后的状态

    //2 获取此时状态，当播放暂停时候，显示图标，
    v3.onpause=function(){
        btn3.style.display="block"
        btn3.src="img/pause.png"
              }
    //2.1 点击后改变图标，并开始播放


//以下是弹幕
    class Barrage {
        constructor(canvas) {
            //获取画布
            this.canvas = document.getElementById(canvas);
           //获得元素距离参数
            let rect = this.canvas.getBoundingClientRect();
            this.w = rect.right - rect.left;
            this.h = rect.bottom - rect.top;
            //获取画笔
            this.ctx = this.canvas.getContext('2d');
            this.ctx.font = '20px Microsoft YaHei';
            this.barrageList = [];
        }

        //添加弹幕列表
        shoot(value) {
            let top = this.getTop();
            let color = this.getColor();
            let offset = this.getOffset();
            let width = Math.ceil(this.ctx.measureText(value).width);

            let barrage = {
                value: value,
                top: top,
                left: this.w,
                color: color,
                offset: offset,
                width: width
            }
            this.barrageList.push(barrage);
        }

        //开始绘制
        draw() {
            if (this.barrageList.length) {
                this.ctx.clearRect(0, 0, this.w, this.h);
                for (let i = 0; i < this.barrageList.length; i++) {
                    let b = this.barrageList[i];
                    if (b.left + b.width <= 0) {
                        this.barrageList.splice(i, 1);
                        i--;
                        continue;
                    }
                    b.left -= b.offset;
                    this.drawText(b);
                }
            }
            requestAnimationFrame(this.draw.bind(this));
        }

        //绘制文字
        drawText(barrage) {
            this.ctx.fillStyle = barrage.color;
            this.ctx.fillText(barrage.value, barrage.left, barrage.top);
        }

        //获取随机颜色
        getColor() {
            return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
        }

        //获取随机top
        getTop() {
            //canvas绘制文字x,y坐标是按文字左下角计算，预留30px
            return Math.floor(Math.random() * (this.h - 30)) + 30;
        }

        //获取偏移量
        getOffset() {
            return +(Math.random() * 4).toFixed(1) + 1;
        }

    }

    let barrage = new Barrage('canvas');
    barrage.draw();

    const textList = ['弹幕', '666', '233333333',
        'javascript', 'html', 'css', '前端框架', 'Vue', 'React',
        'Angular', '测试弹幕效果', '弹幕', '666', '233333333',
        'javascript', 'html', 'css', '前端框架', 'Vue', 'React',
        'Angular', '测试弹幕效果', '弹幕', '666', '233333333',
        'javascript', 'html', 'css', '前端框架', 'Vue', 'React',
        'Angular', '测试弹幕效果'
    ];

    textList.forEach((t) => {
        barrage.shoot(t);
    })

})();