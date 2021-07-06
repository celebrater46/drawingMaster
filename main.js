"use strict";

// Repeat or Random?

{
    let images = [
        "./img/default.jpg"
    ];
    let currentIndex = 0;
    let interval = 2000;
    const mainImage = document.getElementById("mainImg");
    mainImage.src = images[currentIndex]; // Not "textContent"

    const changePicture = () => {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 1;
        }
        mainImage.src = images[currentIndex];
        console.log("images[currentIndex]: " + currentIndex);
        console.log(images[currentIndex]);
    }

    let isPlaying = false;
    let timeoutId;

    const playSlideshow = () => {
        timeoutId = setTimeout(() => {
            changePicture();
            playSlideshow();
            console.log("interval" + interval);
        }, interval);
    }

    // Get the list of image files from main.php
    // $('#btnsend').on('click', () => {
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
    // const btnSend = document.getElementById("btnsend");
    const el = document.getElementById("interval");
    play.addEventListener("click", () => {
        console.log("Hello world");
        if (isPlaying === false) {
            interval = parseInt(el.value) * 1000;
            console.log("el.value" + el.value);
            // btnSend.click();
            ajax();
            play.value = "Drawing Stop";
        } else {
            clearTimeout(timeoutId);
            play.value = "Drawing Start";
        }
        isPlaying = !isPlaying; // toggle
    });
}