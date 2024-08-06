/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.7.0
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
import UserMergeEventAllOfPayload from './UserMergeEventAllOfPayload';

/**
 * The UserMergeEventAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOf
 * @version 12.7.0
 */
class UserMergeEventAllOf {
    /**
     * Constructs a new <code>UserMergeEventAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOf
     */
    constructor() { 
        
        UserMergeEventAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserMergeEventAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOf} The populated <code>UserMergeEventAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserMergeEventAllOf();

            if (data.hasOwnProperty('payload')) {
                obj['payload'] = UserMergeEventAllOfPayload.constructFromObject(data['payload']);
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayload}
     */
    getPayload() {
        return this.payload;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayload} payload
     */
    setPayload(payload) {
        this['payload'] = payload;
    }

}

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayload} payload
 */
UserMergeEventAllOf.prototype['payload'] = undefined;






export default UserMergeEventAllOf;

