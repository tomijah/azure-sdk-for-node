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

/**
 * Class representing a ImageCopyFromModel.
 */
class ImageCopyFromModel {
  /**
   * Create a ImageCopyFromModel.
   * @member {string} sourceRepository Repository name of the source image.
   * @member {string} [sourceTag] The tag name of the source image.  When both
   * source tag and source manifest are omitted the 'latest' tag will be used.
   * Exclusive with SourceManifestDigest.
   * @member {string} [sourceManifestDigest] The manifest sha of the source
   * image. Exclusive with SourceTag.
   * @member {string} sourceRegistryResourceId The resource id of the source
   * registry.
   * @member {array} [targetTags] List of strings of the form repo[:tag].  When
   * tag is omitted the source will be used (or 'latest' if source tag is also
   * omitted.)
   * @member {array} [untaggedTargetRepositories] List of strings of repository
   * names to do a manifest only copy.  No tag will be created.
   * @member {boolean} [force] When true, any existing target tags will be
   * overwritten.  When false, any existing target tags will fail the operation
   * before any copying begins.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ImageCopyFromModel
   *
   * @returns {object} metadata of ImageCopyFromModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ImageCopyFromModel',
      type: {
        name: 'Composite',
        className: 'ImageCopyFromModel',
        modelProperties: {
          sourceRepository: {
            required: true,
            serializedName: 'sourceRepository',
            type: {
              name: 'String'
            }
          },
          sourceTag: {
            required: false,
            serializedName: 'sourceTag',
            type: {
              name: 'String'
            }
          },
          sourceManifestDigest: {
            required: false,
            serializedName: 'sourceManifestDigest',
            type: {
              name: 'String'
            }
          },
          sourceRegistryResourceId: {
            required: true,
            serializedName: 'sourceRegistryResourceId',
            type: {
              name: 'String'
            }
          },
          targetTags: {
            required: false,
            serializedName: 'targetTags',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          untaggedTargetRepositories: {
            required: false,
            serializedName: 'untaggedTargetRepositories',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          force: {
            required: false,
            serializedName: 'force',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = ImageCopyFromModel;
