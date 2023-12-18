/**
 * Api Document
 * Backend_Server Api Document
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* List of experimental function information
*/
export class LabsFeatureVo {
    /**
    * List of experimental functions
    */
    'keys'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "keys",
            "baseName": "keys",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LabsFeatureVo.attributeTypeMap;
    }

    public constructor() {
    }
}
