let currentPrice=0, itemCount=0

function addToCart(cookie) {
    /* 
        PRICES
        peanut butter: 20
        sandies: 30
        party press: 35
        chocolate chip: 25
    */
   
   console.log('The user is adding this type of cookie to their cart: ' , cookie) 

   //add 1 to the itemCount variable

   itemCount=itemCount+1
   console.log(itemCount)

   document.getElementById("cartItems").innerHTML=count

   //add the correct price to the currentPrice variable

   if (cookie == "peanut butter"){
        currentPrice == currentPrice + 20
   } else if (cookie == "sandles"){
    currentPrice == currentPrice + 30
   } else if (cookie == "party press"){
currentPrice = currentPrice + 35
   } else if (cookie == "chocolate chip"){
    currentPrice = currentPrice = 25
   }
   
   document.querySelector(".hoverText").innerHTML = currentPrice
   
   console.log(currentPrice)
   }


function checkout() {
    console.log('User is checking out.')
    //Let your customer know how many items they are purchasing and the price
    window.alert(`You have a total of ${itemCount} items that will cost ${currentPrice}. Thank you for shopping with us `)


    currentPrice=0
    itemCount=0

    document.getElementById("cartItems").innerHTML=itemCountdocument
    document.querySelector(".hoverText").innerHTML=currentPrice
}
function darkMode() {
    // add your code

    document.querySelector("body").style.backgroundColor="black"
    document.querySelector("main").style.color="white"
    document.querySelector("h1").style.color="white"
}
