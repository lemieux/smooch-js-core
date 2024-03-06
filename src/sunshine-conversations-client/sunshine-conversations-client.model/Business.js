/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.3.0
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
import Author from './Author';
import BusinessAllOf from './BusinessAllOf';

/**
 * The Business model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Business
 * @version 12.3.0
 */
class Business {
    /**
     * Constructs a new <code>Business</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Business
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Author
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/BusinessAllOf
     * @param type {module:sunshine-conversations-client/sunshine-conversations-client.model/Business.TypeEnum} The author type.
     */
    constructor(type) { 
        Author.initialize(this, type);BusinessAllOf.initialize(this);
        Business.initialize(this, type);
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
     * Constructs a <code>Business</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Business} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Business} The populated <code>Business</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Business();
            Author.constructFromObject(data, obj);
            BusinessAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('subtypes')) {
                obj['subtypes'] = ApiClient.convertToType(data['subtypes'], ['String']);
            }
        }
        return obj;
    }

/**
     * Returns The author type.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Business.TypeEnum}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The author type.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Business.TypeEnum} type The author type.
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
     * Returns A custom message icon URL. The image must be JPG, PNG, or GIF format.
     * @return {String}
     */
    getAvatarUrl() {
        return this.avatarUrl;
    }

    /**
     * Sets A custom message icon URL. The image must be JPG, PNG, or GIF format.
     * @param {String} avatarUrl A custom message icon URL. The image must be JPG, PNG, or GIF format.
     */
    setAvatarUrl(avatarUrl) {
        this['avatarUrl'] = avatarUrl;
    }
/**
     * Returns A string array that indicates the author's subtypes. Messages with an \"AI\" subtype are generated by AI  and a disclaimer is appended to the text of the message sent to the customer. For third-party channels,  the disclaimer is applied for image, file, and text message types. 
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Business.SubtypesEnum>}
     */
    getSubtypes() {
        return this.subtypes;
    }

    /**
     * Sets A string array that indicates the author's subtypes. Messages with an \"AI\" subtype are generated by AI  and a disclaimer is appended to the text of the message sent to the customer. For third-party channels,  the disclaimer is applied for image, file, and text message types. 
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Business.SubtypesEnum>} subtypes A string array that indicates the author's subtypes. Messages with an \"AI\" subtype are generated by AI  and a disclaimer is appended to the text of the message sent to the customer. For third-party channels,  the disclaimer is applied for image, file, and text message types. 
     */
    setSubtypes(subtypes) {
        this['subtypes'] = subtypes;
    }

}

/**
 * The author type.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Business.TypeEnum} type
 */
Business.prototype['type'] = undefined;

/**
 * The id of the user. Only supported when `type` is user.
 * @member {String} userId
 */
Business.prototype['userId'] = undefined;

/**
 * The externalId of the user. Only supported when `type` is user.
 * @member {String} userExternalId
 */
Business.prototype['userExternalId'] = undefined;

/**
 * The display name of the message author.
 * @member {String} displayName
 */
Business.prototype['displayName'] = undefined;

/**
 * A custom message icon URL. The image must be JPG, PNG, or GIF format.
 * @member {String} avatarUrl
 */
Business.prototype['avatarUrl'] = undefined;

/**
 * A string array that indicates the author's subtypes. Messages with an \"AI\" subtype are generated by AI  and a disclaimer is appended to the text of the message sent to the customer. For third-party channels,  the disclaimer is applied for image, file, and text message types. 
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Business.SubtypesEnum>} subtypes
 */
Business.prototype['subtypes'] = undefined;


// Implement Author interface:
/**
 * The author type. Either \"user\" (representing the end user)  or \"business\" (sent on behalf of the business). 
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
 * A custom message icon URL. The image must be JPG, PNG, or GIF format.
 * @member {String} avatarUrl
 */
Author.prototype['avatarUrl'] = undefined;
// Implement BusinessAllOf interface:
/**
 * The author type.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/BusinessAllOf.TypeEnum} type
 */
BusinessAllOf.prototype['type'] = undefined;
/**
 * A string array that indicates the author's subtypes. Messages with an \"AI\" subtype are generated by AI  and a disclaimer is appended to the text of the message sent to the customer. For third-party channels,  the disclaimer is applied for image, file, and text message types. 
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/BusinessAllOf.SubtypesEnum>} subtypes
 */
BusinessAllOf.prototype['subtypes'] = undefined;



/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Business['TypeEnum'] = {

    /**
     * value: "business"
     * @const
     */
    "business": "business"
};


/**
 * Allowed values for the <code>subtypes</code> property.
 * @enum {String}
 * @readonly
 */
Business['SubtypesEnum'] = {

    /**
     * value: "AI"
     * @const
     */
    "AI": "AI"
};



export default Business;
