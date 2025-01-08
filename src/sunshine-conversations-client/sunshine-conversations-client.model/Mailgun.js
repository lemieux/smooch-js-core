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
import DefaultResponder from './DefaultResponder';
import DefaultResponderDefaultResponder from './DefaultResponderDefaultResponder';
import DefaultResponderId from './DefaultResponderId';
import Integration from './Integration';
import MailgunAllOf from './MailgunAllOf';
import Status from './Status';

/**
 * The Mailgun model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Mailgun
 * @version 14.3.3
 */
class Mailgun {
    /**
     * Constructs a new <code>Mailgun</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Mailgun
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/Integration
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/MailgunAllOf
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderId
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponder
     * @param type {String} To configure a Mailgun integration, visit the API Keys tab in the settings page of the Mailgun dashboard and copy your active API key. Call the Create Integration endpoint with your API Key, a domain you have configured in Mailgun, and the incoming address you would like to use. Must have the same domain as the one specified in the domain parameter. 
     * @param apiKey {String} The public API key of your Mailgun account.
     * @param domain {String} The domain used to relay email. This domain must be configured and verified in your Mailgun account.
     * @param incomingAddress {String} Sunshine Conversations will receive all emails sent to this address. It will also be used as the Reply-To address.
     */
    constructor(type, apiKey, domain, incomingAddress) { 
        Integration.initialize(this, type);MailgunAllOf.initialize(this, apiKey, domain, incomingAddress);DefaultResponderId.initialize(this);DefaultResponder.initialize(this);
        Mailgun.initialize(this, type, apiKey, domain, incomingAddress);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, apiKey, domain, incomingAddress) { 
        obj['apiKey'] = apiKey;
        obj['domain'] = domain;
        obj['incomingAddress'] = incomingAddress;
    }

    /**
     * Constructs a <code>Mailgun</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Mailgun} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Mailgun} The populated <code>Mailgun</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Mailgun();
            Integration.constructFromObject(data, obj);
            Integration.constructFromObject(data, obj);
            MailgunAllOf.constructFromObject(data, obj);
            DefaultResponderId.constructFromObject(data, obj);
            DefaultResponder.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('apiKey')) {
                obj['apiKey'] = ApiClient.convertToType(data['apiKey'], 'String');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('incomingAddress')) {
                obj['incomingAddress'] = ApiClient.convertToType(data['incomingAddress'], 'String');
            }
            if (data.hasOwnProperty('hideUnsubscribeLink')) {
                obj['hideUnsubscribeLink'] = ApiClient.convertToType(data['hideUnsubscribeLink'], 'Boolean');
            }
            if (data.hasOwnProperty('fromAddress')) {
                obj['fromAddress'] = ApiClient.convertToType(data['fromAddress'], 'String');
            }
            if (data.hasOwnProperty('defaultResponderId')) {
                obj['defaultResponderId'] = ApiClient.convertToType(data['defaultResponderId'], 'String');
            }
            if (data.hasOwnProperty('defaultResponder')) {
                obj['defaultResponder'] = DefaultResponderDefaultResponder.constructFromObject(data['defaultResponder']);
            }
        }
        return obj;
    }

/**
     * Returns To configure a Mailgun integration, visit the API Keys tab in the settings page of the Mailgun dashboard and copy your active API key. Call the Create Integration endpoint with your API Key, a domain you have configured in Mailgun, and the incoming address you would like to use. Must have the same domain as the one specified in the domain parameter. 
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets To configure a Mailgun integration, visit the API Keys tab in the settings page of the Mailgun dashboard and copy your active API key. Call the Create Integration endpoint with your API Key, a domain you have configured in Mailgun, and the incoming address you would like to use. Must have the same domain as the one specified in the domain parameter. 
     * @param {String} type To configure a Mailgun integration, visit the API Keys tab in the settings page of the Mailgun dashboard and copy your active API key. Call the Create Integration endpoint with your API Key, a domain you have configured in Mailgun, and the incoming address you would like to use. Must have the same domain as the one specified in the domain parameter. 
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The public API key of your Mailgun account.
     * @return {String}
     */
    getApiKey() {
        return this.apiKey;
    }

