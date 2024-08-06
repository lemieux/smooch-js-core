/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.7.0
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
 * The Webhook model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Webhook
 * @version 12.7.0
 */
class Webhook {
    /**
     * Constructs a new <code>Webhook</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Webhook
     * @param target {String} URL to be called when the webhook is triggered.
     * @param triggers {Array.<String>} An array of triggers the integration is subscribed to. This property is case sensitive. [More details](https://docs.smooch.io/rest/#section/Webhook-Triggers).
     */
    constructor(target, triggers) { 
        
        Webhook.initialize(this, target, triggers);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, target, triggers) { 
        obj['target'] = target;
        obj['triggers'] = triggers;
    }

    /**
     * Constructs a <code>Webhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Webhook} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Webhook} The populated <code>Webhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Webhook();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = ApiClient.convertToType(data['target'], 'String');
            }
            if (data.hasOwnProperty('triggers')) {
                obj['triggers'] = ApiClient.convertToType(data['triggers'], ['String']);
            }
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
            }
            if (data.hasOwnProperty('includeFullUser')) {
                obj['includeFullUser'] = ApiClient.convertToType(data['includeFullUser'], 'Boolean');
            }
            if (data.hasOwnProperty('includeFullSource')) {
                obj['includeFullSource'] = ApiClient.convertToType(data['includeFullSource'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * Returns A unique identifier for the webhook.
     * @return {String}
     */
    getId() {
        return this.id;
    }

    /**
     * Sets A unique identifier for the webhook.
     * @param {String} id A unique identifier for the webhook.
     */
    setId(id) {
        this['id'] = id;
    }
/**
     * Returns Schema version of the payload delivered to this webhook. Can be `v1`, `v1.1` or `v2`.
     * @return {String}
     */
    getVersion() {
        return this.version;
    }

    /**
     * Sets Schema version of the payload delivered to this webhook. Can be `v1`, `v1.1` or `v2`.
     * @param {String} version Schema version of the payload delivered to this webhook. Can be `v1`, `v1.1` or `v2`.
     */
    setVersion(version) {
        this['version'] = version;
    }
/**
     * Returns URL to be called when the webhook is triggered.
     * @return {String}
     */
    getTarget() {
        return this.target;
    }

    /**
     * Sets URL to be called when the webhook is triggered.
     * @param {String} target URL to be called when the webhook is triggered.
     */
    setTarget(target) {
        this['target'] = target;
    }
/**
     * Returns An array of triggers the integration is subscribed to. This property is case sensitive. [More details](https://docs.smooch.io/rest/#section/Webhook-Triggers).
     * @return {Array.<String>}
     */
    getTriggers() {
        return this.triggers;
    }

    /**
     * Sets An array of triggers the integration is subscribed to. This property is case sensitive. [More details](https://docs.smooch.io/rest/#section/Webhook-Triggers).
     * @param {Array.<String>} triggers An array of triggers the integration is subscribed to. This property is case sensitive. [More details](https://docs.smooch.io/rest/#section/Webhook-Triggers).
     */
    setTriggers(triggers) {
        this['triggers'] = triggers;
    }
/**
     * Returns Webhook secret, used to verify the origin of incoming requests.
     * @return {String}
     */
    getSecret() {
        return this.secret;
    }

    /**
     * Sets Webhook secret, used to verify the origin of incoming requests.
     * @param {String} secret Webhook secret, used to verify the origin of incoming requests.
     */
    setSecret(secret) {
        this['secret'] = secret;
    }
/**
     * Returns A boolean specifying whether webhook payloads should include the complete user schema for events involving a specific user.
     * @return {Boolean}
     */
    getIncludeFullUser() {
        return this.includeFullUser;
    }

    /**
     * Sets A boolean specifying whether webhook payloads should include the complete user schema for events involving a specific user.
     * @param {Boolean} includeFullUser A boolean specifying whether webhook payloads should include the complete user schema for events involving a specific user.
     */
    setIncludeFullUser(includeFullUser) {
        this['includeFullUser'] = includeFullUser;
    }
/**
     * Returns A boolean specifying whether webhook payloads should include the client and device object (when applicable).
     * @return {Boolean}
     */
    getIncludeFullSource() {
        return this.includeFullSource;
    }

    /**
     * Sets A boolean specifying whether webhook payloads should include the client and device object (when applicable).
     * @param {Boolean} includeFullSource A boolean specifying whether webhook payloads should include the client and device object (when applicable).
     */
    setIncludeFullSource(includeFullSource) {
        this['includeFullSource'] = includeFullSource;
    }

}

/**
 * A unique identifier for the webhook.
 * @member {String} id
 */
Webhook.prototype['id'] = undefined;

/**
 * Schema version of the payload delivered to this webhook. Can be `v1`, `v1.1` or `v2`.
 * @member {String} version
 */
Webhook.prototype['version'] = undefined;

/**
 * URL to be called when the webhook is triggered.
 * @member {String} target
 */
Webhook.prototype['target'] = undefined;

/**
 * An array of triggers the integration is subscribed to. This property is case sensitive. [More details](https://docs.smooch.io/rest/#section/Webhook-Triggers).
 * @member {Array.<String>} triggers
 */
Webhook.prototype['triggers'] = undefined;

/**
 * Webhook secret, used to verify the origin of incoming requests.
 * @member {String} secret
 */
Webhook.prototype['secret'] = undefined;

/**
 * A boolean specifying whether webhook payloads should include the complete user schema for events involving a specific user.
 * @member {Boolean} includeFullUser
 * @default false
 */
Webhook.prototype['includeFullUser'] = false;

/**
 * A boolean specifying whether webhook payloads should include the client and device object (when applicable).
 * @member {Boolean} includeFullSource
 * @default false
 */
Webhook.prototype['includeFullSource'] = false;






export default Webhook;

