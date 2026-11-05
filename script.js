const sceneCards = document.querySelectorAll(".scene-card");

sceneCards.forEach((card) => {

    const button = card.querySelector(".expand-btn");

    button.addEventListener("click", () => {

        const isActive = card.classList.contains("active");

        // Close all scenes
        sceneCards.forEach((otherCard) => {

            otherCard.classList.remove("active");

            const otherButton =
                otherCard.querySelector(".expand-btn");

            otherButton.textContent = "+";

        });

        // Open the selected scene
        if (!isActive) {

            card.classList.add("active");

            button.textContent = "−";

        }

    });

});