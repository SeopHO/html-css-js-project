function imageSlide()
{
    let bar_plus = document.querySelector('.click-bar');
    let btn_plus = document.querySelector('.click-bar p');
    let trans_image = document.querySelector('.bg-image');
     
    let ckeck_click=true;

    btn_plus.addEventListener('click',function(event)
    {
        if(ckeck_click === true)
        {
            // trans_image.style.height='50vh';
            trans_image.classList.toggle('trans-image-off');
            bar_plus.classList.toggle('bar-trans-off');
            ckeck_click=false;
        }
        else if(ckeck_click === false)
        {
            // trans_image.style.height='100vh';
            trans_image.classList.toggle('trans-image-on');
            bar_plus.classList.toggle('bar-trans-on');
            ckeck_click=true;
        }
    });
    
    // btn_plus.addEventListener('mouseover',function(event)
    // {
    //     let check=1;
    //     btn_plus.classList.add('trans_plus_1');

    // });
    
    // btn_plus.addEventListener('mouseout',function(event)
    // {
    //     let check=0;
    //     btn_plus.classList.add('trans_plus_2');

    // }); 
}
imageSlide();