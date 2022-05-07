const temp = new Promise((resolve, reject) =>{
    let timer = setInterval(()=>{
        let x = document.querySelector('.shui-dt-column__visitCount');
        if(x == document.querySelector('.shui-dt-column__visitCount')){
            clearInterval(timer);
            resolve();
        }
        },1000);
})

temp.then(()=>{
    let x = document.querySelector('.shui-dt-column__visitCount');
    x.style.cursor='pointer';
    let y = x.querySelector('.th-title-text');
    y.style.display='flex';
    y.style.justifyContent='space-around';
    y.style.alignItems='center';
    let p = document.createElement('p');
    p.className = 'custom-arrow';
    p.textContent = 'V';
    p.style.padding='0px 5px';
    y.appendChild(p);

    x.addEventListener('click',function(){

        /* ACTIVE LISTING SORTING */

        if(window.location.href == 'https://www.ebay.com/sh/lst/active'){ //if never sorted yet
            location.replace("https://www.ebay.com/sh/lst/active?sort=-visitCount", "_self") //sort by greatest

        //if sorted by greatest
        }else if(window.location.href == 'https://www.ebay.com/sh/lst/active?sort=-visitCount'){ 
            location.replace("https://www.ebay.com/sh/lst/active?sort=visitCount", "_self") //sort by least

        //if sorted by least
        }else if(window.location.href == 'https://www.ebay.com/sh/lst/active?sort=visitCount'){ //sort by greatest
            location.replace("https://www.ebay.com/sh/lst/active?sort=-visitCount");
        }
        //
    })
});


/*
let x = document.querySelector('.shui-dt-column__visitCount');
x.style.cursor='pointer';
let y = x.querySelector('.th-title-text');
y.style.display='flex';
y.style.justifyContent='space-around';
y.style.alignItems='center';
let p = document.createElement('p');
p.textContent = 'V';
p.style.padding='0px 5px';
y.appendChild(p);

x.addEventListener('click',function(){
    window.open('https://www.ebay.com/sh/lst/active?sort=-visitCount');
})
    */




