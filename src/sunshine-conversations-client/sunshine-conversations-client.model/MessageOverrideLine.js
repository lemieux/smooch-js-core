/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 13.2.0
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
 * The MessageOverrideLine model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MessageOverrideLine
 * @version 13.2.0
 */
class MessageOverrideLine {
    /**
     * Constructs a new <code>MessageOverrideLine</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverrideLine
     */
    constructor() { 
        
        MessageOverrideLine.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MessageOverrideLine</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverrideLine} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverrideLine} The populated <code>MessageOverrideLine</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MessageOverrideLine();

            if (data.hasOwnProperty('line')) {
                obj['line'] = MessageOverridePayload.constructFromObject(data['line']);
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload}
     */
    getLine() {
        return this.line;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload} line
     */
    setLine(line) {
        this['line'] = line;
    }

}

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverridePayload} line
 */
MessageOverrideLine.prototype['line'] = undefined;






export default MessageOverrideLine;

