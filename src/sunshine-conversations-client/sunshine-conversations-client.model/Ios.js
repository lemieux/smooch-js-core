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
import Integration from './Integration';
import IosAllOf from './IosAllOf';
import Status from './Status';

/**
 * The Ios model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Ios
 * @version 9.7.0
 */
class Ios {
    /**
     * Constructs a new <code>Ios</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Ios
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/IosAllOf
     * @param type {String} To configure an ios integration, call the create integration endpoint with a base64 encoded Apple Push Notification certificate from the [Apple Developer Portal](https://developer.apple.com/). 
     */
    constructor(type) { 
        Integration.initialize(this, type);IosAllOf.initialize(this);
        Ios.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>Ios</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Ios} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Ios} The populated <code>Ios</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Ios();
            Integration.constructFromObject(data, obj);
            Integration.constructFromObject(data, obj);
            IosAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
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
     * Returns To configure an ios integration, call the create integration endpoint with a base64 encoded Apple Push Notification certificate from the [Apple Developer Portal](https://developer.apple.com/). 
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets To configure an ios integration, call the create integration endpoint with a base64 encoded Apple Push Notification certificate from the [Apple Developer Portal](https://developer.apple.com/). 
     * @param {String} type To configure an ios integration, call the create integration endpoint with a base64 encoded Apple Push Notification certificate from the [Apple Developer Portal](https://developer.apple.com/). 
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The binary of your APN certificate base64 encoded. To base64 encode your certificate you can use this command in the terminal: `openssl base64 -in YOUR_CERTIFICATE.p12 | tr -d '\\n'` 
     * @return {String}
     */
    getCertificate() {
        return this.certificate;
    }

    /**
     * Sets The binary of your APN certificate base64 encoded. To base64 encode your certificate you can use this command in the terminal: `openssl base64 -in YOUR_CERTIFICATE.p12 | tr -d '\\n'` 
     * @param {String} certificate The binary of your APN certificate base64 encoded. To base64 encode your certificate you can use this command in the terminal: `openssl base64 -in YOUR_CERTIFICATE.p12 | tr -d '\\n'` 
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
 * To configure an ios integration, call the create integration endpoint with a base64 encoded Apple Push Notification certificate from the [Apple Developer Portal](https://developer.apple.com/). 
 * @member {String} type
 * @default 'ios'
 */
Ios.prototype['type'] = 'ios';

/**
 * The binary of your APN certificate base64 encoded. To base64 encode your certificate you can use this command in the terminal: `openssl base64 -in YOUR_CERTIFICATE.p12 | tr -d '\\n'` 
 * @member {String} certificate
 */
Ios.prototype['certificate'] = undefined;

/**
 * The password for your APN certificate.
 * @member {String} password
 */
Ios.prototype['password'] = undefined;

/**
 * The APN environment to connect to (Production, if true, or Sandbox). Defaults to value inferred from certificate if not specified.
 * @member {Boolean} production
 */
Ios.prototype['production'] = undefined;

/**
 * Use the unread count of the conversation as the application badge.
 * @member {Boolean} autoUpdateBadge
 */
Ios.prototype['autoUpdateBadge'] = undefined;

/**
 * Allows users to create more than one conversation on the iOS integration.
 * @member {Boolean} canUserCreateMoreConversations
 */
Ios.prototype['canUserCreateMoreConversations'] = undefined;


// Implement Integration interface:
/**
 * The unique ID of the integration.
 * @member {String} id
 */
Integration.prototype['id'] = undefined;
/**
 * @member {String} type
 */
Integration.prototype['type'] = undefined;
/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Status} status
 */
Integration.prototype['status'] = undefined;
/**
 * A human-friendly name used to identify the integration.
 * @member {String} displayName
 */
Integration.prototype['displayName'] = undefined;
// Implement IosAllOf interface:
/**
 * To configure an ios integration, call the create integration endpoint with a base64 encoded Apple Push Notification certificate from the [Apple Developer Portal](https://developer.apple.com/). 
 * @member {String} type
 * @default 'ios'
 */
IosAllOf.prototype['type'] = 'ios';
/**
 * The binary of your APN certificate base64 encoded. To base64 encode your certificate you can use this command in the terminal: `openssl base64 -in YOUR_CERTIFICATE.p12 | tr -d '\\n'` 
 * @member {String} certificate
 */
IosAllOf.prototype['certificate'] = undefined;
/**
 * The password for your APN certificate.
 * @member {String} password
 */
IosAllOf.prototype['password'] = undefined;
/**
 * The APN environment to connect to (Production, if true, or Sandbox). Defaults to value inferred from certificate if not specified.
 * @member {Boolean} production
 */
IosAllOf.prototype['production'] = undefined;
/**
 * Use the unread count of the conversation as the application badge.
 * @member {Boolean} autoUpdateBadge
 */
IosAllOf.prototype['autoUpdateBadge'] = undefined;
/**
 * Allows users to create more than one conversation on the iOS integration.
 * @member {Boolean} canUserCreateMoreConversations
 */
IosAllOf.prototype['canUserCreateMoreConversations'] = undefined;




export default Ios;

