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

/**
 * The AndroidUpdateAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AndroidUpdateAllOf
 * @version 9.13.0
 */
class AndroidUpdateAllOf {
    /**
     * Constructs a new <code>AndroidUpdateAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/AndroidUpdateAllOf
     */
    constructor() { 
        
        AndroidUpdateAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AndroidUpdateAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AndroidUpdateAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AndroidUpdateAllOf} The populated <code>AndroidUpdateAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AndroidUpdateAllOf();

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
 * Your server key from the fcm console.
 * @member {String} serverKey
 */
AndroidUpdateAllOf.prototype['serverKey'] = undefined;

/**
 * Your sender id from the fcm console.
 * @member {String} senderId
 */
AndroidUpdateAllOf.prototype['senderId'] = undefined;

/**
 * Allows users to create more than one conversation on the android integration.
 * @member {Boolean} canUserCreateMoreConversations
 */
AndroidUpdateAllOf.prototype['canUserCreateMoreConversations'] = undefined;






export default AndroidUpdateAllOf;

