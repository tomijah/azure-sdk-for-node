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
 * Link with additional information about a product.
 *
 */
class ProductLink {
  /**
   * Create a ProductLink.
   * @member {string} [displayName] The description of the link.
   * @member {string} [uri] The URI corresponding to the link.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ProductLink
   *
   * @returns {object} metadata of ProductLink
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ProductLink',
      type: {
        name: 'Composite',
        className: 'ProductLink',
        modelProperties: {
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          uri: {
            required: false,
            serializedName: 'uri',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ProductLink;