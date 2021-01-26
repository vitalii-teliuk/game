(function(){
    Array.prototype.shuffle = function () {
        var i = this.length,
            j, temp;
        if (i == 0) return this;
        while (--i) {
            j = Math.floor(Math.random() * (i + 1));
            temp = this[i];
            this[i] = this[j];
            this[j] = temp;
        }
        return this;
    }
    let selectFirstImg;
    let selectSecondImg;

    let images = [];
    function createArrayImages() {
        for (let i = 1; i < 9; i++) {
            let img = document.createElement('img');
            img.setAttribute('src', `images/${i}.jpeg`);
            images.push(img);
        }
        for (let i = 1; i < 9; i++) {
            let img = document.createElement('img');
            img.setAttribute('src', `images/${i}.jpeg`);
            images.push(img);
        }
    }
    function appendElementsImages() {
        let container = document.querySelector('.container');
        let btn = document.querySelector('.start__btn');
        btn.addEventListener('click', event => {
            container.innerHTML = '';
            const shuffleImages = images.shuffle();
            shuffleImages.forEach(img => {
                let card = document.createElement('div')
                card.classList.add('card');
                card.appendChild(img);
                container.appendChild(card);
                img.style.opacity = '1';
                clickImg(img);
            });
            setTimeout(() => {
                images.forEach(img => img.style.opacity = '0');
            }, 1000);
        })
    }

    function clickImg(img) {
        img.addEventListener('click', event => {
            event.target.style.opacity = '0.5';
            if (!selectFirstImg) {
                selectFirstImg = event.target;
                selectFirstImg.style.pointerEvents = 'none';
            } else {
                selectSecondImg = event.target;
            }
            if (selectSecondImg && selectFirstImg) {
                if (selectFirstImg.src !== selectSecondImg.src) {
                    setTimeout(() => {
                        selectFirstImg.style.opacity = '0';
                        selectSecondImg.style.opacity = '0';
                        selectFirstImg.style.pointerEvents = null;
                        selectFirstImg = null;
                        selectSecondImg = null;
                    }, 100);
                } else {
                    selectFirstImg.style.opacity = '1';
                    selectSecondImg.style.opacity = '1';
                    selectSecondImg.style.pointerEvents = 'none';
                    selectFirstImg = null;
                    selectSecondImg = null;
                }
            }
        });
    }

    createArrayImages();
    appendElementsImages();
})()
