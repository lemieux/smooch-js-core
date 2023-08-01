/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.14.1
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
 * The InstagramAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/InstagramAllOf
 * @version 9.14.1
 */
class InstagramAllOf {
    /**
     * Constructs a new <code>InstagramAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/InstagramAllOf
     * @param pageAccessToken {String} The Facebook Page Access Token of the Facebook page that is linked to your Instagram account.
     * @param appId {String} Your Facebook App ID.
     * @param appSecret {String} Your Facebook App secret.
     */
    constructor(pageAccessToken, appId, appSecret) { 
        
        InstagramAllOf.initialize(this, pageAccessToken, appId, appSecret);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pageAccessToken, appId, appSecret) { 
        obj['pageAccessToken'] = pageAccessToken;
        obj['appId'] = appId;
        obj['appSecret'] = appSecret;
    }

    /**
     * Constructs a <code>InstagramAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/InstagramAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/InstagramAllOf} The populated <code>InstagramAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstagramAllOf();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('pageAccessToken')) {
                obj['pageAccessToken'] = ApiClient.convertToType(data['pageAccessToken'], 'String');
            }
            if (data.hasOwnProperty('appId')) {
                obj['appId'] = ApiClient.convertToType(data['appId'], 'String');
            }
            if (data.hasOwnProperty('appSecret')) {
                obj['appSecret'] = ApiClient.convertToType(data['appSecret'], 'String');
            }
            if (data.hasOwnProperty('businessName')) {
                obj['businessName'] = ApiClient.convertToType(data['businessName'], 'String');
            }
            if (data.hasOwnProperty('businessUsername')) {
                obj['businessUsername'] = ApiClient.convertToType(data['businessUsername'], 'String');
            }
            if (data.hasOwnProperty('pageId')) {
                obj['pageId'] = ApiClient.convertToType(data['pageId'], 'String');
            }
            if (data.hasOwnProperty('businessId')) {
                obj['businessId'] = ApiClient.convertToType(data['businessId'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns Instagram Direct setup steps:   - Take note of your Facebook app ID and secret (apps can be created at [developer.facebook.com](https://developer.facebook.com));   - The Facebook app must have been submitted to Meta for app review with the \"pages_manage_metadata\" (to retrieve Page Access Tokens for the Pages and apps that the app user administers and to set a webhook), \"instagram_basic\", and \"instagram_manage_messages\" (to retrieve basic Instagram account information and send messages) permissions.   - In order to integrate an Instagram Direct app, you must acquire a Page Access Token from your user. Once you have acquired a page access token from your user, call the Create Integration endpoint with your app secret and ID and the user’s page access token. 
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets Instagram Direct setup steps:   - Take note of your Facebook app ID and secret (apps can be created at [developer.facebook.com](https://developer.facebook.com));   - The Facebook app must have been submitted to Meta for app review with the \"pages_manage_metadata\" (to retrieve Page Access Tokens for the Pages and apps that the app user administers and to set a webhook), \"instagram_basic\", and \"instagram_manage_messages\" (to retrieve basic Instagram account information and send messages) permissions.   - In order to integrate an Instagram Direct app, you must acquire a Page Access Token from your user. Once you have acquired a page access token from your user, call the Create Integration endpoint with your app secret and ID and the user’s page access token. 
     * @param {String} type Instagram Direct setup steps:   - Take note of your Facebook app ID and secret (apps can be created at [developer.facebook.com](https://developer.facebook.com));   - The Facebook app must have been submitted to Meta for app review with the \"pages_manage_metadata\" (to retrieve Page Access Tokens for the Pages and apps that the app user administers and to set a webhook), \"instagram_basic\", and \"instagram_manage_messages\" (to retrieve basic Instagram account information and send messages) permissions.   - In order to integrate an Instagram Direct app, you must acquire a Page Access Token from your user. Once you have acquired a page access token from your user, call the Create Integration endpoint with your app secret and ID and the user’s page access token. 
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The Facebook Page Access Token of the Facebook page that is linked to your Instagram account.
     * @return {String}
     */
    getPageAccessToken() {
        return this.pageAccessToken;
    }

    /**
     * Sets The Facebook Page Access Token of the Facebook page that is linked to your Instagram account.
     * @param {String} pageAccessToken The Facebook Page Access Token of the Facebook page that is linked to your Instagram account.
     */
    setPageAccessToken(pageAccessToken) {
        this['pageAccessToken'] = pageAccessToken;
    }
/**
     * Returns Your Facebook App ID.
     * @return {String}
     */
    getAppId() {
        return this.appId;
    }

    /**
     * Sets Your Facebook App ID.
     * @param {String} appId Your Facebook App ID.
     */
    setAppId(appId) {
        this['appId'] = appId;
    }
/**
     * Returns Your Facebook App secret.
     * @return {String}
     */
    getAppSecret() {
        return this.appSecret;
    }

