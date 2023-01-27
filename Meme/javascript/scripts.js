function enablePhotoUpload(){
    const imageInput = document.querySelector("#image-input");

    imageInput.addEventListener("change", function(){
        const reader = new FileReader();
    })
}

async function mapImageList(){
    const memesObject = [
        {
            "name": "chapolin",
            "path": "/pictures/chapolin.jpg"
        },
        {
            "name": "chloe",
            "path": "/pictures/chloe.jpg"
        },
        {
            "name": "computer-reaction",
            "path": "/pictures/computer-reaction.jpg"
        },
        {
            "name": "funny-cat1",
            "path": "/pictures/funny-cat1.png"
        },
        {
            "name": "funny-cat2",
            "path": "/pictures/funny-cat2.png"
        },
        {
            "name": "like-a-boss",
            "path": "/pictures/like-a-boss.png"
        },
        {
            "name": "wtf",
            "path": "/pictures/wtf.png"
        },
    ]
    return memesObject;
}

async function createGallery(imageList){
    const memeSelector = document.querySelector("#memes-list");
    imageList.forEach(picture => {
        let newOption = document.createElement("option");
        newOption.text = picture.name.toUpperCase();
        newOption.value = picture.path;
        memeSelector.appendChild(newOption);
    });
}

async function changeMemePicture(photo){
    let displayImage = document.querySelector("#display-image");
    displayImage.style.backgroundImage = `url('${photo}')`
}

async function main(){
    const memesImageList = await mapImageList();
    await createGallery(memesImageList);
    await changeMemePicture(memesImageList[1].path);
}

main();