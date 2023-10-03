# Search
(*search*)

## Overview

Search a data set

### Available Operations

* [performSearch](#performsearch) - Provides search capability for the data set with the given search criteria.

## performSearch

This API is based on Solr/Lucene Search. The data is indexed using SOLR. This GET API returns the list of all the searchable field names that are in the Solr Index. Please see the 'fields' attribute which returns an array of field names. Each field or a combination of fields can be searched using the Solr/Lucene Syntax. Please refer https://lucene.apache.org/core/3_6_2/queryparsersyntax.html#Overview for the query syntax. List of field names that are searchable can be determined using above GET api.

### Example Usage

```typescript
import { Test } from "Test";
import { PerformSearchResponse } from "Test/dist/sdk/models/operations";

const sdk = new Test();

sdk.search.performSearch({
  requestBody: {
    criteria: "Hat",
    rows: 214401,
    start: 589616,
  },
  dataset: "Recycled boom Recumbent",
  version: "California withdrawal Honda",
}).then((res: PerformSearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.PerformSearchRequest](../../models/operations/performsearchrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.PerformSearchResponse](../../models/operations/performsearchresponse.md)>**

