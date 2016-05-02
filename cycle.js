$(document).ready(function () {
    function animateColors(i) {
        var val = 1 / 0.2 * (i) * 210;
        var col = 'hsla(' + val + ', 90%, 60%, 1)';
        $("#colorPanel").css({
            "background-color": col
        });
        i = (i < 180) ? i + 1 : 0;
        setTimeout(function () {
            animateColors(i)
        }, 2400);
    }
    animateColors(1);
});
