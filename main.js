"use strict";

// リピート再生とランダム再生

{
    let images = [
        "./img/default.jpg"
    ];
    let currentIndex = 0;
    const mainImage = document.getElementById("mainImg");
    mainImage.src = images[currentIndex]; // Not "textContent"

    // forEachは二つ以上の引数に括弧必須
    // images.forEach((image, index) => {
    //     const img = document.createElement("img");
    //     img.src = image;
    //
    //     const li = document.createElement("li");
    //     if (index === currentIndex) {
    //         li.classList.add("current");
    //     }
    //
    //     li.addEventListener("click", () => {
    //         mainImage.src = image;
    //         const thumbnails = document.querySelectorAll(".thumbnails > li");
    //         thumbnails[currentIndex].classList.remove("current");
    //         currentIndex = index;
    //         thumbnails[currentIndex].classList.add("current");
    //     });
    //
    //     li.appendChild(img);
    //     document.querySelector(".thumbnails").appendChild(li);
    // });

    // const nextButton = document.getElementById("next");
    // nextButton.addEventListener("click", () => {
    //     let target = currentIndex + 1;
    //     if (target === images.length) {
    //         target = 0;
    //     }
    //     document.querySelectorAll(".thumbnails > li")[target].click();
    // });

    const changePicture = () => {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 1;
        }
        // document.querySelectorAll(".thumbnails > li")[target].click();
        mainImage.src = images[currentIndex];
        console.log("images[currentIndex]: " + currentIndex);
        console.log(images[currentIndex]);
    }
    // const prevButton = document.getElementById("prev");
    // prevButton.addEventListener("click", () => {
    //     let target = currentIndex - 1;
    //     if (target < 0) {
    //         target = images.length - 1;
    //     }
    //     document.querySelectorAll(".thumbnails > li")[target].click();
    // });

    let isPlaying = false;
    let timeoutId;

    function playSlideshow() {
        timeoutId = setTimeout(() => {
            // nextButton.click();
            changePicture();
            playSlideshow();
        }, 1000);
    }

    // Get the list of image files from main.php
    $('#btnsend').on('click', function(){
        $('#result').text('通信中...');
        // Ajax通信を開始
        $.ajax({
            url: 'main.php',
            type: 'GET',
            dataType: 'text',
            // フォーム要素の内容をハッシュ形式に変換
            data: $('form').serializeArray(),
            timeout: 5000,
        }).done(function(data) {
            // 通信成功時の処理を記述
            console.log("Succeeded: data is ...");
            console.log(data);
            // images = data;
            // const temp = data;
            // const unified = temp.join('');
            // const images = unified.split('./');
            images = data.split('./');
// expected output: "FireAirWater"
            for(let i = 0; i < images.length; i++) {
                console.log("images[i]:" + images[i]);
                // console.log("data[i]:" + data[i]);
            }
            $("#result").text(data);
            playSlideshow();
        }).fail(function(jqXHR, textStatus) {
            // 通信失敗時の処理を記述
            console.log("Failed:");
            // console.log(textStatus);
            $("#result").text(textStatus);
        }).always(function() {
            console.log( "ajax complete" );
        });
    })

    // When pushed the play button
    const play = document.getElementById("play");
    const btnSend = document.getElementById("btnsend");
    play.addEventListener("click", () => {
        console.log("Hello world");
        if (isPlaying === false) {
            btnSend.click();
            // playSlideshow();
            // play.textContent = "PausePause";
            play.value = "Drawing Stop";
        } else {
            clearTimeout(timeoutId);
            // play.textContent = "Play";
            play.value = "Drawing Start";
        }
        isPlaying = !isPlaying; // 値の反転
    });
}