class Fetch {

    /**
     * @param {string} method 
     * @returns {Promise}
     */
    static send(method, url, data) {
        return new Promise((res, rej) => {
            const headers = new Headers()
            const options = { }

            headers.append("Authorization", "Bearer xbRAvAOJjbUrfgmI9Yy2fhFhHosj35Ggf0hzbpSF")

            options['method'] = method
            options['headers'] = headers
            options['redirect'] = 'follow'

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