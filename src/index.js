
/*Make this a CSS Variable for Scroll animation*/
window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.scrollY / (document.body.offsetHeight - window.innerHeight));
}, false);

let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");


let count = 0;

setInterval(textIncrement,1000);

function textIncrement(){
    ctx.fillStyle = '#ffffff';
    ctx.fillText(count+"",count,count)

    count++;

    ctx.fillStyle = '#000000';
    ctx.fillText(count+"",count,count)
}