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

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the DeleteCertificateError class.
 * @constructor
 * An error encountered by the Batch service when deleting a certificate.
 * @member {string} [code] An identifier for the certificate deletion error.
 * Codes are invariant and are intended to be consumed programmatically.
 * 
 * @member {string} [message] A message describing the certificate deletion
 * error, intended to be suitable for display in a user interface.
 * 
 * @member {array} [values] A list of additional error details related to the
 * certificate deletion error.
 * 
 */
function DeleteCertificateError() {
}

/**
 * Defines the metadata of DeleteCertificateError
 *
 * @returns {object} metadata of DeleteCertificateError
 *
 */
DeleteCertificateError.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'DeleteCertificateError',
    type: {
      name: 'Composite',
      className: 'DeleteCertificateError',
      modelProperties: {
        code: {
          required: false,
          serializedName: 'code',
          type: {
            name: 'String'
          }
        },
        message: {
          required: false,
          serializedName: 'message',
          type: {
            name: 'String'
          }
        },
        values: {
          required: false,
          serializedName: 'values',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'NameValuePairElementType',
                type: {
                  name: 'Composite',
                  className: 'NameValuePair'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = DeleteCertificateError;
