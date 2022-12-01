class Button {
    constructor(width, height, background, value) {
        this.width = width;
        this.height = height;
        this.background = background;
        this.value = value;
    }

    render() {
        const btn = document.createElement('button');
        btn.style.width = this.width + 'px';
        btn.style.height = this.height + 'px';
        btn.style.background = this.background;
        btn.innerHTML = this.value;
        document.querySelector('body').appendChild(btn);
        return btn;
    }
}

let btn1 = new Button(100, 100, 'blue', 'Push me');
btn1.render();