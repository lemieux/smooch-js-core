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
import MatchCriteriaMailgun from './MatchCriteriaMailgun';
import MatchCriteriaMessagebird from './MatchCriteriaMessagebird';
import MatchCriteriaTwilio from './MatchCriteriaTwilio';
import MatchCriteriaWhatsapp from './MatchCriteriaWhatsapp';

/**
 * The MatchCriteria model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteria
 * @version 14.3.3
 */
class MatchCriteria {
    /**
     * Constructs a new <code>MatchCriteria</code>.
     * The set of criteria used to determine the user&#39;s identity on a third-party channel.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteria
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMailgun
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaMessagebird
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaTwilio
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteriaWhatsapp
     * @param type {String} The channel type.
     * @param integrationId {String} The ID of the integration to link. Must match the provided type.
     * @param address {String} The user’s email address.
     * @param phoneNumber {String} The user’s phone number. It must contain the + prefix and the country code. Examples of valid phone numbers: +1 212-555-2368, +12125552368, +1 212 555 2368. Examples of invalid phone numbers: 212 555 2368, 1 212 555 2368. 
     */
    constructor(type, integrationId, address, phoneNumber) { 
        MatchCriteriaMailgun.initialize(this, type, integrationId, address);MatchCriteriaMessagebird.initialize(this, type, integrationId, phoneNumber);MatchCriteriaTwilio.initialize(this, type, integrationId, phoneNumber);MatchCriteriaWhatsapp.initialize(this, type, integrationId, phoneNumber);
        MatchCriteria.initialize(this, type, integrationId, address, phoneNumber);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, integrationId, address, phoneNumber) { 
        obj['type'] = type;
        obj['integrationId'] = integrationId;
        obj['address'] = address;
        obj['phoneNumber'] = phoneNumber;
    }

    /**
     * Constructs a <code>MatchCriteria</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteria} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MatchCriteria} The populated <code>MatchCriteria</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MatchCriteria();
            MatchCriteriaMailgun.constructFromObject(data, obj);
            MatchCriteriaMessagebird.constructFromObject(data, obj);
            MatchCriteriaTwilio.constructFromObject(data, obj);
            MatchCriteriaWhatsapp.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('integrationId')) {
                obj['integrationId'] = ApiClient.convertToType(data['integrationId'], 'String');
            }
            if (data.hasOwnProperty('primary')) {
                obj['primary'] = ApiClient.convertToType(data['primary'], 'Boolean');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('phoneNumber')) {
                obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The channel type.
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The channel type.
     * @param {String} type The channel type.
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The ID of the integration to link. Must match the provided type.
     * @return {String}
     */
    getIntegrationId() {
        return this.integrationId;
    }

    /**
     * Sets The ID of the integration to link. Must match the provided type.
     * @param {String} integrationId The ID of the integration to link. Must match the provided type.
     */
    setIntegrationId(integrationId) {
        this['integrationId'] = integrationId;
    }
/**
     * Returns Flag indicating whether the client will become the primary for the target conversation once linking is complete.
     * @return {Boolean}
     */
    getPrimary() {
        return this.primary;
    }

    /**
     * Sets Flag indicating whether the client will become the primary for the target conversation once linking is complete.
     * @param {Boolean} primary Flag indicating whether the client will become the primary for the target conversation once linking is complete.
     */
    setPrimary(primary) {
        this['primary'] = primary;
    }
/**
     * Returns The user’s email address.
     * @return {String}
     */
    getAddress() {
        return this.address;
    }

    /**
     * Sets The user’s email address.
     * @param {String} address The user’s email address.
     */
    setAddress(address) {
        this['address'] = address;
    }
/**
     * Returns May be specified to set the subject for the outgoing email.
     * @return {String}
     */
    getSubject() {
        return this.subject;
    }

    /**
     * Sets May be specified to set the subject for the outgoing email.
     * @param {String} subject May be specified to set the subject for the outgoing email.
     */
    setSubject(subject) {
        this['subject'] = subject;
    }
/**
     * Returns The user’s phone number. It must contain the + prefix and the country code. Examples of valid phone numbers: +1 212-555-2368, +12125552368, +1 212 555 2368. Examples of invalid phone numbers: 212 555 2368, 1 212 555 2368. 
     * @return {String}
     */
    getPhoneNumber() {
        return this.phoneNumber;
    }

    /**
     * Sets The user’s phone number. It must contain the + prefix and the country code. Examples of valid phone numbers: +1 212-555-2368, +12125552368, +1 212 555 2368. Examples of invalid phone numbers: 212 555 2368, 1 212 555 2368. 
     * @param {String} phoneNumber The user’s phone number. It must contain the + prefix and the country code. Examples of valid phone numbers: +1 212-555-2368, +12125552368, +1 212 555 2368. Examples of invalid phone numbers: 212 555 2368, 1 212 555 2368. 
     */
    setPhoneNumber(phoneNumber) {
        this['phoneNumber'] = phoneNumber;
    }

}

