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
import Client from './Client';

/**
 * The UserMergeEventAllOfPayloadMergedClients model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedClients
 * @version 13.2.0
 */
class UserMergeEventAllOfPayloadMergedClients {
    /**
     * Constructs a new <code>UserMergeEventAllOfPayloadMergedClients</code>.
     * Contains information about the clients that were merged together as a result of the operation, if applicable. If no clients were merged, this property is omitted.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedClients
     */
    constructor() { 
        
        UserMergeEventAllOfPayloadMergedClients.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserMergeEventAllOfPayloadMergedClients</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedClients} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/UserMergeEventAllOfPayloadMergedClients} The populated <code>UserMergeEventAllOfPayloadMergedClients</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserMergeEventAllOfPayloadMergedClients();

            if (data.hasOwnProperty('surviving')) {
                obj['surviving'] = ApiClient.convertToType(data['surviving'], Client);
            }
            if (data.hasOwnProperty('discarded')) {
                obj['discarded'] = ApiClient.convertToType(data['discarded'], Client);
            }
        }
        return obj;
    }

/**
     * Returns The client that already existed before the merge started.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Client}
     */
    getSurviving() {
        return this.surviving;
    }

    /**
     * Sets The client that already existed before the merge started.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Client} surviving The client that already existed before the merge started.
     */
    setSurviving(surviving) {
        this['surviving'] = surviving;
    }
/**
     * Returns The pending client that was discarded during the merge event.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Client}
     */
    getDiscarded() {
        return this.discarded;
    }

    /**
     * Sets The pending client that was discarded during the merge event.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Client} discarded The pending client that was discarded during the merge event.
     */
    setDiscarded(discarded) {
        this['discarded'] = discarded;
    }

}

/**
 * The client that already existed before the merge started.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Client} surviving
 */
UserMergeEventAllOfPayloadMergedClients.prototype['surviving'] = undefined;

/**
 * The pending client that was discarded during the merge event.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Client} discarded
 */
UserMergeEventAllOfPayloadMergedClients.prototype['discarded'] = undefined;






export default UserMergeEventAllOfPayloadMergedClients;

