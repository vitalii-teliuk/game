(function(){

    let images = [];

    function createImages() {
        for (let i = 1; i < 9; i++) {
            let img = document.createElement('img');
            img.setAttribute('src', `images/${i}.jpeg`);
            images.push(img);
        }
        let container = document.querySelector('.container');
        images.forEach(img => container.appendChild(img));
    }
    createImages();

})()