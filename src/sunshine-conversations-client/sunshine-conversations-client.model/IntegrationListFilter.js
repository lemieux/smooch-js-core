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

/**
 * The IntegrationListFilter model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/IntegrationListFilter
 * @version 9.9.0
 */
class IntegrationListFilter {
    /**
     * Constructs a new <code>IntegrationListFilter</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationListFilter
     */
    constructor() { 
        
        IntegrationListFilter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IntegrationListFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationListFilter} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationListFilter} The populated <code>IntegrationListFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IntegrationListFilter();

            if (data.hasOwnProperty('types')) {
                obj['types'] = ApiClient.convertToType(data['types'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns Comma-separated list of types to return. If omitted, all types are returned.
     * @return {String}
     */
    getTypes() {
        return this.types;
    }

    /**
     * Sets Comma-separated list of types to return. If omitted, all types are returned.
     * @param {String} types Comma-separated list of types to return. If omitted, all types are returned.
     */
    setTypes(types) {
        this['types'] = types;
    }

}

/**
 * Comma-separated list of types to return. If omitted, all types are returned.
 * @member {String} types
 */
IntegrationListFilter.prototype['types'] = undefined;






export default IntegrationListFilter;

