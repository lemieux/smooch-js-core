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
import Author from './Author';

/**
 * The ActivityPostAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/ActivityPostAllOf
 * @version 9.4.5
 */
class ActivityPostAllOf {
    /**
     * Constructs a new <code>ActivityPostAllOf</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityPostAllOf
     */
    constructor() { 
        
        ActivityPostAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActivityPostAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityPostAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ActivityPostAllOf} The populated <code>ActivityPostAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivityPostAllOf();

            if (data.hasOwnProperty('author')) {
                obj['author'] = ApiClient.convertToType(data['author'], Author);
            }
        }
        return obj;
    }

/**
     * Returns The author of the activity.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Author}
     */
    getAuthor() {
        return this.author;
    }

    /**
     * Sets The author of the activity.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Author} author The author of the activity.
     */
    setAuthor(author) {
        this['author'] = author;
    }

}

/**
 * The author of the activity.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Author} author
 */
ActivityPostAllOf.prototype['author'] = undefined;






export default ActivityPostAllOf;
