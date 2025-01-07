/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 14.3.0
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
import PostbackWebhook from './PostbackWebhook';
import SourceWithCampaignWebhook from './SourceWithCampaignWebhook';
import User from './User';

/**
 * The ConversationPostbackEventAllOfPayload model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationPostbackEventAllOfPayload
 * @version 14.3.2
 */
class ConversationPostbackEventAllOfPayload {
    /**
     * Constructs a new <code>ConversationPostbackEventAllOfPayload</code>.
     * The payload of the event. The contents of this object depend on the type of event.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationPostbackEventAllOfPayload
     */
    constructor() { 
        
        ConversationPostbackEventAllOfPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationPostbackEventAllOfPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationPostbackEventAllOfPayload} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationPostbackEventAllOfPayload} The populated <code>ConversationPostbackEventAllOfPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationPostbackEventAllOfPayload();

            if (data.hasOwnProperty('postback')) {
                obj['postback'] = ApiClient.convertToType(data['postback'], PostbackWebhook);
            }
            if (data.hasOwnProperty('conversation')) {
                obj['conversation'] = ApiClient.convertToType(data['conversation'], ConversationTruncated);
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], User);
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], SourceWithCampaignWebhook);
            }
        }
        return obj;
    }

/**
     * Returns The postback associated with the event.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/PostbackWebhook}
     */
    getPostback() {
        return this.postback;
    }

    /**
     * Sets The postback associated with the event.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/PostbackWebhook} postback The postback associated with the event.
     */
    setPostback(postback) {
        this['postback'] = postback;
    }
/**
     * Returns The conversation linked to the postback.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated}
     */
    getConversation() {
        return this.conversation;
    }

    /**
     * Sets The conversation linked to the postback.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation The conversation linked to the postback.
     */
    setConversation(conversation) {
        this['conversation'] = conversation;
    }
/**
     * Returns The user that triggered the postback.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/User}
     */
    getUser() {
        return this.user;
    }

    /**
     * Sets The user that triggered the postback.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/User} user The user that triggered the postback.
     */
    setUser(user) {
        this['user'] = user;
    }
/**
     * Returns The source of the postback.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWithCampaignWebhook}
     */
    getSource() {
        return this.source;
    }

    /**
     * Sets The source of the postback.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWithCampaignWebhook} source The source of the postback.
     */
    setSource(source) {
        this['source'] = source;
    }

}

/**
 * The postback associated with the event.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/PostbackWebhook} postback
 */
ConversationPostbackEventAllOfPayload.prototype['postback'] = undefined;

/**
 * The conversation linked to the postback.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} conversation
 */
ConversationPostbackEventAllOfPayload.prototype['conversation'] = undefined;

/**
 * The user that triggered the postback.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/User} user
 */
ConversationPostbackEventAllOfPayload.prototype['user'] = undefined;

/**
 * The source of the postback.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWithCampaignWebhook} source
 */
ConversationPostbackEventAllOfPayload.prototype['source'] = undefined;






export default ConversationPostbackEventAllOfPayload;

