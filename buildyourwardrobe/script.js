document.addEventListener("DOMContentLoaded", function () {
    const wardrobeItems = document.querySelectorAll(".wardrobe-item");
    const wardrobeOwner = document.getElementById("wardrobe-owner");
    const wardrobeItemsContainer = document.getElementById("wardrobe-items");
    const addWardrobeButton = document.getElementById("add-wardrobe-button");
    const addItemButton = document.getElementById("add-item-button");
    const postCommentButton = document.getElementById("post-comment");
    const commentsList = document.getElementById("comments-list");
    let wardrobes = {
        sam: ["oufit1.jpg", "oufit2.jpg", "oufit3.jpg", "oufit4.jpg"],
        jenny: ["outfit5.webp", "outfit7.webp"],
        alex: ["oufit3.jpg", "oufit4.jpg"],
        chris: ["oufit1.jpg", "oufit4.jpg"],
        emily: ["outfit8.jpg", "outfit6.webp"],
        michael: ["oufit1.jpg", "oufit3.jpg"],
        sophia: ["oufit2.jpg", "oufit4.jpg"],
        liam: ["oufit1.jpg", "oufit2.jpg", "oufit3.jpg", "oufit4.jpg"]
    };
    let currentOwner = "sam";

    wardrobeItems.forEach(item => {
        item.addEventListener("click", function () {
            const owner = item.getAttribute("data-owner");
            switchWardrobe(owner);
        });
    });

    function switchWardrobe(owner) {
        currentOwner = owner;
        wardrobeOwner.textContent = `${owner.charAt(0).toUpperCase() + owner.slice(1)}'s Wardrobe`;
        wardrobeItemsContainer.innerHTML = "";
        if (wardrobes[owner]) {
            wardrobes[owner].forEach(item => {
                const img = document.createElement("img");
                img.src = item;
                img.alt = "Clothes";
                wardrobeItemsContainer.appendChild(img);
            });
        }
        addItemButton.style.display = currentOwner === owner ? "block" : "none";
    }

    addWardrobeButton.addEventListener("click", function () {
        const newOwner = prompt("Enter your name for the new wardrobe:");
        if (newOwner) {
            const newWardrobeItem = document.createElement("li");
            newWardrobeItem.classList.add("wardrobe-item");
            newWardrobeItem.setAttribute("data-owner", newOwner.toLowerCase());
            newWardrobeItem.textContent = `${newOwner}'s Wardrobe`;
            document.getElementById("wardrobe-list").appendChild(newWardrobeItem);

            newWardrobeItem.addEventListener("click", function () {
                switchWardrobe(newOwner.toLowerCase());
            });

            wardrobes[newOwner.toLowerCase()] = [];
        }
    });

    addItemButton.addEventListener("click", function () {
        const newItem = prompt("Enter the URL of the new item:");
        if (newItem) {
            const img = document.createElement("img");
            img.src = newItem;
            img.alt = "Clothes";
            wardrobeItemsContainer.appendChild(img);
            if (wardrobes[currentOwner]) {
                wardrobes[currentOwner].push(newItem);
            } else {
                wardrobes[currentOwner] = [newItem];
            }
        }
    });

    postCommentButton.addEventListener("click", function () {
        const commentBox = document.querySelector(".comment-box input");
        const commentText = commentBox.value.trim();
        if (commentText) {
            const newComment = document.createElement("li");
            newComment.textContent = commentText;
            commentsList.appendChild(newComment);
            commentBox.value = ""; // Clear the input box
        }
    });

    // Initial display
    switchWardrobe(currentOwner);
});
