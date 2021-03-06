// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com/';
  process.env['AZURE_SUBSCRIPTION_ID'] = '603663e9-700c-46de-9d41-e080ff1d461e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/pools/nodesdktestpool1?api-version=2016-02-01.3.0&$select=id%2Cstate&$expand=stats')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#pools/@Element\",\"id\":\"nodesdktestpool1\",\"state\":\"active\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Fri, 01 Apr 2016 05:47:01 GMT',
  etag: '0x8D359F10BF5ACC5',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '76af8cc5-9827-4129-90a6-2b89da947b1d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Fri, 01 Apr 2016 05:52:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/pools/nodesdktestpool1?api-version=2016-02-01.3.0&$select=id%2Cstate&$expand=stats')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#pools/@Element\",\"id\":\"nodesdktestpool1\",\"state\":\"active\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Fri, 01 Apr 2016 05:47:01 GMT',
  etag: '0x8D359F10BF5ACC5',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '76af8cc5-9827-4129-90a6-2b89da947b1d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Fri, 01 Apr 2016 05:52:02 GMT',
  connection: 'close' });
 return result; }]];