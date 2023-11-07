/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class ListSearchableFieldsRequest extends SpeakeasyBase {
    /**
     * Name of the dataset.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dataset" })
    dataset: string;

    /**
     * Version of the dataset.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
    version: string;
}

export class ListSearchableFieldsResponse extends SpeakeasyBase {
    /**
     * The dataset API for the given version is found and it is accessible to consume.
     */
    @SpeakeasyMetadata()
    twoHundredApplicationJsonRes?: string;

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
