/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 14.3.0
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
import DownloadMessageRefBodyAllOf from './DownloadMessageRefBodyAllOf';
import DownloadMessageRefBodyAllOfApple from './DownloadMessageRefBodyAllOfApple';

/**
 * The DownloadMessageRefBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/DownloadMessageRefBody
 * @version 14.3.0
 */
class DownloadMessageRefBody {
    /**
     * Constructs a new <code>DownloadMessageRefBody</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/DownloadMessageRefBody
     * @extends module:sunshine-conversations-client/sunshine-conversations-client.model/DownloadMessageRefBodyAllOf
     * @implements module:sunshine-conversations-client/sunshine-conversations-client.model/DownloadMessageRefBodyAllOf
     * @param userId {String} The id of the user.
     */
    constructor(userId) { 
        DownloadMessageRefBodyAllOf.initialize(this);
        DownloadMessageRefBody.initialize(this, userId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, userId) { 
    }

    /**
     * Constructs a <code>DownloadMessageRefBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/DownloadMessageRefBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/DownloadMessageRefBody} The populated <code>DownloadMessageRefBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DownloadMessageRefBody();
            DownloadMessageRefBodyAllOf.constructFromObject(data, obj);
            DownloadMessageRefBodyAllOf.constructFromObject(data, obj);

        }
        return obj;
    }


}


// Implement DownloadMessageRefBodyAllOf interface:
/**
 * The id of the user.
 * @member {String} userId
 */
DownloadMessageRefBodyAllOf.prototype['userId'] = undefined;
/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/DownloadMessageRefBodyAllOfApple} apple
 */
DownloadMessageRefBodyAllOf.prototype['apple'] = undefined;




export default DownloadMessageRefBody;
