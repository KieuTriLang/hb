var gift=document.querySelector(".gift");
var patient=0;
var index=0;
var mess_gift='Tôi sẽ cho bạn một món quà đáng tiếc là không phải bây giờ. Tương lai tôi sẽ tặng cho bạn một món quà bất ngờ. Nhớ chụp dòng này để làm bằng chứng. Thank you!';

function random(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}
gift.addEventListener("mouseover",()=>{
    patient++;
    gift.style.top=random(100,500) +'px';
    gift.style.left=random(100,1000) +'px';
    if(patient==100){
        var id=setInterval(big_gift,50);
        function big_gift(){
            var big_gift=document.querySelector(".big_gift");
            big_gift.innerHTML+= mess_gift[index];
            index++;
            if(index==mess_gift.length){
                clearInterval(id);
            }
        }
    }
});