    /**
     * Sets The public API key of your Mailgun account.
     * @param {String} apiKey The public API key of your Mailgun account.
     */
    setApiKey(apiKey) {
        this['apiKey'] = apiKey;
    }
/**
     * Returns The domain used to relay email. This domain must be configured and verified in your Mailgun account.
     * @return {String}
     */
    getDomain() {
        return this.domain;
    }

    /**
     * Sets The domain used to relay email. This domain must be configured and verified in your Mailgun account.
     * @param {String} domain The domain used to relay email. This domain must be configured and verified in your Mailgun account.
     */
    setDomain(domain) {
        this['domain'] = domain;
    }
/**
     * Returns Sunshine Conversations will receive all emails sent to this address. It will also be used as the Reply-To address.
     * @return {String}
     */
    getIncomingAddress() {
        return this.incomingAddress;
    }

    /**
     * Sets Sunshine Conversations will receive all emails sent to this address. It will also be used as the Reply-To address.
     * @param {String} incomingAddress Sunshine Conversations will receive all emails sent to this address. It will also be used as the Reply-To address.
     */
    setIncomingAddress(incomingAddress) {
        this['incomingAddress'] = incomingAddress;
    }
/**
     * Returns A boolean value indicating whether the unsubscribe link should be omitted from outgoing emails. When enabled, it is expected that the business is providing the user a way to unsubscribe by some other means. By default, the unsubscribe link will be included in all outgoing emails.
     * @return {Boolean}
     */
    getHideUnsubscribeLink() {
        return this.hideUnsubscribeLink;
    }

    /**
     * Sets A boolean value indicating whether the unsubscribe link should be omitted from outgoing emails. When enabled, it is expected that the business is providing the user a way to unsubscribe by some other means. By default, the unsubscribe link will be included in all outgoing emails.
     * @param {Boolean} hideUnsubscribeLink A boolean value indicating whether the unsubscribe link should be omitted from outgoing emails. When enabled, it is expected that the business is providing the user a way to unsubscribe by some other means. By default, the unsubscribe link will be included in all outgoing emails.
     */
    setHideUnsubscribeLink(hideUnsubscribeLink) {
        this['hideUnsubscribeLink'] = hideUnsubscribeLink;
    }
/**
     * Returns Email address to use as the From and Reply-To address if it must be different from incomingAddress. Only use this option if the address that you supply is configured to forward emails to the incomingAddress, otherwise user replies will be lost. You must also make sure that the domain is properly configured as a mail provider so as to not be flagged as spam by the user’s email client. May be unset with null.
     * @return {String}
     */
    getFromAddress() {
        return this.fromAddress;
    }

    /**
     * Sets Email address to use as the From and Reply-To address if it must be different from incomingAddress. Only use this option if the address that you supply is configured to forward emails to the incomingAddress, otherwise user replies will be lost. You must also make sure that the domain is properly configured as a mail provider so as to not be flagged as spam by the user’s email client. May be unset with null.
     * @param {String} fromAddress Email address to use as the From and Reply-To address if it must be different from incomingAddress. Only use this option if the address that you supply is configured to forward emails to the incomingAddress, otherwise user replies will be lost. You must also make sure that the domain is properly configured as a mail provider so as to not be flagged as spam by the user’s email client. May be unset with null.
     */
    setFromAddress(fromAddress) {
        this['fromAddress'] = fromAddress;
    }
/**
     * Returns The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
     * @return {String}
     */
    getDefaultResponderId() {
        return this.defaultResponderId;
    }

    /**
     * Sets The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
     * @param {String} defaultResponderId The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
     */
    setDefaultResponderId(defaultResponderId) {
        this['defaultResponderId'] = defaultResponderId;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder}
     */
    getDefaultResponder() {
        return this.defaultResponder;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder} defaultResponder
     */
    setDefaultResponder(defaultResponder) {
        this['defaultResponder'] = defaultResponder;
    }

}

