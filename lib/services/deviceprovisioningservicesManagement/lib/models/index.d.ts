/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource } from 'ms-rest-azure';
import { CloudError } from 'ms-rest-azure';
import * as moment from 'moment';

export { BaseResource } from 'ms-rest-azure';
export { CloudError } from 'ms-rest-azure';


/**
 * @class
 * Initializes a new instance of the ErrorMesssage class.
 * @constructor
 * Error response containing message and code.
 *
 * @member {string} [code] standard error code
 * @member {string} [message] standard error description
 * @member {string} [details] detailed summary of error
 */
export interface ErrorMesssage {
  code?: string;
  message?: string;
  details?: string;
}

/**
 * @class
 * Initializes a new instance of the AsyncOperationResult class.
 * @constructor
 * Result of a long running operation.
 *
 * @member {string} [status] current status of a long running operation.
 * @member {object} [error] Error message containing code, description and
 * details
 * @member {string} [error.code] standard error code
 * @member {string} [error.message] standard error description
 * @member {string} [error.details] detailed summary of error
 */
export interface AsyncOperationResult {
  status?: string;
  error?: ErrorMesssage;
}

/**
 * @class
 * Initializes a new instance of the CertificateProperties class.
 * @constructor
 * The description of an X509 CA Certificate.
 *
 * @member {string} [subject] The certificate's subject name.
 * @member {date} [expiry] The certificate's expiration date and time.
 * @member {string} [thumbprint] The certificate's thumbprint.
 * @member {boolean} [isVerified] Determines whether certificate has been
 * verified.
 * @member {date} [created] The certificate's creation date and time.
 * @member {date} [updated] The certificate's last update date and time.
 */
export interface CertificateProperties {
  readonly subject?: string;
  readonly expiry?: Date;
  readonly thumbprint?: string;
  readonly isVerified?: boolean;
  readonly created?: Date;
  readonly updated?: Date;
}

/**
 * @class
 * Initializes a new instance of the CertificateResponse class.
 * @constructor
 * The X509 Certificate.
 *
 * @member {object} [properties] properties of a certificate
 * @member {string} [properties.subject] The certificate's subject name.
 * @member {date} [properties.expiry] The certificate's expiration date and
 * time.
 * @member {string} [properties.thumbprint] The certificate's thumbprint.
 * @member {boolean} [properties.isVerified] Determines whether certificate has
 * been verified.
 * @member {date} [properties.created] The certificate's creation date and
 * time.
 * @member {date} [properties.updated] The certificate's last update date and
 * time.
 * @member {string} [id] The resource identifier.
 * @member {string} [name] The name of the certificate.
 * @member {string} [etag] The entity tag.
 * @member {string} [type] The resource type.
 */
export interface CertificateResponse extends BaseResource {
  properties?: CertificateProperties;
  readonly id?: string;
  readonly name?: string;
  readonly etag?: string;
  readonly type?: string;
}

/**
 * @class
 * Initializes a new instance of the CertificateListDescription class.
 * @constructor
 * The JSON-serialized array of Certificate objects.
 *
 * @member {array} [value] The array of Certificate objects.
 */
export interface CertificateListDescription {
  value?: CertificateResponse[];
}

/**
 * @class
 * Initializes a new instance of the CertificateBodyDescription class.
 * @constructor
 * The JSON-serialized X509 Certificate.
 *
 * @member {string} [certificate] Base-64 representation of the X509 leaf
 * certificate .cer file or just .pem file content.
 */
export interface CertificateBodyDescription {
  certificate?: string;
}

/**
 * @class
 * Initializes a new instance of the IotDpsSkuInfo class.
 * @constructor
 * List of possible provisoning service SKUs.
 *
 * @member {string} [name] Sku name. Possible values include: 'S1'
 * @member {string} [tier] Pricing tier name of the provisioning service.
 * @member {number} [capacity] The number of units to provision
 */
export interface IotDpsSkuInfo {
  name?: string;
  readonly tier?: string;
  capacity?: number;
}

/**
 * @class
 * Initializes a new instance of the IotHubDefinitionDescription class.
 * @constructor
 * Description of the IoT hub.
 *
 * @member {boolean} [applyAllocationPolicy] flag for applying allocationPolicy
 * or not for a given iot hub.
 * @member {number} [allocationWeight] weight to apply for a given iot h.
 * @member {string} [name] Host name of the IoT hub.
 * @member {string} connectionString Connection string og the IoT hub.
 * @member {string} location ARM region of the IoT hub.
 */
export interface IotHubDefinitionDescription {
  applyAllocationPolicy?: boolean;
  allocationWeight?: number;
  readonly name?: string;
  connectionString: string;
  location: string;
}

/**
 * @class
 * Initializes a new instance of the SharedAccessSignatureAuthorizationRuleAccessRightsDescription class.
 * @constructor
 * Description of the shared access key.
 *
 * @member {string} keyName Name of the key.
 * @member {string} [primaryKey] Primary SAS key value.
 * @member {string} [secondaryKey] Secondary SAS key value.
 * @member {string} rights Rights that this key has. Possible values include:
 * 'ServiceConfig', 'EnrollmentRead', 'EnrollmentWrite', 'DeviceConnect',
 * 'RegistrationStatusRead', 'RegistrationStatusWrite'
 */
