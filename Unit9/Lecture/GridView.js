class GridView {
    /**
     * properties
     * @param [array] _tableClass   - css классы оформления
     * @param [array] data          - входные данные
     * @param [array] _attribute    - управляем, что и как выводим из входных данных data
     * @param [array] _element      - куда выводить таблицу
     * @param [array] _header       - заголовок таблицы
     * @param [array] _headerClass  - css классы заголовка
     */
    constructor() {
        this._header = '';
        this._headerClass = [];
        this._tableClass = [];
        this._element = 'body';
        this._attribute = [];
    }
    /**
     * Method to set header
     */

    set header(header) {
        if (typeof header === 'string' && header.trim() !== '') {
            this._header = header.trim();
            return true;
        }
        return false
    }

    /**
     * Method to show GridViewTable
     */

    set headerClass(headerClass) {
        if (typeof headerClass === 'object') {
            this._headerClass = headerClass;
            return true;
        }
        return false
    }

    /**
     * Method to set element
     */

    set element(element) {
        if (document.querySelector(element)) {
            this._element = document.querySelector(element);
            return true;
        }
        return false
    }

    /**
     * Method to show GridViewTable
     */

    render() {

    }
}