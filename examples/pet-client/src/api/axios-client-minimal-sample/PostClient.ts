//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.19.0.0 (NJsonSchema v11.0.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming
import * as Types from '../axios-client-minimal-sample.types';
import type { AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';

import { throwException, isAxiosError } from '../axios-client-minimal-sample.types';
import { getAxios, getBaseUrl } from './helpers';

export function idInUrl(id: number, dto: Types.DummyDto, config?: AxiosRequestConfig | undefined): Promise<string> {
    let url_ = getBaseUrl() + "/post/user/{id}";
    if (id === undefined || id === null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace("{id}", encodeURIComponent("" + id));
      url_ = url_.replace(/[?&]$/, "");

    const content_ = Types.serializeDummyDto(dto);

    let options_: AxiosRequestConfig = {
        ..._requestConfigIdInUrl,
        ...config,
        data: content_,
        method: "POST",
        url: url_,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processIdInUrl(_response);
    });
}

function processIdInUrl(response: AxiosResponse): Promise<string> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 200) {
        const _responseText = response.data;
        let result200: any = null;
        let resultData200  = _responseText;
    
        result200 = resultData200;
    
        return Promise.resolve<string>(result200);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<string>(null as any);
}

export function noParameterNoBody(config?: AxiosRequestConfig | undefined): Promise<string> {
    let url_ = getBaseUrl() + "/post/no-parameter/no-body";
      url_ = url_.replace(/[?&]$/, "");

    let options_: AxiosRequestConfig = {
        ..._requestConfigNoParameterNoBody,
        ...config,
        method: "POST",
        url: url_,
        headers: {
            "Accept": "application/json"
        }
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processNoParameterNoBody(_response);
    });
}

function processNoParameterNoBody(response: AxiosResponse): Promise<string> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 200) {
        const _responseText = response.data;
        let result200: any = null;
        let resultData200  = _responseText;
    
        result200 = resultData200;
    
        return Promise.resolve<string>(result200);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<string>(null as any);
}

export function simpleBody(body: string, config?: AxiosRequestConfig | undefined): Promise<string> {
    let url_ = getBaseUrl() + "/post/no-parameter/simple-body";
      url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: AxiosRequestConfig = {
        ..._requestConfigSimpleBody,
        ...config,
        data: content_,
        method: "POST",
        url: url_,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processSimpleBody(_response);
    });
}

function processSimpleBody(response: AxiosResponse): Promise<string> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 200) {
        const _responseText = response.data;
        let result200: any = null;
        let resultData200  = _responseText;
    
        result200 = resultData200;
    
        return Promise.resolve<string>(result200);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<string>(null as any);
}

export function parameterInUrlNoBody(id: string | null, config?: AxiosRequestConfig | undefined): Promise<string> {
    let url_ = getBaseUrl() + "/post/with-parameter/{id}/no-body";
    if (id === undefined || id === null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace("{id}", encodeURIComponent("" + id));
      url_ = url_.replace(/[?&]$/, "");

    let options_: AxiosRequestConfig = {
        ..._requestConfigParameterInUrlNoBody,
        ...config,
        method: "POST",
        url: url_,
        headers: {
            "Accept": "application/json"
        }
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processParameterInUrlNoBody(_response);
    });
}

function processParameterInUrlNoBody(response: AxiosResponse): Promise<string> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 200) {
        const _responseText = response.data;
        let result200: any = null;
        let resultData200  = _responseText;
    
        result200 = resultData200;
    
        return Promise.resolve<string>(result200);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<string>(null as any);
}

export function simpleBodyWithParameter(id: number, body: string, config?: AxiosRequestConfig | undefined): Promise<string> {
    let url_ = getBaseUrl() + "/post/with-parameter/{id}/simple-body";
    if (id === undefined || id === null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace("{id}", encodeURIComponent("" + id));
      url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: AxiosRequestConfig = {
        ..._requestConfigSimpleBodyWithParameter,
        ...config,
        data: content_,
        method: "POST",
        url: url_,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processSimpleBodyWithParameter(_response);
    });
}

function processSimpleBodyWithParameter(response: AxiosResponse): Promise<string> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 200) {
        const _responseText = response.data;
        let result200: any = null;
        let resultData200  = _responseText;
    
        result200 = resultData200;
    
        return Promise.resolve<string>(result200);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<string>(null as any);
}

export function simpleArrayBodyWithParameter(id: number, body: string[], config?: AxiosRequestConfig | undefined): Promise<string> {
    let url_ = getBaseUrl() + "/post/with-parameter/{id}/simple-array-body";
    if (id === undefined || id === null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace("{id}", encodeURIComponent("" + id));
      url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(body);

    let options_: AxiosRequestConfig = {
        ..._requestConfigSimpleArrayBodyWithParameter,
        ...config,
        data: content_,
        method: "POST",
        url: url_,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    };

    return getAxios().request(options_).catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
            return _error.response;
        } else {
            throw _error;
        }
    }).then((_response: AxiosResponse) => {
        return processSimpleArrayBodyWithParameter(_response);
    });
}

