/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 13.2.0
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
import DefaultResponder from './DefaultResponder';
import DefaultResponderDefaultResponder from './DefaultResponderDefaultResponder';
import DefaultResponderId from './DefaultResponderId';
import Integration from './Integration';
import IosAllOf from './IosAllOf';
import Status from './Status';

/**
 * The Ios model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Ios
 * @version 13.2.0
 */
class Ios {
    /**
     * Constructs a new <code>Ios</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Ios
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/IosAllOf
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderId
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponder
     * @param type {String} To configure an ios integration, call the create integration endpoint with a base64 encoded Apple Push Notification certificate from the [Apple Developer Portal](https://developer.apple.com/). 
     */
    constructor(type) { 
        Integration.initialize(this, type);IosAllOf.initialize(this);DefaultResponderId.initialize(this);DefaultResponder.initialize(this);
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
            DefaultResponderId.constructFromObject(data, obj);
            DefaultResponder.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('attachmentsEnabled')) {
                obj['attachmentsEnabled'] = ApiClient.convertToType(data['attachmentsEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('defaultResponderId')) {
                obj['defaultResponderId'] = ApiClient.convertToType(data['defaultResponderId'], 'String');
            }
            if (data.hasOwnProperty('defaultResponder')) {
                obj['defaultResponder'] = DefaultResponderDefaultResponder.constructFromObject(data['defaultResponder']);
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
/**
     * Returns Allows users to send attachments. By default, the setting is set to true. This setting can only be configured in Zendesk Admin Center. 
     * @return {Boolean}
     */
    getAttachmentsEnabled() {
        return this.attachmentsEnabled;
    }

    /**
     * Sets Allows users to send attachments. By default, the setting is set to true. This setting can only be configured in Zendesk Admin Center. 
     * @param {Boolean} attachmentsEnabled Allows users to send attachments. By default, the setting is set to true. This setting can only be configured in Zendesk Admin Center. 
     */
    setAttachmentsEnabled(attachmentsEnabled) {
        this['attachmentsEnabled'] = attachmentsEnabled;
    }
/**
     * Returns The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
     * @return {String}
     */
    getDefaultResponderId() {
        return this.defaultResponderId;
    }

    /**
     * Sets The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
     * @param {String} defaultResponderId The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
     */
    setDefaultResponderId(defaultResponderId) {
        this['defaultResponderId'] = defaultResponderId;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder}
     */
    getDefaultResponder() {
        return this.defaultResponder;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder} defaultResponder
     */
    setDefaultResponder(defaultResponder) {
        this['defaultResponder'] = defaultResponder;
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

/**
 * Allows users to send attachments. By default, the setting is set to true. This setting can only be configured in Zendesk Admin Center. 
 * @member {Boolean} attachmentsEnabled
 */
Ios.prototype['attachmentsEnabled'] = undefined;

/**
 * The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
 * @member {String} defaultResponderId
 */
Ios.prototype['defaultResponderId'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder} defaultResponder
 */
Ios.prototype['defaultResponder'] = undefined;


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
/**
 * Allows users to send attachments. By default, the setting is set to true. This setting can only be configured in Zendesk Admin Center. 
 * @member {Boolean} attachmentsEnabled
 */
IosAllOf.prototype['attachmentsEnabled'] = undefined;
// Implement DefaultResponderId interface:
/**
 * The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
 * @member {String} defaultResponderId
 */
DefaultResponderId.prototype['defaultResponderId'] = undefined;
// Implement DefaultResponder interface:
/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder} defaultResponder
 */
DefaultResponder.prototype['defaultResponder'] = undefined;




export default Ios;

