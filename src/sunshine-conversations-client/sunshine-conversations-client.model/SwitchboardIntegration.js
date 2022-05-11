/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.7.0
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
 * The SwitchboardIntegration model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegration
 * @version 9.7.0
 */
class SwitchboardIntegration {
    /**
     * Constructs a new <code>SwitchboardIntegration</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegration
     * @param id {String} The unique ID of the switchboard integration.
     * @param name {String} Identifier for use in control transfer protocols. Restricted to alphanumeric characters, `-` and `_`.
     * @param integrationId {String} Id of the integration that should deliver events routed by the switchboard.
     * @param integrationType {String} Type of integration that should deliver events routed by the switchboard. If referencing an OAuth integration, the clientId issued by Sunshine Conversations during the OAuth partnership process will be the value of integrationType.
     * @param deliverStandbyEvents {Boolean} Setting to determine if webhooks should be sent when the switchboard integration is not in control of a conversation (standby status)
     */
    constructor(id, name, integrationId, integrationType, deliverStandbyEvents) { 
        
        SwitchboardIntegration.initialize(this, id, name, integrationId, integrationType, deliverStandbyEvents);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, integrationId, integrationType, deliverStandbyEvents) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['integrationId'] = integrationId;
        obj['integrationType'] = integrationType;
        obj['deliverStandbyEvents'] = deliverStandbyEvents;
    }

    /**
     * Constructs a <code>SwitchboardIntegration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegration} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardIntegration} The populated <code>SwitchboardIntegration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SwitchboardIntegration();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
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
     * Returns The unique ID of the switchboard integration.
     * @return {String}
     */
    getId() {
        return this.id;
    }

    /**
     * Sets The unique ID of the switchboard integration.
     * @param {String} id The unique ID of the switchboard integration.
     */
    setId(id) {
        this['id'] = id;
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
     * Returns Id of the integration that should deliver events routed by the switchboard.
     * @return {String}
     */
    getIntegrationId() {
        return this.integrationId;
    }

    /**
     * Sets Id of the integration that should deliver events routed by the switchboard.
     * @param {String} integrationId Id of the integration that should deliver events routed by the switchboard.
     */
    setIntegrationId(integrationId) {
        this['integrationId'] = integrationId;
    }
/**
     * Returns Type of integration that should deliver events routed by the switchboard. If referencing an OAuth integration, the clientId issued by Sunshine Conversations during the OAuth partnership process will be the value of integrationType.
     * @return {String}
     */
    getIntegrationType() {
        return this.integrationType;
    }

    /**
     * Sets Type of integration that should deliver events routed by the switchboard. If referencing an OAuth integration, the clientId issued by Sunshine Conversations during the OAuth partnership process will be the value of integrationType.
     * @param {String} integrationType Type of integration that should deliver events routed by the switchboard. If referencing an OAuth integration, the clientId issued by Sunshine Conversations during the OAuth partnership process will be the value of integrationType.
     */
    setIntegrationType(integrationType) {
        this['integrationType'] = integrationType;
    }
/**
     * Returns Setting to determine if webhooks should be sent when the switchboard integration is not in control of a conversation (standby status)
     * @return {Boolean}
     */
    getDeliverStandbyEvents() {
        return this.deliverStandbyEvents;
    }

    /**
     * Sets Setting to determine if webhooks should be sent when the switchboard integration is not in control of a conversation (standby status)
     * @param {Boolean} deliverStandbyEvents Setting to determine if webhooks should be sent when the switchboard integration is not in control of a conversation (standby status)
     */
    setDeliverStandbyEvents(deliverStandbyEvents) {
        this['deliverStandbyEvents'] = deliverStandbyEvents;
    }
/**
     * Returns The switchboard integration id to which control of a conversation is passed / offered by default.
     * @return {String}
     */
    getNextSwitchboardIntegrationId() {
        return this.nextSwitchboardIntegrationId;
    }

    /**
     * Sets The switchboard integration id to which control of a conversation is passed / offered by default.
     * @param {String} nextSwitchboardIntegrationId The switchboard integration id to which control of a conversation is passed / offered by default.
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
 * The unique ID of the switchboard integration.
 * @member {String} id
 */
SwitchboardIntegration.prototype['id'] = undefined;

/**
 * Identifier for use in control transfer protocols. Restricted to alphanumeric characters, `-` and `_`.
 * @member {String} name
 */
SwitchboardIntegration.prototype['name'] = undefined;

/**
 * Id of the integration that should deliver events routed by the switchboard.
 * @member {String} integrationId
 */
SwitchboardIntegration.prototype['integrationId'] = undefined;

/**
 * Type of integration that should deliver events routed by the switchboard. If referencing an OAuth integration, the clientId issued by Sunshine Conversations during the OAuth partnership process will be the value of integrationType.
 * @member {String} integrationType
 */
SwitchboardIntegration.prototype['integrationType'] = undefined;

/**
 * Setting to determine if webhooks should be sent when the switchboard integration is not in control of a conversation (standby status)
 * @member {Boolean} deliverStandbyEvents
 */
SwitchboardIntegration.prototype['deliverStandbyEvents'] = undefined;

/**
 * The switchboard integration id to which control of a conversation is passed / offered by default.
 * @member {String} nextSwitchboardIntegrationId
 */
SwitchboardIntegration.prototype['nextSwitchboardIntegrationId'] = undefined;

/**
 * Number of messages to include in the message history context.
 * @member {Number} messageHistoryCount
 */
SwitchboardIntegration.prototype['messageHistoryCount'] = undefined;






export default SwitchboardIntegration;

