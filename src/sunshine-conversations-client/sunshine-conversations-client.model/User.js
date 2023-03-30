/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.12.0
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
import Profile from './Profile';
import UserAllOf from './UserAllOf';
import UserTruncated from './UserTruncated';

/**
 * The User model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/User
 * @version 9.13.0
 */
class User {
    /**
     * Constructs a new <code>User</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/User
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/UserTruncated
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/UserAllOf
     */
    constructor() { 
        UserTruncated.initialize(this);UserAllOf.initialize(this);
        User.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/User} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/User} The populated <code>User</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new User();
            UserTruncated.constructFromObject(data, obj);
            UserAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
            if (data.hasOwnProperty('signedUpAt')) {
                obj['signedUpAt'] = ApiClient.convertToType(data['signedUpAt'], 'String');
            }
            if (data.hasOwnProperty('profile')) {
                obj['profile'] = ApiClient.convertToType(data['profile'], Profile);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the user.
     * @return {String}
     */
    getId() {
        return this.id;
    }

    /**
     * Sets The unique ID of the user.
     * @param {String} id The unique ID of the user.
     */
    setId(id) {
        this['id'] = id;
    }
/**
     * Returns An optional ID that can also be used to retrieve the user. 
     * @return {String}
     */
    getExternalId() {
        return this.externalId;
    }

    /**
     * Sets An optional ID that can also be used to retrieve the user. 
     * @param {String} externalId An optional ID that can also be used to retrieve the user. 
     */
    setExternalId(externalId) {
        this['externalId'] = externalId;
    }
/**
     * @return {String}
     */
    getSignedUpAt() {
        return this.signedUpAt;
    }

    /**
     * @param {String} signedUpAt
     */
    setSignedUpAt(signedUpAt) {
        this['signedUpAt'] = signedUpAt;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Profile}
     */
    getProfile() {
        return this.profile;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Profile} profile
     */
    setProfile(profile) {
        this['profile'] = profile;
    }
/**
     * @return {Object}
     */
    getMetadata() {
        return this.metadata;
    }

    /**
     * @param {Object} metadata
     */
    setMetadata(metadata) {
        this['metadata'] = metadata;
    }

}

/**
 * The unique ID of the user.
 * @member {String} id
 */
User.prototype['id'] = undefined;

/**
 * An optional ID that can also be used to retrieve the user. 
 * @member {String} externalId
 */
User.prototype['externalId'] = undefined;

/**
 * @member {String} signedUpAt
 */
User.prototype['signedUpAt'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Profile} profile
 */
User.prototype['profile'] = undefined;

/**
 * @member {Object} metadata
 */
User.prototype['metadata'] = undefined;


// Implement UserTruncated interface:
/**
 * The unique ID of the user.
 * @member {String} id
 */
UserTruncated.prototype['id'] = undefined;
/**
 * An optional ID that can also be used to retrieve the user. 
 * @member {String} externalId
 */
UserTruncated.prototype['externalId'] = undefined;
// Implement UserAllOf interface:
/**
 * @member {String} signedUpAt
 */
UserAllOf.prototype['signedUpAt'] = undefined;
/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Profile} profile
 */
UserAllOf.prototype['profile'] = undefined;
/**
 * @member {Object} metadata
 */
UserAllOf.prototype['metadata'] = undefined;




export default User;

