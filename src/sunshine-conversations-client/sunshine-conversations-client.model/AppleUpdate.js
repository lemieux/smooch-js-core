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
import IntegrationUpdateBase from './IntegrationUpdateBase';

/**
 * The AppleUpdate model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AppleUpdate
 * @version 12.2.0
 */
class AppleUpdate {
    /**
     * Constructs a new <code>AppleUpdate</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/AppleUpdate
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationUpdateBase
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationUpdateBase
     */
    constructor() { 
        IntegrationUpdateBase.initialize(this);
        AppleUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AppleUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppleUpdate} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AppleUpdate} The populated <code>AppleUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppleUpdate();
            IntegrationUpdateBase.constructFromObject(data, obj);
            IntegrationUpdateBase.constructFromObject(data, obj);

        }
        return obj;
    }


}


// Implement IntegrationUpdateBase interface:
/**
 * A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
 * @member {String} displayName
 */
IntegrationUpdateBase.prototype['displayName'] = undefined;




export default AppleUpdate;

