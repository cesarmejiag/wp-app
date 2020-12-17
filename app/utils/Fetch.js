/**
 * @author cesarmejia
 * @class
 * Reference: https://documenter.getpostman.com/view/5293044/TVYAgM2f#1e3f188a-b5f5-4bb7-8004-c89d0599389a
 */
class Fetch {

    /**
     * @param {string} method 
     * @returns {Promise}
     */
    static send(method, url, data) {
        return new Promise((res, rej) => {
            const headers = new Headers()
            const options = { }

            headers.append("Authorization", "Bearer 1|NvwPrPSHsY2GTnLKfBh5jh4w80AnY5OrHsT0U6tU")

            options['method'] = method
            options['headers'] = headers
            options['redirect'] = 'follow'

            if (method === 'POST' || method === 'PUT') {
                options['body'] = JSON.stringify(data)
            }

            console.log(options)

            fetch(url, options)
                .then(res => res.json())
                .then(json => { res(json) })
                .catch(console.log)
        })
    }

    /**
     * @param {string} url 
     * @returns {Promise}
     */
    static get(url) {
        return Fetch.send('GET', url)
    }

    /**
     * @param {string} url 
     * @param {object} data 
     * @returns {Promise}
     */
    static post(url, data) {
        return Fetch.send('POST', url, data)
    }

}

export default Fetch