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
 * The properties of the volume.
 *
 */
class Volume {
  /**
   * Create a Volume.
   * @member {string} name The name of the volume.
   * @member {object} [azureFile] The Azure File volume.
   * @member {string} [azureFile.shareName] The name of the Azure File share to
   * be mounted as a volume.
   * @member {boolean} [azureFile.readOnly] The flag indicating whether the
   * Azure File shared mounted as a volume is read-only.
   * @member {string} [azureFile.storageAccountName] The name of the storage
   * account that contains the Azure File share.
   * @member {string} [azureFile.storageAccountKey] The storage account access
   * key used to access the Azure File share.
   * @member {object} [emptyDir] The empty directory volume.
   * @member {object} [secret] The secret volume.
   * @member {object} [gitRepo] The git repo volume.
   * @member {string} [gitRepo.directory] Target directory name. Must not
   * contain or start with '..'.  If '.' is supplied, the volume directory will
   * be the git repository.  Otherwise, if specified, the volume will contain
   * the git repository in the subdirectory with the given name.
   * @member {string} [gitRepo.repository] Repository URL
   * @member {string} [gitRepo.revision] Commit hash for the specified
   * revision.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Volume
   *
   * @returns {object} metadata of Volume
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Volume',
      type: {
        name: 'Composite',
        className: 'Volume',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          azureFile: {
            required: false,
            serializedName: 'azureFile',
            type: {
              name: 'Composite',
              className: 'AzureFileVolume'
            }
          },
          emptyDir: {
            required: false,
            serializedName: 'emptyDir',
            type: {
              name: 'Object'
            }
          },
          secret: {
            required: false,
            serializedName: 'secret',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          gitRepo: {
            required: false,
            serializedName: 'gitRepo',
            type: {
              name: 'Composite',
              className: 'GitRepoVolume'
            }
          }
        }
      }
    };
  }
}

module.exports = Volume;