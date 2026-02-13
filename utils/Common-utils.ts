import cryptoJs from 'crypto-js';

export default class CommonUtils {

    private secretKey: string;


    constructor() {
        // this.secretKey=process.env.SECRET_KEY ? process.env.SECRET_KEY : "";

        /* using if */
        if (process.env.SECRET_KEY) {
            this.secretKey = process.env.SECRET_KEY;
        }
        else {
            throw new Error("Please provide secret Key");
        }
    }

    // method provides encrytped data from String 

    public encryptData(data: string) {
        const encryptedData = cryptoJs.AES.encrypt(data, this.secretKey).toString();
        console.log(encryptedData);
        return encryptedData;
    }


    // provide decrypt Data in string format
    public decryptData(encData: string) {
        const decryptedData = cryptoJs.AES.decrypt(encData, this.secretKey).toString(cryptoJs.enc.Utf8);
        return decryptedData;
    }

    

}