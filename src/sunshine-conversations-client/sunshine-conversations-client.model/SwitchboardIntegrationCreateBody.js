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

/**
 * The SwitchboardIntegrationCreateBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationCreateBody
 * @version 12.3.1
 */
class SwitchboardIntegrationCreateBody {
    /**
     * Constructs a new <code>SwitchboardIntegrationCreateBody</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationCreateBody
     * @param name {String} Identifier for use in control transfer protocols. Restricted to alphanumeric characters, `-` and `_`.
     */
    constructor(name) { 
        
        SwitchboardIntegrationCreateBody.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>SwitchboardIntegrationCreateBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationCreateBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegrationCreateBody} The populated <code>SwitchboardIntegrationCreateBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SwitchboardIntegrationCreateBody();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('integrationId')) {
                obj['integrationId'] = ApiClient.convertToType(data['integrationId'], 'String');
            }
            if (data.hasOwnProperty('integrationType')) {
                obj['integrationType'] = ApiClient.convertToType(data['integrationType'], 'String');
            }
            if (data.hasOwnProperty('deliverStandbyEvents')) {
                obj['deliverStandbyEvents'] = ApiClient.convertToType(data['deliverStandbyEvents'], 'Boolean');
            }
            if (data.hasOwnProperty('nextSwitchboardIntegrationId')) {
                obj['nextSwitchboardIntegrationId'] = ApiClient.convertToType(data['nextSwitchboardIntegrationId'], 'String');
            }
            if (data.hasOwnProperty('messageHistoryCount')) {
                obj['messageHistoryCount'] = ApiClient.convertToType(data['messageHistoryCount'], 'Number');
            }
        }
        return obj;
    }

/**
     * Returns Identifier for use in control transfer protocols. Restricted to alphanumeric characters, `-` and `_`.
     * @return {String}
     */
    getName() {
        return this.name;
    }

    /**
     * Sets Identifier for use in control transfer protocols. Restricted to alphanumeric characters, `-` and `_`.
     * @param {String} name Identifier for use in control transfer protocols. Restricted to alphanumeric characters, `-` and `_`.
     */
    setName(name) {
        this['name'] = name;
    }
/**
     * Returns The id of the integration to link to the switchboard integration. Must be used when linking a custom integration. One of `integrationId` or `integrationType` must be provided.
     * @return {String}
     */
    getIntegrationId() {
        return this.integrationId;
    }

    /**
     * Sets The id of the integration to link to the switchboard integration. Must be used when linking a custom integration. One of `integrationId` or `integrationType` must be provided.
     * @param {String} integrationId The id of the integration to link to the switchboard integration. Must be used when linking a custom integration. One of `integrationId` or `integrationType` must be provided.
     */
    setIntegrationId(integrationId) {
        this['integrationId'] = integrationId;
    }
/**
     * Returns The type of the integration to link to the switchboard integration. Must be used when linking an OAuth integration. One of `integrationId` or `integrationType` must be provided.
     * @return {String}
     */
    getIntegrationType() {
        return this.integrationType;
    }

    /**
     * Sets The type of the integration to link to the switchboard integration. Must be used when linking an OAuth integration. One of `integrationId` or `integrationType` must be provided.
     * @param {String} integrationType The type of the integration to link to the switchboard integration. Must be used when linking an OAuth integration. One of `integrationId` or `integrationType` must be provided.
     */
    setIntegrationType(integrationType) {
        this['integrationType'] = integrationType;
    }
/**
     * @return {Boolean}
     */
    getDeliverStandbyEvents() {
        return this.deliverStandbyEvents;
    }

    /**
     * @param {Boolean} deliverStandbyEvents
     */
    setDeliverStandbyEvents(deliverStandbyEvents) {
        this['deliverStandbyEvents'] = deliverStandbyEvents;
    }
/**
     * @return {String}
     */
    getNextSwitchboardIntegrationId() {
        return this.nextSwitchboardIntegrationId;
    }

    /**
     * @param {String} nextSwitchboardIntegrationId
     */
    setNextSwitchboardIntegrationId(nextSwitchboardIntegrationId) {
        this['nextSwitchboardIntegrationId'] = nextSwitchboardIntegrationId;
    }
/**
     * Returns Number of messages to include in the message history context.
     * minimum: 1
     * maximum: 10
     * @return {Number}
     */
    getMessageHistoryCount() {
        return this.messageHistoryCount;
    }

    /**
     * Sets Number of messages to include in the message history context.
     * @param {Number} messageHistoryCount Number of messages to include in the message history context.
     */
    setMessageHistoryCount(messageHistoryCount) {
        this['messageHistoryCount'] = messageHistoryCount;
    }

}

/**
 * Identifier for use in control transfer protocols. Restricted to alphanumeric characters, `-` and `_`.
 * @member {String} name
 */
SwitchboardIntegrationCreateBody.prototype['name'] = undefined;

/**
 * The id of the integration to link to the switchboard integration. Must be used when linking a custom integration. One of `integrationId` or `integrationType` must be provided.
 * @member {String} integrationId
 */
SwitchboardIntegrationCreateBody.prototype['integrationId'] = undefined;

/**
 * The type of the integration to link to the switchboard integration. Must be used when linking an OAuth integration. One of `integrationId` or `integrationType` must be provided.
 * @member {String} integrationType
 */
SwitchboardIntegrationCreateBody.prototype['integrationType'] = undefined;

/**
 * @member {Boolean} deliverStandbyEvents
 */
SwitchboardIntegrationCreateBody.prototype['deliverStandbyEvents'] = undefined;

/**
 * @member {String} nextSwitchboardIntegrationId
 */
SwitchboardIntegrationCreateBody.prototype['nextSwitchboardIntegrationId'] = undefined;

/**
 * Number of messages to include in the message history context.
 * @member {Number} messageHistoryCount
 */
SwitchboardIntegrationCreateBody.prototype['messageHistoryCount'] = undefined;






export default SwitchboardIntegrationCreateBody;

