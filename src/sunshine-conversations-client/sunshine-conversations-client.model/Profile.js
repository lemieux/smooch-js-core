/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 14.3.0
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
 * The Profile model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Profile
 * @version 14.3.2
 */
class Profile {
    /**
     * Constructs a new <code>Profile</code>.
     * Object hosting user profile information.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Profile
     */
    constructor() { 
        
        Profile.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Profile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Profile} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Profile} The populated <code>Profile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Profile();

            if (data.hasOwnProperty('givenName')) {
                obj['givenName'] = ApiClient.convertToType(data['givenName'], 'String');
            }
            if (data.hasOwnProperty('surname')) {
                obj['surname'] = ApiClient.convertToType(data['surname'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('avatarUrl')) {
                obj['avatarUrl'] = ApiClient.convertToType(data['avatarUrl'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The user's given name (first name).
     * @return {String}
     */
    getGivenName() {
        return this.givenName;
    }

    /**
     * Sets The user's given name (first name).
     * @param {String} givenName The user's given name (first name).
     */
    setGivenName(givenName) {
        this['givenName'] = givenName;
    }
/**
     * Returns The user's surname (last name).
     * @return {String}
     */
    getSurname() {
        return this.surname;
    }

    /**
     * Sets The user's surname (last name).
     * @param {String} surname The user's surname (last name).
     */
    setSurname(surname) {
        this['surname'] = surname;
    }
/**
     * Returns The user's email address.
     * @return {String}
     */
    getEmail() {
        return this.email;
    }

    /**
     * Sets The user's email address.
     * @param {String} email The user's email address.
     */
    setEmail(email) {
        this['email'] = email;
    }
/**
     * Returns The user's avatar.
     * @return {String}
     */
    getAvatarUrl() {
        return this.avatarUrl;
    }

    /**
     * Sets The user's avatar.
     * @param {String} avatarUrl The user's avatar.
     */
    setAvatarUrl(avatarUrl) {
        this['avatarUrl'] = avatarUrl;
    }
/**
     * Returns End-user's locale information in BCP 47 format.
     * @return {String}
     */
    getLocale() {
        return this.locale;
    }

    /**
     * Sets End-user's locale information in BCP 47 format.
     * @param {String} locale End-user's locale information in BCP 47 format.
     */
    setLocale(locale) {
        this['locale'] = locale;
    }

}

/**
 * The user's given name (first name).
 * @member {String} givenName
 */
Profile.prototype['givenName'] = undefined;

/**
 * The user's surname (last name).
 * @member {String} surname
 */
Profile.prototype['surname'] = undefined;

/**
 * The user's email address.
 * @member {String} email
 */
Profile.prototype['email'] = undefined;

/**
 * The user's avatar.
 * @member {String} avatarUrl
 */
Profile.prototype['avatarUrl'] = undefined;

/**
 * End-user's locale information in BCP 47 format.
 * @member {String} locale
 */
Profile.prototype['locale'] = undefined;






export default Profile;

