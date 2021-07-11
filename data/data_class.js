#!javascript

/** 
 * This will be the base class for the data model. Instances of this class should bind to instances  of the state Object and have a publish subscribe channel.
 * */



/**
 * @param {array} dataParam array containing strings of data
 * @param {object} PubSubref will be called whenever a data setter is used to call
 */
class Model {
    constructor (dataObj, PubSubref) {
        /**
         * Takes an object with key-value pairs
         * The constructor will traverse the passed key values and create getters and setters for each
         * If no data properties are passed, a exception is thrown
         * Finally, a notifyChange Function is provided for - this will notify a change in the data model to the appropriate Publish Subscribe Object, which must be set by the user.
         */
        
        if (
                (typeof PubSubref == 'function') && (Object.getOwnPropertyNames(PubSubref).findIndex('publish') != -1)
            ) {
                this._notificationObj = PubSubref;
        } else {
            alert `Parameter: "${PubSubref}" must be an object or function.`;
        }

        // Insert if statement to check a null value has not been passed

        if (typeof dataObj == 'object'){
            const dataArray = Object.getOwnPropertyNames(dataObj);
            if (dataArray.length < 1) {
                throw 'Data Fields are empty.';
            } else {
                for (let key in dataObj) {
                    // iterate over data obj
                    // create key obj for each key
                    // attach value and data channel as key-values of key obj
                    // data channel will be used to broadcast changes
                    // value will be the broadcast value and the stored value
                    // setter function will send changed data to broadcast function
                    this[key] = {};
                    this[key].value = dataObj[key];
                    let channel_string = `${key}_change`;
                    this[key].dataChannel = channel_string;
                    Object.defineProperty(this, key, {
                        get() {
                            return this[key];
                        }, 
                        set(val) {
                            this[key].value = val;
                            this.notifyChange(this[key].dataChannel, value);
                            }
                        })
                    }
                }
            }
        } // END OF CONSTRUCTOR


        // methods
    /**
     * 
     * @param {string} channel string which will invariably be a value for dataChannel
     * @param {any} value this is any value which will be transmitted over the publisher function
     */
    notifyChange(channel, value) {
        if (this._notificationObj == null) {
            alert `Notification Object not set`;
        } else {
            this._notificationObj.publish(channel, value);
        } 
    }
    
    getKeyList(){
        let keyList = []
        for (let key in this) {
            keyList.push(`${key}: this[${key}]`);
        return keyList;
        }
    }
}
