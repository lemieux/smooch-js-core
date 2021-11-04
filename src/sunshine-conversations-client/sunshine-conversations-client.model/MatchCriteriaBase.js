/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.4.5
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
 * The MatchCriteriaBase model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaBase
 * @version 9.4.7
 */
class MatchCriteriaBase {
    /**
     * Constructs a new <code>MatchCriteriaBase</code>.
     * The set of criteria used to determine the user&#39;s identity on a third-party channel.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaBase
     * @param type {String} The channel type.
     * @param integrationId {String} The ID of the integration to link. Must match the provided type.
     */
    constructor(type, integrationId) { 
        
        MatchCriteriaBase.initialize(this, type, integrationId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, integrationId) { 
        obj['type'] = type;
        obj['integrationId'] = integrationId;
    }

    /**
     * Constructs a <code>MatchCriteriaBase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaBase} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaBase} The populated <code>MatchCriteriaBase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MatchCriteriaBase();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('integrationId')) {
                obj['integrationId'] = ApiClient.convertToType(data['integrationId'], 'String');
            }
            if (data.hasOwnProperty('primary')) {
                obj['primary'] = ApiClient.convertToType(data['primary'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * Returns The channel type.
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The channel type.
     * @param {String} type The channel type.
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The ID of the integration to link. Must match the provided type.
     * @return {String}
     */
    getIntegrationId() {
        return this.integrationId;
    }

    /**
     * Sets The ID of the integration to link. Must match the provided type.
     * @param {String} integrationId The ID of the integration to link. Must match the provided type.
     */
    setIntegrationId(integrationId) {
        this['integrationId'] = integrationId;
    }
/**
     * Returns Flag indicating whether the client will become the primary for the target conversation once linking is complete.
     * @return {Boolean}
     */
    getPrimary() {
        return this.primary;
    }

    /**
     * Sets Flag indicating whether the client will become the primary for the target conversation once linking is complete.
     * @param {Boolean} primary Flag indicating whether the client will become the primary for the target conversation once linking is complete.
     */
    setPrimary(primary) {
        this['primary'] = primary;
    }

}

/**
 * The channel type.
 * @member {String} type
 */
MatchCriteriaBase.prototype['type'] = undefined;

/**
 * The ID of the integration to link. Must match the provided type.
 * @member {String} integrationId
 */
MatchCriteriaBase.prototype['integrationId'] = undefined;

/**
 * Flag indicating whether the client will become the primary for the target conversation once linking is complete.
 * @member {Boolean} primary
 * @default true
 */
MatchCriteriaBase.prototype['primary'] = true;






export default MatchCriteriaBase;

