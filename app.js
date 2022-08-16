// $('.contents-two a').fancybox({
//     caption : function( instance, item ) {
//     }
//   });

  
$(document).ready(function () {
  $('ul.tabs li').click(function () {
      var tab_id = $(this).attr('data-tab');
      $('ul.tabs li').removeClass('active');
      $('.tab-content').removeClass('active');
      $(this).addClass('active');
      $("#" + tab_id).addClass('active');
  })
})
let drpdown = function () {
  if($(window).width() < 768){
    // jquery for dropdown
    $(function() {
      var list = $('.tabs');
      var link = $('.mobile-view');
      link.click(function(e) {
        e.preventDefault();
        list.slideToggle(200);
      });
      list.find('li').click(function() {
        var text = $(this).html();
        // var icon = '<i class="fa fa-sort-desc"></i>';
        link.html(text);
        link.append(icon)
        list.slideToggle(200);
      });
    });
  }
}
$(window).resize(function() {
  if($(window).width() < 768){
    drpdown();
    location.reload()
  }
});
drpdown();

  let valueDisplays1=document.querySelectorAll(".num")

  let interval=2000;
  valueDisplays1.forEach((valueDisplay1)=>{
let startValue=0;
let endValue=parseInt(valueDisplay1.getAttribute("data-val"));
let duration=Math.floor(interval/endValue);
let counter=setInterval(function(){
  
  startValue=startValue+1;
  valueDisplay1.innerText=startValue ;
  if(startValue===endValue){
    clearInterval(counter)
  }
},duration)
  })



  
function  cultivators(){
  let tabone= document.getElementById("tabs-one")
  let img= document.getElementById("whole")
  let text=document.getElementById("right-des")
  let tabone1= document.getElementById("tabs-two");
  let tabone2= document.getElementById("tabs-three");
  let tabone3= document.getElementById("tabs-four");
  let tabone4= document.getElementById("tabs-five");
  let tabone5= document.getElementById("tabs-six");
  tabone.style.color="#695ff7"
  tabone.style.marginBottom="30PX"
  tabone.style.marginTop="10px";
  tabone1.style.color="black"
  tabone1.style.marginBottom="10PX"
  tabone1.style.marginTop="10px";
  tabone2.style.color="black"
  tabone2.style.marginBottom="10PX"
  tabone2.style.marginTop="10px";
  tabone3.style.color="black"
  tabone3.style.marginBottom="10PX"
  tabone3.style.marginTop="10px";
  tabone4.style.color="black"
  tabone4.style.marginBottom="10PX"
  tabone4.style.marginTop="10px";
  tabone5.style.color="black"
  tabone5.style.marginBottom="10PX"
  tabone5.style.marginTop="10px";
  img.src="https://www.growflow.com/hubfs/Wholesale-GrowTracking.png"
  text.innerHTML=`<div class="right-heading">
  <h4>Grow your business, not your paperwork</h4>
</div>
<div class="right-para">
  <p>Streamline your grow operation from seed-to-sale with best-in-class tools for propagation, harvesting, waste management, nutrient feeding, testing, and selling.</p>
</div>
<div class="right-link">
<a href="#">LEARN MORE <span>
    <i class="fa-solid fa-arrow-right-long"></i>
</span></a>
</div>`
 }
function  cultivators1(){
  let tabone= document.getElementById("tabs-one")
  let img= document.getElementById("whole")
  let text=document.getElementById("right-des")
  let tabone1= document.getElementById("tabs-two");
  let tabone2= document.getElementById("tabs-three");
  let tabone3= document.getElementById("tabs-four");
  let tabone4= document.getElementById("tabs-five");
  let tabone5= document.getElementById("tabs-six");
  tabone.style.color="black"
  tabone.style.marginBottom="10px"
  tabone.style.marginTop="10px";
  tabone1.style.color="#695ff7"
  tabone1.style.marginBottom="30PX"
  tabone1.style.marginTop="10px";
  tabone2.style.color="black"
  tabone2.style.marginBottom="10PX"
  tabone2.style.marginTop="10px";
  tabone3.style.color="black"
  tabone3.style.marginBottom="10PX"
  tabone3.style.marginTop="10px";
  tabone4.style.color="black"
  tabone4.style.marginBottom="10PX"
  tabone4.style.marginTop="10px";
  tabone5.style.color="black"
  tabone5.style.marginBottom="10PX"
  tabone5.style.marginTop="10px";
  img.src="https://www.growflow.com/hubfs/Wholesale-Processing.png"
  text.innerHTML=`<div class="right-heading">
  <h4>Process for more profits</h4>
</div>
<div class="right-para">
  <p>Track faster, more accurate inventory at every stage of the conversion process.</p>
</div>
<div class="right-link">
<a href="#">LEARN MORE <span>
    <i class="fa-solid fa-arrow-right-long"></i>
</span></a>
</div>`
 }
