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

/**
 * The AttachmentDeleteBody model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AttachmentDeleteBody
 * @version 13.1.0
 */
class AttachmentDeleteBody {
    /**
     * Constructs a new <code>AttachmentDeleteBody</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentDeleteBody
     * @param mediaUrl {String} The media URL used for a file or image message.
     */
    constructor(mediaUrl) { 
        
        AttachmentDeleteBody.initialize(this, mediaUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, mediaUrl) { 
        obj['mediaUrl'] = mediaUrl;
    }

    /**
     * Constructs a <code>AttachmentDeleteBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentDeleteBody} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AttachmentDeleteBody} The populated <code>AttachmentDeleteBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttachmentDeleteBody();

            if (data.hasOwnProperty('mediaUrl')) {
                obj['mediaUrl'] = ApiClient.convertToType(data['mediaUrl'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The media URL used for a file or image message.
     * @return {String}
     */
    getMediaUrl() {
        return this.mediaUrl;
    }

    /**
     * Sets The media URL used for a file or image message.
     * @param {String} mediaUrl The media URL used for a file or image message.
     */
    setMediaUrl(mediaUrl) {
        this['mediaUrl'] = mediaUrl;
    }

}

/**
 * The media URL used for a file or image message.
 * @member {String} mediaUrl
 */
AttachmentDeleteBody.prototype['mediaUrl'] = undefined;






export default AttachmentDeleteBody;

