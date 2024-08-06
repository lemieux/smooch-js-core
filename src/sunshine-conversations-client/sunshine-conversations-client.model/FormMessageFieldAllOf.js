/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 12.7.0
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
 * The FormMessageFieldAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/FormMessageFieldAllOf
 * @version 12.7.0
 */
class FormMessageFieldAllOf {
    /**
     * Constructs a new <code>FormMessageFieldAllOf</code>.
     * Properties that can be expected to receive inside a form message field. 
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/FormMessageFieldAllOf
     */
    constructor() { 
        
        FormMessageFieldAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FormMessageFieldAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/FormMessageFieldAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/FormMessageFieldAllOf} The populated <code>FormMessageFieldAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FormMessageFieldAllOf();

            if (data.hasOwnProperty('placeholder')) {
                obj['placeholder'] = ApiClient.convertToType(data['placeholder'], 'String');
            }
            if (data.hasOwnProperty('minSize')) {
                obj['minSize'] = ApiClient.convertToType(data['minSize'], 'Number');
            }
            if (data.hasOwnProperty('maxSize')) {
                obj['maxSize'] = ApiClient.convertToType(data['maxSize'], 'Number');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], [Object]);
            }
        }
        return obj;
    }

/**
     * Returns Placeholder text for the field. Form message only.
     * @return {String}
     */
    getPlaceholder() {
        return this.placeholder;
    }

    /**
     * Sets Placeholder text for the field. Form message only.
     * @param {String} placeholder Placeholder text for the field. Form message only.
     */
    setPlaceholder(placeholder) {
        this['placeholder'] = placeholder;
    }
/**
     * Returns The minimum allowed length for the response for a field of type text. Form message only.
     * minimum: 1
     * maximum: 256
     * @return {Number}
     */
    getMinSize() {
        return this.minSize;
    }

    /**
     * Sets The minimum allowed length for the response for a field of type text. Form message only.
     * @param {Number} minSize The minimum allowed length for the response for a field of type text. Form message only.
     */
    setMinSize(minSize) {
        this['minSize'] = minSize;
    }
/**
     * Returns The maximum allowed length for the response for a field of type text. Form message only.
     * minimum: 1
     * maximum: 256
     * @return {Number}
     */
    getMaxSize() {
        return this.maxSize;
    }

    /**
     * Sets The maximum allowed length for the response for a field of type text. Form message only.
     * @param {Number} maxSize The maximum allowed length for the response for a field of type text. Form message only.
     */
    setMaxSize(maxSize) {
        this['maxSize'] = maxSize;
    }
/**
     * Returns Array of objects representing options for a field of type select.
     * @return {Array.<Object>}
     */
    getOptions() {
        return this.options;
    }

    /**
     * Sets Array of objects representing options for a field of type select.
     * @param {Array.<Object>} options Array of objects representing options for a field of type select.
     */
    setOptions(options) {
        this['options'] = options;
    }

}

/**
 * Placeholder text for the field. Form message only.
 * @member {String} placeholder
 */
FormMessageFieldAllOf.prototype['placeholder'] = undefined;

/**
 * The minimum allowed length for the response for a field of type text. Form message only.
 * @member {Number} minSize
 * @default 1
 */
FormMessageFieldAllOf.prototype['minSize'] = 1;

/**
 * The maximum allowed length for the response for a field of type text. Form message only.
 * @member {Number} maxSize
 * @default 128
 */
FormMessageFieldAllOf.prototype['maxSize'] = 128;

/**
 * Array of objects representing options for a field of type select.
 * @member {Array.<Object>} options
 */
FormMessageFieldAllOf.prototype['options'] = undefined;






export default FormMessageFieldAllOf;

