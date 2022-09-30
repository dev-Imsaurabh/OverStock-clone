let favList = JSON.parse(localStorage.getItem("favList"))||[]

let prod =[{ image:
  'https://ak1.ostkcdn.com/images/products/is/images/direct/fa0de7e5f6db966631851fdd3f058a6b965ff170/SAFAVIEH-California-Shag-Izat-2-inch-Thick-Rug.jpg?imwidth=480&impolicy=medium',
 name: 'SAFAVIEH California Shag Izat 2-inch Thick Area Rug ',
 price: '11550.71',
 off: '25',
 strikeOff: '8663.03' }
,
{ image:
  'https://ak1.ostkcdn.com/images/products/is/images/direct/fa0de7e5f6db966631851fdd3f058a6b965ff170/SAFAVIEH-California-Shag-Izat-2-inch-Thick-Rug.jpg?imwidth=480&impolicy=medium https://ak1.ostkcdn.com/images/products/is/images/direct/fa0de7e5f6db966631851fdd3f058a6b965ff170/SAFAVIEH-California-Shag-Izat-2-inch-Thick-Rug.jpg?imwidth=480&impolicy=medium',
 name: 'Elmas Traditional Persian Medallion Area Rug',
 price: '40200.21',
 off: '23',
 strikeOff: '30954.16' }
,
{ image:
  'https://ak1.ostkcdn.com/images/products/is/images/direct/6f2f4c20d2f89bed074d54fbdf2ad920533a8657/SAFAVIEH-Vision-Tanasa-Modern-Ombre-Tonal-Rug.jpg?imwidth=480&impolicy=medium',
 name: 'Nourison Aloha Leaf Print Vibrant Indoor/ Outdoor Area Rug',
 price: '53009.3',
 off: '32',
 strikeOff: '36046.32' }
,
{ image:
  'https://ak1.ostkcdn.com/images/products/is/images/direct/4ac5f7c2f2af9b4ee23f50f8d1d82dcaaf09e61a/Elmas-Traditional-Persian-Medallion-Area-Rug.jpg?imwidth=480&impolicy=medium',
 name: 'Nourison Positano Ombre Casual Modern Indoor/Outdoor Rug',
 price: '42078.22',
 off: '9',
 strikeOff: '38291.18' }
,
{ image:
  'https://ak1.ostkcdn.com/images/products/is/images/direct/ada1aace1d92bcac1c8d5c99aafe7dd4484bdb88/Alexander-Home-Luxe-Fireside-Antiqued-Distressed-Area-Rug.jpg?imwidth=480&impolicy=medium',
 name: 'Joel Mod Black/Ivory Ombre Geometric Striped Area Rug',
 price: '56970.6',
 off: '14',
 strikeOff: '48994.72' }
,
{ image:
  'https://ak1.ostkcdn.com/images/products/25858730/Momeni-Anatolia-Machine-Made-Wool-and-Nylon-Area-Rug-a70d4d91-0613-483a-834d-54b197e35993_600.jpg?imwidth=480&impolicy=medium https://ak1.ostkcdn.com/images/products/is/images/direct/7d50c79613c3e5e586e543985296148b8c4bffb0/Evry-Vintage-Heriz-Area-Rug.jpg?imwidth=480&impolicy=medium',
 name: 'Alexander Home Luxe Fireside Antiqued Distressed Area Rug',
 price: '43646.54',
 off: '7',
 strikeOff: '40591.28' }
,
{ image:
  'https://ak1.ostkcdn.com/images/products/is/images/direct/ca5a667a174d7a0bd20d162edc204d866d9de1b5/SAFAVIEH-Amsterdam-Bridget-Moroccan-Boho-Rug.jpg?imwidth=480&impolicy=medium',
 name: 'Momeni Anatolia Traditional Oriental Area Rug',
 price: '37368.67',
 off: '36',
 strikeOff: '23915.95' }
,
{ image:
  'https://ak1.ostkcdn.com/images/products/is/images/direct/f74e954e877f9e9201d2698b9a9d8b75e99c84a9/The-Curated-Nomad-Tiffany-Bohemian-Border-Area-Rug.jpg?imwidth=480&impolicy=medium',
 name: 'Evry Vintage Heriz Area Rug',
 price: '83747.89',
 off: '12',
 strikeOff: '73698.14' }
,
{ image:
  'https://ak1.ostkcdn.com/images/products/is/images/direct/1ced1e2a58f252221416b114223e24a1852b6c23/Nourison-Aloha-Coastal-Beach-Starfish-Indoor--Outdoor-Area-Rug.jpg?imwidth=480&impolicy=medium',
 name: 'SAFAVIEH Amsterdam Bridget Moroccan Boho Rug',
 price: '37273.5',
 off: '22',
 strikeOff: '29073.33' }
,
{ image:
  'https://ak1.ostkcdn.com/images/products/is/images/direct/ce3ba87ae93f97239cd24025cc15e90af7f441cd/SAFAVIEH-Handmade-Arctic-Shag-Guenevere-3-inch-Extra-Thick-Rug.jpg?imwidth=480&impolicy=medium',
 name: 'Alexander Home Luxe Fireside Antiqued Distressed Area Rug',
 price: '37847.7',
 off: '5',
 strikeOff: '35955.31' }
,
{ image:
  'https://ak1.ostkcdn.com/images/products/is/images/direct/1ced1e2a58f252221416b114223e24a1852b6c23/Nourison-Aloha-Coastal-Beach-Starfish-Indoor--Outdoor-Area-Rug.jpg?imwidth=480&impolicy=medium',
 name: 'Nourison Aloha Leaf Print Vibrant Indoor/ Outdoor Area Rug',
 price: '43645.78',
 off: '20',
 strikeOff: '34916.62' }
,
{ image:
  'https://ak1.ostkcdn.com/images/products/is/images/direct/ce3ba87ae93f97239cd24025cc15e90af7f441cd/SAFAVIEH-Handmade-Arctic-Shag-Guenevere-3-inch-Extra-Thick-Rug.jpg?imwidth=480&impolicy=medium',
 name: 'Joel Mod Black/Ivory Ombre Geometric Striped Area Rug',
 price: '72469.8',
 off: '2',
 strikeOff: '71020.40' }
,

 
 
 ];