function  cultivators2(){
  
  let img= document.getElementById("whole")
  let text=document.getElementById("right-des")
  let tabone= document.getElementById("tabs-one")
  let tabone1= document.getElementById("tabs-two");
  let tabone2= document.getElementById("tabs-three");
  let tabone3= document.getElementById("tabs-four");
  let tabone4= document.getElementById("tabs-five");
  let tabone5= document.getElementById("tabs-six");
  tabone.style.color="black"
  tabone.style.marginBottom="10px"
  tabone.style.marginTop="10px";
  tabone1.style.color="black"
  tabone1.style.marginBottom="10PX"
  tabone1.style.marginTop="10px";
  tabone2.style.color="#695ff7"
  tabone2.style.marginBottom="30PX"
  tabone2.style.marginTop="10px";
  tabone3.style.color="black"
  tabone3.style.marginBottom="10PX"
  tabone3.style.marginTop="10px";
  tabone4.style.color="black"
  tabone4.style.marginBottom="10PX"
  tabone4.style.marginTop="10px";
  tabone5.style.color="black"
  tabone5.style.marginBottom="10PX"
  tabone5.style.marginTop="10px";
  img.src="https://www.growflow.com/hubfs/Wholesale-SalesOrderOverview.png"
  text.innerHTML=`<div class="right-heading">
  <h4>The power-hub for distribution</h4>
</div>
<div class="right-para">
  <p>Keep track of the flow of goods through your distribution hub — manage orders, generate invoices, and print labels with a few clicks.</p>
</div>
<div class="right-link">
<a href="#">LEARN MORE <span>
    <i class="fa-solid fa-arrow-right-long"></i>
</span></a>
</div>`
 }
function  cultivators3(){
  
  let img= document.getElementById("whole")
  let text=document.getElementById("right-des")
  let tabone= document.getElementById("tabs-one")
  let tabone1= document.getElementById("tabs-two");
  let tabone2= document.getElementById("tabs-three");
  let tabone3= document.getElementById("tabs-four");
  let tabone4= document.getElementById("tabs-five");
  let tabone5= document.getElementById("tabs-six");
  tabone.style.color="black"
  tabone.style.marginBottom="10px"
  tabone.style.marginTop="10px";
  tabone1.style.color="black"
  tabone1.style.marginBottom="10PX"
  tabone1.style.marginTop="10px";
  tabone2.style.color="black"
  tabone2.style.marginBottom="10PX"
  tabone2.style.marginTop="10px";
  tabone3.style.color="#695ff7"
  tabone3.style.marginBottom="30PX"
  tabone3.style.marginTop="10px";
  tabone4.style.color="black"
  tabone4.style.marginBottom="10PX"
  tabone4.style.marginTop="10px";
  tabone5.style.color="black"
  tabone5.style.marginBottom="10PX"
  tabone5.style.marginTop="10px";
  img.src="https://www.growflow.com/hubfs/Retail-PointofSale.png"
  text.innerHTML=`<div class="right-heading">
  <h4>Hiccup-free, uninterrupted retail operations</h4>
</div>
<div class="right-para">
  <p>GrowFlow does it all — point of sale, inventory management, loyalty programs, and analytics. Plus, we integrate with some of your favorite retail tools for online ordering, menus, and delivery.</p>
</div>
<div class="right-link">
<a href="#">LEARN MORE <span>
    <i class="fa-solid fa-arrow-right-long"></i>
</span></a>
</div>>`
 }
function  cultivators4(){
  
  let img= document.getElementById("whole")
  let text=document.getElementById("right-des")
  let tabone= document.getElementById("tabs-one")
  let tabone1= document.getElementById("tabs-two");
  let tabone2= document.getElementById("tabs-three");
  let tabone3= document.getElementById("tabs-four");
  let tabone4= document.getElementById("tabs-five");
  let tabone5= document.getElementById("tabs-six");
  tabone.style.color="black"
  tabone.style.marginBottom="10px"
  tabone.style.marginTop="10px";
  tabone1.style.color="black"
  tabone1.style.marginBottom="10PX"
  tabone1.style.marginTop="10px";
  tabone2.style.color="black"
  tabone2.style.marginBottom="10PX"
  tabone2.style.marginTop="10px";
  tabone3.style.color="black"
  tabone3.style.marginBottom="10PX"
  tabone3.style.marginTop="10px";
  tabone4.style.color="#695ff7"
  tabone4.style.marginBottom="30PX"
  tabone4.style.marginTop="10px";
  tabone5.style.color="black"
  tabone5.style.marginBottom="10PX"
  tabone5.style.marginTop="10px";
  img.src="https://www.growflow.com/hubfs/Wholesale-Storefront-Detail.png"
  text.innerHTML=`<div class="right-heading">
  <h4>Growing connections</h4>
</div>
<div class="right-para">
  <p>Buying and selling are easy with GrowFlow’s online marketplace, GrowFlow Live. Always updated menus, always compliant.</p>
</div>
<div class="right-link">
<a href="#">LEARN MORE <span>
    <i class="fa-solid fa-arrow-right-long"></i>
</span></a>
</div>`
 }
