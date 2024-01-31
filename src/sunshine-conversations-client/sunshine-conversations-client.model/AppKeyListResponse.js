/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.2.1
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
 * The AppKeyListResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AppKeyListResponse
 * @version 12.2.0
 */
class AppKeyListResponse {
    /**
     * Constructs a new <code>AppKeyListResponse</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyListResponse
     */
    constructor() { 
        
        AppKeyListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AppKeyListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyListResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyListResponse} The populated <code>AppKeyListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppKeyListResponse();

            if (data.hasOwnProperty('keys')) {
                obj['keys'] = ApiClient.convertToType(data['keys'], [AppKey]);
            }
        }
        return obj;
    }

/**
     * Returns List of returned keys.
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/AppKey>}
     */
    getKeys() {
        return this.keys;
    }

    /**
     * Sets List of returned keys.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/AppKey>} keys List of returned keys.
     */
    setKeys(keys) {
        this['keys'] = keys;
    }

}

/**
 * List of returned keys.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/AppKey>} keys
 */
AppKeyListResponse.prototype['keys'] = undefined;






export default AppKeyListResponse;

