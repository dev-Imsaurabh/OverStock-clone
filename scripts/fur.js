let favList = JSON.parse(localStorage.getItem("favList")) || [];
let prod = [
  {
    image:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/b287908cb7fa30618674f22499df15af0cee6525/Wood-and-Metal-63in.-H-5-Tier-Etagere.jpg?imwidth=480&impolicy=medium",
    name: "5-Shelf 63 H x 23.62 W Wood and Metal Etagere Bookcase",
    price: "11550.71",
    off: "34",
    strikeOff: "7623.47",
  },
  {
    image:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/692886ca451e4d4ee7d90b9cc670b31c7932bcef/Copper-Grove-Aubrieta-3-tier-Single-drawer-End-Table.jpg?imwidth=480&impolicy=medium",
    name: "Copper Grove Cranesbill X-Base 3-Tier End Table with Shelves",
    price: "53009.3",
    off: "0",
    strikeOff: "53009.30",
  },
  {
    image:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/c9de48931da0a619617a9fa5e9ec374aa9641a0b/Aston-Modern-Solid-wood-Accent-Chair.jpg?imwidth=480&impolicy=medium",
    name: "Aston Modern Solid wood Accent Chair",
    price: "42078.22",
    off: "18",
    strikeOff: "34504.14",
  },
  {
    image:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/103aa27e87275cc2213c2e9673dbf35825a79b9c/The-Gray-Barn-End-Table-with-Storage.jpg?imwidth=480&impolicy=medium",
    name: "End Table with Storage",
    price: "56970.6",
    off: "4",
    strikeOff: "54691.78",
  },
  {
    image:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/4743e1f71f5923864d139f7c2b220f255b3b695f/Art-Leon-Classical-Swivel-Office-Accent-Arm-Chair-with-Wood-Legs.jpg?imwidth=480&impolicy=medium",
    name: "Art Leon Classical Swivel Office Accent Chair with Wood Legs",
    price: "43646.54",
    off: "19",
    strikeOff: "35353.70",
  },
  {
    image:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/749555dadf54ee9d7832de5eb7bebf21cf600891/Big-Joe-Milano-Bean-Bag-Chair%2C-Multiple-Colors.jpg?imwidth=480&impolicy=medium",
    name: "Big Joe Milano Bean Bag Chair, Multiple Colors",
    price: "37368.67",
    off: "2",
    strikeOff: "36621.30",
  },
  {
    image:
      "https://ak1.ostkcdn.com/images/products/12527083/Harper-Blvd-Ferguson-Black-Spine-Tower-Shelf-074cc908-c3b4-43c1-af5c-b9ada8e8b112_600.jpg?imwidth=480&impolicy=medium",
    name: "SEI Furniture Denargo Black Spine Tower Shelf",
    price: "83747.89",
    off: "36",
    strikeOff: "53598.65",
  },
  {
    image:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/27ea8525802c460d8ae1dbd42a7f2debe3b922bd/COZAYH-2-Piece-Coffee-Table-Set.jpg?imwidth=480&impolicy=medium",
    name: "COZAYH 2-Piece Coffee Table Set",
    price: "37273.5",
    off: "1",
    strikeOff: "36900.76",
  },
  {
    image:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/094438a4795e6f2d273c9b756ae77a45b09f8d17/Ashlyn-Reversible-Sleeper-Sofa-with-Storage-Chaise.jpg?imwidth=480&impolicy=medium",
    name: "Ashlyn Reversible Sleeper Sofa with Storage Chaise",
    price: "37847.7",
    off: "0",
    strikeOff: "37847.70",
  },
  {
    image:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/c9cb658bdf4b9dd102ca8a559c28756be942aa13/Glitzhome-Industrial-Farmhouse-Round-Storage-End-Tables-%28Set-of-2%29.jpg?imwidth=480&impolicy=medium",
    name: "Glitzhome Industrial Farmhouse Round Storage End Tables (Set of 2)",
    price: "43645.78",
    off: "37",
    strikeOff: "27496.84",
  },
  {
    image:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/1f96bc3755e242f562fe59320cc013064e6066a4/Glitzhome-30%22H-Mid-Century-Modern-PU-Leather-Accent-Armchair-with-Rubberwood-Frame.jpg?imwidth=480&impolicy=medium",
    name: "Glitzhome 30H Mid-Century Modern PU Leather Accent Armchair with Rubberwood Frame",
    price: "72469.8",
    off: "15",
    strikeOff: "61599.33",
  },
  {
    image:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/09b786c3dcc47edf8b7843843e3d9dc54d335e6f/Copper-Grove-Perreux-Linen-Reversible-Sleeper-Sectional-Sofa.jpg?imwidth=480&impolicy=medium",
    name: "Copper Grove Aubrieta1 Drawer Chairside End Table with Shelves",
    price: "40200.21",
    off: "0",
    strikeOff: "40200.21",
  },
];
inflateProduct(prod);
function inflateProduct(prod) {
  let con = (document.querySelector("#cp5").innerHTML = "");
  prod.forEach(function (el, index) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.image;
    let price = document.createElement("h3");
    let sale = document.createElement("h6");
    sale.innerText = "Sale Ends in 2 Days 4 Hours";
    price.innerText = "Sale Starts at INR " + el.strikeOff;
    let fav = document.createElement("i");
    fav.setAttribute("class", "fa-regular fa-heart");
    fav.addEventListener("click", function (event) {
      addToFav(el, index, event);
    });
    let name = document.createElement("p");
    name.innerText = el.name;
    div.append(sale, fav, img, price, name);

    div.addEventListener("click", function (event) {
      viewProduct(el, index, event);
    });

    let con = document.querySelector("#cp5");
    con.append(div);
  });
}

document.querySelector("#sort").addEventListener("change", sortItems);

function sortItems(event) {
  let selected = document.querySelector("#sort").value;
  if (selected == "no") {
    inflateProduct(prod);
  } else if (selected == "asc") {
    let sorted = prod.sort((a, b) => a.strikeOff - b.strikeOff);
    inflateProduct(sorted);
  } else {
    let sorted = prod.sort((a, b) => b.strikeOff - a.strikeOff);
    inflateProduct(sorted);
  }
}

function viewProduct(el, index, event) {
  window.location.href = "view.html";
  localStorage.setItem("view", JSON.stringify(el));
}

function addToFav(el, index, event) {
  event.preventDefault();
  favList.push(el);
  localStorage.setItem("favList", JSON.stringify(favList));
  event.target.style.color = "white";
  event.target.style.backgroundColor = "red";
  event.target.style.border = "1px solid red";
  event.preventDefault();
  event.stopPropagation();
}
