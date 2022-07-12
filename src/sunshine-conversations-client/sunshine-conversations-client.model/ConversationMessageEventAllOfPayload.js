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
import ConversationTruncated from './ConversationTruncated';
import MessageWebhook from './MessageWebhook';

/**
 * The ConversationMessageEventAllOfPayload model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageEventAllOfPayload
 * @version 9.9.0
 */
class ConversationMessageEventAllOfPayload {
    /**
     * Constructs a new <code>ConversationMessageEventAllOfPayload</code>.
     * The payload of the event. The contents of this object depend on the type of event.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageEventAllOfPayload
     */
    constructor() { 
        
        ConversationMessageEventAllOfPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationMessageEventAllOfPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageEventAllOfPayload} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationMessageEventAllOfPayload} The populated <code>ConversationMessageEventAllOfPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationMessageEventAllOfPayload();

            if (data.hasOwnProperty('conversation')) {
                obj['conversation'] = ApiClient.convertToType(data['conversation'], ConversationTruncated);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], MessageWebhook);
            }
            if (data.hasOwnProperty('recentNotifications')) {
                obj['recentNotifications'] = ApiClient.convertToType(data['recentNotifications'], [MessageWebhook]);
            }
        }
        return obj;
    }

/**
     * Returns The conversation in which the message was sent.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated}
     */
    getConversation() {
        return this.conversation;
    }

    /**
     * Sets The conversation in which the message was sent.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation The conversation in which the message was sent.
     */
    setConversation(conversation) {
        this['conversation'] = conversation;
    }
/**
     * Returns The message that was sent.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageWebhook}
     */
    getMessage() {
        return this.message;
    }

    /**
     * Sets The message that was sent.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageWebhook} message The message that was sent.
     */
    setMessage(message) {
        this['message'] = message;
    }
/**
     * Returns Messages sent with the Notification API since the last user message.
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/MessageWebhook>}
     */
    getRecentNotifications() {
        return this.recentNotifications;
    }

    /**
     * Sets Messages sent with the Notification API since the last user message.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/MessageWebhook>} recentNotifications Messages sent with the Notification API since the last user message.
     */
    setRecentNotifications(recentNotifications) {
        this['recentNotifications'] = recentNotifications;
    }

}

/**
 * The conversation in which the message was sent.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation
 */
ConversationMessageEventAllOfPayload.prototype['conversation'] = undefined;

/**
 * The message that was sent.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageWebhook} message
 */
ConversationMessageEventAllOfPayload.prototype['message'] = undefined;

/**
 * Messages sent with the Notification API since the last user message.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/MessageWebhook>} recentNotifications
 */
ConversationMessageEventAllOfPayload.prototype['recentNotifications'] = undefined;






export default ConversationMessageEventAllOfPayload;

