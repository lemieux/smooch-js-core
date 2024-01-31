/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.2.1
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
import Action from './Action';

/**
 * The ImageMessage model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ImageMessage
 * @version 12.2.0
 */
class ImageMessage {
    /**
     * Constructs a new <code>ImageMessage</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ImageMessage
     * @param type {String} The type of message.
     * @param mediaUrl {String} The URL for media, such as an image, attached to the message.
     */
    constructor(type, mediaUrl) { 
        
        ImageMessage.initialize(this, type, mediaUrl);
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
     * Constructs a <code>ImageMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ImageMessage} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ImageMessage} The populated <code>ImageMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImageMessage();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('mediaUrl')) {
                obj['mediaUrl'] = ApiClient.convertToType(data['mediaUrl'], 'String');
            }
            if (data.hasOwnProperty('mediaType')) {
                obj['mediaType'] = ApiClient.convertToType(data['mediaType'], 'String');
            }
            if (data.hasOwnProperty('mediaSize')) {
                obj['mediaSize'] = ApiClient.convertToType(data['mediaSize'], 'Number');
            }
            if (data.hasOwnProperty('altText')) {
                obj['altText'] = ApiClient.convertToType(data['altText'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('actions')) {
                obj['actions'] = ApiClient.convertToType(data['actions'], [Action]);
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
     * Returns The type of media.
     * @return {String}
     */
    getMediaType() {
        return this.mediaType;
    }

    /**
     * Sets The type of media.
     * @param {String} mediaType The type of media.
     */
    setMediaType(mediaType) {
        this['mediaType'] = mediaType;
    }
/**
     * Returns The size of the media in bytes.
     * @return {Number}
     */
    getMediaSize() {
        return this.mediaSize;
    }

    /**
     * Sets The size of the media in bytes.
     * @param {Number} mediaSize The size of the media in bytes.
     */
    setMediaSize(mediaSize) {
        this['mediaSize'] = mediaSize;
    }
/**
     * Returns An optional description of the image for accessibility purposes. The field will be saved by default with the file name as the value.
     * @return {String}
     */
    getAltText() {
        return this.altText;
    }

    /**
     * Sets An optional description of the image for accessibility purposes. The field will be saved by default with the file name as the value.
     * @param {String} altText An optional description of the image for accessibility purposes. The field will be saved by default with the file name as the value.
     */
    setAltText(altText) {
        this['altText'] = altText;
    }
/**
     * Returns The text content of the message. Optional only if actions are provided.
     * @return {String}
     */
    getText() {
        return this.text;
    }

    /**
     * Sets The text content of the message. Optional only if actions are provided.
     * @param {String} text The text content of the message. Optional only if actions are provided.
     */
    setText(text) {
        this['text'] = text;
    }
/**
     * Returns Array of message actions.
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Action>}
     */
    getActions() {
        return this.actions;
    }

    /**
     * Sets Array of message actions.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Action>} actions Array of message actions.
     */
    setActions(actions) {
        this['actions'] = actions;
    }

}

/**
 * The type of message.
 * @member {String} type
 * @default 'image'
 */
ImageMessage.prototype['type'] = 'image';

/**
 * The URL for media, such as an image, attached to the message.
 * @member {String} mediaUrl
 */
ImageMessage.prototype['mediaUrl'] = undefined;

/**
 * The type of media.
 * @member {String} mediaType
 */
ImageMessage.prototype['mediaType'] = undefined;

/**
 * The size of the media in bytes.
 * @member {Number} mediaSize
 */
ImageMessage.prototype['mediaSize'] = undefined;

/**
 * An optional description of the image for accessibility purposes. The field will be saved by default with the file name as the value.
 * @member {String} altText
 */
ImageMessage.prototype['altText'] = undefined;

/**
 * The text content of the message. Optional only if actions are provided.
 * @member {String} text
 */
ImageMessage.prototype['text'] = undefined;

/**
 * Array of message actions.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Action>} actions
 */
ImageMessage.prototype['actions'] = undefined;






export default ImageMessage;

