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
 * Initializes a new instance of the PoolUsageMetrics class.
 * @constructor
 * Usage metrics for a pool across an aggregation interval.
 * @member {string} poolId The id of the pool whose metrics are being
 * aggregated.
 * 
 * @member {date} startTime The start time of the aggregation interval.
 * 
 * @member {date} endTime The end time of the aggregation interval.
 * 
 * @member {string} vmSize The size of virtual machines in the pool. All VMs
 * in a pool are the same size.
 * 
 * @member {number} totalCoreHours The total core hours used in the pool
 * during this aggregation interval.
 * 
 * @member {number} dataIngressGiB The cross data center network ingress in
 * GiB to the pool during this interval.
 * 
 * @member {number} dataEgressGiB The cross data center network egress in GiB
 * from the pool during this interval.
 * 
 */
function PoolUsageMetrics() {
}

/**
 * Defines the metadata of PoolUsageMetrics
 *
 * @returns {object} metadata of PoolUsageMetrics
 *
 */
PoolUsageMetrics.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PoolUsageMetrics',
    type: {
      name: 'Composite',
      className: 'PoolUsageMetrics',
      modelProperties: {
        poolId: {
          required: true,
          serializedName: 'poolId',
          type: {
            name: 'String'
          }
        },
        startTime: {
          required: true,
          serializedName: 'startTime',
          type: {
            name: 'DateTime'
          }
        },
        endTime: {
          required: true,
          serializedName: 'endTime',
          type: {
            name: 'DateTime'
          }
        },
        vmSize: {
          required: true,
          serializedName: 'vmSize',
          type: {
            name: 'String'
          }
        },
        totalCoreHours: {
          required: true,
          serializedName: 'totalCoreHours',
          type: {
            name: 'Number'
          }
        },
        dataIngressGiB: {
          required: true,
          serializedName: 'dataIngressGiB',
          type: {
            name: 'Number'
          }
        },
        dataEgressGiB: {
          required: true,
          serializedName: 'dataEgressGiB',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = PoolUsageMetrics;