export interface SharedAccessSignatureAuthorizationRuleAccessRightsDescription {
  keyName: string;
  primaryKey?: string;
  secondaryKey?: string;
  rights: string;
}

/**
 * @class
 * Initializes a new instance of the IotDpsPropertiesDescription class.
 * @constructor
 * the service specific properties of a provisoning service, including keys,
 * linked iot hubs, current state, and system generated properties such as
 * hostname and idScope
 *
 * @member {string} [state] Current state of the provisioning service. Possible
 * values include: 'Activating', 'Active', 'Deleting', 'Deleted',
 * 'ActivationFailed', 'DeletionFailed', 'Transitioning', 'Suspending',
 * 'Suspended', 'Resuming', 'FailingOver', 'FailoverFailed'
 * @member {string} [provisioningState] The ARM provisioning state of the
 * provisioning service.
 * @member {array} [iotHubs] List of IoT hubs assosciated with this
 * provisioning service.
 * @member {string} [allocationPolicy] Allocation policy to be used by this
 * provisioning service. Possible values include: 'Hashed', 'GeoLatency',
 * 'Static'
 * @member {string} [serviceOperationsHostName] Service endpoint for
 * provisioning service.
 * @member {string} [deviceProvisioningHostName] Device endpoint for this
 * provisioning service.
 * @member {string} [idScope] Unique identifier of this provisioning service.
 * @member {array} [authorizationPolicies] List of authorization keys for a
 * provisioning service.
 */
