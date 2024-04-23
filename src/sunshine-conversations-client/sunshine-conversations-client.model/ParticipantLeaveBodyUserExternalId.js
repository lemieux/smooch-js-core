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
 * The ParticipantLeaveBodyUserExternalId model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBodyUserExternalId
 * @version 12.4.0
 */
class ParticipantLeaveBodyUserExternalId {
    /**
     * Constructs a new <code>ParticipantLeaveBodyUserExternalId</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBodyUserExternalId
     */
    constructor() { 
        
        ParticipantLeaveBodyUserExternalId.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ParticipantLeaveBodyUserExternalId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBodyUserExternalId} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantLeaveBodyUserExternalId} The populated <code>ParticipantLeaveBodyUserExternalId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ParticipantLeaveBodyUserExternalId();

            if (data.hasOwnProperty('userExternalId')) {
                obj['userExternalId'] = ApiClient.convertToType(data['userExternalId'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The externalId of the user that will be removed from the conversation. It will return 404 if the user can’t be found. 
     * @return {String}
     */
    getUserExternalId() {
        return this.userExternalId;
    }

    /**
     * Sets The externalId of the user that will be removed from the conversation. It will return 404 if the user can’t be found. 
     * @param {String} userExternalId The externalId of the user that will be removed from the conversation. It will return 404 if the user can’t be found. 
     */
    setUserExternalId(userExternalId) {
        this['userExternalId'] = userExternalId;
    }

}

/**
 * The externalId of the user that will be removed from the conversation. It will return 404 if the user can’t be found. 
 * @member {String} userExternalId
 */
ParticipantLeaveBodyUserExternalId.prototype['userExternalId'] = undefined;






export default ParticipantLeaveBodyUserExternalId;

