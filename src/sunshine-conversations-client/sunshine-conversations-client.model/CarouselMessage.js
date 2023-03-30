/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.12.0
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
import CarouselMessageDisplaySettings from './CarouselMessageDisplaySettings';
import Item from './Item';

/**
 * The CarouselMessage model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessage
 * @version 9.13.0
 */
class CarouselMessage {
    /**
     * Constructs a new <code>CarouselMessage</code>.
     * Carousel messages are a horizontally scrollable set of items that may each contain text, an image, and message actions. Not all messaging channels fully support carousel messages; currently only Facebook Messenger, LINE, Telegram, Viber, the Web Messenger, the Android SDK and the iOS SDK cover the full functionality. For all other platforms a carousel message is rendered as raw text. The raw text fallback does not include any images or postback message actions.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessage
     * @param type {String} The type of message.
     * @param items {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Item>} An array of objects representing the items associated with the message. Only present in carousel and list type messages.
     */
    constructor(type, items) { 
        
        CarouselMessage.initialize(this, type, items);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, items) { 
        obj['type'] = type;
        obj['items'] = items;
    }

    /**
     * Constructs a <code>CarouselMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessage} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessage} The populated <code>CarouselMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CarouselMessage();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [Item]);
            }
            if (data.hasOwnProperty('displaySettings')) {
                obj['displaySettings'] = CarouselMessageDisplaySettings.constructFromObject(data['displaySettings']);
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
     * Returns The fallback text message used when carousel messages are not supported by the channel.
     * @return {String}
     */
    getText() {
        return this.text;
    }

    /**
     * Sets The fallback text message used when carousel messages are not supported by the channel.
     * @param {String} text The fallback text message used when carousel messages are not supported by the channel.
     */
    setText(text) {
        this['text'] = text;
    }
/**
     * Returns An array of objects representing the items associated with the message. Only present in carousel and list type messages.
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Item>}
     */
    getItems() {
        return this.items;
    }

    /**
     * Sets An array of objects representing the items associated with the message. Only present in carousel and list type messages.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Item>} items An array of objects representing the items associated with the message. Only present in carousel and list type messages.
     */
    setItems(items) {
        this['items'] = items;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessageDisplaySettings}
     */
    getDisplaySettings() {
        return this.displaySettings;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessageDisplaySettings} displaySettings
     */
    setDisplaySettings(displaySettings) {
        this['displaySettings'] = displaySettings;
    }

}

/**
 * The type of message.
 * @member {String} type
 * @default 'carousel'
 */
CarouselMessage.prototype['type'] = 'carousel';

/**
 * The fallback text message used when carousel messages are not supported by the channel.
 * @member {String} text
 */
CarouselMessage.prototype['text'] = undefined;

/**
 * An array of objects representing the items associated with the message. Only present in carousel and list type messages.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Item>} items
 */
CarouselMessage.prototype['items'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/CarouselMessageDisplaySettings} displaySettings
 */
CarouselMessage.prototype['displaySettings'] = undefined;






export default CarouselMessage;

