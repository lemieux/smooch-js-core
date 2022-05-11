/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.7.0
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
 * The FileMessage model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/FileMessage
 * @version 9.7.0
 */
class FileMessage {
    /**
     * Constructs a new <code>FileMessage</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/FileMessage
     * @param type {String} The type of message.
     * @param mediaUrl {String} The URL for media, such as an image, attached to the message.
     */
    constructor(type, mediaUrl) { 
        
        FileMessage.initialize(this, type, mediaUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, mediaUrl) { 
        obj['type'] = type;
        obj['mediaUrl'] = mediaUrl;
    }

    /**
     * Constructs a <code>FileMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/FileMessage} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/FileMessage} The populated <code>FileMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileMessage();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('mediaUrl')) {
                obj['mediaUrl'] = ApiClient.convertToType(data['mediaUrl'], 'String');
            }
            if (data.hasOwnProperty('mediaSize')) {
                obj['mediaSize'] = ApiClient.convertToType(data['mediaSize'], 'Number');
            }
            if (data.hasOwnProperty('mediaType')) {
                obj['mediaType'] = ApiClient.convertToType(data['mediaType'], 'String');
            }
            if (data.hasOwnProperty('altText')) {
                obj['altText'] = ApiClient.convertToType(data['altText'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The type of message.
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The type of message.
     * @param {String} type The type of message.
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The URL for media, such as an image, attached to the message.
     * @return {String}
     */
    getMediaUrl() {
        return this.mediaUrl;
    }

    /**
     * Sets The URL for media, such as an image, attached to the message.
     * @param {String} mediaUrl The URL for media, such as an image, attached to the message.
     */
    setMediaUrl(mediaUrl) {
        this['mediaUrl'] = mediaUrl;
    }
/**
     * Returns The size of the media.
     * @return {Number}
     */
    getMediaSize() {
        return this.mediaSize;
    }

    /**
     * Sets The size of the media.
     * @param {Number} mediaSize The size of the media.
     */
    setMediaSize(mediaSize) {
        this['mediaSize'] = mediaSize;
    }
/**
     * Returns The media type of the file.
     * @return {String}
     */
    getMediaType() {
        return this.mediaType;
    }

    /**
     * Sets The media type of the file.
     * @param {String} mediaType The media type of the file.
     */
    setMediaType(mediaType) {
        this['mediaType'] = mediaType;
    }
/**
     * Returns An optional description of the file for accessibility purposes. The field will be saved by default with the file name as the value.
     * @return {String}
     */
    getAltText() {
        return this.altText;
    }

    /**
     * Sets An optional description of the file for accessibility purposes. The field will be saved by default with the file name as the value.
     * @param {String} altText An optional description of the file for accessibility purposes. The field will be saved by default with the file name as the value.
     */
    setAltText(altText) {
        this['altText'] = altText;
    }
/**
     * Returns The text content of the message.
     * @return {String}
     */
    getText() {
        return this.text;
    }

    /**
     * Sets The text content of the message.
     * @param {String} text The text content of the message.
     */
    setText(text) {
        this['text'] = text;
    }

}

/**
 * The type of message.
 * @member {String} type
 * @default 'file'
 */
FileMessage.prototype['type'] = 'file';

/**
 * The URL for media, such as an image, attached to the message.
 * @member {String} mediaUrl
 */
FileMessage.prototype['mediaUrl'] = undefined;

/**
 * The size of the media.
 * @member {Number} mediaSize
 */
FileMessage.prototype['mediaSize'] = undefined;

/**
 * The media type of the file.
 * @member {String} mediaType
 */
FileMessage.prototype['mediaType'] = undefined;

/**
 * An optional description of the file for accessibility purposes. The field will be saved by default with the file name as the value.
 * @member {String} altText
 */
FileMessage.prototype['altText'] = undefined;

/**
 * The text content of the message.
 * @member {String} text
 */
FileMessage.prototype['text'] = undefined;






export default FileMessage;

