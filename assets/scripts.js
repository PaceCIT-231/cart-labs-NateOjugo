const cart = {
currentPrice:0,
items: [],
addItem: function (cookie,price) {
    //add a cookie(string to the items array
    
    this.items.push(cookie)

    //add the price(number) to the currentPrice properties

    this.currentPrice=this.currentPrice+price
},
   
clear:function() {
//reset the currentPrice and items properties
   this.currentPrice=0
   this.items=[]
},
}
function addToCart(cookie) {
    /*prices
    peanut-butter:20
    sandies:30
    party press:35
    chocolate chip:25
    */

    console.log('The user is adding this type of cookie to their cart: ', cookie)

   if (cookie == "peanut butter"){
   if (cookie == 'sandles'){cart.addItem(cookie,30)}
   if (cookie == 'party press') { cart.addItem(cookie,35)}
   if (cookie == 'chocolate chip') {cart.addItem(cookie,25)}
   
   document.querySelector(".hoverText").innerHTML = cart.currentPrice
   console.log(cart)
   document.getElementById("cartItems").innerHTML=cart.items.length
}


functioncheckout() {
    console.log('User is checking out.')
    //Let your customer know how many items they are purchasing and the price
    window.alert(`You have a total of ${itemCount} items that will cost ${currentPrice}. Thank you for shopping with us `)
cart.clear()
document.getElementById("cartItems").innerHTML=itemCountdocument
console.log(cart)
document.querySelector(".hoverText").innerHTML=cart.currentPrice
}
function darkMode() {
    // add your code

    document.querySelector("body").style.backgroundColor="black"
    document.querySelector("main").style.color="white"
    document.querySelector("h1").style.color="white"
}
