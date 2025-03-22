let cart = []; // آرایه سبد خرید

// افزودن محصول به سبد خرید
function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
    showCart();
}

// نمایش سبد خرید
function showCart() {
    const cartElement = document.getElementById("cart");
    cartElement.style.display = "block";  // سبد خرید را نمایش می‌دهد
}

// به‌روزرسانی نمایش آیتم‌های سبد خرید
function updateCart() {
    const cartItemsElement = document.getElementById("cart-items");
    cartItemsElement.innerHTML = "";  // پاک کردن محتویات قبلی سبد خرید

    cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <span>${item.name} - ${item.price.toLocaleString()} تومان</span>
            <button onclick="removeFromCart(${index})">حذف</button>
        `;
        cartItemsElement.appendChild(cartItem);
    });
}

// حذف آیتم از سبد خرید
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// بستن سبد خرید
function closeCart() {
    const cartElement = document.getElementById("cart");
    cartElement.style.display = "none";  // سبد خرید را مخفی می‌کند
}
