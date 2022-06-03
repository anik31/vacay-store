import confetti from "canvas-confetti";

export function popper(){
    var end = Date.now() + (1 * 1000);

    var colors = ['#bb0000',"#FDE68A"];

    (function frame() {
    confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
    });
    confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
    });

    if (Date.now() < end) {
        requestAnimationFrame(frame);
    }
    }());
};
