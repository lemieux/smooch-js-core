/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.4.2
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
 * The InstagramUpdateAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/InstagramUpdateAllOf
 * @version 9.4.2
 */
class InstagramUpdateAllOf {
    /**
     * Constructs a new <code>InstagramUpdateAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/InstagramUpdateAllOf
     */
    constructor() { 
        
        InstagramUpdateAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InstagramUpdateAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/InstagramUpdateAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/InstagramUpdateAllOf} The populated <code>InstagramUpdateAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstagramUpdateAllOf();

            if (data.hasOwnProperty('pageAccessToken')) {
                obj['pageAccessToken'] = ApiClient.convertToType(data['pageAccessToken'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns A Facebook Page Access Token.
     * @return {String}
     */
    getPageAccessToken() {
        return this.pageAccessToken;
    }

    /**
     * Sets A Facebook Page Access Token.
     * @param {String} pageAccessToken A Facebook Page Access Token.
     */
    setPageAccessToken(pageAccessToken) {
        this['pageAccessToken'] = pageAccessToken;
    }

}

/**
 * A Facebook Page Access Token.
 * @member {String} pageAccessToken
 */
InstagramUpdateAllOf.prototype['pageAccessToken'] = undefined;






export default InstagramUpdateAllOf;
