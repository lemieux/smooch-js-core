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
 * The AppSettings model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/AppSettings
 * @version 13.1.0
 */
class AppSettings {
    /**
     * Constructs a new <code>AppSettings</code>.
     * Customizable app settings.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/AppSettings
     */
    constructor() { 
        
        AppSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AppSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppSettings} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/AppSettings} The populated <code>AppSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppSettings();

            if (data.hasOwnProperty('conversationRetentionSeconds')) {
                obj['conversationRetentionSeconds'] = ApiClient.convertToType(data['conversationRetentionSeconds'], 'Number');
            }
            if (data.hasOwnProperty('maskCreditCardNumbers')) {
                obj['maskCreditCardNumbers'] = ApiClient.convertToType(data['maskCreditCardNumbers'], 'Boolean');
            }
            if (data.hasOwnProperty('useAnimalNames')) {
                obj['useAnimalNames'] = ApiClient.convertToType(data['useAnimalNames'], 'Boolean');
            }
            if (data.hasOwnProperty('echoPostback')) {
                obj['echoPostback'] = ApiClient.convertToType(data['echoPostback'], 'Boolean');
            }
            if (data.hasOwnProperty('ignoreAutoConversationStart')) {
                obj['ignoreAutoConversationStart'] = ApiClient.convertToType(data['ignoreAutoConversationStart'], 'Boolean');
            }
            if (data.hasOwnProperty('multiConvoEnabled')) {
                obj['multiConvoEnabled'] = ApiClient.convertToType(data['multiConvoEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('appLocalizationEnabled')) {
                obj['appLocalizationEnabled'] = ApiClient.convertToType(data['appLocalizationEnabled'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * Returns Number of seconds of inactivity before a conversation’s messages  will be automatically deleted. See  [Conversation Retention Seconds](https://docs.smooch.io/guide/creating-and-managing-apps/#conversation-retention-seconds) for more information. 
     * minimum: 0
     * @return {Number}
     */
    getConversationRetentionSeconds() {
        return this.conversationRetentionSeconds;
    }

    /**
     * Sets Number of seconds of inactivity before a conversation’s messages  will be automatically deleted. See  [Conversation Retention Seconds](https://docs.smooch.io/guide/creating-and-managing-apps/#conversation-retention-seconds) for more information. 
     * @param {Number} conversationRetentionSeconds Number of seconds of inactivity before a conversation’s messages  will be automatically deleted. See  [Conversation Retention Seconds](https://docs.smooch.io/guide/creating-and-managing-apps/#conversation-retention-seconds) for more information. 
     */
    setConversationRetentionSeconds(conversationRetentionSeconds) {
        this['conversationRetentionSeconds'] = conversationRetentionSeconds;
    }
/**
     * Returns A boolean specifying whether credit card numbers should be masked  when sent through Sunshine Conversations. 
     * @return {Boolean}
     */
    getMaskCreditCardNumbers() {
        return this.maskCreditCardNumbers;
    }

    /**
     * Sets A boolean specifying whether credit card numbers should be masked  when sent through Sunshine Conversations. 
     * @param {Boolean} maskCreditCardNumbers A boolean specifying whether credit card numbers should be masked  when sent through Sunshine Conversations. 
     */
    setMaskCreditCardNumbers(maskCreditCardNumbers) {
        this['maskCreditCardNumbers'] = maskCreditCardNumbers;
    }
/**
     * Returns A boolean specifying whether animal names should be used for  unnamed users. See the  [user naming guide](https://docs.smooch.io/guide/receiving-messages/#message-author-name) for details. 
     * @return {Boolean}
     */
    getUseAnimalNames() {
        return this.useAnimalNames;
    }

    /**
     * Sets A boolean specifying whether animal names should be used for  unnamed users. See the  [user naming guide](https://docs.smooch.io/guide/receiving-messages/#message-author-name) for details. 
     * @param {Boolean} useAnimalNames A boolean specifying whether animal names should be used for  unnamed users. See the  [user naming guide](https://docs.smooch.io/guide/receiving-messages/#message-author-name) for details. 
     */
    setUseAnimalNames(useAnimalNames) {
        this['useAnimalNames'] = useAnimalNames;
    }
/**
     * Returns A boolean specifying whether a message should be added to the conversation  history when a postback button is clicked. See  [Echo Postbacks](https://docs.smooch.io/guide/creating-and-managing-apps/#echo-postbacks) for more information. 
     * @return {Boolean}
     */
    getEchoPostback() {
        return this.echoPostback;
    }

    /**
     * Sets A boolean specifying whether a message should be added to the conversation  history when a postback button is clicked. See  [Echo Postbacks](https://docs.smooch.io/guide/creating-and-managing-apps/#echo-postbacks) for more information. 
     * @param {Boolean} echoPostback A boolean specifying whether a message should be added to the conversation  history when a postback button is clicked. See  [Echo Postbacks](https://docs.smooch.io/guide/creating-and-managing-apps/#echo-postbacks) for more information. 
     */
    setEchoPostback(echoPostback) {
        this['echoPostback'] = echoPostback;
    }
/**
     * Returns A boolean specifying whether a non message event coming from a channel will  trigger a  [start conversation](https://docs.smooch.io/rest/#section/Webhook-Triggers) event and count as a monthly active user (MAU). <aside class=\"notice\">Calling <code>startConversation()</code> (or equivalent) from the Android,  iOS or Web SDK will count as a MAU, regardless of the value of this setting.</aside> 
     * @return {Boolean}
     */
    getIgnoreAutoConversationStart() {
        return this.ignoreAutoConversationStart;
    }

    /**
     * Sets A boolean specifying whether a non message event coming from a channel will  trigger a  [start conversation](https://docs.smooch.io/rest/#section/Webhook-Triggers) event and count as a monthly active user (MAU). <aside class=\"notice\">Calling <code>startConversation()</code> (or equivalent) from the Android,  iOS or Web SDK will count as a MAU, regardless of the value of this setting.</aside> 
     * @param {Boolean} ignoreAutoConversationStart A boolean specifying whether a non message event coming from a channel will  trigger a  [start conversation](https://docs.smooch.io/rest/#section/Webhook-Triggers) event and count as a monthly active user (MAU). <aside class=\"notice\">Calling <code>startConversation()</code> (or equivalent) from the Android,  iOS or Web SDK will count as a MAU, regardless of the value of this setting.</aside> 
     */
    setIgnoreAutoConversationStart(ignoreAutoConversationStart) {
        this['ignoreAutoConversationStart'] = ignoreAutoConversationStart;
    }
/**
     * Returns A boolean specifying whether users are allowed to be part of several conversations. Enabling `multiConvo` is **irreversible**. 
     * @return {Boolean}
     */
    getMultiConvoEnabled() {
        return this.multiConvoEnabled;
    }

    /**
     * Sets A boolean specifying whether users are allowed to be part of several conversations. Enabling `multiConvo` is **irreversible**. 
     * @param {Boolean} multiConvoEnabled A boolean specifying whether users are allowed to be part of several conversations. Enabling `multiConvo` is **irreversible**. 
     */
    setMultiConvoEnabled(multiConvoEnabled) {
        this['multiConvoEnabled'] = multiConvoEnabled;
    }
/**
     * Returns A boolean specifying whether the messages authored by the Sunshine Conversations platform should be localized. 
     * @return {Boolean}
     */
    getAppLocalizationEnabled() {
        return this.appLocalizationEnabled;
    }

    /**
     * Sets A boolean specifying whether the messages authored by the Sunshine Conversations platform should be localized. 
     * @param {Boolean} appLocalizationEnabled A boolean specifying whether the messages authored by the Sunshine Conversations platform should be localized. 
     */
    setAppLocalizationEnabled(appLocalizationEnabled) {
        this['appLocalizationEnabled'] = appLocalizationEnabled;
    }

}

/**
 * Number of seconds of inactivity before a conversation’s messages  will be automatically deleted. See  [Conversation Retention Seconds](https://docs.smooch.io/guide/creating-and-managing-apps/#conversation-retention-seconds) for more information. 
 * @member {Number} conversationRetentionSeconds
 */
AppSettings.prototype['conversationRetentionSeconds'] = undefined;

/**
 * A boolean specifying whether credit card numbers should be masked  when sent through Sunshine Conversations. 
 * @member {Boolean} maskCreditCardNumbers
 */
AppSettings.prototype['maskCreditCardNumbers'] = undefined;

/**
 * A boolean specifying whether animal names should be used for  unnamed users. See the  [user naming guide](https://docs.smooch.io/guide/receiving-messages/#message-author-name) for details. 
 * @member {Boolean} useAnimalNames
 */
AppSettings.prototype['useAnimalNames'] = undefined;

/**
 * A boolean specifying whether a message should be added to the conversation  history when a postback button is clicked. See  [Echo Postbacks](https://docs.smooch.io/guide/creating-and-managing-apps/#echo-postbacks) for more information. 
 * @member {Boolean} echoPostback
 */
AppSettings.prototype['echoPostback'] = undefined;

/**
 * A boolean specifying whether a non message event coming from a channel will  trigger a  [start conversation](https://docs.smooch.io/rest/#section/Webhook-Triggers) event and count as a monthly active user (MAU). <aside class=\"notice\">Calling <code>startConversation()</code> (or equivalent) from the Android,  iOS or Web SDK will count as a MAU, regardless of the value of this setting.</aside> 
 * @member {Boolean} ignoreAutoConversationStart
 */
AppSettings.prototype['ignoreAutoConversationStart'] = undefined;

/**
 * A boolean specifying whether users are allowed to be part of several conversations. Enabling `multiConvo` is **irreversible**. 
 * @member {Boolean} multiConvoEnabled
 */
AppSettings.prototype['multiConvoEnabled'] = undefined;

/**
 * A boolean specifying whether the messages authored by the Sunshine Conversations platform should be localized. 
 * @member {Boolean} appLocalizationEnabled
 */
AppSettings.prototype['appLocalizationEnabled'] = undefined;






export default AppSettings;

