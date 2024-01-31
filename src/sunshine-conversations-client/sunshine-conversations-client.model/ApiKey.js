/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.2.1
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
 * The ApiKey model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ApiKey
 * @version 12.2.0
 */
class ApiKey {
    /**
     * Constructs a new <code>ApiKey</code>.
     * The integration key.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ApiKey
     */
    constructor() { 
        
        ApiKey.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ApiKey} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ApiKey} The populated <code>ApiKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiKey();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the API key, used when signing JWTs or accessing the API using Basic Authentication.
     * @return {String}
     */
    getId() {
        return this.id;
    }

    /**
     * Sets The unique ID of the API key, used when signing JWTs or accessing the API using Basic Authentication.
     * @param {String} id The unique ID of the API key, used when signing JWTs or accessing the API using Basic Authentication.
     */
    setId(id) {
        this['id'] = id;
    }
/**
     * Returns The name of the API key.
     * @return {String}
     */
    getDisplayName() {
        return this.displayName;
    }

    /**
     * Sets The name of the API key.
     * @param {String} displayName The name of the API key.
     */
    setDisplayName(displayName) {
        this['displayName'] = displayName;
    }
/**
     * Returns The secret of the API key, used when signing JWTs or accessing the API using Basic Authentication
     * @return {String}
     */
    getSecret() {
        return this.secret;
    }

    /**
     * Sets The secret of the API key, used when signing JWTs or accessing the API using Basic Authentication
     * @param {String} secret The secret of the API key, used when signing JWTs or accessing the API using Basic Authentication
     */
    setSecret(secret) {
        this['secret'] = secret;
    }

}

/**
 * The unique ID of the API key, used when signing JWTs or accessing the API using Basic Authentication.
 * @member {String} id
 */
ApiKey.prototype['id'] = undefined;

/**
 * The name of the API key.
 * @member {String} displayName
 */
ApiKey.prototype['displayName'] = undefined;

/**
 * The secret of the API key, used when signing JWTs or accessing the API using Basic Authentication
 * @member {String} secret
 */
ApiKey.prototype['secret'] = undefined;






export default ApiKey;

