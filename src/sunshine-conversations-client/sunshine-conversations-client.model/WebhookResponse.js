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
import Webhook from './Webhook';

/**
 * The WebhookResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/WebhookResponse
 * @version 9.4.5
 */
class WebhookResponse {
    /**
     * Constructs a new <code>WebhookResponse</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookResponse
     */
    constructor() { 
        
        WebhookResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/WebhookResponse} The populated <code>WebhookResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookResponse();

            if (data.hasOwnProperty('webhook')) {
                obj['webhook'] = ApiClient.convertToType(data['webhook'], Webhook);
            }
        }
        return obj;
    }

/**
     * Returns The webhook.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Webhook}
     */
    getWebhook() {
        return this.webhook;
    }

    /**
     * Sets The webhook.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Webhook} webhook The webhook.
     */
    setWebhook(webhook) {
        this['webhook'] = webhook;
    }

}

/**
 * The webhook.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Webhook} webhook
 */
WebhookResponse.prototype['webhook'] = undefined;






export default WebhookResponse;
