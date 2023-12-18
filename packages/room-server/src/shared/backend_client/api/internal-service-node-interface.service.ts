/**
 * Api Document
 * Backend_Server Api Document
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Injectable, Optional } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { ResponseDataBoolean } from '../model/response-data-boolean';
import { Configuration } from '../configuration';


@Injectable()
export class InternalServiceNodeInterfaceService {

    protected basePath = 'http://127.0.0.1:8081/api/v1';
    public defaultHeaders: Record<string,string> = {};
    public configuration = new Configuration();

    constructor(protected httpClient: HttpService, @Optional() configuration: Configuration) {
        this.configuration = configuration || this.configuration;
        this.basePath = configuration?.basePath || this.basePath;
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    // private canConsumeForm(consumes: string[]): boolean {
    //     const form = 'multipart/form-data';
    //     return consumes.includes(form);
    // }

    /**
     * Check if the folder contains nodes
     * 
     * @param folderId Folder Node ID
     * @param nodeId Node ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getContainsStatus(folderId: string, nodeId: string, ): Observable<AxiosResponse<ResponseDataBoolean>>;
    public getContainsStatus(folderId: string, nodeId: string, ): Observable<any> {

        if (folderId === null || folderId === undefined) {
            throw new Error('Required parameter folderId was null or undefined when calling getContainsStatus.');
        }

        if (nodeId === null || nodeId === undefined) {
            throw new Error('Required parameter nodeId was null or undefined when calling getContainsStatus.');
        }

        let headers = {...this.defaultHeaders};

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        // const consumes: string[] = [
        // ];
        return this.httpClient.get<ResponseDataBoolean>(`${this.basePath}/internal/folders/${encodeURIComponent(String(folderId))}/nodes/${encodeURIComponent(String(nodeId))}/exists`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
}