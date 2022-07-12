/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.9.0
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
import UserUpdateEventAllOfPayload from './UserUpdateEventAllOfPayload';

/**
 * The UserUpdateEventAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateEventAllOf
 * @version 9.9.0
 */
class UserUpdateEventAllOf {
    /**
     * Constructs a new <code>UserUpdateEventAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateEventAllOf
     */
    constructor() { 
        
        UserUpdateEventAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserUpdateEventAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateEventAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateEventAllOf} The populated <code>UserUpdateEventAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserUpdateEventAllOf();

            if (data.hasOwnProperty('payload')) {
                obj['payload'] = UserUpdateEventAllOfPayload.constructFromObject(data['payload']);
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateEventAllOfPayload}
     */
    getPayload() {
        return this.payload;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateEventAllOfPayload} payload
     */
    setPayload(payload) {
        this['payload'] = payload;
    }

}

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateEventAllOfPayload} payload
 */
UserUpdateEventAllOf.prototype['payload'] = undefined;






export default UserUpdateEventAllOf;

