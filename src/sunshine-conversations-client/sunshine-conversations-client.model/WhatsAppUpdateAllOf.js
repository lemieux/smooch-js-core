/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.1.0
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
 * The WhatsAppUpdateAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/WhatsAppUpdateAllOf
 * @version 9.2.0
 */
class WhatsAppUpdateAllOf {
    /**
     * Constructs a new <code>WhatsAppUpdateAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/WhatsAppUpdateAllOf
     */
    constructor() { 
        
        WhatsAppUpdateAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WhatsAppUpdateAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/WhatsAppUpdateAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/WhatsAppUpdateAllOf} The populated <code>WhatsAppUpdateAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WhatsAppUpdateAllOf();

            if (data.hasOwnProperty('hsmFallbackLanguage')) {
                obj['hsmFallbackLanguage'] = ApiClient.convertToType(data['hsmFallbackLanguage'], 'String');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
            }
            if (data.hasOwnProperty('accountManagementAccessToken')) {
                obj['accountManagementAccessToken'] = ApiClient.convertToType(data['accountManagementAccessToken'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns Specify a fallback language to use when sending WhatsApp message template using the short hand syntax. Defaults to en_US. See WhatsApp documentation for more info.
     * @return {String}
     */
    getHsmFallbackLanguage() {
        return this.hsmFallbackLanguage;
    }

    /**
     * Sets Specify a fallback language to use when sending WhatsApp message template using the short hand syntax. Defaults to en_US. See WhatsApp documentation for more info.
     * @param {String} hsmFallbackLanguage Specify a fallback language to use when sending WhatsApp message template using the short hand syntax. Defaults to en_US. See WhatsApp documentation for more info.
     */
    setHsmFallbackLanguage(hsmFallbackLanguage) {
        this['hsmFallbackLanguage'] = hsmFallbackLanguage;
    }
/**
     * Returns The business ID associated with the WhatsApp account. In combination with accountManagementAccessToken, it’s used for Message Template Reconstruction.
     * @return {String}
     */
    getAccountId() {
        return this.accountId;
    }

    /**
     * Sets The business ID associated with the WhatsApp account. In combination with accountManagementAccessToken, it’s used for Message Template Reconstruction.
     * @param {String} accountId The business ID associated with the WhatsApp account. In combination with accountManagementAccessToken, it’s used for Message Template Reconstruction.
     */
    setAccountId(accountId) {
        this['accountId'] = accountId;
    }
/**
     * Returns An access token associated with the accountId used to query the WhatsApp Account Management API. In combination with accountId, it’s used for Message Template Reconstruction.
     * @return {String}
     */
    getAccountManagementAccessToken() {
        return this.accountManagementAccessToken;
    }

    /**
     * Sets An access token associated with the accountId used to query the WhatsApp Account Management API. In combination with accountId, it’s used for Message Template Reconstruction.
     * @param {String} accountManagementAccessToken An access token associated with the accountId used to query the WhatsApp Account Management API. In combination with accountId, it’s used for Message Template Reconstruction.
     */
    setAccountManagementAccessToken(accountManagementAccessToken) {
        this['accountManagementAccessToken'] = accountManagementAccessToken;
    }

}

/**
 * Specify a fallback language to use when sending WhatsApp message template using the short hand syntax. Defaults to en_US. See WhatsApp documentation for more info.
 * @member {String} hsmFallbackLanguage
 * @default 'en_US'
 */
WhatsAppUpdateAllOf.prototype['hsmFallbackLanguage'] = 'en_US';

/**
 * The business ID associated with the WhatsApp account. In combination with accountManagementAccessToken, it’s used for Message Template Reconstruction.
 * @member {String} accountId
 */
WhatsAppUpdateAllOf.prototype['accountId'] = undefined;

/**
 * An access token associated with the accountId used to query the WhatsApp Account Management API. In combination with accountId, it’s used for Message Template Reconstruction.
 * @member {String} accountManagementAccessToken
 */
WhatsAppUpdateAllOf.prototype['accountManagementAccessToken'] = undefined;






export default WhatsAppUpdateAllOf;

