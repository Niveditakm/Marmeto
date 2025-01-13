
const cartData = {
  original_total_price: 250000,
  items: [
    {
      id: 49839206859071,
      quantity: 1,
      title: "Asgaard sofa",
      price: 250000,
      discounted_price: 200000,
      line_price: 200000,
      image: "https://cdn.shopify.com/s/files/1/0883/2188/4479/files/Asgaardsofa3.png?v=1728384481",
    },
  ],
  currency: "INR",
  items_subtotal_price: 250000,
};


const cartItemsContainer = document.getElementById("cart-items");
const subtotalElement = document.getElementById("subtotal");
const totalElement = document.getElementById("total");


let subtotal = 0;
cartData.items.forEach((item) => {
  const row = document.createElement("tr");

  row.innerHTML = `
      <td>
        <img src="${item.image}" alt="${item.title}" style="width: 80px; height: 80px; border-radius: 8px; margin-right: 10px;" />
        ${item.title}
      </td>
      <td>Rs. ${(item.price / 100).toLocaleString()}</td>
      <td><input type="number" value="${item.quantity}" min="1" /></td>
      <td>Rs. ${(item.line_price / 100).toLocaleString()}</td>
      <td><span class="trash-icon">🗑️</span></td>
    `;

  cartItemsContainer.appendChild(row);
  subtotal += item.line_price;
});


subtotalElement.textContent = `Rs. ${(subtotal / 100).toLocaleString()}`;
totalElement.textContent = `Rs. ${(subtotal / 100).toLocaleString()}`;
