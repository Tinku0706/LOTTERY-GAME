const gifts = [
  "Teddy Bear", "Wrist Watch", "Photo Frame", "Perfume", "Scented Candles",
  "Bluetooth Speaker", "Smartphone Case", "Backpack", "Coffee Mug", "Notebook",
  "Wall Art", "Desk Lamp", "Headphones", "Gift Card", "Socks",
  "Keychain", "Sunglasses", "Scarf", "Wallet", "Phone Stand",
  "Makeup Kit", "Water Bottle", "Puzzle", "Board Game", "Book",
  "Bracelet", "Necklace", "Chocolates", "Greeting Card", "Indoor Plant",
  "Handmade Soap", "Lip Balm Set", "Sketchbook", "Drawing Pens", "Power Bank",
  "Laptop Sleeve", "Stress Ball", "LED String Lights", "Phone Charger", "Mini Fan",
  "Fidget Spinner", "Diary", "Travel Organizer", "Pen Holder", "Cosmetic Bag",
  "Mini Speaker", "Plant Pot", "Custom T-Shirt", "Calendar", "Bookmark"
];
const lotterybox=document.getElementById("lotteryid")
gifts.forEach(function(value,i){
const elementbox=`<div class="box" id="${i+1}">${i+1}.${value} </div> `
lotterybox.insertAdjacentHTML("beforeend",elementbox)
})
const sound=new Audio('aa.wav')

const button=document.getElementById("btn")
const res=document.getElementById("result")
button.addEventListener('click',function(){
     res.textContent = "please wait we are processing";

  setTimeout(function () {
    const randomnumber = Math.ceil(Math.random() * 50);
    res.textContent = `You got ${randomnumber}, You won ${gifts[randomnumber - 1]}`;

    // Remove winningbox from all boxes
    const allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach(box => box.classList.remove('winningbox'));

    // Add to the selected one
    const selectedBox = document.getElementById(randomnumber);
    selectedBox.classList.add("winningbox");
    sound.pause()
    sound.currentTime=0
sound.play()
}, 1000);
});