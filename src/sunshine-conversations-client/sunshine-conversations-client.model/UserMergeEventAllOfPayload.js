/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 13.1.0
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
import UserMergeEventAllOfPayloadMergedClients from './UserMergeEventAllOfPayloadMergedClients';
import UserMergeEventAllOfPayloadMergedConversations from './UserMergeEventAllOfPayloadMergedConversations';
import UserMergeEventAllOfPayloadMergedUsers from './UserMergeEventAllOfPayloadMergedUsers';

/**
 * The UserMergeEventAllOfPayload model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayload
 * @version 13.1.0
 */
class UserMergeEventAllOfPayload {
    /**
     * Constructs a new <code>UserMergeEventAllOfPayload</code>.
     * The payload of the event. The contents of this object depend on the type of event.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayload
     */
    constructor() { 
        
        UserMergeEventAllOfPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserMergeEventAllOfPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayload} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayload} The populated <code>UserMergeEventAllOfPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserMergeEventAllOfPayload();

            if (data.hasOwnProperty('mergedUsers')) {
                obj['mergedUsers'] = UserMergeEventAllOfPayloadMergedUsers.constructFromObject(data['mergedUsers']);
            }
            if (data.hasOwnProperty('mergedConversations')) {
                obj['mergedConversations'] = UserMergeEventAllOfPayloadMergedConversations.constructFromObject(data['mergedConversations']);
            }
            if (data.hasOwnProperty('mergedClients')) {
                obj['mergedClients'] = UserMergeEventAllOfPayloadMergedClients.constructFromObject(data['mergedClients']);
            }
            if (data.hasOwnProperty('discardedMetadata')) {
                obj['discardedMetadata'] = ApiClient.convertToType(data['discardedMetadata'], Object);
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedUsers}
     */
    getMergedUsers() {
        return this.mergedUsers;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedUsers} mergedUsers
     */
    setMergedUsers(mergedUsers) {
        this['mergedUsers'] = mergedUsers;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedConversations}
     */
    getMergedConversations() {
        return this.mergedConversations;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedConversations} mergedConversations
     */
    setMergedConversations(mergedConversations) {
        this['mergedConversations'] = mergedConversations;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedClients}
     */
    getMergedClients() {
        return this.mergedClients;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedClients} mergedClients
     */
    setMergedClients(mergedClients) {
        this['mergedClients'] = mergedClients;
    }
/**
     * Returns A flat object with the set of metadata properties that were discarded when merging the two users. This should contain values only if the combined metadata fields exceed the 4KB limit.
     * @return {Object}
     */
    getDiscardedMetadata() {
        return this.discardedMetadata;
    }

    /**
     * Sets A flat object with the set of metadata properties that were discarded when merging the two users. This should contain values only if the combined metadata fields exceed the 4KB limit.
     * @param {Object} discardedMetadata A flat object with the set of metadata properties that were discarded when merging the two users. This should contain values only if the combined metadata fields exceed the 4KB limit.
     */
    setDiscardedMetadata(discardedMetadata) {
        this['discardedMetadata'] = discardedMetadata;
    }
/**
     * Returns The reason for which the users merged. * `api` - The users were merged using the API. * `channelLinking` - The users were merged as a result of initiating a channel link. * `sdkLogin` - The users were merged as a result of logging into an SDK device. 
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayload.ReasonEnum}
     */
    getReason() {
        return this.reason;
    }

    /**
     * Sets The reason for which the users merged. * `api` - The users were merged using the API. * `channelLinking` - The users were merged as a result of initiating a channel link. * `sdkLogin` - The users were merged as a result of logging into an SDK device. 
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayload.ReasonEnum} reason The reason for which the users merged. * `api` - The users were merged using the API. * `channelLinking` - The users were merged as a result of initiating a channel link. * `sdkLogin` - The users were merged as a result of logging into an SDK device. 
     */
    setReason(reason) {
        this['reason'] = reason;
    }

}

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedUsers} mergedUsers
 */
UserMergeEventAllOfPayload.prototype['mergedUsers'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedConversations} mergedConversations
 */
UserMergeEventAllOfPayload.prototype['mergedConversations'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedClients} mergedClients
 */
UserMergeEventAllOfPayload.prototype['mergedClients'] = undefined;

/**
 * A flat object with the set of metadata properties that were discarded when merging the two users. This should contain values only if the combined metadata fields exceed the 4KB limit.
 * @member {Object} discardedMetadata
 */
UserMergeEventAllOfPayload.prototype['discardedMetadata'] = undefined;

/**
 * The reason for which the users merged. * `api` - The users were merged using the API. * `channelLinking` - The users were merged as a result of initiating a channel link. * `sdkLogin` - The users were merged as a result of logging into an SDK device. 
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayload.ReasonEnum} reason
 */
UserMergeEventAllOfPayload.prototype['reason'] = undefined;





/**
 * Allowed values for the <code>reason</code> property.
 * @enum {String}
 * @readonly
 */
UserMergeEventAllOfPayload['ReasonEnum'] = {

    /**
     * value: "api"
     * @const
     */
    "api": "api",

    /**
     * value: "channelLinking"
     * @const
     */
    "channelLinking": "channelLinking",

    /**
     * value: "sdkLogin"
     * @const
     */
    "sdkLogin": "sdkLogin"
};



export default UserMergeEventAllOfPayload;

