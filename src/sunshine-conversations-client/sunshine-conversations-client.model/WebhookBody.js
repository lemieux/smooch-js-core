/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.12.0
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
 * The WebhookBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/WebhookBody
 * @version 9.13.0
 */
class WebhookBody {
    /**
     * Constructs a new <code>WebhookBody</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookBody
     */
    constructor() { 
        
        WebhookBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookBody} The populated <code>WebhookBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookBody();

            if (data.hasOwnProperty('target')) {
                obj['target'] = ApiClient.convertToType(data['target'], 'String');
            }
            if (data.hasOwnProperty('triggers')) {
                obj['triggers'] = ApiClient.convertToType(data['triggers'], ['String']);
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
 * URL to be called when the webhook is triggered.
 * @member {String} target
 */
WebhookBody.prototype['target'] = undefined;

/**
 * An array of triggers the integration is subscribed to. This property is case sensitive. [More details](https://docs.smooch.io/rest/#section/Webhook-Triggers).
 * @member {Array.<String>} triggers
 */
WebhookBody.prototype['triggers'] = undefined;

/**
 * A boolean specifying whether webhook payloads should include the complete user schema for events involving a specific user.
 * @member {Boolean} includeFullUser
 * @default false
 */
WebhookBody.prototype['includeFullUser'] = false;

/**
 * A boolean specifying whether webhook payloads should include the client and device object (when applicable).
 * @member {Boolean} includeFullSource
 * @default false
 */
WebhookBody.prototype['includeFullSource'] = false;






export default WebhookBody;

