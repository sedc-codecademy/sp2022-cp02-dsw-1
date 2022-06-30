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