function processSimpleArrayBodyWithParameter(response: AxiosResponse): Promise<string> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && typeof response.headers === "object") {
        for (let k in response.headers) {
            if (response.headers.hasOwnProperty(k)) {
                _headers[k] = response.headers[k];
            }
        }
    }
    if (status === 200) {
        const _responseText = response.data;
        let result200: any = null;
        let resultData200  = _responseText;
    
        result200 = resultData200;
    
        return Promise.resolve<string>(result200);

    } else if (status !== 200 && status !== 204) {
        const _responseText = response.data;
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
    }
    return Promise.resolve<string>(null as any);
}
let _requestConfigIdInUrl: Partial<AxiosRequestConfig> | null;
export function getIdInUrlRequestConfig() {
  return _requestConfigIdInUrl;
}
export function setIdInUrlRequestConfig(value: Partial<AxiosRequestConfig>) {
  _requestConfigIdInUrl = value;
}
export function patchIdInUrlRequestConfig(patch: (value: Partial<AxiosRequestConfig>) => Partial<AxiosRequestConfig>) {
  _requestConfigIdInUrl = patch(_requestConfigIdInUrl ?? {});
}

let _requestConfigNoParameterNoBody: Partial<AxiosRequestConfig> | null;
export function getNoParameterNoBodyRequestConfig() {
  return _requestConfigNoParameterNoBody;
}
export function setNoParameterNoBodyRequestConfig(value: Partial<AxiosRequestConfig>) {
  _requestConfigNoParameterNoBody = value;
}
export function patchNoParameterNoBodyRequestConfig(patch: (value: Partial<AxiosRequestConfig>) => Partial<AxiosRequestConfig>) {
  _requestConfigNoParameterNoBody = patch(_requestConfigNoParameterNoBody ?? {});
}

let _requestConfigSimpleBody: Partial<AxiosRequestConfig> | null;
export function getSimpleBodyRequestConfig() {
  return _requestConfigSimpleBody;
}
export function setSimpleBodyRequestConfig(value: Partial<AxiosRequestConfig>) {
  _requestConfigSimpleBody = value;
}
export function patchSimpleBodyRequestConfig(patch: (value: Partial<AxiosRequestConfig>) => Partial<AxiosRequestConfig>) {
  _requestConfigSimpleBody = patch(_requestConfigSimpleBody ?? {});
}

let _requestConfigParameterInUrlNoBody: Partial<AxiosRequestConfig> | null;
export function getParameterInUrlNoBodyRequestConfig() {
  return _requestConfigParameterInUrlNoBody;
}
export function setParameterInUrlNoBodyRequestConfig(value: Partial<AxiosRequestConfig>) {
  _requestConfigParameterInUrlNoBody = value;
}
export function patchParameterInUrlNoBodyRequestConfig(patch: (value: Partial<AxiosRequestConfig>) => Partial<AxiosRequestConfig>) {
  _requestConfigParameterInUrlNoBody = patch(_requestConfigParameterInUrlNoBody ?? {});
}

let _requestConfigSimpleBodyWithParameter: Partial<AxiosRequestConfig> | null;
export function getSimpleBodyWithParameterRequestConfig() {
  return _requestConfigSimpleBodyWithParameter;
}
export function setSimpleBodyWithParameterRequestConfig(value: Partial<AxiosRequestConfig>) {
  _requestConfigSimpleBodyWithParameter = value;
}
export function patchSimpleBodyWithParameterRequestConfig(patch: (value: Partial<AxiosRequestConfig>) => Partial<AxiosRequestConfig>) {
  _requestConfigSimpleBodyWithParameter = patch(_requestConfigSimpleBodyWithParameter ?? {});
}

let _requestConfigSimpleArrayBodyWithParameter: Partial<AxiosRequestConfig> | null;
export function getSimpleArrayBodyWithParameterRequestConfig() {
  return _requestConfigSimpleArrayBodyWithParameter;
}
export function setSimpleArrayBodyWithParameterRequestConfig(value: Partial<AxiosRequestConfig>) {
  _requestConfigSimpleArrayBodyWithParameter = value;
}
export function patchSimpleArrayBodyWithParameterRequestConfig(patch: (value: Partial<AxiosRequestConfig>) => Partial<AxiosRequestConfig>) {
  _requestConfigSimpleArrayBodyWithParameter = patch(_requestConfigSimpleArrayBodyWithParameter ?? {});
}