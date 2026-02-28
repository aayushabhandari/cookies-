let products = JSON.parse(localStorage.getItem("products")) || [
  { id: 1, name: "Chocolate Cake", price: 700, stock: 5 },
  { id: 2, name: "Croissant", price: 180, stock: 20 },
  { id: 3, name: "Cookies Pack", price: 300, stock: 15 }
];

function loadProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <p>Stock: ${p.stock}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product || product.stock <= 0) return alert("Out of stock!");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find(i => i.id === id);

  if (existing) {
    if (existing.quantity < product.stock) existing.quantity++;
    else return alert("No more stock!");
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

window.onload = loadProducts;
