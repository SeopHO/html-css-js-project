const colors =["green","red","rgba(133,122,200)","#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function()
{
    const randNum_1 = getRandomNumber();
    const randNum_2 = getRandomNumber();
    const randNum_3 = getRandomNumber();

    const colorRgba = `rgba(${randNum_1},${randNum_2},${randNum_3})`;

    document.body.style.backgroundColor = colorRgba;
    color.textContent = colorRgba;
});

function getRandomNumber()
{
    return Math.floor(Math.random() * 255);
}
