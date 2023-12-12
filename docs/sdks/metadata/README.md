# Metadata
(*metadata*)

## Overview

Find out about the data sets

### Available Operations

* [listDataSets](#listdatasets) - List available data sets
* [listSearchableFields](#listsearchablefields) - Provides the general information about the API and the list of fields that can be used to query the dataset.

## listDataSets

List available data sets

### Example Usage

```typescript
import { Test } from "Test";

async function run() {
  const sdk = new Test();

  const res = await sdk.metadata.listDataSets();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListDataSetsResponse](../../sdk/models/operations/listdatasetsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listSearchableFields

This GET API returns the list of all the searchable field names that are in the oa_citations. Please see the 'fields' attribute which returns an array of field names. Each field or a combination of fields can be searched using the syntax options shown below.

### Example Usage

```typescript
import { Test } from "Test";

async function run() {
  const sdk = new Test();

  const res = await sdk.metadata.listSearchableFields({
    dataset: "string",
    version: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.ListSearchableFieldsRequest](../../sdk/models/operations/listsearchablefieldsrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.ListSearchableFieldsResponse](../../sdk/models/operations/listsearchablefieldsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
