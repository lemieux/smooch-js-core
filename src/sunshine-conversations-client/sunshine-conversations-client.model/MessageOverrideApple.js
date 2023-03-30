/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.12.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.3.1
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient';
import MessageOverridePayload from './MessageOverridePayload';

/**
 * The MessageOverrideApple model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MessageOverrideApple
 * @version 9.13.0
 */
class MessageOverrideApple {
    /**
     * Constructs a new <code>MessageOverrideApple</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverrideApple
     */
    constructor() { 
        
        MessageOverrideApple.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MessageOverrideApple</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverrideApple} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverrideApple} The populated <code>MessageOverrideApple</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MessageOverrideApple();

            if (data.hasOwnProperty('apple')) {
                obj['apple'] = MessageOverridePayload.constructFromObject(data['apple']);
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload}
     */
    getApple() {
        return this.apple;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload} apple
     */
    setApple(apple) {
        this['apple'] = apple;
    }

}

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload} apple
 */
MessageOverrideApple.prototype['apple'] = undefined;






export default MessageOverrideApple;

