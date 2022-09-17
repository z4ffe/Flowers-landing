const counter = document.querySelector('#cart-counter')
const cart = document.querySelector('#cart')

counter.textContent = `${Math.round(Math.random() * 20)}`
cart.onclick = () => {
	counter.textContent = `${Math.round(Math.random() * 20)}`
}