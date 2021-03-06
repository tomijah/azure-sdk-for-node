/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Information about docker image for the job.
 *
 */
class ImageSourceRegistry {
  /**
   * Create a ImageSourceRegistry.
   * @member {string} [serverUrl] Server URL. URL for image repository.
   * @member {string} image Image. The name of the image in the image
   * repository.
   * @member {object} [credentials] Credentials. Credentials to access the
   * private docker repository.
   * @member {string} [credentials.username] User name to login to the
   * repository.
   * @member {string} [credentials.password] User password to login to the
   * docker repository. One of password or passwordSecretReference must be
   * specified.
   * @member {object} [credentials.passwordSecretReference] KeyVault Secret
   * storing the password. Users can store their secrets in Azure KeyVault and
   * pass it to the Batch AI service to integrate with KeyVault. One of
   * password or passwordSecretReference must be specified.
   * @member {object} [credentials.passwordSecretReference.sourceVault] Fully
   * qualified resource indentifier of the Key Vault.
   * @member {string} [credentials.passwordSecretReference.sourceVault.id] The
   * ID of the resource
   * @member {string} [credentials.passwordSecretReference.secretUrl] The URL
   * referencing a secret in the Key Vault.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ImageSourceRegistry
   *
   * @returns {object} metadata of ImageSourceRegistry
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ImageSourceRegistry',
      type: {
        name: 'Composite',
        className: 'ImageSourceRegistry',
        modelProperties: {
          serverUrl: {
            required: false,
            serializedName: 'serverUrl',
            type: {
              name: 'String'
            }
          },
          image: {
            required: true,
            serializedName: 'image',
            type: {
              name: 'String'
            }
          },
          credentials: {
            required: false,
            serializedName: 'credentials',
            type: {
              name: 'Composite',
              className: 'PrivateRegistryCredentials'
            }
          }
        }
      }
    };
  }
}

module.exports = ImageSourceRegistry;
