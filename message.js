let arr1 = [
    {
        id:0,
        img:'./tx1.jpeg',
        name:'扭转乾坤',
        address:'温州',
        time:'10:06',
        say:"决赛哦你带去我的青蛙",
    },
    {
        id:1,
        img:'./tx2.jpg',
        name:'斗罗大陆',
        address:'广州',
        time:'09:01',
        say:"wdskladwqmkldq",
    },
    {
        id:2,
        img:'./tx2.jpg',
        name:'吞噬星空',
        address:'惠州',
        time:'22:18',
        say:"我去就得切角121wq",
    },
]

let userComment = document.querySelector('.userComment');
for(let i = 0; i < arr1.length; i++){
    let div = document.createElement("div");
    let div1 = document.createElement("div");
    let div2 = document.createElement('div');
    let div3 = document.createElement("div");
    let span = document.createElement("span");
    let div4 = document.createElement("div");
    let div5 = document.createElement("div");
    let div6 = document.createElement("div");
    let img = document.createElement("img");
    let div7 = document.createElement("div");
    let div8 = document.createElement("div");
    let div9 = document.createElement("div");
    let div10 = document.createElement("div");
    let span2 = document.createElement("span");
    let p = document.createElement("p");
    let p1 = document.createElement("p");
    let i1 = document.createElement("i");
    let span3 = document.createElement("span");
    div.className = 'comment';
    div1.className = 'sanjiao';
    div2.className = 'smallSJ';
    div3.className = 'zhengfang';
    div4.className = 'plusSmall';
    div5.className = 'user';
    div6.className = 'userHeader';
    div7.className = 'userMessage';
    div8.className = 'username';
    div9.className = 'sayword';
    div10.className = 'huifu';
    i1.className = 'iconfont';
    p.className = 'name';
    p1.className = 'address';
    span.innerHTML = arr1[i].id;
    i1.innerHTML = '&#xe69f';
    span2.innerHTML = arr1[i].say;
    span3.innerHTML = '回复';
    img.src = arr1[i].img;
    p.innerHTML = arr1[i].name;
    p1.innerHTML = arr1[i].address+"&nbsp;&nbsp;"+arr1[i].time;
    userComment.appendChild(div);
    div.appendChild(div1);
    div1.appendChild(div2);
    div1.appendChild(div3);
    div3.appendChild(span);
    div3.appendChild(div4);
    div.appendChild(div5);
    div5.appendChild(div6);
    div6.appendChild(img);
    div5.appendChild(div7);
    div7.appendChild(div8);
    div8.appendChild(p);
    div8.appendChild(p1);
    div.appendChild(div9);
    div9.appendChild(span2);
    div9.appendChild(div10);
    div10.appendChild(i1);
    div10.appendChild(span3);
}