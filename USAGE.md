<!-- Start SDK Example Usage [usage] -->
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
<!-- End SDK Example Usage [usage] -->