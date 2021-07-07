"use strict";

// Repeat or Random?

{
    let images = [
        "./img/default.jpg"
    ];
    let currentIndex = 0;
    let interval = 3000;
    let isRandom = true;
    const mainImage = document.getElementById("mainImg");
    mainImage.src = images[currentIndex]; // Not "textContent"

    const getRandomNumber = () => {
        let i;
        while(random !== currentIndex) {
            const random = Math.ceil(Math.random() * (images.length - 1));
            i++;
            if(random !== currentIndex) {
                return random;
            } else if(i > 50) {
                // Infinity loop measure
                alert("Error: 'i' has been over 50 at changePictureRandom()");
                return null;
            }
        }
    }

    const changePictureRandom = () => {
        const random = getRandomNumber();
        currentIndex = random;
        mainImage.src = images[currentIndex];
        console.log("currentIndex: " + currentIndex);
    }

    const changePictureOrder = () => {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 1;
        }
        mainImage.src = images[currentIndex];
    }

    const changePicture = () => {
        if(isRandom) {
            changePictureRandom();
        } else {
            changePictureOrder();
        }
    }

    let isPlaying = false;
    let timeoutId;

    const playSlideshow = () => {
        timeoutId = setTimeout(() => {
            changePicture();
            playSlideshow();
        }, interval);
    }

    // Get the list of image files from main.php
    const ajax = () => {
        $('#result').text('通信中...');
        $.ajax({
            url: 'main.php',
            type: 'GET',
            dataType: 'text',
            data: $('form').serializeArray(),
            timeout: 5000,
        }).done((data) => {
            console.log("Succeeded: data is ...");
            console.log(data);
            images = data.split('./');
            for(let i = 0; i < images.length; i++) {
                console.log("images[i]:" + images[i]);
            }
            changePicture();
            playSlideshow();
        }).fail((jqXHR, textStatus) => {
            console.log("Failed:");
            console.log(textStatus);
        }).always(() => {
            console.log( "ajax complete" );
        });
    }

    // When pushed the play button
    const play = document.getElementById("play");
    const elInt = document.getElementById("interval");
    const elRan = document.getElementById("random");
    play.addEventListener("click", () => {
        if (isPlaying === false) {
            interval = parseInt(elInt.value) * 1000;
            isRandom = elRan.checked;
            console.log("isRandom: ");
            console.log(isRandom);
            ajax();
            play.value = "Drawing Stop";
        } else {
            clearTimeout(timeoutId);
            play.value = "Drawing Start";
        }
        isPlaying = !isPlaying; // toggle
    });
}