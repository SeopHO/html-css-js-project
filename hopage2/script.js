let btn_plus = document.querySelector('.click-bar p');
let trans_image = document.querySelector('.bg-image');
 
let check=0;

btn_plus.addEventListener('click',function(event)
{
    trans_image.style.height='50vh';
});

btn_plus.addEventListener('mouseover',function(event)
{
    check=1;
    btn_plus.classList.toggle('trans_plus_1');
    console.log(check);
    
    
});

btn_plus.addEventListener('mouseout',function(event)
{
    check=0;
    btn_plus.classList.toggle('trans_plus_2');
    console.log(check);

});