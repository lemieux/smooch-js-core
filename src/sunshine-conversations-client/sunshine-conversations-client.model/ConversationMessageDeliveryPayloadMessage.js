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

/**
 * The ConversationMessageDeliveryPayloadMessage model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadMessage
 * @version 12.4.0
 */
class ConversationMessageDeliveryPayloadMessage {
    /**
     * Constructs a new <code>ConversationMessageDeliveryPayloadMessage</code>.
     * The message that was sent.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadMessage
     */
    constructor() { 
        
        ConversationMessageDeliveryPayloadMessage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationMessageDeliveryPayloadMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadMessage} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayloadMessage} The populated <code>ConversationMessageDeliveryPayloadMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationMessageDeliveryPayloadMessage();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns A string representing the ID of the message.
     * @return {String}
     */
    getId() {
        return this.id;
    }

    /**
     * Sets A string representing the ID of the message.
     * @param {String} id A string representing the ID of the message.
     */
    setId(id) {
        this['id'] = id;
    }

}

/**
 * A string representing the ID of the message.
 * @member {String} id
 */
ConversationMessageDeliveryPayloadMessage.prototype['id'] = undefined;






export default ConversationMessageDeliveryPayloadMessage;

