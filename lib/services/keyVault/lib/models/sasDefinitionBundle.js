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
 * A SAS definition bundle consists of key vault SAS definition details plus
 * its attributes.
 *
 */
class SasDefinitionBundle {
  /**
   * Create a SasDefinitionBundle.
   * @member {string} [id] The SAS definition id.
   * @member {string} [secretId] Storage account SAS definition secret id.
   * @member {object} [parameters] The SAS definition metadata in the form of
   * key-value pairs.
   * @member {object} [attributes] The SAS definition attributes.
   * @member {boolean} [attributes.enabled] the enabled state of the object.
   * @member {date} [attributes.created] Creation time in UTC.
   * @member {date} [attributes.updated] Last updated time in UTC.
   * @member {object} [tags] Application specific metadata in the form of
   * key-value pairs
   */
  constructor() {
  }

  /**
   * Defines the metadata of SasDefinitionBundle
   *
   * @returns {object} metadata of SasDefinitionBundle
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SasDefinitionBundle',
      type: {
        name: 'Composite',
        className: 'SasDefinitionBundle',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          secretId: {
            required: false,
            readOnly: true,
            serializedName: 'sid',
            type: {
              name: 'String'
            }
          },
          parameters: {
            required: false,
            readOnly: true,
            serializedName: 'parameters',
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
          attributes: {
            required: false,
            readOnly: true,
            serializedName: 'attributes',
            type: {
              name: 'Composite',
              className: 'SasDefinitionAttributes'
            }
          },
          tags: {
            required: false,
            readOnly: true,
            serializedName: 'tags',
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
          }
        }
      }
    };
  }
}

module.exports = SasDefinitionBundle;