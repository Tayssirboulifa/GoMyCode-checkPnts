document.addEventListener("DOMContentLoaded", () => {
    const cartItems = [
      { id: 1, name: "Eyeshadow Palette", price: 25.0, image: "eyeshadow.webp", quantity: 1 },
      { id: 2, name: "Eyeliner", price: 15.0, image: "eyeliener.jpg", quantity: 1 },
      { id: 3, name: "Mascara", price: 30.0, image: "mascara.webp", quantity: 1 },
      { id: 4, name: "Lip Gloss", price: 10.0, image: "gloss.jpg", quantity: 1 },
      { id: 5, name: "Loose Powder", price: 20.0, image: "loose powder.jpg", quantity: 1 },
    ]
  
    const cartList = document.getElementById("cartItems")
    const totalPriceElement = document.getElementById("totalPrice")
  
    function renderCart() {
      cartList.innerHTML = ""
      let total = 0
  
      cartItems.forEach((item) => {
        const li = document.createElement("li")
        li.className = "cart-item"
        li.innerHTML = `
                  <img src="${item.image}" alt="${item.name}" class="item-image">
                  <div class="item-details">
                      <h3 class="item-name">${item.name}</h3>
                      <p class="item-price">$${item.price.toFixed(2)}</p>
                      <div class="quantity-controls">
                          <button class="quantity-btn minus" data-id="${item.id}">-</button>
                          <span class="quantity">${item.quantity}</span>
                          <button class="quantity-btn plus" data-id="${item.id}">+</button>
                      </div>
                  </div>
                  <div class="item-actions">
                      <button class="like-btn" data-id="${item.id}">
                          <i data-feather="heart"></i>
                      </button>
                      <button class="delete-btn" data-id="${item.id}">
                          <i data-feather="trash-2"></i>
                      </button>
                  </div>
              `
        cartList.appendChild(li)
        total += item.price * item.quantity
      })
  
      totalPriceElement.textContent = total.toFixed(2)
      feather.replace()
      attachEventListeners()
    }
  
    function attachEventListeners() {
      document.querySelectorAll(".quantity-btn").forEach((btn) => {
        btn.addEventListener("click", handleQuantityChange)
      })
  
      document.querySelectorAll(".like-btn").forEach((btn) => {
        btn.addEventListener("click", handleLike)
      })
  
      document.querySelectorAll(".delete-btn").forEach((btn) => {
        btn.addEventListener("click", handleDelete)
      })
    }
  
    function handleQuantityChange(event) {
      const id = Number.parseInt(event.currentTarget.dataset.id)
      const isIncrement = event.currentTarget.classList.contains("plus")
      const item = cartItems.find((item) => item.id === id)
  
      if (isIncrement) {
        item.quantity++
      } else if (item.quantity > 1) {
        item.quantity--
      }
  
      renderCart()
    }
  
    function handleLike(event) {
      const likeBtn = event.currentTarget
      likeBtn.classList.toggle("liked")
    }
  
    function handleDelete(event) {
      const id = Number.parseInt(event.currentTarget.dataset.id)
      const index = cartItems.findIndex((item) => item.id === id)
      if (index !== -1) {
        cartItems.splice(index, 1)
        renderCart()
      }
    }
  
    renderCart()
  
    const checkoutBtn = document.getElementById("checkoutBtn")
    checkoutBtn.addEventListener("click", () => {
      alert("Proceeding to checkout!")
    })
  })
  
  