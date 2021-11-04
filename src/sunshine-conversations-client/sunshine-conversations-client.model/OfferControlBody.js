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

/**
 * The OfferControlBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/OfferControlBody
 * @version 9.4.7
 */
class OfferControlBody {
    /**
     * Constructs a new <code>OfferControlBody</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/OfferControlBody
     * @param switchboardIntegration {String} The id or the name of the switchboard integration that will become pending. Also supports the `next` keyword to offer control to the next switchboard integration designated in the switchboard hierarchy configuration. This cannot match the active switchboard integration.
     */
    constructor(switchboardIntegration) { 
        
        OfferControlBody.initialize(this, switchboardIntegration);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, switchboardIntegration) { 
        obj['switchboardIntegration'] = switchboardIntegration;
    }

    /**
     * Constructs a <code>OfferControlBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/OfferControlBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/OfferControlBody} The populated <code>OfferControlBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OfferControlBody();

            if (data.hasOwnProperty('switchboardIntegration')) {
                obj['switchboardIntegration'] = ApiClient.convertToType(data['switchboardIntegration'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }

/**
     * Returns The id or the name of the switchboard integration that will become pending. Also supports the `next` keyword to offer control to the next switchboard integration designated in the switchboard hierarchy configuration. This cannot match the active switchboard integration.
     * @return {String}
     */
    getSwitchboardIntegration() {
        return this.switchboardIntegration;
    }

    /**
     * Sets The id or the name of the switchboard integration that will become pending. Also supports the `next` keyword to offer control to the next switchboard integration designated in the switchboard hierarchy configuration. This cannot match the active switchboard integration.
     * @param {String} switchboardIntegration The id or the name of the switchboard integration that will become pending. Also supports the `next` keyword to offer control to the next switchboard integration designated in the switchboard hierarchy configuration. This cannot match the active switchboard integration.
     */
    setSwitchboardIntegration(switchboardIntegration) {
        this['switchboardIntegration'] = switchboardIntegration;
    }
/**
     * Returns Flat object containing custom properties. Strings, numbers and booleans are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. The metadata object will be included in the `switchboard:offerControl` and `switchboard:offerControl:failure` webhooks.
     * @return {Object}
     */
    getMetadata() {
        return this.metadata;
    }

    /**
     * Sets Flat object containing custom properties. Strings, numbers and booleans are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. The metadata object will be included in the `switchboard:offerControl` and `switchboard:offerControl:failure` webhooks.
     * @param {Object} metadata Flat object containing custom properties. Strings, numbers and booleans are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. The metadata object will be included in the `switchboard:offerControl` and `switchboard:offerControl:failure` webhooks.
     */
    setMetadata(metadata) {
        this['metadata'] = metadata;
    }

}

/**
 * The id or the name of the switchboard integration that will become pending. Also supports the `next` keyword to offer control to the next switchboard integration designated in the switchboard hierarchy configuration. This cannot match the active switchboard integration.
 * @member {String} switchboardIntegration
 */
OfferControlBody.prototype['switchboardIntegration'] = undefined;

/**
 * Flat object containing custom properties. Strings, numbers and booleans are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. The metadata object will be included in the `switchboard:offerControl` and `switchboard:offerControl:failure` webhooks.
 * @member {Object} metadata
 */
OfferControlBody.prototype['metadata'] = undefined;






export default OfferControlBody;

