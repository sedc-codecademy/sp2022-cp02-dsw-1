import { getCartItems, setCartItems } from "../local-storage";

export const parseRequestUrl = () => {
    const url = document.location.hash.toLowerCase();
    const request = url.split('/');

    return {
        resource: request[1],
        id: request[2],
        verb: request[3],
    };
};

export const getAllProducts = async () => {
    try {
        const response = await fetch('../data/clothes.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        // To do something with the error
    }
}

export const reveal = () => {
    const reveals = document.querySelectorAll(".reveal")
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 70;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

export const navbarCounter = () => {
    const counters = [...document.getElementsByClassName("shopping-cart-navbar-items")];
    const cartItems = getCartItems();
    // if (!cartItems) return;
    cartItems.length > 0 ? cartItems.reduce((a, c) => a + c.quantity, 0) : 0;
    counters.forEach(counter => {
        counter.innerHTML = cartItems.length;
        cartItems.length < 1 ? counter.style.visibility = "hidden" : counter.style.visibility = "visible";
    });
}

export const deleteCartItem = (view) => {
    const deleteButtons = [...document.querySelectorAll(".cart__close-btn")];
    if (!deleteButtons) return;
    deleteButtons.forEach(deleteButton => {
        deleteButton.addEventListener("click", (ev) => {
            const cartItems = getCartItems();
            const filteredProducts = cartItems.filter(cartItem => cartItem._id != ev.target.id)
            setCartItems(filteredProducts);
            rerender(view);
        })
    })
}

export const rerender = async (component) => {
    document.getElementById("main-container").innerHTML = await component.render();
    await component.after_render();
}