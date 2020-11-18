/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.3.0
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
import PrechatCapture from './PrechatCapture';

/**
 * The WebUpdateAllOf model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/WebUpdateAllOf
 * @version 9.3.0
 */
class WebUpdateAllOf {
    /**
     * Constructs a new <code>WebUpdateAllOf</code>.
     * To configure a Web Messenger integration, acquire the required information and call the Create Integration endpoint. 
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/WebUpdateAllOf
     */
    constructor() { 
        
        WebUpdateAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebUpdateAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/WebUpdateAllOf} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/WebUpdateAllOf} The populated <code>WebUpdateAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebUpdateAllOf();

            if (data.hasOwnProperty('brandColor')) {
                obj['brandColor'] = ApiClient.convertToType(data['brandColor'], 'String');
            }
            if (data.hasOwnProperty('fixedIntroPane')) {
                obj['fixedIntroPane'] = ApiClient.convertToType(data['fixedIntroPane'], 'Boolean');
            }
            if (data.hasOwnProperty('conversationColor')) {
                obj['conversationColor'] = ApiClient.convertToType(data['conversationColor'], 'String');
            }
            if (data.hasOwnProperty('actionColor')) {
                obj['actionColor'] = ApiClient.convertToType(data['actionColor'], 'String');
            }
            if (data.hasOwnProperty('displayStyle')) {
                obj['displayStyle'] = ApiClient.convertToType(data['displayStyle'], 'String');
            }
            if (data.hasOwnProperty('buttonIconUrl')) {
                obj['buttonIconUrl'] = ApiClient.convertToType(data['buttonIconUrl'], 'String');
            }
            if (data.hasOwnProperty('buttonWidth')) {
                obj['buttonWidth'] = ApiClient.convertToType(data['buttonWidth'], 'String');
            }
            if (data.hasOwnProperty('buttonHeight')) {
                obj['buttonHeight'] = ApiClient.convertToType(data['buttonHeight'], 'String');
            }
            if (data.hasOwnProperty('integrationOrder')) {
                obj['integrationOrder'] = ApiClient.convertToType(data['integrationOrder'], ['String']);
            }
            if (data.hasOwnProperty('businessName')) {
                obj['businessName'] = ApiClient.convertToType(data['businessName'], 'String');
            }
            if (data.hasOwnProperty('businessIconUrl')) {
                obj['businessIconUrl'] = ApiClient.convertToType(data['businessIconUrl'], 'String');
            }
            if (data.hasOwnProperty('backgroundImageUrl')) {
                obj['backgroundImageUrl'] = ApiClient.convertToType(data['backgroundImageUrl'], 'String');
            }
            if (data.hasOwnProperty('originWhitelist')) {
                obj['originWhitelist'] = ApiClient.convertToType(data['originWhitelist'], ['String']);
            }
            if (data.hasOwnProperty('prechatCapture')) {
                obj['prechatCapture'] = ApiClient.convertToType(data['prechatCapture'], PrechatCapture);
            }
            if (data.hasOwnProperty('canUserCreateMoreConversations')) {
                obj['canUserCreateMoreConversations'] = ApiClient.convertToType(data['canUserCreateMoreConversations'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * Returns This color will be used in the messenger header and the button or tab in idle state. Must be a 3 or 6-character hexadecimal color.
     * @return {String}
     */
    getBrandColor() {
        return this.brandColor;
    }

    /**
     * Sets This color will be used in the messenger header and the button or tab in idle state. Must be a 3 or 6-character hexadecimal color.
     * @param {String} brandColor This color will be used in the messenger header and the button or tab in idle state. Must be a 3 or 6-character hexadecimal color.
     */
    setBrandColor(brandColor) {
        this['brandColor'] = brandColor;
    }
/**
     * Returns When true, the introduction pane will be pinned at the top of the conversation instead of scrolling with it.
     * @return {Boolean}
     */
    getFixedIntroPane() {
        return this.fixedIntroPane;
    }

    /**
     * Sets When true, the introduction pane will be pinned at the top of the conversation instead of scrolling with it.
     * @param {Boolean} fixedIntroPane When true, the introduction pane will be pinned at the top of the conversation instead of scrolling with it.
     */
    setFixedIntroPane(fixedIntroPane) {
        this['fixedIntroPane'] = fixedIntroPane;
    }
/**
     * Returns This color will be used for customer messages, quick replies and actions in the footer. Must be a 3 or 6-character hexadecimal color.
     * @return {String}
     */
    getConversationColor() {
        return this.conversationColor;
    }

    /**
     * Sets This color will be used for customer messages, quick replies and actions in the footer. Must be a 3 or 6-character hexadecimal color.
     * @param {String} conversationColor This color will be used for customer messages, quick replies and actions in the footer. Must be a 3 or 6-character hexadecimal color.
     */
    setConversationColor(conversationColor) {
        this['conversationColor'] = conversationColor;
    }
/**
     * Returns This color will be used for call-to-actions inside your messages. Must be a 3 or 6-character hexadecimal color.
     * @return {String}
     */
    getActionColor() {
        return this.actionColor;
    }

    /**
     * Sets This color will be used for call-to-actions inside your messages. Must be a 3 or 6-character hexadecimal color.
     * @param {String} actionColor This color will be used for call-to-actions inside your messages. Must be a 3 or 6-character hexadecimal color.
     */
    setActionColor(actionColor) {
        this['actionColor'] = actionColor;
    }
/**
     * Returns Choose how the messenger will appear on your website. Must be either button or tab.
     * @return {String}
     */
    getDisplayStyle() {
        return this.displayStyle;
    }

    /**
     * Sets Choose how the messenger will appear on your website. Must be either button or tab.
     * @param {String} displayStyle Choose how the messenger will appear on your website. Must be either button or tab.
     */
    setDisplayStyle(displayStyle) {
        this['displayStyle'] = displayStyle;
    }
/**
     * Returns With the button style Web Messenger, you have the option of selecting your own button icon. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format.
     * @return {String}
     */
    getButtonIconUrl() {
        return this.buttonIconUrl;
    }

    /**
     * Sets With the button style Web Messenger, you have the option of selecting your own button icon. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format.
     * @param {String} buttonIconUrl With the button style Web Messenger, you have the option of selecting your own button icon. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format.
     */
    setButtonIconUrl(buttonIconUrl) {
        this['buttonIconUrl'] = buttonIconUrl;
    }
/**
     * Returns With the button style Web Messenger, you have the option of specifying the button width.
     * @return {String}
     */
    getButtonWidth() {
        return this.buttonWidth;
    }

    /**
     * Sets With the button style Web Messenger, you have the option of specifying the button width.
     * @param {String} buttonWidth With the button style Web Messenger, you have the option of specifying the button width.
     */
    setButtonWidth(buttonWidth) {
        this['buttonWidth'] = buttonWidth;
    }
/**
     * Returns With the button style Web Messenger, you have the option of specifying the button height.
     * @return {String}
     */
    getButtonHeight() {
        return this.buttonHeight;
    }

    /**
     * Sets With the button style Web Messenger, you have the option of specifying the button height.
     * @param {String} buttonHeight With the button style Web Messenger, you have the option of specifying the button height.
     */
    setButtonHeight(buttonHeight) {
        this['buttonHeight'] = buttonHeight;
    }
/**
     * Returns Array of integration IDs, order will be reflected in the Web Messenger. When set, only integrations from this list will be displayed in the Web Messenger. If unset, all integrations will be displayed.
     * @return {Array.<String>}
     */
    getIntegrationOrder() {
        return this.integrationOrder;
    }

    /**
     * Sets Array of integration IDs, order will be reflected in the Web Messenger. When set, only integrations from this list will be displayed in the Web Messenger. If unset, all integrations will be displayed.
     * @param {Array.<String>} integrationOrder Array of integration IDs, order will be reflected in the Web Messenger. When set, only integrations from this list will be displayed in the Web Messenger. If unset, all integrations will be displayed.
     */
    setIntegrationOrder(integrationOrder) {
        this['integrationOrder'] = integrationOrder;
    }
/**
     * Returns A custom business name for the Web Messenger.
     * @return {String}
     */
    getBusinessName() {
        return this.businessName;
    }

    /**
     * Sets A custom business name for the Web Messenger.
     * @param {String} businessName A custom business name for the Web Messenger.
     */
    setBusinessName(businessName) {
        this['businessName'] = businessName;
    }
/**
     * Returns A custom business icon url for the Web Messenger. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format.
     * @return {String}
     */
    getBusinessIconUrl() {
        return this.businessIconUrl;
    }

    /**
     * Sets A custom business icon url for the Web Messenger. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format.
     * @param {String} businessIconUrl A custom business icon url for the Web Messenger. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format.
     */
    setBusinessIconUrl(businessIconUrl) {
        this['businessIconUrl'] = businessIconUrl;
    }
/**
     * Returns A background image url for the conversation. Image will be tiled to fit the window.
     * @return {String}
     */
    getBackgroundImageUrl() {
        return this.backgroundImageUrl;
    }

    /**
     * Sets A background image url for the conversation. Image will be tiled to fit the window.
     * @param {String} backgroundImageUrl A background image url for the conversation. Image will be tiled to fit the window.
     */
    setBackgroundImageUrl(backgroundImageUrl) {
        this['backgroundImageUrl'] = backgroundImageUrl;
    }
/**
     * Returns A list of origins to whitelist. When set, only the origins from this list will be able to initialize the Web Messenger. If unset, all origins are whitelisted. The elements in the list should follow the serialized-origin format from RFC 6454: scheme \"://\" host [ \":\" port ], where scheme is http or https. 
     * @return {Array.<String>}
     */
    getOriginWhitelist() {
        return this.originWhitelist;
    }

    /**
     * Sets A list of origins to whitelist. When set, only the origins from this list will be able to initialize the Web Messenger. If unset, all origins are whitelisted. The elements in the list should follow the serialized-origin format from RFC 6454: scheme \"://\" host [ \":\" port ], where scheme is http or https. 
     * @param {Array.<String>} originWhitelist A list of origins to whitelist. When set, only the origins from this list will be able to initialize the Web Messenger. If unset, all origins are whitelisted. The elements in the list should follow the serialized-origin format from RFC 6454: scheme \"://\" host [ \":\" port ], where scheme is http or https. 
     */
    setOriginWhitelist(originWhitelist) {
        this['originWhitelist'] = originWhitelist;
    }
/**
     * Returns Object whose properties can be set to specify the add-on’s options. See the [guide](https://docs.smooch.io/guide/web-messenger/#prechat-capture) to learn more about Prechat Capture.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/PrechatCapture}
     */
    getPrechatCapture() {
        return this.prechatCapture;
    }

    /**
     * Sets Object whose properties can be set to specify the add-on’s options. See the [guide](https://docs.smooch.io/guide/web-messenger/#prechat-capture) to learn more about Prechat Capture.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/PrechatCapture} prechatCapture Object whose properties can be set to specify the add-on’s options. See the [guide](https://docs.smooch.io/guide/web-messenger/#prechat-capture) to learn more about Prechat Capture.
     */
    setPrechatCapture(prechatCapture) {
        this['prechatCapture'] = prechatCapture;
    }
/**
     * Returns Allows users to create more than one conversation on the web messenger integration.
     * @return {Boolean}
     */
    getCanUserCreateMoreConversations() {
        return this.canUserCreateMoreConversations;
    }

    /**
     * Sets Allows users to create more than one conversation on the web messenger integration.
     * @param {Boolean} canUserCreateMoreConversations Allows users to create more than one conversation on the web messenger integration.
     */
    setCanUserCreateMoreConversations(canUserCreateMoreConversations) {
        this['canUserCreateMoreConversations'] = canUserCreateMoreConversations;
    }

}

/**
 * This color will be used in the messenger header and the button or tab in idle state. Must be a 3 or 6-character hexadecimal color.
 * @member {String} brandColor
 * @default '65758e'
 */
WebUpdateAllOf.prototype['brandColor'] = '65758e';

/**
 * When true, the introduction pane will be pinned at the top of the conversation instead of scrolling with it.
 * @member {Boolean} fixedIntroPane
 * @default false
 */
WebUpdateAllOf.prototype['fixedIntroPane'] = false;

/**
 * This color will be used for customer messages, quick replies and actions in the footer. Must be a 3 or 6-character hexadecimal color.
 * @member {String} conversationColor
 * @default '0099ff'
 */
WebUpdateAllOf.prototype['conversationColor'] = '0099ff';

/**
 * This color will be used for call-to-actions inside your messages. Must be a 3 or 6-character hexadecimal color.
 * @member {String} actionColor
 * @default '0099ff'
 */
WebUpdateAllOf.prototype['actionColor'] = '0099ff';

/**
 * Choose how the messenger will appear on your website. Must be either button or tab.
 * @member {String} displayStyle
 * @default 'button'
 */
WebUpdateAllOf.prototype['displayStyle'] = 'button';

/**
 * With the button style Web Messenger, you have the option of selecting your own button icon. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format.
 * @member {String} buttonIconUrl
 */
WebUpdateAllOf.prototype['buttonIconUrl'] = undefined;

/**
 * With the button style Web Messenger, you have the option of specifying the button width.
 * @member {String} buttonWidth
 * @default '58'
 */
WebUpdateAllOf.prototype['buttonWidth'] = '58';

/**
 * With the button style Web Messenger, you have the option of specifying the button height.
 * @member {String} buttonHeight
 * @default '58'
 */
WebUpdateAllOf.prototype['buttonHeight'] = '58';

/**
 * Array of integration IDs, order will be reflected in the Web Messenger. When set, only integrations from this list will be displayed in the Web Messenger. If unset, all integrations will be displayed.
 * @member {Array.<String>} integrationOrder
 */
WebUpdateAllOf.prototype['integrationOrder'] = undefined;

/**
 * A custom business name for the Web Messenger.
 * @member {String} businessName
 */
WebUpdateAllOf.prototype['businessName'] = undefined;

/**
 * A custom business icon url for the Web Messenger. The image must be at least 200 x 200 pixels and must be in either JPG, PNG, or GIF format.
 * @member {String} businessIconUrl
 */
WebUpdateAllOf.prototype['businessIconUrl'] = undefined;

/**
 * A background image url for the conversation. Image will be tiled to fit the window.
 * @member {String} backgroundImageUrl
 */
WebUpdateAllOf.prototype['backgroundImageUrl'] = undefined;

/**
 * A list of origins to whitelist. When set, only the origins from this list will be able to initialize the Web Messenger. If unset, all origins are whitelisted. The elements in the list should follow the serialized-origin format from RFC 6454: scheme \"://\" host [ \":\" port ], where scheme is http or https. 
 * @member {Array.<String>} originWhitelist
 */
WebUpdateAllOf.prototype['originWhitelist'] = undefined;

/**
 * Object whose properties can be set to specify the add-on’s options. See the [guide](https://docs.smooch.io/guide/web-messenger/#prechat-capture) to learn more about Prechat Capture.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/PrechatCapture} prechatCapture
 */
WebUpdateAllOf.prototype['prechatCapture'] = undefined;

/**
 * Allows users to create more than one conversation on the web messenger integration.
 * @member {Boolean} canUserCreateMoreConversations
 */
WebUpdateAllOf.prototype['canUserCreateMoreConversations'] = undefined;






export default WebUpdateAllOf;

