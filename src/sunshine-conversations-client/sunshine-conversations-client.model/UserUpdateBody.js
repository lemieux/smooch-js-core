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
import Profile from './Profile';

/**
 * The UserUpdateBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateBody
 * @version 12.2.0
 */
class UserUpdateBody {
    /**
     * Constructs a new <code>UserUpdateBody</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateBody
     */
    constructor() { 
        
        UserUpdateBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserUpdateBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateBody} The populated <code>UserUpdateBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserUpdateBody();

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
     * Returns Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
     * @return {Object}
     */
    getMetadata() {
        return this.metadata;
    }

    /**
     * Sets Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
     * @param {Object} metadata Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
     */
    setMetadata(metadata) {
        this['metadata'] = metadata;
    }

}

/**
 * @member {String} signedUpAt
 */
UserUpdateBody.prototype['signedUpAt'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Profile} profile
 */
UserUpdateBody.prototype['profile'] = undefined;

/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object} metadata
 */
UserUpdateBody.prototype['metadata'] = undefined;






export default UserUpdateBody;

