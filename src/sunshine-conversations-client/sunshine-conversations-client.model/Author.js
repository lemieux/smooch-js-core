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
 * The Author model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Author
 * @version 9.4.5
 */
class Author {
    /**
     * Constructs a new <code>Author</code>.
     * The author of the message.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Author
     * @param type {module:sunshine-conversations-client/sunshine-conversations-client.model/Author.TypeEnum} The type of the author.
     */
    constructor(type) { 
        
        Author.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>Author</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Author} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Author} The populated <code>Author</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Author();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('userExternalId')) {
                obj['userExternalId'] = ApiClient.convertToType(data['userExternalId'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('avatarUrl')) {
                obj['avatarUrl'] = ApiClient.convertToType(data['avatarUrl'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The type of the author.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Author.TypeEnum}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The type of the author.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Author.TypeEnum} type The type of the author.
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The id of the user. Only supported when `type` is user.
     * @return {String}
     */
    getUserId() {
        return this.userId;
    }

    /**
     * Sets The id of the user. Only supported when `type` is user.
     * @param {String} userId The id of the user. Only supported when `type` is user.
     */
    setUserId(userId) {
        this['userId'] = userId;
    }
/**
     * Returns The externalId of the user. Only supported when `type` is user.
     * @return {String}
     */
    getUserExternalId() {
        return this.userExternalId;
    }

    /**
     * Sets The externalId of the user. Only supported when `type` is user.
     * @param {String} userExternalId The externalId of the user. Only supported when `type` is user.
     */
    setUserExternalId(userExternalId) {
        this['userExternalId'] = userExternalId;
    }
/**
     * Returns The display name of the message author.
     * @return {String}
     */
    getDisplayName() {
        return this.displayName;
    }

    /**
     * Sets The display name of the message author.
     * @param {String} displayName The display name of the message author.
     */
    setDisplayName(displayName) {
        this['displayName'] = displayName;
    }
/**
     * Returns A custom message icon url. The image must be in either JPG, PNG, or GIF format
     * @return {String}
     */
    getAvatarUrl() {
        return this.avatarUrl;
    }

    /**
     * Sets A custom message icon url. The image must be in either JPG, PNG, or GIF format
     * @param {String} avatarUrl A custom message icon url. The image must be in either JPG, PNG, or GIF format
     */
    setAvatarUrl(avatarUrl) {
        this['avatarUrl'] = avatarUrl;
    }

}

/**
 * The type of the author.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Author.TypeEnum} type
 */
Author.prototype['type'] = undefined;

/**
 * The id of the user. Only supported when `type` is user.
 * @member {String} userId
 */
Author.prototype['userId'] = undefined;

/**
 * The externalId of the user. Only supported when `type` is user.
 * @member {String} userExternalId
 */
Author.prototype['userExternalId'] = undefined;

/**
 * The display name of the message author.
 * @member {String} displayName
 */
Author.prototype['displayName'] = undefined;

/**
 * A custom message icon url. The image must be in either JPG, PNG, or GIF format
 * @member {String} avatarUrl
 */
Author.prototype['avatarUrl'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Author['TypeEnum'] = {

    /**
     * value: "business"
     * @const
     */
    "business": "business",

    /**
     * value: "user"
     * @const
     */
    "user": "user"
};



export default Author;
