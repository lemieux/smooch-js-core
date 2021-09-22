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
import Content from './Content';
import Destination from './Destination';
import MessageOverride from './MessageOverride';

/**
 * The MessagePost model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/MessagePost
 * @version 9.4.5
 */
class MessagePost {
    /**
     * Constructs a new <code>MessagePost</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/MessagePost
     * @param author {module:sunshine-conversations-client/sunshine-conversations-client.model/Author} The author of the message.
     * @param content {module:sunshine-conversations-client/sunshine-conversations-client.model/Content} The content of the message.
     */
    constructor(author, content) { 
        
        MessagePost.initialize(this, author, content);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, author, content) { 
        obj['author'] = author;
        obj['content'] = content;
    }

    /**
     * Constructs a <code>MessagePost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessagePost} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessagePost} The populated <code>MessagePost</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MessagePost();

            if (data.hasOwnProperty('author')) {
                obj['author'] = ApiClient.convertToType(data['author'], Author);
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], Content);
            }
            if (data.hasOwnProperty('destination')) {
                obj['destination'] = Destination.constructFromObject(data['destination']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('override')) {
                obj['override'] = MessageOverride.constructFromObject(data['override']);
            }
            if (data.hasOwnProperty('schema')) {
                obj['schema'] = ApiClient.convertToType(data['schema'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The author of the message.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Author}
     */
    getAuthor() {
        return this.author;
    }

    /**
     * Sets The author of the message.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Author} author The author of the message.
     */
    setAuthor(author) {
        this['author'] = author;
    }
/**
     * Returns The content of the message.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Content}
     */
    getContent() {
        return this.content;
    }

    /**
     * Sets The content of the message.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Content} content The content of the message.
     */
    setContent(content) {
        this['content'] = content;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Destination}
     */
    getDestination() {
        return this.destination;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Destination} destination
     */
    setDestination(destination) {
        this['destination'] = destination;
    }
/**
     * Returns Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
     * @return {Object}
     */
    getMetadata() {
        return this.metadata;
    }

    /**
     * Sets Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
     * @param {Object} metadata Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
     */
    setMetadata(metadata) {
        this['metadata'] = metadata;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverride}
     */
    getOverride() {
        return this.override;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverride} override
     */
    setOverride(override) {
        this['override'] = override;
    }
/**
     * Returns When `schema` is set to `\"whatsapp\"`, the `content` key is expected to conform to the [native WhatsApp schema](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates) for sending message templates. For more details, consult the documentation for [sending message templates on WhatsApp](https://docs.smooch.io/guide/whatsapp/#sending-message-templates). 
     * @return {String}
     */
    getSchema() {
        return this.schema;
    }

    /**
     * Sets When `schema` is set to `\"whatsapp\"`, the `content` key is expected to conform to the [native WhatsApp schema](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates) for sending message templates. For more details, consult the documentation for [sending message templates on WhatsApp](https://docs.smooch.io/guide/whatsapp/#sending-message-templates). 
     * @param {String} schema When `schema` is set to `\"whatsapp\"`, the `content` key is expected to conform to the [native WhatsApp schema](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates) for sending message templates. For more details, consult the documentation for [sending message templates on WhatsApp](https://docs.smooch.io/guide/whatsapp/#sending-message-templates). 
     */
    setSchema(schema) {
        this['schema'] = schema;
    }

}

/**
 * The author of the message.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Author} author
 */
MessagePost.prototype['author'] = undefined;

/**
 * The content of the message.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Content} content
 */
MessagePost.prototype['content'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Destination} destination
 */
MessagePost.prototype['destination'] = undefined;

/**
 * Flat object containing custom properties. Strings, numbers and booleans  are the only supported format that can be passed to metadata. The metadata is limited to 4KB in size. 
 * @member {Object} metadata
 */
MessagePost.prototype['metadata'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/MessageOverride} override
 */
MessagePost.prototype['override'] = undefined;

/**
 * When `schema` is set to `\"whatsapp\"`, the `content` key is expected to conform to the [native WhatsApp schema](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates) for sending message templates. For more details, consult the documentation for [sending message templates on WhatsApp](https://docs.smooch.io/guide/whatsapp/#sending-message-templates). 
 * @member {String} schema
 */
MessagePost.prototype['schema'] = undefined;






export default MessagePost;
