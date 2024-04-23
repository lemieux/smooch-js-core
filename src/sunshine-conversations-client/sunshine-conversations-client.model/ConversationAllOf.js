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
 * The ConversationAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ConversationAllOf
 * @version 12.4.0
 */
class ConversationAllOf {
    /**
     * Constructs a new <code>ConversationAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationAllOf
     */
    constructor() { 
        
        ConversationAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ConversationAllOf} The populated <code>ConversationAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationAllOf();

            if (data.hasOwnProperty('isDefault')) {
                obj['isDefault'] = ApiClient.convertToType(data['isDefault'], 'Boolean');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('iconUrl')) {
                obj['iconUrl'] = ApiClient.convertToType(data['iconUrl'], 'String');
            }
            if (data.hasOwnProperty('businessLastRead')) {
                obj['businessLastRead'] = ApiClient.convertToType(data['businessLastRead'], 'String');
            }
            if (data.hasOwnProperty('lastUpdatedAt')) {
                obj['lastUpdatedAt'] = ApiClient.convertToType(data['lastUpdatedAt'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns Whether the conversation is the default conversation for the user. Will be true for the first personal conversation created for the user, and false in all other cases. 
     * @return {Boolean}
     */
    getIsDefault() {
        return this.isDefault;
    }

    /**
     * Sets Whether the conversation is the default conversation for the user. Will be true for the first personal conversation created for the user, and false in all other cases. 
     * @param {Boolean} isDefault Whether the conversation is the default conversation for the user. Will be true for the first personal conversation created for the user, and false in all other cases. 
     */
    setIsDefault(isDefault) {
        this['isDefault'] = isDefault;
    }
/**
     * Returns A friendly name for the conversation, may be displayed to the business or the user. 
     * @return {String}
     */
    getDisplayName() {
        return this.displayName;
    }

    /**
     * Sets A friendly name for the conversation, may be displayed to the business or the user. 
     * @param {String} displayName A friendly name for the conversation, may be displayed to the business or the user. 
     */
    setDisplayName(displayName) {
        this['displayName'] = displayName;
    }
/**
     * Returns A short text describing the conversation.
     * @return {String}
     */
    getDescription() {
        return this.description;
    }

    /**
     * Sets A short text describing the conversation.
     * @param {String} description A short text describing the conversation.
     */
    setDescription(description) {
        this['description'] = description;
    }
/**
     * Returns A custom conversation icon url. The image must be in either JPG, PNG, or GIF format
     * @return {String}
     */
    getIconUrl() {
        return this.iconUrl;
    }

    /**
     * Sets A custom conversation icon url. The image must be in either JPG, PNG, or GIF format
     * @param {String} iconUrl A custom conversation icon url. The image must be in either JPG, PNG, or GIF format
     */
    setIconUrl(iconUrl) {
        this['iconUrl'] = iconUrl;
    }
/**
     * Returns A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the moment the conversation was last marked as read with role business. 
     * @return {String}
     */
    getBusinessLastRead() {
        return this.businessLastRead;
    }

    /**
     * Sets A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the moment the conversation was last marked as read with role business. 
     * @param {String} businessLastRead A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the moment the conversation was last marked as read with role business. 
     */
    setBusinessLastRead(businessLastRead) {
        this['businessLastRead'] = businessLastRead;
    }
/**
     * Returns A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the moment the last message was received in the conversation, or the creation time if no messages have been received yet. 
     * @return {String}
     */
    getLastUpdatedAt() {
        return this.lastUpdatedAt;
    }

    /**
     * Sets A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the moment the last message was received in the conversation, or the creation time if no messages have been received yet. 
     * @param {String} lastUpdatedAt A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the moment the last message was received in the conversation, or the creation time if no messages have been received yet. 
     */
    setLastUpdatedAt(lastUpdatedAt) {
        this['lastUpdatedAt'] = lastUpdatedAt;
    }

}

/**
 * Whether the conversation is the default conversation for the user. Will be true for the first personal conversation created for the user, and false in all other cases. 
 * @member {Boolean} isDefault
 */
ConversationAllOf.prototype['isDefault'] = undefined;

/**
 * A friendly name for the conversation, may be displayed to the business or the user. 
 * @member {String} displayName
 */
ConversationAllOf.prototype['displayName'] = undefined;

/**
 * A short text describing the conversation.
 * @member {String} description
 */
ConversationAllOf.prototype['description'] = undefined;

/**
 * A custom conversation icon url. The image must be in either JPG, PNG, or GIF format
 * @member {String} iconUrl
 */
ConversationAllOf.prototype['iconUrl'] = undefined;

/**
 * A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the moment the conversation was last marked as read with role business. 
 * @member {String} businessLastRead
 */
ConversationAllOf.prototype['businessLastRead'] = undefined;

/**
 * A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the moment the last message was received in the conversation, or the creation time if no messages have been received yet. 
 * @member {String} lastUpdatedAt
 */
ConversationAllOf.prototype['lastUpdatedAt'] = undefined;






export default ConversationAllOf;