inflateProduct(prod)
function inflateProduct(prod){
   let con = document.querySelector("#cp5").innerHTML=""
   prod.forEach(function(el,index){

       let div = document.createElement("div");
       let img = document.createElement("img");
       img.src=el.image
       let price = document.createElement("h3");
       let sale = document.createElement("h6");
       sale.innerText="Sale Ends in 2 Days 4 Hours"
       price.innerText="Sale Starts at INR "+el.strikeOff
       let fav = document.createElement("i");
       fav.setAttribute("class","fa-regular fa-heart")
       fav.addEventListener("click",function(event){
        addToFav(el,index,event);
       })
       let name = document.createElement("p");
       name.innerText=el.name
       div.append(sale,fav,img,price,name)

       div.addEventListener("click",function(event){
           viewProduct(el,index,event);
       })

       let con = document.querySelector("#cp5");
       con.append(div)



   }) 
}


document.querySelector("#sort").addEventListener("change",sortItems);

function sortItems(event){
   let selected = document.querySelector("#sort").value;
   if(selected=="no"){
       inflateProduct(prod)
   }else if(selected=="asc"){
       let sorted = prod.sort((a,b)=>a.strikeOff-b.strikeOff);
       inflateProduct(sorted)

   }else{
       let sorted = prod.sort((a,b)=>b.strikeOff-a.strikeOff);
       inflateProduct(sorted)

   }
}

function viewProduct(el,index,event){
   window.location.href="view.html"
   localStorage.setItem("view",JSON.stringify(el));
}

function addToFav(el,index,event){
event.preventDefault();
  favList.push(el)
  localStorage.setItem("favList",JSON.stringify(favList));
  event.target.style.color="white"
  event.target.style.backgroundColor="red"
  event.target.style.border="1px solid red"
  
  event.preventDefault();
  event.stopPropagation();

}