    /**
     * Sets Your Facebook App secret.
     * @param {String} appSecret Your Facebook App secret.
     */
    setAppSecret(appSecret) {
        this['appSecret'] = appSecret;
    }
/**
     * Returns Your Instagram Business account name
     * @return {String}
     */
    getBusinessName() {
        return this.businessName;
    }

    /**
     * Sets Your Instagram Business account name
     * @param {String} businessName Your Instagram Business account name
     */
    setBusinessName(businessName) {
        this['businessName'] = businessName;
    }
/**
     * Returns Your Instagram Business unique username
     * @return {String}
     */
    getBusinessUsername() {
        return this.businessUsername;
    }

    /**
     * Sets Your Instagram Business unique username
     * @param {String} businessUsername Your Instagram Business unique username
     */
    setBusinessUsername(businessUsername) {
        this['businessUsername'] = businessUsername;
    }
/**
     * Returns The ID of the Facebook Page linked to your Instagram Business account
     * @return {String}
     */
    getPageId() {
        return this.pageId;
    }

    /**
     * Sets The ID of the Facebook Page linked to your Instagram Business account
     * @param {String} pageId The ID of the Facebook Page linked to your Instagram Business account
     */
    setPageId(pageId) {
        this['pageId'] = pageId;
    }
/**
     * Returns The ID of the Instagram Business account
     * @return {String}
     */
    getBusinessId() {
        return this.businessId;
    }

    /**
     * Sets The ID of the Instagram Business account
     * @param {String} businessId The ID of the Instagram Business account
     */
    setBusinessId(businessId) {
        this['businessId'] = businessId;
    }
/**
     * Returns The Facebook user's username. This is returned when integrating through the Dashboard
     * @return {String}
     */
    getUsername() {
        return this.username;
    }

    /**
     * Sets The Facebook user's username. This is returned when integrating through the Dashboard
     * @param {String} username The Facebook user's username. This is returned when integrating through the Dashboard
     */
    setUsername(username) {
        this['username'] = username;
    }
/**
     * Returns The Facebook user's user ID. This is returned when integrating through the Dashboard
     * @return {String}
     */
    getUserId() {
        return this.userId;
    }

    /**
     * Sets The Facebook user's user ID. This is returned when integrating through the Dashboard
     * @param {String} userId The Facebook user's user ID. This is returned when integrating through the Dashboard
     */
    setUserId(userId) {
        this['userId'] = userId;
    }

}

/**
 * Instagram Direct setup steps:   - Take note of your Facebook app ID and secret (apps can be created at [developer.facebook.com](https://developer.facebook.com));   - The Facebook app must have been submitted to Meta for app review with the \"pages_manage_metadata\" (to retrieve Page Access Tokens for the Pages and apps that the app user administers and to set a webhook), \"instagram_basic\", and \"instagram_manage_messages\" (to retrieve basic Instagram account information and send messages) permissions.   - In order to integrate an Instagram Direct app, you must acquire a Page Access Token from your user. Once you have acquired a page access token from your user, call the Create Integration endpoint with your app secret and ID and the user’s page access token. 
 * @member {String} type
 * @default 'instagram'
 */
InstagramAllOf.prototype['type'] = 'instagram';

/**
 * The Facebook Page Access Token of the Facebook page that is linked to your Instagram account.
 * @member {String} pageAccessToken
 */
InstagramAllOf.prototype['pageAccessToken'] = undefined;

/**
 * Your Facebook App ID.
 * @member {String} appId
 */
InstagramAllOf.prototype['appId'] = undefined;

/**
 * Your Facebook App secret.
 * @member {String} appSecret
 */
InstagramAllOf.prototype['appSecret'] = undefined;

/**
 * Your Instagram Business account name
 * @member {String} businessName
 */
InstagramAllOf.prototype['businessName'] = undefined;

/**
 * Your Instagram Business unique username
 * @member {String} businessUsername
 */
InstagramAllOf.prototype['businessUsername'] = undefined;

/**
 * The ID of the Facebook Page linked to your Instagram Business account
 * @member {String} pageId
 */
InstagramAllOf.prototype['pageId'] = undefined;

/**
 * The ID of the Instagram Business account
 * @member {String} businessId
 */
InstagramAllOf.prototype['businessId'] = undefined;

/**
 * The Facebook user's username. This is returned when integrating through the Dashboard
 * @member {String} username
 */
InstagramAllOf.prototype['username'] = undefined;

/**
 * The Facebook user's user ID. This is returned when integrating through the Dashboard
 * @member {String} userId
 */
InstagramAllOf.prototype['userId'] = undefined;






export default InstagramAllOf;

