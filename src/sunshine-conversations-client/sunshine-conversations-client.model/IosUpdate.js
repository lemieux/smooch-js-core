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
import IntegrationUpdateBase from './IntegrationUpdateBase';
import IosUpdateAllOf from './IosUpdateAllOf';

/**
 * The IosUpdate model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/IosUpdate
 * @version 9.4.5
 */
class IosUpdate {
    /**
     * Constructs a new <code>IosUpdate</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/IosUpdate
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationUpdateBase
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/IosUpdateAllOf
     */
    constructor() { 
        IntegrationUpdateBase.initialize(this);IosUpdateAllOf.initialize(this);
        IosUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IosUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IosUpdate} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/IosUpdate} The populated <code>IosUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IosUpdate();
            IntegrationUpdateBase.constructFromObject(data, obj);
            IosUpdateAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('certificate')) {
                obj['certificate'] = ApiClient.convertToType(data['certificate'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('production')) {
                obj['production'] = ApiClient.convertToType(data['production'], 'Boolean');
            }
            if (data.hasOwnProperty('autoUpdateBadge')) {
                obj['autoUpdateBadge'] = ApiClient.convertToType(data['autoUpdateBadge'], 'Boolean');
            }
            if (data.hasOwnProperty('canUserCreateMoreConversations')) {
                obj['canUserCreateMoreConversations'] = ApiClient.convertToType(data['canUserCreateMoreConversations'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * Returns A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
     * @return {String}
     */
    getDisplayName() {
        return this.displayName;
    }

    /**
     * Sets A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
     * @param {String} displayName A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
     */
    setDisplayName(displayName) {
        this['displayName'] = displayName;
    }
/**
     * Returns The binary of your APN certificate base64 encoded.
     * @return {String}
     */
    getCertificate() {
        return this.certificate;
    }

    /**
     * Sets The binary of your APN certificate base64 encoded.
     * @param {String} certificate The binary of your APN certificate base64 encoded.
     */
    setCertificate(certificate) {
        this['certificate'] = certificate;
    }
/**
     * Returns The password for your APN certificate.
     * @return {String}
     */
    getPassword() {
        return this.password;
    }

    /**
     * Sets The password for your APN certificate.
     * @param {String} password The password for your APN certificate.
     */
    setPassword(password) {
        this['password'] = password;
    }
/**
     * Returns The APN environment to connect to (Production, if true, or Sandbox). Defaults to value inferred from certificate if not specified.
     * @return {Boolean}
     */
    getProduction() {
        return this.production;
    }

    /**
     * Sets The APN environment to connect to (Production, if true, or Sandbox). Defaults to value inferred from certificate if not specified.
     * @param {Boolean} production The APN environment to connect to (Production, if true, or Sandbox). Defaults to value inferred from certificate if not specified.
     */
    setProduction(production) {
        this['production'] = production;
    }
/**
     * Returns Use the unread count of the conversation as the application badge.
     * @return {Boolean}
     */
    getAutoUpdateBadge() {
        return this.autoUpdateBadge;
    }

    /**
     * Sets Use the unread count of the conversation as the application badge.
     * @param {Boolean} autoUpdateBadge Use the unread count of the conversation as the application badge.
     */
    setAutoUpdateBadge(autoUpdateBadge) {
        this['autoUpdateBadge'] = autoUpdateBadge;
    }
/**
     * Returns Allows users to create more than one conversation on the iOS integration.
     * @return {Boolean}
     */
    getCanUserCreateMoreConversations() {
        return this.canUserCreateMoreConversations;
    }

    /**
     * Sets Allows users to create more than one conversation on the iOS integration.
     * @param {Boolean} canUserCreateMoreConversations Allows users to create more than one conversation on the iOS integration.
     */
    setCanUserCreateMoreConversations(canUserCreateMoreConversations) {
        this['canUserCreateMoreConversations'] = canUserCreateMoreConversations;
    }

}

/**
 * A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
 * @member {String} displayName
 */
IosUpdate.prototype['displayName'] = undefined;

/**
 * The binary of your APN certificate base64 encoded.
 * @member {String} certificate
 */
IosUpdate.prototype['certificate'] = undefined;

/**
 * The password for your APN certificate.
 * @member {String} password
 */
IosUpdate.prototype['password'] = undefined;

/**
 * The APN environment to connect to (Production, if true, or Sandbox). Defaults to value inferred from certificate if not specified.
 * @member {Boolean} production
 */
IosUpdate.prototype['production'] = undefined;

/**
 * Use the unread count of the conversation as the application badge.
 * @member {Boolean} autoUpdateBadge
 */
IosUpdate.prototype['autoUpdateBadge'] = undefined;

/**
 * Allows users to create more than one conversation on the iOS integration.
 * @member {Boolean} canUserCreateMoreConversations
 */
IosUpdate.prototype['canUserCreateMoreConversations'] = undefined;


// Implement IntegrationUpdateBase interface:
/**
 * A human-friendly name used to identify the integration. `displayName` can be unset by changing it to `null`.
 * @member {String} displayName
 */
IntegrationUpdateBase.prototype['displayName'] = undefined;
// Implement IosUpdateAllOf interface:
/**
 * The binary of your APN certificate base64 encoded.
 * @member {String} certificate
 */
IosUpdateAllOf.prototype['certificate'] = undefined;
/**
 * The password for your APN certificate.
 * @member {String} password
 */
IosUpdateAllOf.prototype['password'] = undefined;
/**
 * The APN environment to connect to (Production, if true, or Sandbox). Defaults to value inferred from certificate if not specified.
 * @member {Boolean} production
 */
IosUpdateAllOf.prototype['production'] = undefined;
/**
 * Use the unread count of the conversation as the application badge.
 * @member {Boolean} autoUpdateBadge
 */
IosUpdateAllOf.prototype['autoUpdateBadge'] = undefined;
/**
 * Allows users to create more than one conversation on the iOS integration.
 * @member {Boolean} canUserCreateMoreConversations
 */
IosUpdateAllOf.prototype['canUserCreateMoreConversations'] = undefined;




export default IosUpdate;
