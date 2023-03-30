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
import Integration from './Integration';
import Status from './Status';
import TelegramAllOf from './TelegramAllOf';

/**
 * The Telegram model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Telegram
 * @version 9.13.0
 */
class Telegram {
    /**
     * Constructs a new <code>Telegram</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Telegram
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/TelegramAllOf
     * @param type {String} To configure a Telegram integration, acquire the required information from the user and call the Create Integration endpoint. 
     * @param token {String} Telegram Bot Token.
     */
    constructor(type, token) { 
        Integration.initialize(this, type);TelegramAllOf.initialize(this, token);
        Telegram.initialize(this, type, token);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, token) { 
        obj['token'] = token;
    }

    /**
     * Constructs a <code>Telegram</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Telegram} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Telegram} The populated <code>Telegram</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Telegram();
            Integration.constructFromObject(data, obj);
            Integration.constructFromObject(data, obj);
            TelegramAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('botId')) {
                obj['botId'] = ApiClient.convertToType(data['botId'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns To configure a Telegram integration, acquire the required information from the user and call the Create Integration endpoint. 
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets To configure a Telegram integration, acquire the required information from the user and call the Create Integration endpoint. 
     * @param {String} type To configure a Telegram integration, acquire the required information from the user and call the Create Integration endpoint. 
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns Telegram Bot Token.
     * @return {String}
     */
    getToken() {
        return this.token;
    }

    /**
     * Sets Telegram Bot Token.
     * @param {String} token Telegram Bot Token.
     */
    setToken(token) {
        this['token'] = token;
    }
/**
     * Returns Username of the botId
     * @return {String}
     */
    getUsername() {
        return this.username;
    }

    /**
     * Sets Username of the botId
     * @param {String} username Username of the botId
     */
    setUsername(username) {
        this['username'] = username;
    }
/**
     * Returns A human-friendly name used to identify the integration.
     * @return {String}
     */
    getBotId() {
        return this.botId;
    }

    /**
     * Sets A human-friendly name used to identify the integration.
     * @param {String} botId A human-friendly name used to identify the integration.
     */
    setBotId(botId) {
        this['botId'] = botId;
    }

}

/**
 * To configure a Telegram integration, acquire the required information from the user and call the Create Integration endpoint. 
 * @member {String} type
 * @default 'telegram'
 */
Telegram.prototype['type'] = 'telegram';

/**
 * Telegram Bot Token.
 * @member {String} token
 */
Telegram.prototype['token'] = undefined;

/**
 * Username of the botId
 * @member {String} username
 */
Telegram.prototype['username'] = undefined;

/**
 * A human-friendly name used to identify the integration.
 * @member {String} botId
 */
Telegram.prototype['botId'] = undefined;


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
// Implement TelegramAllOf interface:
/**
 * To configure a Telegram integration, acquire the required information from the user and call the Create Integration endpoint. 
 * @member {String} type
 * @default 'telegram'
 */
TelegramAllOf.prototype['type'] = 'telegram';
/**
 * Telegram Bot Token.
 * @member {String} token
 */
TelegramAllOf.prototype['token'] = undefined;
/**
 * Username of the botId
 * @member {String} username
 */
TelegramAllOf.prototype['username'] = undefined;
/**
 * A human-friendly name used to identify the integration.
 * @member {String} botId
 */
TelegramAllOf.prototype['botId'] = undefined;




export default Telegram;

