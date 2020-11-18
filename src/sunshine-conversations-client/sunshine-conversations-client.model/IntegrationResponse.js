/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.3.0
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
import Integration from './Integration';

/**
 * The IntegrationResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/IntegrationResponse
 * @version 9.3.0
 */
class IntegrationResponse {
    /**
     * Constructs a new <code>IntegrationResponse</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationResponse
     */
    constructor() { 
        
        IntegrationResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IntegrationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationResponse} The populated <code>IntegrationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IntegrationResponse();

            if (data.hasOwnProperty('integration')) {
                obj['integration'] = Integration.constructFromObject(data['integration']);
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Integration}
     */
    getIntegration() {
        return this.integration;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Integration} integration
     */
    setIntegration(integration) {
        this['integration'] = integration;
    }

}

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Integration} integration
 */
IntegrationResponse.prototype['integration'] = undefined;






export default IntegrationResponse;

