#!javascript

/** 
 * This will be the base class for the data model. Instances of this class should bind to instances  of the state Object and have a publish subscribe channel.
 * 
 * */


/**
 * Model shall be the class for all data objects. It takes an instance of PublishSubscribe as an argument in order to ensure it has a means of communicating with other parts of an app.
 * Instances of Model do not contain any data, data is added after instantiation with the AddData method. This provides for the automatic broadcasting of any changes to data model.
 * 
 * 
 * This class is coupled with Publish Subscribe, but is not directly coupled with the State Manager. Users are free to substitute any other state manager or model for that matter if they so wish.
 * @param {object} PubSubref will be called whenever a data setter is used to call
 */
export class Model {

    /**
     * This class produces objects which will hold the data for our apps
     * These objects will interact with the publish subscribe instance which is passed as a parameter
     * This permits any change in the data model (e.g. Input from user, a function returning a new value) to be broadcast on a channel to any function which might be listening
     * Future versions of this class will consider more loosely coupling with the publish subscribe object, but, as it stands
     * @param {object} PubSubref Instance of PublishSubscribe Obj
     */
    constructor (PubSubref) {
        /**
         * Takes an object with key-value pairs
         * The constructor will traverse the passed key values and create getters and setters for each
         * If no data properties are passed, a exception is thrown
         * Finally, a notifyChange Function is provided for - this will notify a change in the data model to the appropriate Publish Subscribe Object, which must be set by the user.
         */
        

        if (
                (typeof PubSubref == 'object') && ((PubSubref._isPubSubObj) == true) && ((Object.getOwnPropertyNames(PubSubref)).indexOf('publish') != -1)
            ) {
                this._notificationObj = PubSubref;
        } else {
            alert `Parameter: "${PubSubref}" must be an instance of PublishSubscribe. Use new PublishSubscribe({insert array of topics here}) to create`;
        }

        this.dataChannels = {};

        this.notifyChange = this.notifyChange.bind(this);
        this.addData = this.addData.bind(this);
        this.getDataChannels = this.getDataChannels.bind(this);
        this.getKeyList = this.getKeyList.bind(this);

        // Insert if statement to check a null value has not been passed

       
        } // END OF CONSTRUCTOR


    // METHODS
    /**
     * @param {string} dataField
     */
    setdataChannels(dataField) {
        let newChan = `${dataField}`+ '_change';
        
        this['dataChannels'][dataField] = newChan;
        this._notificationObj.addTopic(newChan);
        }

    /**
     * This function shall be used to set the data field on a class instance. Getters and setters are applied automatically and publish subscribe is bound to the setter
     * @param {string} key the key that will attach to the data instance
     * @param {*} val this value will be set after the getters and setters have been attached and the property defined - can be any value
     */
    
    addData(key, val) {

        // Consider setting a hidden variable for data

        Object.defineProperty(this, key, {
            enumerable: true,
            configurable: true,

            get() {
                return this[`_${key}`]
            },
 
            set(val) {
                this[`_${key}`] = val;
                this.notifyChange(this['dataChannels'][key], val);
                }
            })
        this.setdataChannels(key);
        //this._notificationObj.addTopic(dataChannel);
        this[key] = val;
        
    }
    /**
     * 
     * @returns array of strings representing dataChannels
     */
    getDataChannels() {
        const chans = (Object.keys(this.dataChannels)).map(key => this['dataChannels'][key]);
        return chans;
    }
    /**
     * 
     * @param {string} key 
     * @returns String value of key-value pair
     */
    getDataChannel(key) {

        return this['dataChannels'][key];
    }

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
