class List3 extends List {
    constructor(array, cssClass) {
        super(array);
        this.cssClass = cssClass;
    }

    render() {
        let ul = super.render();
        for (let i = 0; i < this.cssClass.length; i++) {
            ul.classList.add(this.cssClass[i]);
        }
        ul.appendChild(li);
        return ul;
    }
}