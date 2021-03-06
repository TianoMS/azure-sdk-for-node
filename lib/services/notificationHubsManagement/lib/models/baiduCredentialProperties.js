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
 * @class
 * Initializes a new instance of the BaiduCredentialProperties class.
 * @constructor
 * Description of a NotificationHub BaiduCredential.
 * @member {string} [baiduApiKey] Get or Set Baidu Api Key.
 * 
 * @member {string} [baiduEndPoint] Get or Set Baidu Endpoint.
 * 
 * @member {string} [baiduSecretKey] Get or Set Baidu Secret Key
 * 
 */
function BaiduCredentialProperties() {
}

/**
 * Defines the metadata of BaiduCredentialProperties
 *
 * @returns {object} metadata of BaiduCredentialProperties
 *
 */
BaiduCredentialProperties.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'BaiduCredentialProperties',
    type: {
      name: 'Composite',
      className: 'BaiduCredentialProperties',
      modelProperties: {
        baiduApiKey: {
          required: false,
          serializedName: 'baiduApiKey',
          type: {
            name: 'String'
          }
        },
        baiduEndPoint: {
          required: false,
          serializedName: 'baiduEndPoint',
          type: {
            name: 'String'
          }
        },
        baiduSecretKey: {
          required: false,
          serializedName: 'baiduSecretKey',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = BaiduCredentialProperties;
