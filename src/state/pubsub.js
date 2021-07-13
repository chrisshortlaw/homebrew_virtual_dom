#!javascript

/* --------------------------------- PUBLISHER/SUBSCRIBER MODEL ------------ */


/**
 * The Publisher/Subscriber or Observer Pattern is a way to alert different functions, files or classes of a change in state in a certain function. The functions being alerted as subscribers; the function doing the alerting is the publisher. It is possible to have multiple publishers and multiple subscribers. Most front end frameworks operate a publish/subscribe pattern as part of their state management.
 * 
 * 
 * */



export class PublishSubscribe {
    /**
     * 
     * @param {Array} topic Array of strings denoting topics to subscribe to 
     */
    constructor(topic) {
        

        if (Array.isArray(topic)){
            topic.forEach(element => {
                this[element] = [];
                });
             
        } else {
            throw 'PublishSubscribe Constructor takes array as argument. Topics not loaded.';
        }

        this.topicList = this.topicList.bind(this);
        //this.topics = this.topics.bind(this);
        this.subscribe = this.subscribe.bind(this);
        this.publish = this.publish.bind(this);
        this.getSubscriberList = this.getSubscriberList.bind(this);
        this.unsubscribe = this.unsubscribe.bind(this);
        this.addTopic = this.addTopic.bind(this);
        
    }
    //Getters
    // List of Topics
    topicList() {
        //let list_of_topics = [];
        /*for (let key in Object.keys(this.topics)) {
                list_of_topics.push(`${key}`); */
        let topicList = [];
        let propList = Object.keys(this);
        propList.forEach(prop => {
            if (Array.isArray(this[prop])) {
                topicList.push(prop);
            }
        })
        return topicList;
    }

        //return Object.entries(this);
    

    /**
     * Returns all topics and subscribers
     * Returns array of strings
     */
    allSubscriptions() {
        const subList = [];
        this.topicList.forEach((topic) =>{subList.push(this[topic])});
        
        return subList;
    }


    //Setters
    /**
     * @param {string} entry name of prop for topics obj; all props are arrays;
     * 
     * @returns Property with a getter and setter; getter returns an array; setter pushes to array
     */

    addTopic(entry) {
        
        Object.defineProperty(this, entry, {
            value: [],
            writable: true,
            });
             
           
            }   
        // use Object.define prop and have getters and setters
        
        
    

    //Methods
    /**
     * Subscribes to a topic with a callback Function
     * Takes arguments (topic, callBackFunction)
     * @param {String} topic 
     * @param {Function} callbackFunction 
     */
    subscribe(topic, callbackFunction) {
        /**
         * Sample Execution: PUBSUB.subscribe('UserInput', DATAMODEL.setUserInputString)
         * Subscribe to UserInput channel
         * FIX ME!!!
         */
        if (Object.prototype.hasOwnProperty.call(this, topic)) {
             this[topic].push(callbackFunction);
            } else {
                throw 'No Such Subscription Created';
            }
    }
    /**
     * 
     * @param {String} topic sub'd topic
     * @param {*} output value to be passed to sub'd function
     */
    publish(topic, output) {
        /**
         * Sample: PUBSUB.publish('UserInput', '1')
         * Publishes the string value one to 'UserInput' topic channel, value is an argument to each subscribing function.
         * 
         * 
         * FIX ME!!! USE GETTERS
         */
        if (Object.prototype.hasOwnProperty.call(this, topic)){
            this[topic].forEach((subscriber) => { subscriber(output) });
        } else {
            throw 'No Such Subscribed Topic';
        }
    }

     /**
     * NEEDS FIXING
     * @param {String} topic 
     * @param {Function} callbackFunction 
     */
    unsubscribe(topic, callBackFunction) {
        let subList = this.getSubscriberList(topic);
        const functionIndex = subList.indexOf(callBackFunction);
        if (functionIndex != -1) {
            subList.splice(functionIndex, 1);
            this.topics.topic = subList;
        }
    }
    /**
     * NEEDS FIXING
     * Gets a List of subscribers to a topic
     * @param {string} message string topic to which functions have subscribed
     * Returns an array comprised of functions
     */
    getSubscriberList(topic) {
        if (Object.prototype.hasOwnProperty(this.topics, topic)) {
            return this.topics[topic];
        } else {
            throw 'No Such Subscribed Topic';
        }
    }
}