function  cultivators5(){
  
  let img= document.getElementById("whole")
  let text=document.getElementById("right-des")
  let tabone= document.getElementById("tabs-one")
  let tabone1= document.getElementById("tabs-two");
  let tabone2= document.getElementById("tabs-three");
  let tabone3= document.getElementById("tabs-four");
  let tabone4= document.getElementById("tabs-five");
  let tabone5= document.getElementById("tabs-six");
  tabone.style.color="black"
  tabone.style.marginBottom="10px"
  tabone.style.marginTop="10px";
  tabone1.style.color="black"
  tabone1.style.marginBottom="10PX"
  tabone1.style.marginTop="10px";
  tabone2.style.color="black"
  tabone2.style.marginBottom="10PX"
  tabone2.style.marginTop="10px";
  tabone3.style.color="black"
  tabone3.style.marginBottom="10PX"
  tabone3.style.marginTop="10px";
  tabone4.style.color="black"
  tabone4.style.marginBottom="10PX"
  tabone4.style.marginTop="10px";
  tabone5.style.color="#695ff7"
  tabone5.style.marginBottom="30PX"
  tabone5.style.marginTop="10px";
  img.src="https://www.growflow.com/hubfs/Wholesale-Insights.png"
  text.innerHTML=`<div class="right-heading">
  <h4>You have data, we have your answers</h4>
</div>
<div class="right-para">
  <p>Make smarter, more profitable decisions. GrowFlow translates your raw data into insights to show you your bestsellers, your top buyers, what’s sitting on the shelves, and ways to grow your business faster.</p>
</div>
<div class="right-link">
<a href="#">LEARN MORE <span>
    <i class="fa-solid fa-arrow-right-long"></i>
</span></a>
</div>`
 }


//  $(window).on('load resize orientationchange', function() {
//   if ($(window).width() > 767) {
   
//   }
//   else{
//     $(function() {
//       var list = $('.list-items');
//       var link = $('.mobile-view');
//       link.click(function(e) {
//         e.preventDefault();
//         list.slideDown(200);
//       });
//       list.find('li').click(function() {
//         var text = $(this).html();
//         link.html(text);
//         list.slideUp(200);
//       });
//     });
    
//   }
// });

const swiper = new Swiper('.swiper', {
  
  autoplay:{
delay:3000,
disableOnInteraction:false,
  },
  loop: true,

 navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 
});
 
 
// let value1=document.getElementsByClassName(".numb")
// console.log(value1);
// let intervals=1000;

// let startValue1=0;
// let endValue1=value1.getAttribute("data-val");
// console.log(value1);
// console.log(endvalue1);
// let duration1=(intervals/endValue1);
// let counter1=setInterval(function(){

// startValue1=startValue1+1;
// value1.innerText=startValue1 ;
// if(startValue1===endValue1){
//   clearInterval(counter1)
// }
// },duration1)




let valueDisplays2=document.querySelectorAll(".numb")

//let interval2=3000;
valueDisplays2.forEach((valueDisplay2)=>{
let startValue2=0;
let endValue2=parseInt(valueDisplay2.getAttribute("data-val"));
//console.log(endvalue2);
//let duration2=Math.floor(interval2/endValue2);
let counter=setInterval(function(){

startValue2=startValue2+1;
valueDisplay2.innerText=startValue2+" minutes" ;
if(startValue2===endValue2){
  clearInterval(counter)
}
},1000)
})
let valueDisplays3=document.querySelectorAll(".count")

// //let interval2=3000;
// valueDisplays3.forEach((valueDisplay3)=>{
// let startValue3=0;
// let endValue3=parseInt(valueDisplay3.getAttribute("data-val"));
// //console.log(endvalue2);
// //let duration2=Math.floor(interval2/endValue2);
// let counter=setInterval(function(){

// startValue3=startValue3+1;
// valueDisplay3.innerHTML=startValue3+`%<span>satisfaction</span>` ;
// if(startValue3===endValue3){
//   clearInterval(counter)
// }
// },500)
// })