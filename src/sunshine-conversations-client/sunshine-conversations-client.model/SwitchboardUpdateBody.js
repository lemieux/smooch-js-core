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
 * The SwitchboardUpdateBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardUpdateBody
 * @version 9.9.0
 */
class SwitchboardUpdateBody {
    /**
     * Constructs a new <code>SwitchboardUpdateBody</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardUpdateBody
     */
    constructor() { 
        
        SwitchboardUpdateBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SwitchboardUpdateBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardUpdateBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardUpdateBody} The populated <code>SwitchboardUpdateBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SwitchboardUpdateBody();

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('defaultSwitchboardIntegrationId')) {
                obj['defaultSwitchboardIntegrationId'] = ApiClient.convertToType(data['defaultSwitchboardIntegrationId'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns Whether the switchboard is enabled. Allows creating the switchboard in a disabled state so that messages don't get lost or misrouted during switchboard configuration. When a switchboard is disabled, integrations linked to the switchboard will receive all events.
     * @return {Boolean}
     */
    getEnabled() {
        return this.enabled;
    }

    /**
     * Sets Whether the switchboard is enabled. Allows creating the switchboard in a disabled state so that messages don't get lost or misrouted during switchboard configuration. When a switchboard is disabled, integrations linked to the switchboard will receive all events.
     * @param {Boolean} enabled Whether the switchboard is enabled. Allows creating the switchboard in a disabled state so that messages don't get lost or misrouted during switchboard configuration. When a switchboard is disabled, integrations linked to the switchboard will receive all events.
     */
    setEnabled(enabled) {
        this['enabled'] = enabled;
    }
/**
     * Returns The id of the switchboard integration that will be given control when a new conversation begins. It will also be used for conversations that existed before the switchboard was enabled.
     * @return {String}
     */
    getDefaultSwitchboardIntegrationId() {
        return this.defaultSwitchboardIntegrationId;
    }

    /**
     * Sets The id of the switchboard integration that will be given control when a new conversation begins. It will also be used for conversations that existed before the switchboard was enabled.
     * @param {String} defaultSwitchboardIntegrationId The id of the switchboard integration that will be given control when a new conversation begins. It will also be used for conversations that existed before the switchboard was enabled.
     */
    setDefaultSwitchboardIntegrationId(defaultSwitchboardIntegrationId) {
        this['defaultSwitchboardIntegrationId'] = defaultSwitchboardIntegrationId;
    }

}

/**
 * Whether the switchboard is enabled. Allows creating the switchboard in a disabled state so that messages don't get lost or misrouted during switchboard configuration. When a switchboard is disabled, integrations linked to the switchboard will receive all events.
 * @member {Boolean} enabled
 */
SwitchboardUpdateBody.prototype['enabled'] = undefined;

/**
 * The id of the switchboard integration that will be given control when a new conversation begins. It will also be used for conversations that existed before the switchboard was enabled.
 * @member {String} defaultSwitchboardIntegrationId
 */
SwitchboardUpdateBody.prototype['defaultSwitchboardIntegrationId'] = undefined;






export default SwitchboardUpdateBody;

