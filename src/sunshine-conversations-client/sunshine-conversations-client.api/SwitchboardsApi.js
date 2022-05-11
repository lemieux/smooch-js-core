/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.7.0
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
import SwitchboardListResponse from '../sunshine-conversations-client.model/SwitchboardListResponse';
import SwitchboardResponse from '../sunshine-conversations-client.model/SwitchboardResponse';
import SwitchboardUpdateBody from '../sunshine-conversations-client.model/SwitchboardUpdateBody';

/**
* Switchboards service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/SwitchboardsApi
* @version 9.7.0
*/
export default class SwitchboardsApi {

    /**
    * Constructs a new SwitchboardsApi. 
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/SwitchboardsApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create Switchboard
     * Create a switchboard.
     * @param {String} appId Identifies the app.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardResponse} and HTTP response
     */
    createSwitchboardWithHttpInfo(appId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling createSwitchboard");
      }

      let pathParams = {
        'appId': appId
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
      let returnType = SwitchboardResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/switchboards', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Switchboard
     * Create a switchboard.
     * @param {String} appId Identifies the app.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardResponse}
     */
    createSwitchboard(appId) {
      return this.createSwitchboardWithHttpInfo(appId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete Switchboard
     * Deletes the switchboard and all its switchboard integrations. The integrations linked to these switchboard integrations are not deleted and will start receiving all conversation events.
     * @param {String} appId Identifies the app.
     * @param {String} switchboardId Identifies the switchboard.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteSwitchboardWithHttpInfo(appId, switchboardId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling deleteSwitchboard");
      }
      // verify the required parameter 'switchboardId' is set
      if (switchboardId === undefined || switchboardId === null) {
        throw new Error("Missing the required parameter 'switchboardId' when calling deleteSwitchboard");
      }

      let pathParams = {
        'appId': appId,
        'switchboardId': switchboardId
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
        '/v2/apps/{appId}/switchboards/{switchboardId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete Switchboard
     * Deletes the switchboard and all its switchboard integrations. The integrations linked to these switchboard integrations are not deleted and will start receiving all conversation events.
     * @param {String} appId Identifies the app.
     * @param {String} switchboardId Identifies the switchboard.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteSwitchboard(appId, switchboardId) {
      return this.deleteSwitchboardWithHttpInfo(appId, switchboardId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Switchboards
     * Lists all switchboards belonging to the app. 
     * @param {String} appId Identifies the app.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardListResponse} and HTTP response
     */
    listSwitchboardsWithHttpInfo(appId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling listSwitchboards");
      }

      let pathParams = {
        'appId': appId
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
      let returnType = SwitchboardListResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/switchboards', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Switchboards
     * Lists all switchboards belonging to the app. 
     * @param {String} appId Identifies the app.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardListResponse}
     */
    listSwitchboards(appId) {
      return this.listSwitchboardsWithHttpInfo(appId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update Switchboard
     * Updates a switchboard record.
     * @param {String} appId Identifies the app.
     * @param {String} switchboardId Identifies the switchboard.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardUpdateBody} switchboardUpdateBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardResponse} and HTTP response
     */
    updateSwitchboardWithHttpInfo(appId, switchboardId, switchboardUpdateBody) {
      let postBody = switchboardUpdateBody;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling updateSwitchboard");
      }
      // verify the required parameter 'switchboardId' is set
      if (switchboardId === undefined || switchboardId === null) {
        throw new Error("Missing the required parameter 'switchboardId' when calling updateSwitchboard");
      }
      // verify the required parameter 'switchboardUpdateBody' is set
      if (switchboardUpdateBody === undefined || switchboardUpdateBody === null) {
        throw new Error("Missing the required parameter 'switchboardUpdateBody' when calling updateSwitchboard");
      }

      let pathParams = {
        'appId': appId,
        'switchboardId': switchboardId
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
      let returnType = SwitchboardResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/switchboards/{switchboardId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update Switchboard
     * Updates a switchboard record.
     * @param {String} appId Identifies the app.
     * @param {String} switchboardId Identifies the switchboard.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardUpdateBody} switchboardUpdateBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/SwitchboardResponse}
     */
    updateSwitchboard(appId, switchboardId, switchboardUpdateBody) {
      return this.updateSwitchboardWithHttpInfo(appId, switchboardId, switchboardUpdateBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
