
let total = 0;
const totalDisplay = document.getElementById("total");
const cartItems = document.getElementById("cart-items");

document.querySelectorAll(".card").forEach(card => {

    let qty = 1;
    const price = Number(card.dataset.price);
    const span = card.querySelector("span");

    card.querySelector(".plus").onclick = () => {
        qty++;
        span.innerText = qty;
    };

    card.querySelector(".minus").onclick = () => {
        if (qty > 1) {
            qty--;
            span.innerText = qty;
        }
    };

    card.querySelector(".add").onclick = () => {
        const name = card.querySelector("h3").innerText;
        const itemTotal = qty * price;

        total += itemTotal;
        totalDisplay.innerText = total;

        const li = document.createElement("li");

        li.innerHTML = `
            ${name} x${qty} = ₹${itemTotal}
            <button class="delete">❌</button>
        `;

        // DELETE BUTTON LOGIC
        li.querySelector(".delete").onclick = () => {
            total -= itemTotal;
            totalDisplay.innerText = total;
            li.remove();
        };

        cartItems.appendChild(li);
    };

});