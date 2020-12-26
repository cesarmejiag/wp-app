
export default class Formatter {

     /**
     * Get money format of an amount.
     * @param {number} amount 
     * @param {string} symbol
     * @returns {string}
     */
    static currency(amount, symbol = '$') {
        return `${symbol} ${amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    }

}