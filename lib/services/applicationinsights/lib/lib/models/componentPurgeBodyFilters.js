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
 * User-defined filters to return data which will be purged from the table.
 *
 */
class ComponentPurgeBodyFilters {
  /**
   * Create a ComponentPurgeBodyFilters.
   * @member {string} [column] The column of the table over which the given
   * query should run
   * @member {string} [filter] A query to to run over the provided table and
   * column to purge the corresponding data.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ComponentPurgeBodyFilters
   *
   * @returns {object} metadata of ComponentPurgeBodyFilters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ComponentPurgeBodyFilters',
      type: {
        name: 'Composite',
        className: 'ComponentPurgeBodyFilters',
        modelProperties: {
          column: {
            required: false,
            serializedName: 'column',
            type: {
              name: 'String'
            }
          },
          filter: {
            required: false,
            serializedName: 'filter',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ComponentPurgeBodyFilters;
