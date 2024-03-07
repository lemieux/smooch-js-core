/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.3.1
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
 * The MessageOverrideMessenger model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MessageOverrideMessenger
 * @version 12.3.1
 */
class MessageOverrideMessenger {
    /**
     * Constructs a new <code>MessageOverrideMessenger</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverrideMessenger
     */
    constructor() { 
        
        MessageOverrideMessenger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MessageOverrideMessenger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverrideMessenger} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverrideMessenger} The populated <code>MessageOverrideMessenger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MessageOverrideMessenger();

            if (data.hasOwnProperty('messenger')) {
                obj['messenger'] = MessageOverridePayload.constructFromObject(data['messenger']);
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload}
     */
    getMessenger() {
        return this.messenger;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload} messenger
     */
    setMessenger(messenger) {
        this['messenger'] = messenger;
    }

}

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload} messenger
 */
MessageOverrideMessenger.prototype['messenger'] = undefined;






export default MessageOverrideMessenger;

