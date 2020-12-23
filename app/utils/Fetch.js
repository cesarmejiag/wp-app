/**
 * @author cesarmejia
 * @class
 * Reference: https://documenter.getpostman.com/view/5293044/TVYAgM2f#1e3f188a-b5f5-4bb7-8004-c89d0599389a
 */
class Fetch {

    /**
     * @type {string}
     */
    static url = 'https://wiskipix.mx/api/v1'

    /**
     * Make a request.
     * @param {string} endpoint
     * @param {string} method 
     * @param {object} data
     * @param {string} token
     * @returns {Promise}
     */
    static async send(endpoint, method, data, token) {
        const init = {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            redirect: 'follow'
        }

        if (token && typeof token === 'string') {
            init['headers']['Authorization'] = `Bearer ${token}`
        }

        if ((method === 'POST' || method === 'PUT') && data instanceof Object) {
            data['token_name'] = Date.now()
            init['body'] = JSON.stringify(data)
        }

        const response = await fetch(`${Fetch.url}/${endpoint}`, init)
        return response.json()
    }

    /**
     * Make a GET request.
     * @param {string} endpoint 
     * @param {string} token
     * @returns {Promise}
     */
    static get(endpoint, token) {
        return Fetch.send(endpoint, 'GET', token)
    }

    /**
     * Make a POST request.
     * @param {string} endpoint 
     * @param {object} data 
     * @param {string} token
     * @returns {Promise}
     */
    static post(endpoint, data, token) {
        return Fetch.send(endpoint, 'POST', data, token)
    }

    /**
     * Make a PUT request.
     * @param {string} endpoint 
     * @param {object} data 
     * @param {string} token 
     * @returns {Promise}
     */
    static put(endpoint, data, token) {
        return Fetch.send(endpoint, 'PUT', data, token)
    }

}

export default Fetch