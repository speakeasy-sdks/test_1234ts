<!-- Start SDK Example Usage -->
```typescript
import { Test } from "Test";

(async () => {
    const sdk = new Test();

    const res = await sdk.metadata.listDataSets();

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->