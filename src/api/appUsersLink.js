import { BaseApi } from './base';


/**
 * @class AppUsersLinkApi
 * @extends BaseApi
 */
export class AppUsersLinkApi extends BaseApi {

    /**
     * Links the specified channel to a user
     * @param {string} userId - a user id
     * @param {object} data - the data object
     * @return {APIResponse}
     */
    linkChannel(userId, data) {
        if (!data.type) {
            return Promise.reject(new Error('Must provide a channel type.'));
        }

        const url = this.getFullURL('appUsers', userId, 'channels');
        return this.request('POST', url, data);
    }

    /**
     * Unlinks the specified channel
     * @param {string} userId - a user id
     * @return {APIResponse}
     */
    deleteTwilioChannel(userId) {
        const url = this.getFullURL('appUsers', userId, 'channels', 'twilio');
        return this.request('DELETE', url);
    }
}
