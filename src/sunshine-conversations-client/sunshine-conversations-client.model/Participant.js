/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.1.0
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
import ClientAssociation from './ClientAssociation';

/**
 * The Participant model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Participant
 * @version 9.2.0
 */
class Participant {
    /**
     * Constructs a new <code>Participant</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Participant
     */
    constructor() { 
        
        Participant.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Participant</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Participant} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Participant} The populated <code>Participant</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Participant();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('unreadCount')) {
                obj['unreadCount'] = ApiClient.convertToType(data['unreadCount'], 'Number');
            }
            if (data.hasOwnProperty('clientAssociations')) {
                obj['clientAssociations'] = ApiClient.convertToType(data['clientAssociations'], [ClientAssociation]);
            }
            if (data.hasOwnProperty('userExternalId')) {
                obj['userExternalId'] = ApiClient.convertToType(data['userExternalId'], 'String');
            }
            if (data.hasOwnProperty('lastRead')) {
                obj['lastRead'] = ApiClient.convertToType(data['lastRead'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the participant.
     * @return {String}
     */
    getId() {
        return this.id;
    }

    /**
     * Sets The unique ID of the participant.
     * @param {String} id The unique ID of the participant.
     */
    setId(id) {
        this['id'] = id;
    }
/**
     * Returns The id of the associated user.
     * @return {String}
     */
    getUserId() {
        return this.userId;
    }

    /**
     * Sets The id of the associated user.
     * @param {String} userId The id of the associated user.
     */
    setUserId(userId) {
        this['userId'] = userId;
    }
/**
     * Returns Number of messages the user has not yet read.
     * @return {Number}
     */
    getUnreadCount() {
        return this.unreadCount;
    }

    /**
     * Sets Number of messages the user has not yet read.
     * @param {Number} unreadCount Number of messages the user has not yet read.
     */
    setUnreadCount(unreadCount) {
        this['unreadCount'] = unreadCount;
    }
/**
     * Returns Represents the clients that are active in the conversation for a particular user. A participant can have multiple clientAssociations in the case of channel transfer, business initiated conversations, or identified users. The order of the array indicates how recently a client has interacted with the conversation, with the most recent client first. The first item in the array is considered to be the user's primary client for that conversation, and will be selected first for message delivery. 
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ClientAssociation>}
     */
    getClientAssociations() {
        return this.clientAssociations;
    }

    /**
     * Sets Represents the clients that are active in the conversation for a particular user. A participant can have multiple clientAssociations in the case of channel transfer, business initiated conversations, or identified users. The order of the array indicates how recently a client has interacted with the conversation, with the most recent client first. The first item in the array is considered to be the user's primary client for that conversation, and will be selected first for message delivery. 
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ClientAssociation>} clientAssociations Represents the clients that are active in the conversation for a particular user. A participant can have multiple clientAssociations in the case of channel transfer, business initiated conversations, or identified users. The order of the array indicates how recently a client has interacted with the conversation, with the most recent client first. The first item in the array is considered to be the user's primary client for that conversation, and will be selected first for message delivery. 
     */
    setClientAssociations(clientAssociations) {
        this['clientAssociations'] = clientAssociations;
    }
/**
     * Returns The externalId of the associated user.
     * @return {String}
     */
    getUserExternalId() {
        return this.userExternalId;
    }

    /**
     * Sets The externalId of the associated user.
     * @param {String} userExternalId The externalId of the associated user.
     */
    setUserExternalId(userExternalId) {
        this['userExternalId'] = userExternalId;
    }
/**
     * Returns A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the latest message the user has read.
     * @return {String}
     */
    getLastRead() {
        return this.lastRead;
    }

    /**
     * Sets A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the latest message the user has read.
     * @param {String} lastRead A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the latest message the user has read.
     */
    setLastRead(lastRead) {
        this['lastRead'] = lastRead;
    }

}

/**
 * The unique ID of the participant.
 * @member {String} id
 */
Participant.prototype['id'] = undefined;

/**
 * The id of the associated user.
 * @member {String} userId
 */
Participant.prototype['userId'] = undefined;

/**
 * Number of messages the user has not yet read.
 * @member {Number} unreadCount
 */
Participant.prototype['unreadCount'] = undefined;

/**
 * Represents the clients that are active in the conversation for a particular user. A participant can have multiple clientAssociations in the case of channel transfer, business initiated conversations, or identified users. The order of the array indicates how recently a client has interacted with the conversation, with the most recent client first. The first item in the array is considered to be the user's primary client for that conversation, and will be selected first for message delivery. 
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/ClientAssociation>} clientAssociations
 */
Participant.prototype['clientAssociations'] = undefined;

/**
 * The externalId of the associated user.
 * @member {String} userExternalId
 */
Participant.prototype['userExternalId'] = undefined;

/**
 * A datetime string with the format YYYY-MM-DDThh:mm:ss.SSSZ representing the latest message the user has read.
 * @member {String} lastRead
 */
Participant.prototype['lastRead'] = undefined;






export default Participant;

