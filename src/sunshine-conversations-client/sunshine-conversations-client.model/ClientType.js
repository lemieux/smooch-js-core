/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 14.3.3
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
* Enum class ClientType.
* @enum {}
* @readonly
*/
export default class ClientType {
    
        /**
         * value: "apple"
         * @const
         */
        "apple" = "apple";

    
        /**
         * value: "gbm"
         * @const
         */
        "gbm" = "gbm";

    
        /**
         * value: "googlercs"
         * @const
         */
        "googlercs" = "googlercs";

    
        /**
         * value: "instagram"
         * @const
         */
        "instagram" = "instagram";

    
        /**
         * value: "kakao"
         * @const
         */
        "kakao" = "kakao";

    
        /**
         * value: "line"
         * @const
         */
        "line" = "line";

    
        /**
         * value: "mailgun"
         * @const
         */
        "mailgun" = "mailgun";

    
        /**
         * value: "messagebird"
         * @const
         */
        "messagebird" = "messagebird";

    
        /**
         * value: "messenger"
         * @const
         */
        "messenger" = "messenger";

    
        /**
         * value: "slackconnect"
         * @const
         */
        "slackconnect" = "slackconnect";

    
        /**
         * value: "sdk"
         * @const
         */
        "sdk" = "sdk";

    
        /**
         * value: "telegram"
         * @const
         */
        "telegram" = "telegram";

    
        /**
         * value: "twilio"
         * @const
         */
        "twilio" = "twilio";

    
        /**
         * value: "twitter"
         * @const
         */
        "twitter" = "twitter";

    
        /**
         * value: "viber"
         * @const
         */
        "viber" = "viber";

    
        /**
         * value: "wechat"
         * @const
         */
        "wechat" = "wechat";

    
        /**
         * value: "whatsapp"
         * @const
         */
        "whatsapp" = "whatsapp";

    

    /**
    * Returns a <code>ClientType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientType} The enum <code>ClientType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

