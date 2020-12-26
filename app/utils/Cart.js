import AsyncStorage from '@react-native-async-storage/async-storage'

export default class Cart {

    static KEY = 'cart';

    /**
     * Add item.
     * @param {object} item 
     * @param {number} quantity
     * @returns {Promise}
     */
    static add(item, quantity = 1) {
        return new Promise(async (res, rej) => {
            try {
                const items = await Cart.get();
                const index = Cart.findIndex(item, items);

                if (index >= 0) {
                    items[index].quantity += quantity;
                } else {
                    items.push({
                        id: item.id,
                        item: item,
                        isGift: false,
                        quantity: quantity
                    });
                }

                await AsyncStorage.setItem(Cart.KEY, JSON.stringify(items));
                res();
            } catch (err) { rej(err); }
        });
    }

    /**
     * Remove all items.
     */
    static clear() {
        return AsyncStorage.removeItem(Cart.KEY);
    }

    /**
     * Find item in array of items and get his index.
     * @param {object} item 
     * @param {object[]} items 
     * @returns {number}
     */
    static findIndex(item, items) {
        return items.map(i => i.id).indexOf(item.id);
    }

    /**
     * Get items.
     * @returns {Promise}
     */
    static get() {
        return new Promise(async (res, rej) => {
            try {
                const items = await AsyncStorage.getItem(Cart.KEY);
                res(items ? JSON.parse(items) : []);
            } catch (err) { rej(err); }
        });
    }

    /**
     * Remove item.
     * @param {object} item
     * @param {number} quantity
     * @returns {Promise}
     */
    static remote(item, quantity = 1) {

    }
}