export interface IotDpsPropertiesDescription {
  state?: string;
  provisioningState?: string;
  iotHubs?: IotHubDefinitionDescription[];
  allocationPolicy?: string;
  readonly serviceOperationsHostName?: string;
  readonly deviceProvisioningHostName?: string;
  readonly idScope?: string;
  authorizationPolicies?: SharedAccessSignatureAuthorizationRuleAccessRightsDescription[];
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * The common properties of an Azure resource.
 *
 * @member {string} [id] The resource identifier.
 * @member {string} [name] The resource name.
 * @member {string} [type] The resource type.
 * @member {string} location The resource location.
 * @member {object} [tags] The resource tags.
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  location: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the ProvisioningServiceDescription class.
 * @constructor
 * The description of the provisioning service.
 *
 * @member {string} [etag] The Etag field is *not* required. If it is provided
 * in the response body, it must also be provided as a header per the normal
 * ETag convention.
 * @member {object} properties Service specific properties for a provisioning
 * service
 * @member {string} [properties.state] Current state of the provisioning
 * service. Possible values include: 'Activating', 'Active', 'Deleting',
 * 'Deleted', 'ActivationFailed', 'DeletionFailed', 'Transitioning',
 * 'Suspending', 'Suspended', 'Resuming', 'FailingOver', 'FailoverFailed'
 * @member {string} [properties.provisioningState] The ARM provisioning state
 * of the provisioning service.
 * @member {array} [properties.iotHubs] List of IoT hubs assosciated with this
 * provisioning service.
 * @member {string} [properties.allocationPolicy] Allocation policy to be used
 * by this provisioning service. Possible values include: 'Hashed',
 * 'GeoLatency', 'Static'
 * @member {string} [properties.serviceOperationsHostName] Service endpoint for
 * provisioning service.
 * @member {string} [properties.deviceProvisioningHostName] Device endpoint for
 * this provisioning service.
 * @member {string} [properties.idScope] Unique identifier of this provisioning
 * service.
 * @member {array} [properties.authorizationPolicies] List of authorization
 * keys for a provisioning service.
 * @member {object} sku Sku info for a provisioning Service.
 * @member {string} [sku.name] Sku name. Possible values include: 'S1'
 * @member {string} [sku.tier] Pricing tier name of the provisioning service.
 * @member {number} [sku.capacity] The number of units to provision
 */
export interface ProvisioningServiceDescription extends Resource {
  etag?: string;
  properties: IotDpsPropertiesDescription;
  sku: IotDpsSkuInfo;
}

/**
 * @class
 * Initializes a new instance of the OperationDisplay class.
 * @constructor
 * The object that represents the operation.
 *
 * @member {string} [provider] Service provider: Microsoft Devices.
 * @member {string} [resource] Resource Type: ProvisioningServices.
 * @member {string} [operation] Name of the operation.
 */
export interface OperationDisplay {
  readonly provider?: string;
  readonly resource?: string;
  readonly operation?: string;
}

/**
 * @class
 * Initializes a new instance of the Operation class.
 * @constructor
 * IoT Hub REST API operation.
 *
 * @member {string} [name] Operation name: {provider}/{resource}/{read | write
 * | action | delete}
 * @member {object} [display] The object that represents the operation.
 * @member {string} [display.provider] Service provider: Microsoft Devices.
 * @member {string} [display.resource] Resource Type: ProvisioningServices.
 * @member {string} [display.operation] Name of the operation.
 */
export interface Operation {
  readonly name?: string;
  display?: OperationDisplay;
}

/**
 * @class
 * Initializes a new instance of the ErrorDetails class.
 * @constructor
 * Error details.
 *
 * @member {string} [code] The error code.
 * @member {string} [httpStatusCode] The HTTP status code.
 * @member {string} [message] The error message.
 * @member {string} [details] The error details.
 */
export interface ErrorDetails {
  readonly code?: string;
  readonly httpStatusCode?: string;
  readonly message?: string;
  readonly details?: string;
}

/**
 * @class
 * Initializes a new instance of the IotDpsSkuDefinition class.
 * @constructor
 * Available Sku's of tier and units.
 *
 * @member {string} [name] Sku name. Possible values include: 'S1'
 */
export interface IotDpsSkuDefinition {
  name?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationInputs class.
 * @constructor
 * Input values for operation results call.
 *
 * @member {string} name The name of the Provisioning Service to check.
 */
export interface OperationInputs {
  name: string;
}

/**
 * @class
 * Initializes a new instance of the NameAvailabilityInfo class.
 * @constructor
 * Description of name availability.
 *
 * @member {boolean} [nameAvailable] specifies if a name is available or not
 * @member {string} [reason] specifies the reason a name is unavailable.
 * Possible values include: 'Invalid', 'AlreadyExists'
 * @member {string} [message] message containing a etailed reason name is
 * unavailable
 */
export interface NameAvailabilityInfo {
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}

/**
 * @class
 * Initializes a new instance of the TagsResource class.
 * @constructor
 * A container holding only the Tags for a resource, allowing the user to
 * update the tags on a Provisioning Service instance.
 *
 * @member {object} [tags] Resource tags
 */
export interface TagsResource {
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the VerificationCodeResponseProperties class.
 * @constructor
 * @member {string} [verificationCode] Verification code.
 * @member {string} [subject] Certificate subject.
 * @member {string} [expiry] Code expiry.
 * @member {string} [thumbprint] Certificate thumbprint.
 * @member {boolean} [isVerified] Indicate if the certificate is verified by
 * owner of private key.
 * @member {string} [created] Certificate created time.
 * @member {string} [updated] Certificate updated time.
 */
export interface VerificationCodeResponseProperties {
  verificationCode?: string;
  subject?: string;
  expiry?: string;
  thumbprint?: string;
  isVerified?: boolean;
  created?: string;
  updated?: string;
}

/**
 * @class
 * Initializes a new instance of the VerificationCodeResponse class.
 * @constructor
 * Description of the response of the verification code.
 *
 * @member {string} [name] Name of certificate.
 * @member {string} [etag] Request etag.
 * @member {string} [id] The resource identifier.
 * @member {string} [type] The resource type.
 * @member {object} [properties]
 * @member {string} [properties.verificationCode] Verification code.
 * @member {string} [properties.subject] Certificate subject.
 * @member {string} [properties.expiry] Code expiry.
 * @member {string} [properties.thumbprint] Certificate thumbprint.
 * @member {boolean} [properties.isVerified] Indicate if the certificate is
 * verified by owner of private key.
 * @member {string} [properties.created] Certificate created time.
 * @member {string} [properties.updated] Certificate updated time.
 */
export interface VerificationCodeResponse extends BaseResource {
  readonly name?: string;
  readonly etag?: string;
  readonly id?: string;
  readonly type?: string;
  properties?: VerificationCodeResponseProperties;
}

/**
 * @class
 * Initializes a new instance of the VerificationCodeRequest class.
 * @constructor
 * The JSON-serialized leaf certificate
 *
 * @member {string} [certificate] base-64 representation of X509 certificate
 * .cer file or just .pem file content.
 */
export interface VerificationCodeRequest {
  certificate?: string;
}


/**
 * @class
 * Initializes a new instance of the OperationListResult class.
 * @constructor
 * Result of the request to list IoT Hub operations. It contains a list of
 * operations and a URL link to get the next set of results.
 *
 * @member {string} [nextLink] URL to get the next set of operation list
 * results if there are any.
 */
export interface OperationListResult extends Array<Operation> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ProvisioningServiceDescriptionListResult class.
 * @constructor
 * List of provisioning service descriptions.
 *
 * @member {string} [nextLink] the next link
 */
export interface ProvisioningServiceDescriptionListResult extends Array<ProvisioningServiceDescription> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the IotDpsSkuDefinitionListResult class.
 * @constructor
 * List of available SKUs.
 *
 * @member {string} [nextLink] The next link.
 */
export interface IotDpsSkuDefinitionListResult extends Array<IotDpsSkuDefinition> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the SharedAccessSignatureAuthorizationRuleListResult class.
 * @constructor
 * List of shared access keys.
 *
 * @member {string} [nextLink] The next link.
 */
export interface SharedAccessSignatureAuthorizationRuleListResult extends Array<SharedAccessSignatureAuthorizationRuleAccessRightsDescription> {
  readonly nextLink?: string;
}
