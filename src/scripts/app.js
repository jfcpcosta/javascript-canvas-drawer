(function () {

    const canvas = document.querySelector('#paper');
    const ctx = canvas.getContext('2d');
    const pos = {
        x: 0,
        y: 0
    };

    function setPosition(event) {
        pos.x = event.clientX;
        pos.y = event.clientY;
    }

    function draw(event) {
        if (event.buttons !== 1) {
            return;
        }

        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'red';

        ctx.moveTo(pos.x, pos.y); // from
        setPosition(event);
        ctx.lineTo(pos.x, pos.y); // to

        ctx.stroke();
    }

    function resize() {
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    document.addEventListener('mousemove', draw);
    document.addEventListener('mousedown', setPosition);
    document.addEventListener('mouseenter', setPosition);

    resize();
})();