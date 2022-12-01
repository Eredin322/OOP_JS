class ModernButton extends Button {
    constructor(width, height, background, value, borderRadius) {
        super(width, height, background, value);
        this.borderRadius = borderRadius;
    }
    render() {
        super.render().style.borderRadius = this.borderRadius + '%';
    }
}

let btn2 = new ModernButton(100, 100, 'blue', 'Push me', 100);
btn2.render();