// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ca49042-782a-4cc9-89b5-ee1b487fe115';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Compute/locations/westus/publishers/Microsoft.Compute/artifacttypes/vmextension/types?api-version=2015-06-15')
  .reply(200, "[\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"BGInfo\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/BGInfo\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"CustomScriptExtension\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/CustomScriptExtension\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"JsonADDomainExtension\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/JsonADDomainExtension\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"VMAccessAgent\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/VMAccessAgent\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1033',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8cb8ab79-eed0-4dce-bd59-7bea978ac6a9',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '1d4ed61a-400b-48ce-b5b0-47fa32fd4084',
  'x-ms-routing-request-id': 'WESTUS:20151214T013624Z:1d4ed61a-400b-48ce-b5b0-47fa32fd4084',
  date: 'Mon, 14 Dec 2015 01:36:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Compute/locations/westus/publishers/Microsoft.Compute/artifacttypes/vmextension/types?api-version=2015-06-15')
  .reply(200, "[\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"BGInfo\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/BGInfo\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"CustomScriptExtension\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/CustomScriptExtension\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"JsonADDomainExtension\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/JsonADDomainExtension\"\r\n  },\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"VMAccessAgent\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/Microsoft.Compute/ArtifactTypes/VMExtension/Types/VMAccessAgent\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1033',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8cb8ab79-eed0-4dce-bd59-7bea978ac6a9',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '1d4ed61a-400b-48ce-b5b0-47fa32fd4084',
  'x-ms-routing-request-id': 'WESTUS:20151214T013624Z:1d4ed61a-400b-48ce-b5b0-47fa32fd4084',
  date: 'Mon, 14 Dec 2015 01:36:24 GMT',
  connection: 'close' });
 return result; }]];