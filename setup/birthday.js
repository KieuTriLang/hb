var birthday=document.querySelector(".birthday");
var no_gift=document.querySelector(".no_gift");
var html=document.getElementsByTagName("html");
var test='<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="./setup/Hbirthday.css"><link rel="preconnect" href="https://fonts.gstatic.com"><link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"><title>Happy Birthday</title></head><body><div class="container">    <div class="decor"></div>    <div class="content">        <h1 class="greeting"> </h1>        <div class="birthday_cake"></div>        <p class="message"></p>    </div></div><script src="../setup/birthday.js"></script></body>'

birthday.onclick=()=>{
    do{
        alert("Nhập đúng như ví dụ nha các bạn!!");
        day=prompt('Nhập ngày sinh của bạn (vd:01)');
        month=prompt('Nhập tháng sinh của bạn (vd:01):');
        year=prompt('Nhập năm sinh của bạn (vd:2002):');
        gender=prompt('Nhập giới tính của bạn (Nam/Nữ):');
        check_input();
    }while(day==''||month==''||year==''||year!='2002'||gender==''||(gender!='Nam'&&gender!='Nữ'));
    birthday.innerHTML="Completed!!!";
    birthday.disabled=true;
}
function check_input(){
    if(day==''||month==''||year==''||gender==''){
        alert("Thiếu thông tin");
    }else if(year!='2002'){
        alert("You are an imposter");
    }else if(gender!='Nam'&&gender!='Nữ'){
        alert("Tử tế bạn ơi");
    }
}
no_gift.onclick=()=>{
    html[0].innerHTML=test;
    act();
}
var day,month,year,gender;
var data_members=[
    {name:'Nguyễn Thị Phương Anh',   gender:'Nữ', day:'22',month:'06'},
    {name:'Vũ Thị Anh',              gender:'Nữ', day:'27',month:'06'},
    {name:'Kiều Đức Duy',            gender:'Nam',day:'02',month:'06'},
    {name:'Nguyễn Xuân Điền',        gender:'Nam',day:'17',month:'02'},
    {name:'Trịnh Thu Hải',           gender:'Nữ', day:'12',month:'09'},
    {name:'Khuất Thu Hoa',           gender:'Nữ', day:'17',month:'09'},
    {name:'Kiều Thị Phương Hoa',     gender:'Nữ', day:'20',month:'09'},
    {name:'Vũ Thị Thu Hoài',         gender:'Nữ', day:'02',month:'05'},
    {name:'Nguyễn Thị Thu Huyền A',  gender:'Nữ', day:'06',month:'09'},
    {name:'Nguyễn Thị Thu Huyền B',  gender:'Nữ', day:'21',month:'09'},
    {name:'Khuất Thị Lan Hương',     gender:'Nữ', day:'23',month:'08'},
    {name:'Tống Quang Khải',         gender:'Nam',day:'20',month:'02'},
    {name:'Nguyễn Bích Lệ',          gender:'Nữ', day:'14',month:'09'},
    {name:'Nguyễn Thị Liên',         gender:'Nữ', day:'06',month:'09'},
    {name:'Đặng Thùy Linh',          gender:'Nữ', day:'11',month:'09'},
    {name:'Kiều Diệu Linh',          gender:'Nữ', day:'19',month:'02'},
    {name:'Nguyễn Thị Linh',         gender:'Nữ', day:'11',month:'04'},
    {name:'Nguyễn Thị Quỳnh Linh',   gender:'Nữ', day:'10',month:'05'},
    {name:'Nguyễn Đức Mạnh',         gender:'Nam',day:'13',month:'09'},
    {name:'Nguyễn Đức Công Minh',    gender:'Nam',day:'01',month:'01'},
    {name:'Nguyễn Hoàng Minh',       gender:'Nam',day:'19',month:'10'},
    {name:'Nguyễn Xuân Nam',         gender:'Nam',day:'01',month:'02'},
    {name:'Đỗ Bích Ngọc',            gender:'Nữ', day:'28',month:'03'},
    {name:'Nguyễn Thị Nhung',        gender:'Nữ', day:'02',month:'01'},
    {name:'Nguyễn Thị Phương Nhung', gender:'Nữ', day:'23',month:'10'},
    {name:'Khuất Thị Huyền Sang',    gender:'Nữ', day:'02',month:'03'},
    {name:'Nguyễn Thị Phương Thanh', gender:'Nữ', day:'13',month:'09'},
    {name:'Nguyễn Thị Thảo',         gender:'Nữ', day:'04',month:'05'},
    {name:'Nguyễn Mạnh Tiến',        gender:'Nam',day:'07',month:'12'},
    {name:'Kiều Thị Thu Trang',      gender:'Nữ', day:'29',month:'12'},
    {name:'Phạm Xuân Trường',        gender:'Nam',day:'19',month:'07'},
    {name:'Nguyễn Thu Uyên',         gender:'Nữ', day:'07',month:'11'},
    {name:'Khuất Thị Xuân',          gender:'Nữ', day:'23',month:'03'},
    {name:'Kiều Hà Nội',             gender:'Nam',day:'11',month:'06'},
    {name:'Nguyễn Thị Mỹ Hoa',       gender:'Nữ', day:'23',month:'11'}
];

