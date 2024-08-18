homeEle = document.querySelector("#home")
featuresEle = document.querySelector("#features_section")
pricingEle = document.querySelector("#pricing")
home_li = document.getElementById("home_li")
features_li = document.getElementById("features_li")
pricing_li = document.getElementById("pricing_li")
contacts_li = document.getElementById("contacts_li")
high = document.getElementById("high")
value = document.getElementById("value")
input = document.getElementById("input_box")
button = document.getElementById("button")
contacts = document.getElementById("contacts")

contacts_li.addEventListener("click",()=>{
  pricingEle.scrollIntoView({behavior:"smooth"})
  contacts.style.transform = "translateY(0%)"
})

homeEle.addEventListener("wheel",function(e){
  if(e.deltaY > 0){
    featuresEle.scrollIntoView({behavior:"smooth"})
    console.log(e.deltaY)
  }
  else{
    return;
  }
})

featuresEle.addEventListener("wheel",function(e){
  if(e.deltaY > 0){
    pricingEle.scrollIntoView({behavior:"smooth"})
  }
  else{
    homeEle.scrollIntoView({behavior:"smooth"});
  }
})

pricingEle.addEventListener("wheel",function(e){
  if(e.deltaY < 0){
    featuresEle.scrollIntoView({behavior:"smooth"})
  }
  else{
    return;
  }
})

home_li.addEventListener("click",function(){
  homeEle.scrollIntoView({behavior:"smooth"})
})

features_li.addEventListener("click",function(){
  featuresEle.scrollIntoView({behavior:"smooth"})
})
pricing_li.addEventListener("click",function(){
  pricingEle.scrollIntoView({behavior:"smooth"})
})

button.addEventListener("click",()=>{
  input.style.opacity = 0.8;
  input.style.pointerEvents = "none";
  button.innerHTML = "Subscribed"
  button.style.opacity = 0.8
  input.style.pointerEvents = "none"
  button.style.backgroundColor = "#FFC107"
})