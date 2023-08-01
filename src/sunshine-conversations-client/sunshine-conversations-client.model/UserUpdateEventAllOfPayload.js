/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.14.1
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
import SourceWebhook from './SourceWebhook';
import User from './User';

/**
 * The UserUpdateEventAllOfPayload model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateEventAllOfPayload
 * @version 9.14.1
 */
class UserUpdateEventAllOfPayload {
    /**
     * Constructs a new <code>UserUpdateEventAllOfPayload</code>.
     * The payload of the event. The contents of this object depend on the type of event.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateEventAllOfPayload
     */
    constructor() { 
        
        UserUpdateEventAllOfPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserUpdateEventAllOfPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateEventAllOfPayload} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateEventAllOfPayload} The populated <code>UserUpdateEventAllOfPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserUpdateEventAllOfPayload();

            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], User);
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], SourceWebhook);
            }
        }
        return obj;
    }

/**
     * Returns The updated user.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/User}
     */
    getUser() {
        return this.user;
    }

    /**
     * Sets The updated user.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/User} user The updated user.
     */
    setUser(user) {
        this['user'] = user;
    }
/**
     * Returns The reason why the user was updated, if applicable. * `authentication` - An anonymous user became an [identified](https://docs.smooch.io/guide/intro-to-users/) user. * `localeDetection` - A user was updated as a result of automated locale detection on messages sent. 
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateEventAllOfPayload.ReasonEnum}
     */
    getReason() {
        return this.reason;
    }

    /**
     * Sets The reason why the user was updated, if applicable. * `authentication` - An anonymous user became an [identified](https://docs.smooch.io/guide/intro-to-users/) user. * `localeDetection` - A user was updated as a result of automated locale detection on messages sent. 
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateEventAllOfPayload.ReasonEnum} reason The reason why the user was updated, if applicable. * `authentication` - An anonymous user became an [identified](https://docs.smooch.io/guide/intro-to-users/) user. * `localeDetection` - A user was updated as a result of automated locale detection on messages sent. 
     */
    setReason(reason) {
        this['reason'] = reason;
    }
/**
     * Returns The source of the creation.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWebhook}
     */
    getSource() {
        return this.source;
    }

    /**
     * Sets The source of the creation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWebhook} source The source of the creation.
     */
    setSource(source) {
        this['source'] = source;
    }

}

/**
 * The updated user.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/User} user
 */
UserUpdateEventAllOfPayload.prototype['user'] = undefined;

/**
 * The reason why the user was updated, if applicable. * `authentication` - An anonymous user became an [identified](https://docs.smooch.io/guide/intro-to-users/) user. * `localeDetection` - A user was updated as a result of automated locale detection on messages sent. 
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/UserUpdateEventAllOfPayload.ReasonEnum} reason
 */
UserUpdateEventAllOfPayload.prototype['reason'] = undefined;

/**
 * The source of the creation.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/SourceWebhook} source
 */
UserUpdateEventAllOfPayload.prototype['source'] = undefined;





/**
 * Allowed values for the <code>reason</code> property.
 * @enum {String}
 * @readonly
 */
UserUpdateEventAllOfPayload['ReasonEnum'] = {

    /**
     * value: "authentication"
     * @const
     */
    "authentication": "authentication",

    /**
     * value: "localeDetection"
     * @const
     */
    "localeDetection": "localeDetection"
};



export default UserUpdateEventAllOfPayload;

