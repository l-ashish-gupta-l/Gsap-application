let  tl = gsap.timeline();
tl.from(".nav-after", {
    x: -1550,
    delay:1,
    duration :2,
    // timeline : 0/


})
tl.from(".nav-div1 ,.nav-div2,.nav-div3" ,{
    y:50,
    // timeline : 0,
    delay : -2,
    duration : 1,
    opacity : 0,
    stagger:0.5
    
}) 
tl.from(".andr h2 , .card1 h3, .card2 " ,{
    y:50,
    // timeline : 0,
    delay : -1,
    duration : 1,
    opacity : 0,
    stagger:0.5
    
}) 
tl.from("h4",{
    y:50,
    
    // delay : 0.5,
    duration : 0.5,
    opacity : 0,
    // stagger:0.5
    
})
tl.to("h4",{
    y:10,
    repeat : -1,
    yoyo : "ture"
})


let card = document.querySelector(".card2");
let container = document.querySelector(".container")
let flag = 0;
let h4 = document.querySelector("h4")
card.addEventListener("click" ,function(){
   
   if( flag == 0){
    container.style.scale = "1";
    flag =1;
    h4.innerHTML = "CLICK again !"

}
    else{
        container.style.scale = "1.2";
        flag=0;
        h4.innerHTML = "CLICK to see magic."
    }
})
