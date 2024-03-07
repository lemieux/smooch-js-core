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
import AppKey from './AppKey';

/**
 * The AppKeyResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AppKeyResponse
 * @version 12.3.1
 */
class AppKeyResponse {
    /**
     * Constructs a new <code>AppKeyResponse</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyResponse
     */
    constructor() { 
        
        AppKeyResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AppKeyResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyResponse} The populated <code>AppKeyResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppKeyResponse();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], AppKey);
            }
        }
        return obj;
    }

/**
     * Returns The created key object.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AppKey}
     */
    getKey() {
        return this.key;
    }

    /**
     * Sets The created key object.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppKey} key The created key object.
     */
    setKey(key) {
        this['key'] = key;
    }

}

/**
 * The created key object.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/AppKey} key
 */
AppKeyResponse.prototype['key'] = undefined;






export default AppKeyResponse;

