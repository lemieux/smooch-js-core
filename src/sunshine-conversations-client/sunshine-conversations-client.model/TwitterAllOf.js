/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.7.0
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
 * The TwitterAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/TwitterAllOf
 * @version 9.7.0
 */
class TwitterAllOf {
    /**
     * Constructs a new <code>TwitterAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/TwitterAllOf
     * @param tier {module:sunshine-conversations-client/sunshine-conversations-client.model/TwitterAllOf.TierEnum} Your Twitter app’s tier, sandbox, premium or enterprise.
     * @param consumerKey {String} The consumer key for your Twitter app.
     * @param consumerSecret {String} The consumer key secret for your Twitter app.
     * @param accessTokenSecret {String} The access token secret obtained from your user via oauth.
     */
    constructor(tier, consumerKey, consumerSecret, accessTokenSecret) { 
        
        TwitterAllOf.initialize(this, tier, consumerKey, consumerSecret, accessTokenSecret);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tier, consumerKey, consumerSecret, accessTokenSecret) { 
        obj['tier'] = tier;
        obj['consumerKey'] = consumerKey;
        obj['consumerSecret'] = consumerSecret;
        obj['accessTokenSecret'] = accessTokenSecret;
    }

    /**
     * Constructs a <code>TwitterAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/TwitterAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/TwitterAllOf} The populated <code>TwitterAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TwitterAllOf();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('tier')) {
                obj['tier'] = ApiClient.convertToType(data['tier'], 'String');
            }
            if (data.hasOwnProperty('envName')) {
                obj['envName'] = ApiClient.convertToType(data['envName'], 'String');
            }
            if (data.hasOwnProperty('consumerKey')) {
                obj['consumerKey'] = ApiClient.convertToType(data['consumerKey'], 'String');
            }
            if (data.hasOwnProperty('consumerSecret')) {
                obj['consumerSecret'] = ApiClient.convertToType(data['consumerSecret'], 'String');
            }
            if (data.hasOwnProperty('accessTokenKey')) {
                obj['accessTokenKey'] = ApiClient.convertToType(data['accessTokenKey'], 'String');
            }
            if (data.hasOwnProperty('accessTokenSecret')) {
                obj['accessTokenSecret'] = ApiClient.convertToType(data['accessTokenSecret'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns To set up a Twitter integration, please follow the steps outlined in the [Twitter Setup Guide](https://docs.smooch.io/guide/twitter/#setup). 
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets To set up a Twitter integration, please follow the steps outlined in the [Twitter Setup Guide](https://docs.smooch.io/guide/twitter/#setup). 
     * @param {String} type To set up a Twitter integration, please follow the steps outlined in the [Twitter Setup Guide](https://docs.smooch.io/guide/twitter/#setup). 
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns Your Twitter app’s tier, sandbox, premium or enterprise.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/TwitterAllOf.TierEnum}
     */
    getTier() {
        return this.tier;
    }

    /**
     * Sets Your Twitter app’s tier, sandbox, premium or enterprise.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/TwitterAllOf.TierEnum} tier Your Twitter app’s tier, sandbox, premium or enterprise.
     */
    setTier(tier) {
        this['tier'] = tier;
    }
/**
     * Returns The Twitter dev environments label (required for sandbox and premium tiers).
     * @return {String}
     */
    getEnvName() {
        return this.envName;
    }

    /**
     * Sets The Twitter dev environments label (required for sandbox and premium tiers).
     * @param {String} envName The Twitter dev environments label (required for sandbox and premium tiers).
     */
    setEnvName(envName) {
        this['envName'] = envName;
    }
/**
     * Returns The consumer key for your Twitter app.
     * @return {String}
     */
    getConsumerKey() {
        return this.consumerKey;
    }

    /**
     * Sets The consumer key for your Twitter app.
     * @param {String} consumerKey The consumer key for your Twitter app.
     */
    setConsumerKey(consumerKey) {
        this['consumerKey'] = consumerKey;
    }
/**
     * Returns The consumer key secret for your Twitter app.
     * @return {String}
     */
    getConsumerSecret() {
        return this.consumerSecret;
    }

    /**
     * Sets The consumer key secret for your Twitter app.
     * @param {String} consumerSecret The consumer key secret for your Twitter app.
     */
    setConsumerSecret(consumerSecret) {
        this['consumerSecret'] = consumerSecret;
    }
/**
     * Returns The access token key obtained from your user via oauth.
     * @return {String}
     */
    getAccessTokenKey() {
        return this.accessTokenKey;
    }

    /**
     * Sets The access token key obtained from your user via oauth.
     * @param {String} accessTokenKey The access token key obtained from your user via oauth.
     */
    setAccessTokenKey(accessTokenKey) {
        this['accessTokenKey'] = accessTokenKey;
    }
/**
     * Returns The access token secret obtained from your user via oauth.
     * @return {String}
     */
    getAccessTokenSecret() {
        return this.accessTokenSecret;
    }

    /**
     * Sets The access token secret obtained from your user via oauth.
     * @param {String} accessTokenSecret The access token secret obtained from your user via oauth.
     */
    setAccessTokenSecret(accessTokenSecret) {
        this['accessTokenSecret'] = accessTokenSecret;
    }

}

/**
 * To set up a Twitter integration, please follow the steps outlined in the [Twitter Setup Guide](https://docs.smooch.io/guide/twitter/#setup). 
 * @member {String} type
 * @default 'twitter'
 */
TwitterAllOf.prototype['type'] = 'twitter';

/**
 * Your Twitter app’s tier, sandbox, premium or enterprise.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/TwitterAllOf.TierEnum} tier
 */
TwitterAllOf.prototype['tier'] = undefined;

/**
 * The Twitter dev environments label (required for sandbox and premium tiers).
 * @member {String} envName
 */
TwitterAllOf.prototype['envName'] = undefined;

/**
 * The consumer key for your Twitter app.
 * @member {String} consumerKey
 */
TwitterAllOf.prototype['consumerKey'] = undefined;

/**
 * The consumer key secret for your Twitter app.
 * @member {String} consumerSecret
 */
TwitterAllOf.prototype['consumerSecret'] = undefined;

/**
 * The access token key obtained from your user via oauth.
 * @member {String} accessTokenKey
 */
TwitterAllOf.prototype['accessTokenKey'] = undefined;

/**
 * The access token secret obtained from your user via oauth.
 * @member {String} accessTokenSecret
 */
TwitterAllOf.prototype['accessTokenSecret'] = undefined;





/**
 * Allowed values for the <code>tier</code> property.
 * @enum {String}
 * @readonly
 */
TwitterAllOf['TierEnum'] = {

    /**
     * value: "sandbox"
     * @const
     */
    "sandbox": "sandbox",

    /**
     * value: "premium"
     * @const
     */
    "premium": "premium",

    /**
     * value: "enterprise"
     * @const
     */
    "enterprise": "enterprise"
};



export default TwitterAllOf;

