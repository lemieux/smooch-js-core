/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.4.5
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
import Message from './Message';

/**
 * The QuotedMessageMessage model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/QuotedMessageMessage
 * @version 9.4.5
 */
class QuotedMessageMessage {
    /**
     * Constructs a new <code>QuotedMessageMessage</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/QuotedMessageMessage
     */
    constructor() { 
        
        QuotedMessageMessage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QuotedMessageMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/QuotedMessageMessage} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/QuotedMessageMessage} The populated <code>QuotedMessageMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuotedMessageMessage();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], Message);
            }
        }
        return obj;
    }

/**
     * Returns The type of quotedMessage - a complete Sunshine Conversations message is provided.
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The type of quotedMessage - a complete Sunshine Conversations message is provided.
     * @param {String} type The type of quotedMessage - a complete Sunshine Conversations message is provided.
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Message}
     */
    getMessage() {
        return this.message;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Message} message
     */
    setMessage(message) {
        this['message'] = message;
    }

}

/**
 * The type of quotedMessage - a complete Sunshine Conversations message is provided.
 * @member {String} type
 * @default 'message'
 */
QuotedMessageMessage.prototype['type'] = 'message';

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Message} message
 */
QuotedMessageMessage.prototype['message'] = undefined;






export default QuotedMessageMessage;
