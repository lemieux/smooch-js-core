/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.1.0
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
import ConversationMessageDeliveryPayload from './ConversationMessageDeliveryPayload';

/**
 * The ConversationMessageDeliveryFailureEventAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryFailureEventAllOf
 * @version 9.2.0
 */
class ConversationMessageDeliveryFailureEventAllOf {
    /**
     * Constructs a new <code>ConversationMessageDeliveryFailureEventAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryFailureEventAllOf
     */
    constructor() { 
        
        ConversationMessageDeliveryFailureEventAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationMessageDeliveryFailureEventAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryFailureEventAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryFailureEventAllOf} The populated <code>ConversationMessageDeliveryFailureEventAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationMessageDeliveryFailureEventAllOf();

            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ApiClient.convertToType(data['payload'], ConversationMessageDeliveryPayload);
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayload}
     */
    getPayload() {
        return this.payload;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayload} payload
     */
    setPayload(payload) {
        this['payload'] = payload;
    }

}

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageDeliveryPayload} payload
 */
ConversationMessageDeliveryFailureEventAllOf.prototype['payload'] = undefined;






export default ConversationMessageDeliveryFailureEventAllOf;

