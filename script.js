// ==========================================
// ❤️ 3RD ANNIVERSARY WEBSITE
// LYRA MARIE MACATANGAY
// SEPTEMBER 21, 2026
// ==========================================


// ==========================================
// ⏰ COUNTDOWN
// ==========================================

// September 21, 2026 at 12:00 AM
// JavaScript months start at 0
// September = 8

const anniversaryDate = new Date(
    2026,
    8,
    21,
    0,
    0,
    0
).getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const distance = anniversaryDate - now;

    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");
    const message = document.getElementById("countdownMessage");


    // Check if countdown exists
    if (!days || !hours || !minutes || !seconds) {

        console.log("Countdown elements not found.");

        return;
    }


    // Anniversary has arrived
    if (distance <= 0) {

        days.textContent = "00";
        hours.textContent = "01";
        minutes.textContent = "18";
        seconds.textContent = "27";


        if (message) {

            message.innerHTML =
                "❤️✨ HAPPY 3RD ANNIVERSARY, LYRA! ✨❤️";

        }

        return;
    }


    // Calculate time

    const totalSeconds =
        Math.floor(distance / 1000);


    const d =
        Math.floor(totalSeconds / 86400);


    const h =
        Math.floor(
            (totalSeconds % 86400) / 3600
        );


    const m =
        Math.floor(
            (totalSeconds % 3600) / 60
        );


    const s =
        totalSeconds % 60;


    // Display countdown

    days.textContent =
        String(d).padStart(2, "0");


    hours.textContent =
        String(h).padStart(2, "0");


    minutes.textContent =
        String(m).padStart(2, "0");


    seconds.textContent =
        String(s).padStart(2, "0");
}


// Start countdown
updateCountdown();


// Update every second
setInterval(updateCountdown, 1000);



// ==========================================
// 💕 FLOATING HEARTS
// ==========================================

const heartsContainer =
    document.querySelector(".hearts");


function createHeart() {

    if (!heartsContainer) {
        return;
    }


    const heart =
        document.createElement("div");


    heart.className = "heart";


    const heartSymbols = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💜",
        "🤍"
    ];


    heart.textContent =
        heartSymbols[
            Math.floor(
                Math.random() *
                heartSymbols.length
            )
        ];


    heart.style.position = "fixed";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.bottom = "-50px";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    heart.style.zIndex = "9999";

    heart.style.pointerEvents = "none";


    const duration =
        Math.random() * 5 + 5;


    heart.style.transition =
        "transform " +
        duration +
        "s linear, opacity " +
        duration +
        "s linear";


    heartsContainer.appendChild(heart);


    setTimeout(function() {

        heart.style.transform =
            "translateY(-110vh) rotate(360deg)";

        heart.style.opacity = "0";

    }, 100);


    setTimeout(function() {

        heart.remove();

    }, duration * 1000);
}


setInterval(createHeart, 700);



// ==========================================
// 💖 CLICK HEART
// ==========================================

document.addEventListener(
    "click",
    function(event) {

        const heart =
            document.createElement("div");


        heart.textContent = "❤️";


        heart.style.position = "fixed";

        heart.style.left =
            event.clientX + "px";

        heart.style.top =
            event.clientY + "px";

        heart.style.fontSize = "25px";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "10000";

        heart.style.transition =
            "transform 1s ease, opacity 1s ease";


        document.body.appendChild(heart);


        setTimeout(function() {

            heart.style.transform =
                "translateY(-80px) scale(1.5)";

            heart.style.opacity = "0";

        }, 50);


        setTimeout(function() {

            heart.remove();

        }, 1000);

    }
);



// ==========================================
// ✨ SPARKLES
// ==========================================

function createSparkle() {

    const sparkle =
        document.createElement("div");


    sparkle.textContent = "✨";


    sparkle.style.position = "fixed";

    sparkle.style.left =
        Math.random() * 100 + "vw";

    sparkle.style.top =
        Math.random() * 100 + "vh";

    sparkle.style.fontSize =
        Math.random() * 15 + 10 + "px";

    sparkle.style.pointerEvents = "none";

    sparkle.style.zIndex = "9998";

    sparkle.style.transition =
        "opacity 1.5s ease, transform 1.5s ease";


    document.body.appendChild(sparkle);


    setTimeout(function() {

        sparkle.style.opacity = "0";

        sparkle.style.transform =
            "scale(2) rotate(180deg)";

    }, 100);


    setTimeout(function() {

        sparkle.remove();

    }, 1600);
}


setInterval(createSparkle, 600);



// ==========================================
// 📸 MEMORY IMAGE POPUP
// ==========================================

const memoryImages =
    document.querySelectorAll(
        ".photo-card img"
    );


memoryImages.forEach(function(image) {

    image.addEventListener(
        "click",
        function() {

            const overlay =
                document.createElement("div");


            overlay.style.position = "fixed";

            overlay.style.top = "0";

            overlay.style.left = "0";

            overlay.style.width = "100%";

            overlay.style.height = "100%";

            overlay.style.background =
                "rgba(30, 10, 50, 0.92)";

            overlay.style.display = "flex";

            overlay.style.alignItems = "center";

            overlay.style.justifyContent = "center";

            overlay.style.zIndex = "20000";

            overlay.style.cursor = "pointer";


            const bigImage =
                document.createElement("img");


            bigImage.src = image.src;


            bigImage.style.maxWidth = "90%";

            bigImage.style.maxHeight = "90%";

            bigImage.style.borderRadius = "20px";

            bigImage.style.boxShadow =
                "0 0 40px rgba(255,255,255,0.5)";


            overlay.appendChild(bigImage);

            document.body.appendChild(overlay);


            overlay.addEventListener(
                "click",
                function() {

                    overlay.remove();

                }
            );

        }
    );

});



// ==========================================
// 💕 REASON CARD EFFECT
// ==========================================

const reasonCards =
    document.querySelectorAll(
        ".reason-card"
    );


reasonCards.forEach(function(card) {

    card.addEventListener(
        "mouseenter",
        function() {

            card.style.transform =
                "translateY(-10px) scale(1.03)";

            card.style.transition =
                "0.3s ease";

        }
    );


    card.addEventListener(
        "mouseleave",
        function() {

            card.style.transform =
                "translateY(0) scale(1)";

        }
    );

});



// ==========================================
// 🌸 SMOOTH NAVIGATION
// ==========================================

const navLinks =
    document.querySelectorAll(
        "a[href^='#']"
    );


navLinks.forEach(function(link) {

    link.addEventListener(
        "click",
        function(event) {

            const targetID =
                this.getAttribute("href");


            if (
                !targetID ||
                targetID === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(
                    targetID
                );


            if (target) {

                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

});



// ==========================================
// 💌 LETTER ANIMATION
// ==========================================

const letters =
    document.querySelectorAll(
        ".letter"
    );


letters.forEach(function(letter) {

    letter.style.opacity = "0";

    letter.style.transform =
        "translateY(30px)";

    letter.style.transition =
        "opacity 1s ease, transform 1s ease";


    const letterObserver =
        new IntersectionObserver(
            function(entries) {

                entries.forEach(
                    function(entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.style.opacity =
                                "1";

                            entry.target.style.transform =
                                "translateY(0)";

                            letterObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    letterObserver.observe(letter);

});



// ==========================================
// 🎉 ANNIVERSARY MESSAGE
// ==========================================

window.addEventListener(
    "load",
    function() {

        console.log(
            "❤️ Anniversary website loaded!"
        );

        console.log(
            "❤️ Happy 3rd Anniversary, Lyra!"
        );

    }
);