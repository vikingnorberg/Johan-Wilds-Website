var r1;
var g1;
var b1;

var tempR;
var tempG;
var tempB;

var colorSet1 = [
    255,
    51,
    51
];

var colorSet2 = [
    58,
    35,
    220
];

var colorSet3 = [
    0,
    153,
    76
];

var colorSet = Math.floor(Math.random()*3);

if(colorSet === 0){
    r1 = colorSet1[0];
    g1 = colorSet1[1];
    b1 = colorSet1[2];
}

else if(colorSet === 1){
    r1 = colorSet2[0];
    g1 = colorSet2[1];
    b1 = colorSet2[2];
}

else{
    r1 = colorSet3[0];
    g1 = colorSet3[1];
    b1 = colorSet3[2];
}

const boxesAnimation = window.anime({
    targets: '.js-box',
    translateY: [150, 50],
    backgroundColor: (el, i, t) => {
        //   const r = 58 + (i * 12);
        //   const g = 35 + (i * 12);
        //   const b = 220;

        // const r = 204 + (i * 12);
        // const g = 255 + (i * 12);
        // const b = 255;    

        const r = r1 + (i * 12);
        const g = g1 + (i * 12); 
        const b = b1;

        const color = `rgb(${r}, ${g}, ${b})`;
        return color;
    },
    duration: 900,
    easing: 'easeOutElastic',
    elasticity: 500,
    delay: (el, i, t) => i * 20,
    loop: true,
    direction: 'alternate',
});