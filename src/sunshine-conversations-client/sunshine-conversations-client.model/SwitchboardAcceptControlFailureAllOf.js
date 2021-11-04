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
import SwitchboardAcceptControlFailureAllOfPayload from './SwitchboardAcceptControlFailureAllOfPayload';

/**
 * The SwitchboardAcceptControlFailureAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardAcceptControlFailureAllOf
 * @version 9.4.7
 */
class SwitchboardAcceptControlFailureAllOf {
    /**
     * Constructs a new <code>SwitchboardAcceptControlFailureAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardAcceptControlFailureAllOf
     */
    constructor() { 
        
        SwitchboardAcceptControlFailureAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SwitchboardAcceptControlFailureAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardAcceptControlFailureAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardAcceptControlFailureAllOf} The populated <code>SwitchboardAcceptControlFailureAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SwitchboardAcceptControlFailureAllOf();

            if (data.hasOwnProperty('payload')) {
                obj['payload'] = SwitchboardAcceptControlFailureAllOfPayload.constructFromObject(data['payload']);
            }
        }
        return obj;
    }

/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardAcceptControlFailureAllOfPayload}
     */
    getPayload() {
        return this.payload;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardAcceptControlFailureAllOfPayload} payload
     */
    setPayload(payload) {
        this['payload'] = payload;
    }

}

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardAcceptControlFailureAllOfPayload} payload
 */
SwitchboardAcceptControlFailureAllOf.prototype['payload'] = undefined;






export default SwitchboardAcceptControlFailureAllOf;

