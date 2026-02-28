function renderCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart");

  if (!cart.length) {
    container.innerHTML = "<p>Cart is empty</p>";
    return;
  }

  container.innerHTML = cart.map(c =>
    `<div>${c.name} x ${c.quantity} = ₹${c.price * c.quantity}</div>`
  ).join("");

  document.getElementById("checkout").onclick = () => {
    alert("Order placed successfully!");
    localStorage.removeItem("cart");
    renderCart();
  };
}

window.onload = renderCart;
