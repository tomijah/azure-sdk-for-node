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
 * A collection of workflow run action repetitions.
 *
 */
class WorkflowRunActionRepetitionDefinitionCollection {
  /**
   * Create a WorkflowRunActionRepetitionDefinitionCollection.
   * @member {array} [value]
   */
  constructor() {
  }

  /**
   * Defines the metadata of WorkflowRunActionRepetitionDefinitionCollection
   *
   * @returns {object} metadata of WorkflowRunActionRepetitionDefinitionCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'WorkflowRunActionRepetitionDefinitionCollection',
      type: {
        name: 'Composite',
        className: 'WorkflowRunActionRepetitionDefinitionCollection',
        modelProperties: {
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'WorkflowRunActionRepetitionDefinitionElementType',
                  type: {
                    name: 'Composite',
                    className: 'WorkflowRunActionRepetitionDefinition'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = WorkflowRunActionRepetitionDefinitionCollection;