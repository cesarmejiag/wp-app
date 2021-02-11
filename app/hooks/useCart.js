import AsyncStorage from '@react-native-async-storage/async-storage'
// import { v4 as uuidv4 } from 'uuid'
import { useState, useEffect, useRef } from 'react'

const KEY = 'cart';

function useCart() {
    const isMounted = useRef(true);
    const [cartItems, setCartItems] = useState([]);
    const cartTotal = cartItems.map(item => item.amount).reduce((a, b) => a + b, 0);

    useEffect(() => {
        return () => { isMounted.current = true; }
    }, [])

    useEffect(() => {
        (async () => setCartItems(await getItems()))();
    }, [cartItems])


    const addToCart = async (product, quantity = 1) => {
        try {
            const items = await getItems();
            const index = findIndex(product, items);

            if (index >= 0) {
                items[index]['quantity'] += quantity;
                items[index]['amount'] = items[index]['price'] * items[index]['quantity'];
            } else {
                items.push({
                    // "uuid": uuidv4(),
                    "label": "",
                    "color": "",
                    "is_gift": false,
                    "product_id": product["id"],
                    "product_name": product["name"],
                    "product_image": product["main_photo_path"],
                    "price": product["sale_price"],
                    "quantity": quantity,
                    "amount": product["sale_price"] * quantity,
                    "photos": []
                })
            }

            await AsyncStorage.setItem(KEY, JSON.stringify(items));
            setCartItems(items);

        } catch (err) { console.log('Cart: Can\'t add item to cart', err); }
    }


    const findIndex = (product, items) => {
        return items.map(i => i['product_id']).indexOf(product['product_id']);
    }


    const getItems = async () => {
        try {
            const json = await AsyncStorage.getItem(KEY);
            return json ? JSON.parse(json) : [];
        } catch (err) { console.log('Cart: Can\'t retrieve items from cart.', err); }
    }


    const removeFromCart = async (product, quantity = 1) => {
        try {
            const items = await getItems();
            const index = findIndex(product, items);

            if (index >= 0) {
                if (items[index]['quantity'] > 1) {
                    items[index]['quantity'] -= quantity;
                    items[index]['amount'] = items[index]['price'] * items[index]['quantity'];
                } else {
                    items.splice(index, 1);
                }

                await AsyncStorage.setItem(KEY, JSON.stringify(items));
                setCartItems(items);
            }
        } catch (err) { console.log('Cart: Can\'t remove item from cart.', err) }
    }


    const resetCart = async () => {
        try {
            await AsyncStorage.setItem(KEY, JSON.stringify([]));
            setCartItems([]);
        } catch (err) { console.log('Cart: Can\'t reset cart.', err) }
    }

    return { cartItems, cartTotal, addToCart, removeFromCart, resetCart };
}

export default useCart
