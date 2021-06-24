#!javascript

/* --------------------------------- PUBLISHER/SUBSCRIBER MODEL ------------ */

/*  
The Publisher/Subscriber or Observer Pattern is a way to alert different functions, files or classes of a change in state in a certain function. The functions being alerted as subscribers; the function doing the alerting is the publisher. It is possible to have multiple publishers and multiple subscribers. Most front end frameworls operate a publish/subscribe pattern at some stage. In React, it is known as 'state'.
*/

/**Create Class for Publish-Subscribe Pattern */



export class PublishSubscribe {
    /**
     * 
     * @param {[Array]} topic; 
     */
    constructor(topic) {
        this.topics[topic] = topic.forEach(element => {element : []})
    }
    //Getters
    // List of Topics
    get topicList() {
        const topicList = this.topics;
        for (topic in topicList) {
            return (`${topic}`)
        }
    }

    get getSubscriberList(message) {
        if (this.topics.hasOwnProperty(message)) {
            return this.topics.message;
        } else {
            throw 'No Such Subscribed Topic';
        }
    }

    get allSubscriptions() {
        for (topic in topics) {
            return (`${topic}:${topicList[topic]}`);
        }
    }


    //Setters
    /**
     * @param {String} entry name of prop for topics obj; all props are arrays;
     */

    set addTopic(entry) {
        this.topics[entry] = [];
    }

    //Methods
    /**
     * 
     * @param {String} topic 
     * @param {Function} callbackFunction 
     */
    subscribe(topic, callbackFunction) {
        /**
         * Sample Execution: PUBSUB.subscribe('UserInput', DATAMODEL.setUserInputString)
         * Subscribe to UserInput channel
         */
        if (this.topics.hasOwnProperty(topic)) {
             this.topics.topic.push(callbackFunction);
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
         */
        if (this.topics.hasOwnProperty(topic)){
            this.topics.topic.forEach((subscriber) => { subscriber(output) });
        } else {
            throw 'No Such Subscribed Topic';
        }
    }

     /**
     * 
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


}