const response=document.querySelector('p');
var check=0;
response.addEventListener('mouseover',function()
{
    check=1;
    console.log(check);
});
response.addEventListener('mouseout',function()
{
    check=0;
    console.log(check);
});

