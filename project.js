
const element=document.querySelector('#numer-of-box');
const button=document.querySelector('#submit');
button.addEventListener('click',onClick);


function onClick(event)//this to add event for submit button
{

    number=element.value;
    test=0;
    for(var i=0;i<number.length;i++)// to check is nunmer?
    {
       
      if(isNaN(parseInt(number[i]))){
      console.log("I am in if !!")
      alert("Please enter valid number!");
      break;
      } 
      else
       test=test+1;  
    }
    if(test===number.length){
    number=parseInt(number);
    if(number>=2)//to check is number more than 1?
    {
    event.currentTarget.removeEventListener('click',onClick);
    alert("start play");
    draw(number);
  }
    else
    {
     alert("Please enter number more than 1");

    }

    }  

}
function draw(number)//to draw cards
{
    const container=document.querySelector('#flex-container');
     var cards=new Array();
    for(var i=0 ;i<number; i++)
    {
     const card= document.createElement('div');
     card.classList.add('flex-item');
     cards[i]=card;
      container.appendChild(card);
    }

   index_gift=Math.floor((Math.random() * (number-1)) +0);
   addEvent(cards,index_gift);

}
function addEvent(cards,gift)//to add event for all cards
{
  var steps=0;
for(var i=0;i<cards.length;i++){
  
 cards[i].addEventListener('click',onClick); 

 }
if(i===gift)
return;


function onClick(event){
 if(event.currentTarget===cards[gift])
  {
    const img=document.createElement('img')//to add gift in target card
    img.src="gift.jpg";
    event.currentTarget.appendChild(img);
   const win=document.querySelector('#win');
   h1=document.createElement('h1');
   h1.textContent="You win in "+steps+" steps";
   win.appendChild(h1);
   //alert("you win in "+steps+" steps");
   event.currentTarget.removeEventListener('click',onClick);
   
  }
  else
  {
    steps+=1;
    event.currentTarget.classList.add('empty');//to add color red to wrong card
    event.currentTarget.removeEventListener('click',onClick);
    
    

  }





}




}