var member=[];


for(var i=0;i<data_members.length;i++){
    if(data_members[i].day==day && data_members[i].month==month){
        member.push(data_members[i]);
    }
}
// tạo random trong khoảng 2 số
function random(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
// hàm di mouseover, mouseout
function over(obj,name,code){
    obj.setAttribute("src","./img/Members/"+name+"/img"+random(1,6)+".jpg");
    if(code==1){
        obj.style.transform="scale(10,10)";
    }if(code==2){
        obj.style.transform="scale(6,6)";
    }if(code=3){
        obj.style.transform="scale(2.3,2.3)";
    }else{
        obj.style.transform="scale(7,7)";
    }
    obj.style.animationPlayState="paused";
}
function imageName(imageCode){
    if(imageCode==1){
        return "spring";
    }else if(imageCode==2){
        return "summer";
    }else if(imageCode==3){
        return "fall";
    }else{
        return "winter";
    }
}
function out(obj,imageCode,x,y){
    obj.setAttribute("src","./decor/"+imageName(imageCode)+random(x,y)+".png");
    obj.style.transform="scale(1,1)";
    obj.style.animationPlayState="running";
}

//decor follow season 105 -158
function spring_decor(decor){
    decor.innerHTML='';
    for(var i=0;i<50;i++){
    decor.innerHTML+='<img src="./decor/spring'+random(1,3)+'.png" alt="" class="spring" onmouseover="over(this,check_birthday())" onmouseout="out(this,1,1,3)"> <br>';
        var spring=document.querySelectorAll(".spring");
        spring[i].style.left=random(1,1200) +'px';
        spring[i].style.width=random(25,30) +'px';
        spring[i].style.height=spring[i].style.width +'px';
        spring[i].style.animationDelay=random(1,15) +'s';
        spring[i].style.animationDuration=random(10,20) +'s';
        spring[i].style.animationName='drop' + random(1,3);
    }
}
function summer_decor(decor){
    decor.innerHTML='';
    for(var i=0;i<40;i++){
        decor.innerHTML+='<img src="./decor/summer'+random(1,4)+'.png" alt="" class="summer" onmouseover="over(this,check_birthday())" onmouseout="out(this,2,1,2)"> <br>';
        var summer=document.querySelectorAll(".summer");
        summer[i].style.left=random(1,1200) +'px';
        summer[i].style.width=random(25,40) +'px';
        summer[i].style.height=summer[i].style.width +'px';
        summer[i].style.animationDelay=random(1,11) +'s';
        summer[i].style.animationDuration=random(10,20) +'s';
        summer[i].style.animationName='drop' + random(1,3);
    }
}
function fall_decor(decor){
    decor.innerHTML='';
    for(var i=0;i<25;i++){
        decor.innerHTML+='<img src="./decor/fall'+random(1,4)+'.png" alt="" class="fall" onmouseover="over(this,check_birthday())" onmouseout="out(this,3,1,4)"> <br>';
        var fall=document.querySelectorAll(".fall");
        fall[i].style.left=random(1,1200) +'px';
        fall[i].style.width=random(75,77) +'px';
        fall[i].style.height=fall[i].style.width +'px';
        fall[i].style.animationDelay=random(1,8) +'s';
        fall[i].style.animationDuration=random(10,20) +'s';
        fall[i].style.animationName='drop' + random(1,3);
    }
}

function winter_decor(decor){
    decor.innerHTML='';
    for(var i=0;i<40;i++){
        decor.innerHTML+='<img src="./decor/winter'+random(1,4)+'.png" alt="" class="winter" onmouseover="over(this,check_birthday())" onmouseout="out(this,4,1,4)"> <br>';
        var winter=document.querySelectorAll(".winter");
        winter[i].style.left=random(1,1200) +'px';
        winter[i].style.width=random(20,40) +'px';
        winter[i].style.height=winter[i].style.width +'px';
        winter[i].style.animationDelay=random(1,5) +'s';
        winter[i].style.animationDuration=random(8,20) +'s';
    }
}

function check_birthday(){
    var name='';
    for(var i=0;i<data_members.length;i++){
        if(data_members[i].day==day && data_members[i].month==month && data_members[i].gender==gender){
            name+=data_members[i].name;
        }
    }
    return name;
}

function act(){
    var decor=document.querySelector(".decor");
    var greeting=document.querySelector(".greeting");
    var birthday_cake=document.querySelector(".birthday_cake");
    var message=document.querySelector(".message");
    greeting.innerHTML+='Happy Birthday <br>' + check_birthday();
    setInterval(a13,4000);
    var a13code=1;
    birthday_cake.innerHTML='<img src="./img/A13/img'+ a13code +'.jpg" alt="" >';
    function a13(){
        a13code++;
        if(a13code>5){
            a13code=1;
        }
        birthday_cake.innerHTML='<img src="./img/A13/img'+ a13code +'.jpg" alt="" >';
    }
    switch (month){
        case '01':
        case '02':
        case '03':
            spring_decor(decor);
            break;
        case '04':
        case '05':
        case '06':
            summer_decor(decor);
            break;
        case '07':
        case '08':
        case '09':
            fall_decor(decor);
            break;
        case '10':
        case '11':
        case '12':
            winter_decor(decor);
            break;
    }
    var for_male='Thay mặt A13 K52-TT Chúc mừng sinh nhật ' +check_birthday()+'. Thêm tuổi mới ngày càng khỏe mạnh, thông minh, đẹp trai, chăm chỉ, năng động. Thêm tuổi mới có nhiều hoài bão, ước mơ, luôn là chính mình. Có thêm nhiều người bạn chất lượng. Nhớ ra trường nha người anh em. Sau này dù giàu hay nghèo, thất bại hay thành công, giản dị hay xa hoa thì hãy luôn nhớ rằng đằng sau vẫn luôn có gia đình, người thân, bạn bè. Đó là lời chúc nho nhỏ của mình, quà mình không biết tặng gì nên làm cái này làm quà. Và cuối cùng ......HAPPY BIRTHDAY!!';
    var for_female='Thay mặt A13 K52-TT Chúc mừng sinh nhật '+check_birthday()+'. Thêm tuổi mới ngày càng khỏe mạnh, thông minh, xinh gái, chăm chỉ, năng động. Thêm tuổi mới thêm nhiều ước mơ, hoài bão, luôn sống hết mình. Có thêm nhiều người bạn chất lượng. Nhớ ra trường nha.Sau này dù giàu hay nghèo, thất bại hay thành công, giản dị hay xa hoa thì hãy luôn nhớ rằng đằng sau vẫn luôn có gia đình, người thân, bạn bè. Đó là lời chúc nho nhỏ của mình, quà mình không biết tặng gì nên làm cái này làm quà. Và cuối cùng ......HAPPY BIRTHDAY!!'
    var hb='HAPPY BIRTHDAY!!';
    var index=0;
    var id=setInterval(type_message,50);
    function type_message(){
        if(gender=='Nam'){
            message.innerHTML+=for_male[index];
            index++;
            if(index==for_male.length-hb.length){
                message.innerHTML+= '<br>';
            }
            if(index==for_male.length){
                clearInterval(id);
            }
        }else{
            message.innerHTML+=for_female[index];
            index++;
            if(index==for_female.length-hb.length){
                message.innerHTML+= '<br>';
            }
            if(index==for_female.length){
                clearInterval(id);
            }
        }
    }
}
