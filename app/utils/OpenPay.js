import base64 from 'react-native-base64'

class OpenPay {

    static isProd = false;
    static idOpenpay = 'mdifaqwt8rpbzvikqi45';
    static privateKeyOpenpay = 'sk_ef2ec01bb6944e2c8688d32b0f0af1e6';
    static urlTest = `https://sandbox-api.openpay.mx/v1/${OpenPay.idOpenpay}`;
    static urlProd = `https://api.openpay.mx/v1/${OpenPay.idOpenpay}`;

    static async send(endpoint, method, data) {
        const init = {
            method: method,
            headers: { 'Content-Type': 'application/json', 'Authorization': `Basic ${base64.encode(OpenPay.privateKeyOpenpay + ':')}` },
            body: JSON.stringify(data)
        }

        const url = OpenPay.isProd ? OpenPay.urlProd : OpenPay.urlTest;
        const response = await fetch(`${url}/${endpoint}`, init)
        return response.json();
    }

    static post(endpoint, data) {
        return OpenPay.send(endpoint, 'POST', data)
    }

    static async createToken(bodyCard) {
        return OpenPay.post('/tokens', bodyCard);
    }

}

export default OpenPay