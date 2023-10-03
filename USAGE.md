<!-- Start SDK Example Usage -->


```typescript
import { Test } from "Test";
import { ListDataSetsResponse } from "Test/dist/sdk/models/operations";

const sdk = new Test();

sdk.metadata.listDataSets().then((res: ListDataSetsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->