/**
 * To configure a Mailgun integration, visit the API Keys tab in the settings page of the Mailgun dashboard and copy your active API key. Call the Create Integration endpoint with your API Key, a domain you have configured in Mailgun, and the incoming address you would like to use. Must have the same domain as the one specified in the domain parameter. 
 * @member {String} type
 * @default 'mailgun'
 */
Mailgun.prototype['type'] = 'mailgun';

/**
 * The public API key of your Mailgun account.
 * @member {String} apiKey
 */
Mailgun.prototype['apiKey'] = undefined;

/**
 * The domain used to relay email. This domain must be configured and verified in your Mailgun account.
 * @member {String} domain
 */
Mailgun.prototype['domain'] = undefined;

/**
 * Sunshine Conversations will receive all emails sent to this address. It will also be used as the Reply-To address.
 * @member {String} incomingAddress
 */
Mailgun.prototype['incomingAddress'] = undefined;

/**
 * A boolean value indicating whether the unsubscribe link should be omitted from outgoing emails. When enabled, it is expected that the business is providing the user a way to unsubscribe by some other means. By default, the unsubscribe link will be included in all outgoing emails.
 * @member {Boolean} hideUnsubscribeLink
 */
Mailgun.prototype['hideUnsubscribeLink'] = undefined;

/**
 * Email address to use as the From and Reply-To address if it must be different from incomingAddress. Only use this option if the address that you supply is configured to forward emails to the incomingAddress, otherwise user replies will be lost. You must also make sure that the domain is properly configured as a mail provider so as to not be flagged as spam by the user’s email client. May be unset with null.
 * @member {String} fromAddress
 */
Mailgun.prototype['fromAddress'] = undefined;

/**
 * The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
 * @member {String} defaultResponderId
 */
Mailgun.prototype['defaultResponderId'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder} defaultResponder
 */
Mailgun.prototype['defaultResponder'] = undefined;


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
// Implement MailgunAllOf interface:
/**
 * To configure a Mailgun integration, visit the API Keys tab in the settings page of the Mailgun dashboard and copy your active API key. Call the Create Integration endpoint with your API Key, a domain you have configured in Mailgun, and the incoming address you would like to use. Must have the same domain as the one specified in the domain parameter. 
 * @member {String} type
 * @default 'mailgun'
 */
MailgunAllOf.prototype['type'] = 'mailgun';
/**
 * The public API key of your Mailgun account.
 * @member {String} apiKey
 */
MailgunAllOf.prototype['apiKey'] = undefined;
/**
 * The domain used to relay email. This domain must be configured and verified in your Mailgun account.
 * @member {String} domain
 */
MailgunAllOf.prototype['domain'] = undefined;
/**
 * Sunshine Conversations will receive all emails sent to this address. It will also be used as the Reply-To address.
 * @member {String} incomingAddress
 */
MailgunAllOf.prototype['incomingAddress'] = undefined;
/**
 * A boolean value indicating whether the unsubscribe link should be omitted from outgoing emails. When enabled, it is expected that the business is providing the user a way to unsubscribe by some other means. By default, the unsubscribe link will be included in all outgoing emails.
 * @member {Boolean} hideUnsubscribeLink
 */
MailgunAllOf.prototype['hideUnsubscribeLink'] = undefined;
/**
 * Email address to use as the From and Reply-To address if it must be different from incomingAddress. Only use this option if the address that you supply is configured to forward emails to the incomingAddress, otherwise user replies will be lost. You must also make sure that the domain is properly configured as a mail provider so as to not be flagged as spam by the user’s email client. May be unset with null.
 * @member {String} fromAddress
 */
MailgunAllOf.prototype['fromAddress'] = undefined;
// Implement DefaultResponderId interface:
/**
 * The default responder ID for the integration. This is the ID of the responder that will be used to send messages to the user. For more information, refer to <a href=\"https://docs.smooch.io/guide/switchboard/#per-channel-default-responder\">Per-channel default responder</a> guide. 
 * @member {String} defaultResponderId
 */
DefaultResponderId.prototype['defaultResponderId'] = undefined;
// Implement DefaultResponder interface:
/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/DefaultResponderDefaultResponder} defaultResponder
 */
DefaultResponder.prototype['defaultResponder'] = undefined;




export default Mailgun;

