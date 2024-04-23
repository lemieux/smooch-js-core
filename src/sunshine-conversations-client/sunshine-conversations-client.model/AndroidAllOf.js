/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.3.1
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
 * The AndroidAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AndroidAllOf
 * @version 12.4.0
 */
class AndroidAllOf {
    /**
     * Constructs a new <code>AndroidAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/AndroidAllOf
     */
    constructor() { 
        
        AndroidAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AndroidAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AndroidAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AndroidAllOf} The populated <code>AndroidAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AndroidAllOf();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('projectId')) {
                obj['projectId'] = ApiClient.convertToType(data['projectId'], 'String');
            }
            if (data.hasOwnProperty('clientEmail')) {
                obj['clientEmail'] = ApiClient.convertToType(data['clientEmail'], 'String');
            }
            if (data.hasOwnProperty('privateKey')) {
                obj['privateKey'] = ApiClient.convertToType(data['privateKey'], 'String');
            }
            if (data.hasOwnProperty('serverKey')) {
                obj['serverKey'] = ApiClient.convertToType(data['serverKey'], 'String');
            }
            if (data.hasOwnProperty('senderId')) {
                obj['senderId'] = ApiClient.convertToType(data['senderId'], 'String');
            }
            if (data.hasOwnProperty('canUserCreateMoreConversations')) {
                obj['canUserCreateMoreConversations'] = ApiClient.convertToType(data['canUserCreateMoreConversations'], 'Boolean');
            }
            if (data.hasOwnProperty('attachmentsEnabled')) {
                obj['attachmentsEnabled'] = ApiClient.convertToType(data['attachmentsEnabled'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * Returns <aside class=\"notice\">Firebase Cloud Messaging has deprecated its legacy APIs for HTTP and XMPP. Legacy credentials <code>serverKey</code> and <code>senderId</code> will stop working as of June 2024 and must be replaced with OAuth 2.0 access token based credentials.</aside>  To configure an android integration, first visit the [Firebase Console](https://console.firebase.google.com/).  Generate a private key from the Service accounts tab in the settings.  Copy the `project_id`, `client_email` and `private_key` from the generated JSON file and call the create integrations endpoint with this data. 
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets <aside class=\"notice\">Firebase Cloud Messaging has deprecated its legacy APIs for HTTP and XMPP. Legacy credentials <code>serverKey</code> and <code>senderId</code> will stop working as of June 2024 and must be replaced with OAuth 2.0 access token based credentials.</aside>  To configure an android integration, first visit the [Firebase Console](https://console.firebase.google.com/).  Generate a private key from the Service accounts tab in the settings.  Copy the `project_id`, `client_email` and `private_key` from the generated JSON file and call the create integrations endpoint with this data. 
     * @param {String} type <aside class=\"notice\">Firebase Cloud Messaging has deprecated its legacy APIs for HTTP and XMPP. Legacy credentials <code>serverKey</code> and <code>senderId</code> will stop working as of June 2024 and must be replaced with OAuth 2.0 access token based credentials.</aside>  To configure an android integration, first visit the [Firebase Console](https://console.firebase.google.com/).  Generate a private key from the Service accounts tab in the settings.  Copy the `project_id`, `client_email` and `private_key` from the generated JSON file and call the create integrations endpoint with this data. 
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns Your project ID from your generated private key file.
     * @return {String}
     */
    getProjectId() {
        return this.projectId;
    }

    /**
     * Sets Your project ID from your generated private key file.
     * @param {String} projectId Your project ID from your generated private key file.
     */
    setProjectId(projectId) {
        this['projectId'] = projectId;
    }
/**
     * Returns Your client email from your generated private key file.
     * @return {String}
     */
    getClientEmail() {
        return this.clientEmail;
    }

    /**
     * Sets Your client email from your generated private key file.
     * @param {String} clientEmail Your client email from your generated private key file.
     */
    setClientEmail(clientEmail) {
        this['clientEmail'] = clientEmail;
    }
/**
     * Returns Your private key from your generated private key file.
     * @return {String}
     */
    getPrivateKey() {
        return this.privateKey;
    }

    /**
     * Sets Your private key from your generated private key file.
     * @param {String} privateKey Your private key from your generated private key file.
     */
    setPrivateKey(privateKey) {
        this['privateKey'] = privateKey;
    }
/**
     * Returns Your server key from the fcm console.
     * @return {String}
     */
    getServerKey() {
        return this.serverKey;
    }

    /**
     * Sets Your server key from the fcm console.
     * @param {String} serverKey Your server key from the fcm console.
     */
    setServerKey(serverKey) {
        this['serverKey'] = serverKey;
    }
/**
     * Returns Your sender id from the fcm console.
     * @return {String}
     */
    getSenderId() {
        return this.senderId;
    }

    /**
     * Sets Your sender id from the fcm console.
     * @param {String} senderId Your sender id from the fcm console.
     */
    setSenderId(senderId) {
        this['senderId'] = senderId;
    }
/**
     * Returns Allows users to create more than one conversation on the android integration.
     * @return {Boolean}
     */
    getCanUserCreateMoreConversations() {
        return this.canUserCreateMoreConversations;
    }

    /**
     * Sets Allows users to create more than one conversation on the android integration.
     * @param {Boolean} canUserCreateMoreConversations Allows users to create more than one conversation on the android integration.
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

}

/**
 * <aside class=\"notice\">Firebase Cloud Messaging has deprecated its legacy APIs for HTTP and XMPP. Legacy credentials <code>serverKey</code> and <code>senderId</code> will stop working as of June 2024 and must be replaced with OAuth 2.0 access token based credentials.</aside>  To configure an android integration, first visit the [Firebase Console](https://console.firebase.google.com/).  Generate a private key from the Service accounts tab in the settings.  Copy the `project_id`, `client_email` and `private_key` from the generated JSON file and call the create integrations endpoint with this data. 
 * @member {String} type
 * @default 'android'
 */
AndroidAllOf.prototype['type'] = 'android';

/**
 * Your project ID from your generated private key file.
 * @member {String} projectId
 */
AndroidAllOf.prototype['projectId'] = undefined;

/**
 * Your client email from your generated private key file.
 * @member {String} clientEmail
 */
AndroidAllOf.prototype['clientEmail'] = undefined;

/**
 * Your private key from your generated private key file.
 * @member {String} privateKey
 */
AndroidAllOf.prototype['privateKey'] = undefined;

/**
 * Your server key from the fcm console.
 * @member {String} serverKey
 */
AndroidAllOf.prototype['serverKey'] = undefined;

/**
 * Your sender id from the fcm console.
 * @member {String} senderId
 */
AndroidAllOf.prototype['senderId'] = undefined;

/**
 * Allows users to create more than one conversation on the android integration.
 * @member {Boolean} canUserCreateMoreConversations
 */
AndroidAllOf.prototype['canUserCreateMoreConversations'] = undefined;

/**
 * Allows users to send attachments. By default, the setting is set to true. This setting can only be configured in Zendesk Admin Center. 
 * @member {Boolean} attachmentsEnabled
 */
AndroidAllOf.prototype['attachmentsEnabled'] = undefined;






export default AndroidAllOf;

