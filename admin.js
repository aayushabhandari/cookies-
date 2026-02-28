let products = JSON.parse(localStorage.getItem("products")) || [];

function renderAdminProducts() {
  const container = document.getElementById("adminProducts");
  container.innerHTML = "";
  products.forEach(p => {
    container.innerHTML += `<div>${p.name} - ₹${p.price} (Stock: ${p.stock})</div>`;
  });
}

document.getElementById("productForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const price = parseInt(document.getElementById("price").value);
  const stock = parseInt(document.getElementById("stock").value);

  const newProduct = { id: Date.now(), name, price, stock };
  products.push(newProduct);
  localStorage.setItem("products", JSON.stringify(products));

  renderAdminProducts();
  e.target.reset();
});

renderAdminProducts();
