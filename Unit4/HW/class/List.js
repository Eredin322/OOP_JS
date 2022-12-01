class List {
    constructor(array) {
        this.array = array;
    }

    render() {
        const ul = document.createElement('ul');
        for (let i = 0; i < this.array.length; i++) {
            const li = document.createElement('li');
            li.innerHTML = this.array[i];
            ul.appendChild(li);
        }
        document.querySelector('body').appendChild(ul);
        return ul;
    }
}