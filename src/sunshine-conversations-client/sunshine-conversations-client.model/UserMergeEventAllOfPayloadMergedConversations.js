/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 13.2.0
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

/**
 * The UserMergeEventAllOfPayloadMergedConversations model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedConversations
 * @version 13.2.0
 */
class UserMergeEventAllOfPayloadMergedConversations {
    /**
     * Constructs a new <code>UserMergeEventAllOfPayloadMergedConversations</code>.
     * Contains information about the conversations that were merged together as a result of the operation, if applicable. If no conversations were merged, this property is omitted.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedConversations
     */
    constructor() { 
        
        UserMergeEventAllOfPayloadMergedConversations.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserMergeEventAllOfPayloadMergedConversations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedConversations} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedConversations} The populated <code>UserMergeEventAllOfPayloadMergedConversations</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserMergeEventAllOfPayloadMergedConversations();

            if (data.hasOwnProperty('surviving')) {
                obj['surviving'] = ApiClient.convertToType(data['surviving'], ConversationTruncated);
            }
            if (data.hasOwnProperty('discarded')) {
                obj['discarded'] = ApiClient.convertToType(data['discarded'], ConversationTruncated);
            }
        }
        return obj;
    }

/**
     * Returns The conversation that now represents the merged conversation object.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated}
     */
    getSurviving() {
        return this.surviving;
    }

    /**
     * Sets The conversation that now represents the merged conversation object.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} surviving The conversation that now represents the merged conversation object.
     */
    setSurviving(surviving) {
        this['surviving'] = surviving;
    }
/**
     * Returns The conversation that was unified into the surviving conversation object.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated}
     */
    getDiscarded() {
        return this.discarded;
    }

    /**
     * Sets The conversation that was unified into the surviving conversation object.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} discarded The conversation that was unified into the surviving conversation object.
     */
    setDiscarded(discarded) {
        this['discarded'] = discarded;
    }

}

/**
 * The conversation that now represents the merged conversation object.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} surviving
 */
UserMergeEventAllOfPayloadMergedConversations.prototype['surviving'] = undefined;

/**
 * The conversation that was unified into the surviving conversation object.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationTruncated} discarded
 */
UserMergeEventAllOfPayloadMergedConversations.prototype['discarded'] = undefined;






export default UserMergeEventAllOfPayloadMergedConversations;

