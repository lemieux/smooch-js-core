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
import Switchboard from './Switchboard';

/**
 * The SwitchboardListResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardListResponse
 * @version 9.9.0
 */
class SwitchboardListResponse {
    /**
     * Constructs a new <code>SwitchboardListResponse</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardListResponse
     */
    constructor() { 
        
        SwitchboardListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SwitchboardListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardListResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardListResponse} The populated <code>SwitchboardListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SwitchboardListResponse();

            if (data.hasOwnProperty('switchboards')) {
                obj['switchboards'] = ApiClient.convertToType(data['switchboards'], [Switchboard]);
            }
        }
        return obj;
    }

/**
     * Returns List of returned switchboards.
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Switchboard>}
     */
    getSwitchboards() {
        return this.switchboards;
    }

    /**
     * Sets List of returned switchboards.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Switchboard>} switchboards List of returned switchboards.
     */
    setSwitchboards(switchboards) {
        this['switchboards'] = switchboards;
    }

}

/**
 * List of returned switchboards.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Switchboard>} switchboards
 */
SwitchboardListResponse.prototype['switchboards'] = undefined;






export default SwitchboardListResponse;

