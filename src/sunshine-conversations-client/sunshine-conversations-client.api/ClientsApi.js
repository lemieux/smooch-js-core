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

import ApiClient from "../ApiClient";
import ClientCreate from '../sunshine-conversations-client.model/ClientCreate';
import ClientListResponse from '../sunshine-conversations-client.model/ClientListResponse';
import ClientResponse from '../sunshine-conversations-client.model/ClientResponse';
import Page from '../sunshine-conversations-client.model/Page';

/**
* Clients service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/ClientsApi
* @version 12.7.0
*/
export default class ClientsApi {

    /**
    * Constructs a new ClientsApi. 
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/ClientsApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create Client
     * Create a client and link it to a channel specified by the `matchCriteria.type`. Note that the client is initially created with a `pending` status. The status of the linking request can be tracked by listening to the `link:match`, `link:success` and `link:failure` webhooks (only available in v1). For more information, see [link-events](https://docs.smooch.io/rest/v1/#link-events).
     * @param {String} appId Identifies the app.
     * @param {String} userIdOrExternalId The user's id or externalId.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientCreate} clientCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/ClientResponse} and HTTP response
     */
    createClientWithHttpInfo(appId, userIdOrExternalId, clientCreate) {
      let postBody = clientCreate;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling createClient");
      }
      // verify the required parameter 'userIdOrExternalId' is set
      if (userIdOrExternalId === undefined || userIdOrExternalId === null) {
        throw new Error("Missing the required parameter 'userIdOrExternalId' when calling createClient");
      }
      // verify the required parameter 'clientCreate' is set
      if (clientCreate === undefined || clientCreate === null) {
        throw new Error("Missing the required parameter 'clientCreate' when calling createClient");
      }

      let pathParams = {
        'appId': appId,
        'userIdOrExternalId': userIdOrExternalId
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
      let returnType = ClientResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/users/{userIdOrExternalId}/clients', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Client
     * Create a client and link it to a channel specified by the `matchCriteria.type`. Note that the client is initially created with a `pending` status. The status of the linking request can be tracked by listening to the `link:match`, `link:success` and `link:failure` webhooks (only available in v1). For more information, see [link-events](https://docs.smooch.io/rest/v1/#link-events).
     * @param {String} appId Identifies the app.
     * @param {String} userIdOrExternalId The user's id or externalId.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientCreate} clientCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/ClientResponse}
     */
    createClient(appId, userIdOrExternalId, clientCreate) {
      return this.createClientWithHttpInfo(appId, userIdOrExternalId, clientCreate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Clients
     * Get all the clients for a particular user, including both linked clients and pending clients. This API is paginated through [cursor pagination](#section/Introduction/API-pagination-and-records-limits).  ```shell /v2/apps/:appId/users/:userId/clients?page[after]=5ebee0975ac5304b664a12fa ``` 
     * @param {String} appId Identifies the app.
     * @param {String} userIdOrExternalId The user's id or externalId.
     * @param {Object} opts Optional parameters
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Page} opts.page Contains parameters for applying cursor pagination.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/ClientListResponse} and HTTP response
     */
    listClientsWithHttpInfo(appId, userIdOrExternalId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling listClients");
      }
      // verify the required parameter 'userIdOrExternalId' is set
      if (userIdOrExternalId === undefined || userIdOrExternalId === null) {
        throw new Error("Missing the required parameter 'userIdOrExternalId' when calling listClients");
      }

      let pathParams = {
        'appId': appId,
        'userIdOrExternalId': userIdOrExternalId
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
      let returnType = ClientListResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/users/{userIdOrExternalId}/clients', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Clients
     * Get all the clients for a particular user, including both linked clients and pending clients. This API is paginated through [cursor pagination](#section/Introduction/API-pagination-and-records-limits).  ```shell /v2/apps/:appId/users/:userId/clients?page[after]=5ebee0975ac5304b664a12fa ``` 
     * @param {String} appId Identifies the app.
     * @param {String} userIdOrExternalId The user's id or externalId.
     * @param {Object} opts Optional parameters
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Page} opts.page Contains parameters for applying cursor pagination.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/ClientListResponse}
     */
    listClients(appId, userIdOrExternalId, opts) {
      return this.listClientsWithHttpInfo(appId, userIdOrExternalId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove Client
     * Remove a particular client and unsubscribe it from all connected conversations.
     * @param {String} appId Identifies the app.
     * @param {String} userIdOrExternalId The user's id or externalId.
     * @param {String} clientId The client's id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    removeClientWithHttpInfo(appId, userIdOrExternalId, clientId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling removeClient");
      }
      // verify the required parameter 'userIdOrExternalId' is set
      if (userIdOrExternalId === undefined || userIdOrExternalId === null) {
        throw new Error("Missing the required parameter 'userIdOrExternalId' when calling removeClient");
      }
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling removeClient");
      }

      let pathParams = {
        'appId': appId,
        'userIdOrExternalId': userIdOrExternalId,
        'clientId': clientId
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
        '/v2/apps/{appId}/users/{userIdOrExternalId}/clients/{clientId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Remove Client
     * Remove a particular client and unsubscribe it from all connected conversations.
     * @param {String} appId Identifies the app.
     * @param {String} userIdOrExternalId The user's id or externalId.
     * @param {String} clientId The client's id.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    removeClient(appId, userIdOrExternalId, clientId) {
      return this.removeClientWithHttpInfo(appId, userIdOrExternalId, clientId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
