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
 * The Review object.
 *
 */
class Review {
  /**
   * Create a Review.
   * @member {string} [reviewId] Id of the review.
   * @member {string} [subTeam] Name of the subteam.
   * @member {string} [status] The status string (<Pending, Complete>).
   * @member {array} [reviewerResultTags] Array of KeyValue with Reviewer set
   * Tags.
   * @member {string} [createdBy] The reviewer name.
   * @member {array} [metadata] Array of KeyValue.
   * @member {string} [type] The type of content.
   * @member {string} [content] The content value.
   * @member {string} [contentId] Id of the content.
   * @member {string} [callbackEndpoint] The callback endpoint.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Review
   *
   * @returns {object} metadata of Review
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Review',
      type: {
        name: 'Composite',
        className: 'Review',
        modelProperties: {
          reviewId: {
            required: false,
            serializedName: 'ReviewId',
            type: {
              name: 'String'
            }
          },
          subTeam: {
            required: false,
            serializedName: 'SubTeam',
            type: {
              name: 'String'
            }
          },
          status: {
            required: false,
            serializedName: 'Status',
            type: {
              name: 'String'
            }
          },
          reviewerResultTags: {
            required: false,
            serializedName: 'ReviewerResultTags',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'KeyValuePairElementType',
                  type: {
                    name: 'Composite',
                    className: 'KeyValuePair'
                  }
              }
            }
          },
          createdBy: {
            required: false,
            serializedName: 'CreatedBy',
            type: {
              name: 'String'
            }
          },
          metadata: {
            required: false,
            serializedName: 'Metadata',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'KeyValuePairElementType',
                  type: {
                    name: 'Composite',
                    className: 'KeyValuePair'
                  }
              }
            }
          },
          type: {
            required: false,
            serializedName: 'Type',
            type: {
              name: 'String'
            }
          },
          content: {
            required: false,
            serializedName: 'Content',
            type: {
              name: 'String'
            }
          },
          contentId: {
            required: false,
            serializedName: 'ContentId',
            type: {
              name: 'String'
            }
          },
          callbackEndpoint: {
            required: false,
            serializedName: 'CallbackEndpoint',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Review;