document.addEventListener('DOMContentLoaded', function () {
    const exitImage = document.querySelector('.exit-clickable');
    const windowImage = document.querySelector('.window-clickable');

    // A-Frame 事件監聽器
    exitImage.addEventListener('click', function () {
        alert('Exit clicked!');
        // 這裡添加點擊 exit 的邏輯
    });

    windowImage.addEventListener('click', function () {
        alert('Window clicked!');
        // 這裡添加點擊 window 的邏輯
    });

    // 鼠標點擊事件
    exitImage.addEventListener('mousedown', function () {
        alert('Exit clicked by mouse!');
    });

    windowImage.addEventListener('mousedown', function () {
        alert('Window clicked by mouse!');
    });

    // 觸摸事件
    exitImage.addEventListener('touchstart', function () {
        alert('Exit touched!');
    });

    windowImage.addEventListener('touchstart', function () {
        alert('Window touched!');
    });

    // 為保證相機瞄準時能觸發
    const scene = document.querySelector('a-scene');
    scene.addEventListener('loaded', function () {
        exitImage.addEventListener('mouseenter', function () {
            console.log('Enter exit');
        });
        windowImage.addEventListener('mouseenter', function () {
            console.log('Enter window');
        });
    });

    // 觸摸結束事件
    exitImage.addEventListener('touchend', function () {
        alert('Exit touchend!');
    });

    windowImage.addEventListener('touchend', function () {
        alert('Window touchend!');
    });

    // 添加移動設備的點擊事件
    scene.addEventListener('click', function (event) {
        const clickedElement = event.target;

        if (clickedElement.classList.contains('exit-clickable')) {
            alert('Exit clicked!');
        }

        if (clickedElement.classList.contains('window-clickable')) {
            alert('Window clicked!');
        }
    });
});
