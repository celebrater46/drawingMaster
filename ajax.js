"use strict";

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
        // console.log(data);
        $("#result").text(data);
    }).fail(function(jqXHR, textStatus) {
        // 通信失敗時の処理を記述
        console.log("Failed:");
        // console.log(textStatus);
        $("#result").text(textStatus);
    }).always(function() {
        console.log( "ajax complete" );
    });
})