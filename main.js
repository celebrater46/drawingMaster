"use strict";

// Repeat or Random?

{
    let images = [
        "./img/default.jpg"
    ];
    let currentIndex = 0;
    let interval = 3000;
    const mainImage = document.getElementById("mainImg");
    mainImage.src = images[currentIndex]; // Not "textContent"

    const changePicture = () => {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 1;
        }
        mainImage.src = images[currentIndex];
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
        }).fail(function(jqXHR, textStatus) {
            console.log("Failed:");
            console.log(textStatus);
        }).always(function() {
            console.log( "ajax complete" );
        });
    }

    // When pushed the play button
    const play = document.getElementById("play");
    const el = document.getElementById("interval");
    play.addEventListener("click", () => {
        if (isPlaying === false) {
            interval = parseInt(el.value) * 1000;
            ajax();
            play.value = "Drawing Stop";
        } else {
            clearTimeout(timeoutId);
            play.value = "Drawing Start";
        }
        isPlaying = !isPlaying; // toggle
    });
}