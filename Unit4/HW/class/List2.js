class List2 extends List {
    constructor(array, cssClass) {
        super(array);
        this.cssClass = cssClass;
    }

    render() {
        let ul = super.render();
        ul.classList.add(this.cssClass);
        return ul;
    }
}