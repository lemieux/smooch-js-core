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

import ApiClient from "../ApiClient";
import MessageListResponse from '../sunshine-conversations-client.model/MessageListResponse';
import MessagePost from '../sunshine-conversations-client.model/MessagePost';
import MessagePostResponse from '../sunshine-conversations-client.model/MessagePostResponse';
import Page from '../sunshine-conversations-client.model/Page';

/**
* Messages service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/MessagesApi
* @version 13.1.0
*/
export default class MessagesApi {

    /**
    * Constructs a new MessagesApi. 
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/MessagesApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete All Messages
     * Delete all messages of a particular conversation.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteAllMessagesWithHttpInfo(appId, conversationId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling deleteAllMessages");
      }
      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw new Error("Missing the required parameter 'conversationId' when calling deleteAllMessages");
      }

      let pathParams = {
        'appId': appId,
        'conversationId': conversationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/conversations/{conversationId}/messages', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete All Messages
     * Delete all messages of a particular conversation.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteAllMessages(appId, conversationId) {
      return this.deleteAllMessagesWithHttpInfo(appId, conversationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete Message
     * Delete a single message of a particular conversation.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {String} messageId The id of the message.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteMessageWithHttpInfo(appId, conversationId, messageId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling deleteMessage");
      }
      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw new Error("Missing the required parameter 'conversationId' when calling deleteMessage");
      }
      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling deleteMessage");
      }

      let pathParams = {
        'appId': appId,
        'conversationId': conversationId,
        'messageId': messageId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/conversations/{conversationId}/messages/{messageId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete Message
     * Delete a single message of a particular conversation.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {String} messageId The id of the message.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteMessage(appId, conversationId, messageId) {
      return this.deleteMessageWithHttpInfo(appId, conversationId, messageId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Messages
     * List all messages for a particular conversation. This API is paginated through [cursor pagination](#section/Introduction/API-pagination-and-records-limits), in the _backwards_ direction, with the most recent (i.e. last) page of messages being returned by default. The `hasMore` flag indicates whether more messages exist in the direction you are currently paginating through. To page backwards in the history, use the `beforeCursor` or follow the `prev` link. The page size limit is fixed at 100 messages per page.  ```shell /v2/apps/:appId/conversations/:conversationId/messages?page[before]=5f32b88acf6bf25073b2be56 ``` 
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {Object} opts Optional parameters
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Page} opts.page Contains parameters for applying cursor pagination.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/MessageListResponse} and HTTP response
     */
    listMessagesWithHttpInfo(appId, conversationId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling listMessages");
      }
      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw new Error("Missing the required parameter 'conversationId' when calling listMessages");
      }

      let pathParams = {
        'appId': appId,
        'conversationId': conversationId
      };
      let queryParams = {
        'page': opts['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MessageListResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/conversations/{conversationId}/messages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Messages
     * List all messages for a particular conversation. This API is paginated through [cursor pagination](#section/Introduction/API-pagination-and-records-limits), in the _backwards_ direction, with the most recent (i.e. last) page of messages being returned by default. The `hasMore` flag indicates whether more messages exist in the direction you are currently paginating through. To page backwards in the history, use the `beforeCursor` or follow the `prev` link. The page size limit is fixed at 100 messages per page.  ```shell /v2/apps/:appId/conversations/:conversationId/messages?page[before]=5f32b88acf6bf25073b2be56 ``` 
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {Object} opts Optional parameters
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Page} opts.page Contains parameters for applying cursor pagination.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/MessageListResponse}
     */
    listMessages(appId, conversationId, opts) {
      return this.listMessagesWithHttpInfo(appId, conversationId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Post Message
     * Send a message in a particular conversation.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessagePost} messagePost 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/MessagePostResponse} and HTTP response
     */
    postMessageWithHttpInfo(appId, conversationId, messagePost) {
      let postBody = messagePost;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling postMessage");
      }
      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw new Error("Missing the required parameter 'conversationId' when calling postMessage");
      }
      // verify the required parameter 'messagePost' is set
      if (messagePost === undefined || messagePost === null) {
        throw new Error("Missing the required parameter 'messagePost' when calling postMessage");
      }

      let pathParams = {
        'appId': appId,
        'conversationId': conversationId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = MessagePostResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/conversations/{conversationId}/messages', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Post Message
     * Send a message in a particular conversation.
     * @param {String} appId Identifies the app.
     * @param {String} conversationId Identifies the conversation.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/MessagePost} messagePost 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/MessagePostResponse}
     */
    postMessage(appId, conversationId, messagePost) {
      return this.postMessageWithHttpInfo(appId, conversationId, messagePost)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
