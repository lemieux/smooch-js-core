/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.9.0
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
import AndroidAllOf from './AndroidAllOf';
import Integration from './Integration';
import Status from './Status';

/**
 * The Android model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Android
 * @version 9.9.0
 */
class Android {
    /**
     * Constructs a new <code>Android</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Android
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/AndroidAllOf
     * @param type {String} To configure an android integration, first visit the [Firebase Console](https://console.firebase.google.com/). Copy the `serverKey` and `senderId` from the Cloud Messaging tab in the settings of your project and call the create integrations endpoint with this data. If you would like to continue using your legacy GCM `serverKey` you can also obtain it from the [Google Developer Console](https://console.developers.google.com/). 
     */
    constructor(type) { 
        Integration.initialize(this, type);AndroidAllOf.initialize(this);
        Android.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>Android</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Android} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Android} The populated <code>Android</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Android();
            Integration.constructFromObject(data, obj);
            Integration.constructFromObject(data, obj);
            AndroidAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
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
        }
        return obj;
    }

/**
     * Returns To configure an android integration, first visit the [Firebase Console](https://console.firebase.google.com/). Copy the `serverKey` and `senderId` from the Cloud Messaging tab in the settings of your project and call the create integrations endpoint with this data. If you would like to continue using your legacy GCM `serverKey` you can also obtain it from the [Google Developer Console](https://console.developers.google.com/). 
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets To configure an android integration, first visit the [Firebase Console](https://console.firebase.google.com/). Copy the `serverKey` and `senderId` from the Cloud Messaging tab in the settings of your project and call the create integrations endpoint with this data. If you would like to continue using your legacy GCM `serverKey` you can also obtain it from the [Google Developer Console](https://console.developers.google.com/). 
     * @param {String} type To configure an android integration, first visit the [Firebase Console](https://console.firebase.google.com/). Copy the `serverKey` and `senderId` from the Cloud Messaging tab in the settings of your project and call the create integrations endpoint with this data. If you would like to continue using your legacy GCM `serverKey` you can also obtain it from the [Google Developer Console](https://console.developers.google.com/). 
     */
    setType(type) {
        this['type'] = type;
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

}

/**
 * To configure an android integration, first visit the [Firebase Console](https://console.firebase.google.com/). Copy the `serverKey` and `senderId` from the Cloud Messaging tab in the settings of your project and call the create integrations endpoint with this data. If you would like to continue using your legacy GCM `serverKey` you can also obtain it from the [Google Developer Console](https://console.developers.google.com/). 
 * @member {String} type
 * @default 'android'
 */
Android.prototype['type'] = 'android';

/**
 * Your server key from the fcm console.
 * @member {String} serverKey
 */
Android.prototype['serverKey'] = undefined;

/**
 * Your sender id from the fcm console.
 * @member {String} senderId
 */
Android.prototype['senderId'] = undefined;

/**
 * Allows users to create more than one conversation on the android integration.
 * @member {Boolean} canUserCreateMoreConversations
 */
Android.prototype['canUserCreateMoreConversations'] = undefined;


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
// Implement AndroidAllOf interface:
/**
 * To configure an android integration, first visit the [Firebase Console](https://console.firebase.google.com/). Copy the `serverKey` and `senderId` from the Cloud Messaging tab in the settings of your project and call the create integrations endpoint with this data. If you would like to continue using your legacy GCM `serverKey` you can also obtain it from the [Google Developer Console](https://console.developers.google.com/). 
 * @member {String} type
 * @default 'android'
 */
AndroidAllOf.prototype['type'] = 'android';
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




export default Android;

