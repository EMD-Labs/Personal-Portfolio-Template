const tabs=document.querySelector(".tabs");
const section=document.querySelector(".exped");

tabs.addEventListener("click",(e)=>{
    
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        const target= e.target.getAttribute("data-target");
        console.log(target);
        section.querySelector(".tab-content.active").classList.remove("active");
        section.querySelector(target).classList.add("active");
    }


})

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.nav-bar').addClass("sticky");
        }else{
            $('.nav-bar').removeClass("sticky");
        }
    })

    $('.menu-btn').click(function(){
        $('.nav-bar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })

    $(".more").click(function(){
        $(this).parent().toggleClass("active");
        
    })
    
});