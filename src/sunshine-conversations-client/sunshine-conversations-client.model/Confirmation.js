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
import MessagePost from './MessagePost';

/**
 * The Confirmation model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Confirmation
 * @version 13.2.0
 */
class Confirmation {
    /**
     * Constructs a new <code>Confirmation</code>.
     * The confirmation options of the link request.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Confirmation
     * @param type {module:sunshine-conversations-client/sunshine-conversations-client.model/Confirmation.TypeEnum} The type of confirmation.
     */
    constructor(type) { 
        
        Confirmation.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>Confirmation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Confirmation} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Confirmation} The populated <code>Confirmation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Confirmation();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], MessagePost);
            }
        }
        return obj;
    }

/**
     * Returns The type of confirmation.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Confirmation.TypeEnum}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The type of confirmation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Confirmation.TypeEnum} type The type of confirmation.
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The message used to reach out to the user, if desired. Messages sent via this method can only be of type text and image. If actions are included they can only be of type link. The confirmation message will not be added to the user’s conversation.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessagePost}
     */
    getMessage() {
        return this.message;
    }

    /**
     * Sets The message used to reach out to the user, if desired. Messages sent via this method can only be of type text and image. If actions are included they can only be of type link. The confirmation message will not be added to the user’s conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessagePost} message The message used to reach out to the user, if desired. Messages sent via this method can only be of type text and image. If actions are included they can only be of type link. The confirmation message will not be added to the user’s conversation.
     */
    setMessage(message) {
        this['message'] = message;
    }

}

/**
 * The type of confirmation.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Confirmation.TypeEnum} type
 */
Confirmation.prototype['type'] = undefined;

/**
 * The message used to reach out to the user, if desired. Messages sent via this method can only be of type text and image. If actions are included they can only be of type link. The confirmation message will not be added to the user’s conversation.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/MessagePost} message
 */
Confirmation.prototype['message'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Confirmation['TypeEnum'] = {

    /**
     * value: "immediate"
     * @const
     */
    "immediate": "immediate",

    /**
     * value: "userActivity"
     * @const
     */
    "userActivity": "userActivity",

    /**
     * value: "prompt"
     * @const
     */
    "prompt": "prompt"
};



export default Confirmation;

