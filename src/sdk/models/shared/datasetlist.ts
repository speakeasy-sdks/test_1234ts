/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class Apis extends SpeakeasyBase {
    /**
     * A URL to the API console for each API
     */
    @SpeakeasyMetadata()
    @Expose({ name: "apiDocumentationUrl" })
    apiDocumentationUrl?: string;

    /**
     * To be used as a dataset parameter value
     */
    @SpeakeasyMetadata()
    @Expose({ name: "apiKey" })
    apiKey?: string;

    /**
     * The URL describing the dataset's fields
     */
    @SpeakeasyMetadata()
    @Expose({ name: "apiUrl" })
    apiUrl?: string;

    /**
     * To be used as a version parameter value
     */
    @SpeakeasyMetadata()
    @Expose({ name: "apiVersionNumber" })
    apiVersionNumber?: string;
}

export class DataSetList extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: Apis })
    @Expose({ name: "apis" })
    @Type(() => Apis)
    apis?: Apis[];

    @SpeakeasyMetadata()
    @Expose({ name: "total" })
    total?: number;
}
