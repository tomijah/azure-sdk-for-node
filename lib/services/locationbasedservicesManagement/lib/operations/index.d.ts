/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback, HttpOperationResponse } from 'ms-rest';
import * as models from '../models';


/**
 * @class
 * Accounts
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the LocationBasedServicesManagementClient.
 */
export interface Accounts {


    /**
     * Create or update a Location Based Services Account. A Location Based
     * Services Account holds the keys which allow access to the Location Based
     * Services REST APIs.
     *
     * @param {string} resourceGroupName The name of the Azure Resource Group.
     *
     * @param {string} accountName The name of the Location Based Services Account.
     *
     * @param {object} locationBasedServicesAccountCreateParameters The new or
     * updated parameters for the Location Based Services Account.
     *
     * @param {string} locationBasedServicesAccountCreateParameters.location The
     * location of the resource.
     *
     * @param {object} [locationBasedServicesAccountCreateParameters.tags] Gets or
     * sets a list of key value pairs that describe the resource. These tags can be
     * used in viewing and grouping this resource (across resource groups). A
     * maximum of 15 tags can be provided for a resource. Each tag must have a key
     * no greater than 128 characters and value no greater than 256 characters.
     *
     * @param {object} locationBasedServicesAccountCreateParameters.sku The SKU of
     * this account.
     *
     * @param {string} locationBasedServicesAccountCreateParameters.sku.name The
     * name of the SKU, in standard format (such as S0).
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<LocationBasedServicesAccount>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, accountName: string, locationBasedServicesAccountCreateParameters: models.LocationBasedServicesAccountCreateParameters, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.LocationBasedServicesAccount>>;

    /**
     * Create or update a Location Based Services Account. A Location Based
     * Services Account holds the keys which allow access to the Location Based
     * Services REST APIs.
     *
     * @param {string} resourceGroupName The name of the Azure Resource Group.
     *
     * @param {string} accountName The name of the Location Based Services Account.
     *
     * @param {object} locationBasedServicesAccountCreateParameters The new or
     * updated parameters for the Location Based Services Account.
     *
     * @param {string} locationBasedServicesAccountCreateParameters.location The
     * location of the resource.
     *
     * @param {object} [locationBasedServicesAccountCreateParameters.tags] Gets or
     * sets a list of key value pairs that describe the resource. These tags can be
     * used in viewing and grouping this resource (across resource groups). A
     * maximum of 15 tags can be provided for a resource. Each tag must have a key
     * no greater than 128 characters and value no greater than 256 characters.
     *
     * @param {object} locationBasedServicesAccountCreateParameters.sku The SKU of
     * this account.
     *
     * @param {string} locationBasedServicesAccountCreateParameters.sku.name The
     * name of the SKU, in standard format (such as S0).
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {LocationBasedServicesAccount} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {LocationBasedServicesAccount} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link LocationBasedServicesAccount} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, accountName: string, locationBasedServicesAccountCreateParameters: models.LocationBasedServicesAccountCreateParameters, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.LocationBasedServicesAccount>;
    createOrUpdate(resourceGroupName: string, accountName: string, locationBasedServicesAccountCreateParameters: models.LocationBasedServicesAccountCreateParameters, callback: ServiceCallback<models.LocationBasedServicesAccount>): void;
    createOrUpdate(resourceGroupName: string, accountName: string, locationBasedServicesAccountCreateParameters: models.LocationBasedServicesAccountCreateParameters, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.LocationBasedServicesAccount>): void;


    /**
     * Updates a Location Based Services Account. Only a subset of the parameters
     * may be updated after creation, such as Sku and Tags.
     *
     * @param {string} resourceGroupName The name of the Azure Resource Group.
     *
     * @param {string} accountName The name of the Location Based Services Account.
     *
     * @param {object} locationBasedServicesAccountUpdateParameters The updated
     * parameters for the Location Based Services Account.
     *
     * @param {object} [locationBasedServicesAccountUpdateParameters.tags] Gets or
     * sets a list of key value pairs that describe the resource. These tags can be
     * used in viewing and grouping this resource (across resource groups). A
     * maximum of 15 tags can be provided for a resource. Each tag must have a key
     * no greater than 128 characters and value no greater than 256 characters.
     *
     * @param {object} [locationBasedServicesAccountUpdateParameters.sku] The SKU
     * of this account.
     *
     * @param {string} locationBasedServicesAccountUpdateParameters.sku.name The
     * name of the SKU, in standard format (such as S0).
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<LocationBasedServicesAccount>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    updateWithHttpOperationResponse(resourceGroupName: string, accountName: string, locationBasedServicesAccountUpdateParameters: models.LocationBasedServicesAccountUpdateParameters, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.LocationBasedServicesAccount>>;

    /**
     * Updates a Location Based Services Account. Only a subset of the parameters
     * may be updated after creation, such as Sku and Tags.
     *
     * @param {string} resourceGroupName The name of the Azure Resource Group.
     *
     * @param {string} accountName The name of the Location Based Services Account.
     *
     * @param {object} locationBasedServicesAccountUpdateParameters The updated
     * parameters for the Location Based Services Account.
     *
     * @param {object} [locationBasedServicesAccountUpdateParameters.tags] Gets or
     * sets a list of key value pairs that describe the resource. These tags can be
     * used in viewing and grouping this resource (across resource groups). A
     * maximum of 15 tags can be provided for a resource. Each tag must have a key
     * no greater than 128 characters and value no greater than 256 characters.
     *
     * @param {object} [locationBasedServicesAccountUpdateParameters.sku] The SKU
     * of this account.
     *
     * @param {string} locationBasedServicesAccountUpdateParameters.sku.name The
     * name of the SKU, in standard format (such as S0).
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {LocationBasedServicesAccount} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {LocationBasedServicesAccount} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link LocationBasedServicesAccount} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    update(resourceGroupName: string, accountName: string, locationBasedServicesAccountUpdateParameters: models.LocationBasedServicesAccountUpdateParameters, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.LocationBasedServicesAccount>;
    update(resourceGroupName: string, accountName: string, locationBasedServicesAccountUpdateParameters: models.LocationBasedServicesAccountUpdateParameters, callback: ServiceCallback<models.LocationBasedServicesAccount>): void;
    update(resourceGroupName: string, accountName: string, locationBasedServicesAccountUpdateParameters: models.LocationBasedServicesAccountUpdateParameters, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.LocationBasedServicesAccount>): void;


    /**
     * Delete a Location Based Services Account
     *
     * @param {string} resourceGroupName The name of the Azure Resource Group.
     *
     * @param {string} accountName The name of the Location Based Services Account.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, accountName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Delete a Location Based Services Account
     *
     * @param {string} resourceGroupName The name of the Azure Resource Group.
     *
     * @param {string} accountName The name of the Location Based Services Account.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    deleteMethod(resourceGroupName: string, accountName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    deleteMethod(resourceGroupName: string, accountName: string, callback: ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Get a Location Based Services Account
     *
     * @param {string} resourceGroupName The name of the Azure Resource Group.
     *
     * @param {string} accountName The name of the Location Based Services Account.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<LocationBasedServicesAccount>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, accountName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.LocationBasedServicesAccount>>;

    /**
     * Get a Location Based Services Account
     *
     * @param {string} resourceGroupName The name of the Azure Resource Group.
     *
     * @param {string} accountName The name of the Location Based Services Account.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {LocationBasedServicesAccount} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {LocationBasedServicesAccount} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link LocationBasedServicesAccount} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, accountName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.LocationBasedServicesAccount>;
    get(resourceGroupName: string, accountName: string, callback: ServiceCallback<models.LocationBasedServicesAccount>): void;
    get(resourceGroupName: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.LocationBasedServicesAccount>): void;


    /**
     * Get all Location Based Services Accounts in a Resource Group
     *
     * @param {string} resourceGroupName The name of the Azure Resource Group.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<LocationBasedServicesAccounts>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listByResourceGroupWithHttpOperationResponse(resourceGroupName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.LocationBasedServicesAccounts>>;

    /**
     * Get all Location Based Services Accounts in a Resource Group
     *
     * @param {string} resourceGroupName The name of the Azure Resource Group.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {LocationBasedServicesAccounts} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {LocationBasedServicesAccounts} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link LocationBasedServicesAccounts} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listByResourceGroup(resourceGroupName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.LocationBasedServicesAccounts>;
    listByResourceGroup(resourceGroupName: string, callback: ServiceCallback<models.LocationBasedServicesAccounts>): void;
    listByResourceGroup(resourceGroupName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.LocationBasedServicesAccounts>): void;


    /**
     * Get all Location Based Services Accounts in a Subscription
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<LocationBasedServicesAccounts>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listBySubscriptionWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.LocationBasedServicesAccounts>>;

    /**
     * Get all Location Based Services Accounts in a Subscription
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {LocationBasedServicesAccounts} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {LocationBasedServicesAccounts} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link LocationBasedServicesAccounts} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listBySubscription(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.LocationBasedServicesAccounts>;
    listBySubscription(callback: ServiceCallback<models.LocationBasedServicesAccounts>): void;
    listBySubscription(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.LocationBasedServicesAccounts>): void;


    /**
     * Moves Location Based Services Accounts from one ResourceGroup (or
     * Subscription) to another
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains Location Based Services Account to move.
     *
     * @param {object} moveRequest The details of the Location Based Services
     * Account move.
     *
     * @param {string} moveRequest.targetResourceGroup The name of the destination
     * resource group.
     *
     * @param {array} moveRequest.resourceIds A list of resource names to move from
     * the source resource group.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    moveWithHttpOperationResponse(resourceGroupName: string, moveRequest: models.LocationBasedServicesAccountsMoveRequest, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Moves Location Based Services Accounts from one ResourceGroup (or
     * Subscription) to another
     *
     * @param {string} resourceGroupName The name of the resource group that
     * contains Location Based Services Account to move.
     *
     * @param {object} moveRequest The details of the Location Based Services
     * Account move.
     *
     * @param {string} moveRequest.targetResourceGroup The name of the destination
     * resource group.
     *
     * @param {array} moveRequest.resourceIds A list of resource names to move from
     * the source resource group.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    move(resourceGroupName: string, moveRequest: models.LocationBasedServicesAccountsMoveRequest, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    move(resourceGroupName: string, moveRequest: models.LocationBasedServicesAccountsMoveRequest, callback: ServiceCallback<void>): void;
    move(resourceGroupName: string, moveRequest: models.LocationBasedServicesAccountsMoveRequest, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Get the keys to use with the Location Based Services APIs. A key is used to
     * authenticate and authorize access to the Location Based Services REST APIs.
     * Only one key is needed at a time; two are given to provide seamless key
     * regeneration.
     *
     * @param {string} resourceGroupName The name of the Azure Resource Group.
     *
     * @param {string} accountName The name of the Location Based Services Account.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<LocationBasedServicesAccountKeys>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listKeysWithHttpOperationResponse(resourceGroupName: string, accountName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.LocationBasedServicesAccountKeys>>;

    /**
     * Get the keys to use with the Location Based Services APIs. A key is used to
     * authenticate and authorize access to the Location Based Services REST APIs.
     * Only one key is needed at a time; two are given to provide seamless key
     * regeneration.
     *
     * @param {string} resourceGroupName The name of the Azure Resource Group.
     *
     * @param {string} accountName The name of the Location Based Services Account.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {LocationBasedServicesAccountKeys} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {LocationBasedServicesAccountKeys} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link LocationBasedServicesAccountKeys} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listKeys(resourceGroupName: string, accountName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.LocationBasedServicesAccountKeys>;
    listKeys(resourceGroupName: string, accountName: string, callback: ServiceCallback<models.LocationBasedServicesAccountKeys>): void;
    listKeys(resourceGroupName: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.LocationBasedServicesAccountKeys>): void;


    /**
     * Regenerate either the primary or secondary key for use with the Location
     * Based Services APIs. The old key will stop working immediately.
     *
     * @param {string} resourceGroupName The name of the Azure Resource Group.
     *
     * @param {string} accountName The name of the Location Based Services Account.
     *
     * @param {object} keySpecification Which key to regenerate:  primary or
     * secondary.
     *
     * @param {string} keySpecification.keyType Whether the operation refers to the
     * primary or secondary key. Possible values include: 'primary', 'secondary'
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<LocationBasedServicesAccountKeys>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    regenerateKeysWithHttpOperationResponse(resourceGroupName: string, accountName: string, keySpecification: models.LocationBasedServicesKeySpecification, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.LocationBasedServicesAccountKeys>>;

    /**
     * Regenerate either the primary or secondary key for use with the Location
     * Based Services APIs. The old key will stop working immediately.
     *
     * @param {string} resourceGroupName The name of the Azure Resource Group.
     *
     * @param {string} accountName The name of the Location Based Services Account.
     *
     * @param {object} keySpecification Which key to regenerate:  primary or
     * secondary.
     *
     * @param {string} keySpecification.keyType Whether the operation refers to the
     * primary or secondary key. Possible values include: 'primary', 'secondary'
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {LocationBasedServicesAccountKeys} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {LocationBasedServicesAccountKeys} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link LocationBasedServicesAccountKeys} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    regenerateKeys(resourceGroupName: string, accountName: string, keySpecification: models.LocationBasedServicesKeySpecification, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.LocationBasedServicesAccountKeys>;
    regenerateKeys(resourceGroupName: string, accountName: string, keySpecification: models.LocationBasedServicesKeySpecification, callback: ServiceCallback<models.LocationBasedServicesAccountKeys>): void;
    regenerateKeys(resourceGroupName: string, accountName: string, keySpecification: models.LocationBasedServicesKeySpecification, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.LocationBasedServicesAccountKeys>): void;


    /**
     * List operations available for the Location Based Services Resource Provider
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<LocationBasedServicesOperations>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listOperationsWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.LocationBasedServicesOperations>>;

    /**
     * List operations available for the Location Based Services Resource Provider
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {LocationBasedServicesOperations} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {LocationBasedServicesOperations} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link LocationBasedServicesOperations} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listOperations(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.LocationBasedServicesOperations>;
    listOperations(callback: ServiceCallback<models.LocationBasedServicesOperations>): void;
    listOperations(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.LocationBasedServicesOperations>): void;
}
