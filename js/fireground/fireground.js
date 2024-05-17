document.addEventListener('DOMContentLoaded', function () {
    // 现有的代码
    const exitImage = document.querySelector('.exit-clickable');
    const windowImage = document.querySelector('.window-clickable');

    exitImage.addEventListener('click', function () {
        alert('Exit clicked!');
    });

    windowImage.addEventListener('click', function () {
        alert('Window clicked!');
    });

    // 鼠标点击事件
    exitImage.addEventListener('mousedown', function () {
        alert('Exit clicked by mouse!');
    });

    windowImage.addEventListener('mousedown', function () {
        alert('Window clicked by mouse!');
    });

    // 触摸事件
    exitImage.addEventListener('touchstart', function () {
        alert('Exit touched!');
    });

    windowImage.addEventListener('touchstart', function () {
        alert('Window touched!');
    });

    // 保证相机瞄准时能触发
    const scene = document.querySelector('a-scene');
    scene.addEventListener('loaded', function () {
        exitImage.addEventListener('mouseenter', function () {
            console.log('Enter exit');
        });
        windowImage.addEventListener('mouseenter', function () {
            console.log('Enter window');
        });
    });

    // 倒计时功能
    let countdown = 90;
    const countdownElement = document.getElementById('countdown-timer');
    const fullScreenGif = document.getElementById('full-screen-gif');

    const timerInterval = setInterval(function() {
        countdown--;
        countdownElement.textContent = countdown;

        if (countdown <= 0) {
            clearInterval(timerInterval);
            fullScreenGif.style.display = 'flex';
        }
    }, 1000);
});
