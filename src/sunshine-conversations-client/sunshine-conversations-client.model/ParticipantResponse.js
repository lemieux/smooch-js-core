/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.4.5
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
import Participant from './Participant';

/**
 * The ParticipantResponse model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ParticipantResponse
 * @version 9.4.5
 */
class ParticipantResponse {
    /**
     * Constructs a new <code>ParticipantResponse</code>.
     * The created participant.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantResponse
     */
    constructor() { 
        
        ParticipantResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ParticipantResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantResponse} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ParticipantResponse} The populated <code>ParticipantResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ParticipantResponse();

            if (data.hasOwnProperty('participant')) {
                obj['participant'] = Participant.constructFromObject(data['participant']);
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Participant}
     */
    getParticipant() {
        return this.participant;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Participant} participant
     */
    setParticipant(participant) {
        this['participant'] = participant;
    }

}

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Participant} participant
 */
ParticipantResponse.prototype['participant'] = undefined;






export default ParticipantResponse;
