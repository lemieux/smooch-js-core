/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 14.3.0
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
import SwitchboardIntegration from './SwitchboardIntegration';

/**
 * The SwitchboardIntegrationResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationResponse
 * @version 14.3.2
 */
class SwitchboardIntegrationResponse {
    /**
     * Constructs a new <code>SwitchboardIntegrationResponse</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationResponse
     */
    constructor() { 
        
        SwitchboardIntegrationResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SwitchboardIntegrationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationResponse} The populated <code>SwitchboardIntegrationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SwitchboardIntegrationResponse();

            if (data.hasOwnProperty('switchboardIntegration')) {
                obj['switchboardIntegration'] = ApiClient.convertToType(data['switchboardIntegration'], SwitchboardIntegration);
            }
        }
        return obj;
    }

/**
     * Returns The switchboard integration.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegration}
     */
    getSwitchboardIntegration() {
        return this.switchboardIntegration;
    }

    /**
     * Sets The switchboard integration.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegration} switchboardIntegration The switchboard integration.
     */
    setSwitchboardIntegration(switchboardIntegration) {
        this['switchboardIntegration'] = switchboardIntegration;
    }

}

/**
 * The switchboard integration.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegration} switchboardIntegration
 */
SwitchboardIntegrationResponse.prototype['switchboardIntegration'] = undefined;






export default SwitchboardIntegrationResponse;