/**
 * The channel type.
 * @member {String} type
 * @default 'whatsapp'
 */
MatchCriteria.prototype['type'] = 'whatsapp';

/**
 * The ID of the integration to link. Must match the provided type.
 * @member {String} integrationId
 */
MatchCriteria.prototype['integrationId'] = undefined;

/**
 * Flag indicating whether the client will become the primary for the target conversation once linking is complete.
 * @member {Boolean} primary
 * @default true
 */
MatchCriteria.prototype['primary'] = true;

/**
 * The user’s email address.
 * @member {String} address
 */
MatchCriteria.prototype['address'] = undefined;

/**
 * May be specified to set the subject for the outgoing email.
 * @member {String} subject
 * @default 'New message from {appName}'
 */
MatchCriteria.prototype['subject'] = 'New message from {appName}';

/**
 * The user’s phone number. It must contain the + prefix and the country code. Examples of valid phone numbers: +1 212-555-2368, +12125552368, +1 212 555 2368. Examples of invalid phone numbers: 212 555 2368, 1 212 555 2368. 
 * @member {String} phoneNumber
 */
MatchCriteria.prototype['phoneNumber'] = undefined;


// Implement MatchCriteriaMailgun interface:
/**
 * The channel type.
 * @member {String} type
 * @default 'mailgun'
 */
MatchCriteriaMailgun.prototype['type'] = 'mailgun';
/**
 * The ID of the integration to link. Must match the provided type.
 * @member {String} integrationId
 */
MatchCriteriaMailgun.prototype['integrationId'] = undefined;
/**
 * Flag indicating whether the client will become the primary for the target conversation once linking is complete.
 * @member {Boolean} primary
 * @default true
 */
MatchCriteriaMailgun.prototype['primary'] = true;
/**
 * The user’s email address.
 * @member {String} address
 */
MatchCriteriaMailgun.prototype['address'] = undefined;
/**
 * May be specified to set the subject for the outgoing email.
 * @member {String} subject
 * @default 'New message from {appName}'
 */
MatchCriteriaMailgun.prototype['subject'] = 'New message from {appName}';
// Implement MatchCriteriaMessagebird interface:
/**
 * The channel type.
 * @member {String} type
 * @default 'messagebird'
 */
MatchCriteriaMessagebird.prototype['type'] = 'messagebird';
/**
 * The ID of the integration to link. Must match the provided type.
 * @member {String} integrationId
 */
MatchCriteriaMessagebird.prototype['integrationId'] = undefined;
/**
 * Flag indicating whether the client will become the primary for the target conversation once linking is complete.
 * @member {Boolean} primary
 * @default true
 */
MatchCriteriaMessagebird.prototype['primary'] = true;
/**
 * The user’s phone number. It must contain the + prefix and the country code. Examples of valid phone numbers: +1 212-555-2368, +12125552368, +1 212 555 2368. Examples of invalid phone numbers: 212 555 2368, 1 212 555 2368. 
 * @member {String} phoneNumber
 */
MatchCriteriaMessagebird.prototype['phoneNumber'] = undefined;
// Implement MatchCriteriaTwilio interface:
/**
 * The channel type.
 * @member {String} type
 * @default 'twilio'
 */
MatchCriteriaTwilio.prototype['type'] = 'twilio';
/**
 * The ID of the integration to link. Must match the provided type.
 * @member {String} integrationId
 */
MatchCriteriaTwilio.prototype['integrationId'] = undefined;
/**
 * Flag indicating whether the client will become the primary for the target conversation once linking is complete.
 * @member {Boolean} primary
 * @default true
 */
MatchCriteriaTwilio.prototype['primary'] = true;
/**
 * The user’s phone number. It must contain the + prefix and the country code. Examples of valid phone numbers: +1 212-555-2368, +12125552368, +1 212 555 2368. Examples of invalid phone numbers: 212 555 2368, 1 212 555 2368. 
 * @member {String} phoneNumber
 */
MatchCriteriaTwilio.prototype['phoneNumber'] = undefined;
// Implement MatchCriteriaWhatsapp interface:
/**
 * The channel type.
 * @member {String} type
 * @default 'whatsapp'
 */
MatchCriteriaWhatsapp.prototype['type'] = 'whatsapp';
/**
 * The ID of the integration to link. Must match the provided type.
 * @member {String} integrationId
 */
MatchCriteriaWhatsapp.prototype['integrationId'] = undefined;
/**
 * Flag indicating whether the client will become the primary for the target conversation once linking is complete.
 * @member {Boolean} primary
 * @default true
 */
MatchCriteriaWhatsapp.prototype['primary'] = true;
/**
 * The user’s phone number. It must contain the + prefix and the country code. Examples of valid phone numbers: +1 212-555-2368, +12125552368, +1 212 555 2368. Examples of invalid phone numbers: 212 555 2368, 1 212 555 2368. 
 * @member {String} phoneNumber
 */
MatchCriteriaWhatsapp.prototype['phoneNumber'] = undefined;




export default MatchCriteria;

