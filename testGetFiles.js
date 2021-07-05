"use strict";

const sourceFolder = Folder("./img");
if (sourceFolder != null)
{
    let fileList = sourceFolder.getFiles();
    console.log("fileList: ");
    console.log(fileList);
}