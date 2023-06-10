//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.19.0.0 (NJsonSchema v11.0.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming
import * as Types from '../axios-client-minimal-sample.types';
import { useQuery, useMutation } from '@tanstack/react-query';
import type { UseQueryResult, QueryFunctionContext, UseQueryOptions, QueryClient, QueryKey, MutationKey, UseMutationOptions, UseMutationResult, QueryMeta, MutationMeta } from '@tanstack/react-query';
import { trimArrayEnd, isParameterObject, getBaseUrl, addMetaToOptions } from './helpers';
import type { QueryMetaContextValue } from 'react-query-swagger';
import { QueryMetaContext } from 'react-query-swagger';
import { useContext } from 'react';
import * as Client from './QueryClient'
export { Client };
import type { AxiosRequestConfig } from 'axios';

export type JsonInQueryQueryQueryParameters = {
  dto?: Types.DummyDto | null | null;
}

export type DateOnlyInQueryQueryQueryParameters = {
  date?: Date | null;
}

export type DateTimeInQueryQueryQueryParameters = {
  date?: Date | null;
}

export type ArrayInQueryQueryQueryParameters = {
  data?: string[] | null | null;
}

export type DictionaryInQueryQueryQueryParameters = {
  data?: { [key: string]: string; } | null | null;
}

export type DictionaryInJsonQueryQueryQueryParameters = {
  data?: { [key: string]: string; } | null | null;
}

export function jsonInQueryUrl(dto?: Types.DummyDto | null | undefined): string {
  let url_ = getBaseUrl() + "/query/JsonInQuery?";
if (dto !== undefined && dto !== null)
{
    const content_ = Types.serializeDummyDto(dto);
    url_ += "dto=" + encodeURIComponent(content_) + "&";
}
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let jsonInQueryDefaultOptions: UseQueryOptions<string, unknown, string> = {
  queryFn: __jsonInQuery,
};
export function getJsonInQueryDefaultOptions(): UseQueryOptions<string, unknown, string> {
  return jsonInQueryDefaultOptions;
};
export function setJsonInQueryDefaultOptions(options: UseQueryOptions<string, unknown, string>) {
  jsonInQueryDefaultOptions = options;
}

export function jsonInQueryQueryKey(dto?: Types.DummyDto | null | undefined): QueryKey;
export function jsonInQueryQueryKey(...params: any[]): QueryKey {
  if (params.length === 1 && isParameterObject(params[0])) {
    const { dto,  } = params[0] as JsonInQueryQueryQueryParameters;

    return trimArrayEnd([
        'QueryClient',
        'jsonInQuery',
        dto as any,
      ]);
  } else {
    return trimArrayEnd([
        'QueryClient',
        'jsonInQuery',
        ...params
      ]);
  }
}
function __jsonInQuery(context: QueryFunctionContext) {
  return Client.jsonInQuery(
      context.queryKey[2] as Types.DummyDto | null | undefined    );
}

export function useJsonInQueryQuery<TSelectData = string, TError = unknown>(dto: JsonInQueryQueryQueryParameters, options?: UseQueryOptions<string, TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;

export function useJsonInQueryQuery<TSelectData = string, TError = unknown>(dto?: Types.DummyDto | null | undefined, options?: UseQueryOptions<string, TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useJsonInQueryQuery<TSelectData = string, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<string, TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  let dto: any = undefined;
  
  if (params.length > 0) {
    if (isParameterObject(params[0])) {
      ({ dto,  } = params[0] as JsonInQueryQueryQueryParameters);
      options = params[1];
      axiosConfig = params[2];
    } else {
      [dto, options, axiosConfig] = params;
    }
  }

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<string, TError, TSelectData>({
    queryFn: __jsonInQuery,
    queryKey: jsonInQueryQueryKey(dto),
    ...jsonInQueryDefaultOptions as unknown as UseQueryOptions<string, TError, TSelectData>,
    ...options,
  });
}

export function setJsonInQueryData(queryClient: QueryClient, updater: (data: string | undefined) => string, dto?: Types.DummyDto | null | undefined) {
  queryClient.setQueryData(jsonInQueryQueryKey(dto),
    updater
  );
}

export function setJsonInQueryDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: string | undefined) => string) {
  queryClient.setQueryData(queryKey, updater);
}
    
export function dateOnlyInQueryUrl(date?: Date | undefined): string {
  let url_ = getBaseUrl() + "/query/DateOnlyInQuery?";
if (date === null)
    throw new Error("The parameter 'date' cannot be null.");
else if (date !== undefined)
    url_ += "date=" + encodeURIComponent(date ? "" + Types.formatDate(date) : "") + "&";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let dateOnlyInQueryDefaultOptions: UseQueryOptions<string, unknown, string> = {
  queryFn: __dateOnlyInQuery,
};
export function getDateOnlyInQueryDefaultOptions(): UseQueryOptions<string, unknown, string> {
  return dateOnlyInQueryDefaultOptions;
};
export function setDateOnlyInQueryDefaultOptions(options: UseQueryOptions<string, unknown, string>) {
  dateOnlyInQueryDefaultOptions = options;
}

export function dateOnlyInQueryQueryKey(date?: Date | undefined): QueryKey;
export function dateOnlyInQueryQueryKey(...params: any[]): QueryKey {
  if (params.length === 1 && isParameterObject(params[0])) {
    const { date,  } = params[0] as DateOnlyInQueryQueryQueryParameters;

    return trimArrayEnd([
        'QueryClient',
        'dateOnlyInQuery',
        date as any,
      ]);
  } else {
    return trimArrayEnd([
        'QueryClient',
        'dateOnlyInQuery',
        ...params
      ]);
  }
}
function __dateOnlyInQuery(context: QueryFunctionContext) {
  return Client.dateOnlyInQuery(
      context.queryKey[2] as Date | undefined    );
}

export function useDateOnlyInQueryQuery<TSelectData = string, TError = unknown>(dto: DateOnlyInQueryQueryQueryParameters, options?: UseQueryOptions<string, TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;

export function useDateOnlyInQueryQuery<TSelectData = string, TError = unknown>(date?: Date | undefined, options?: UseQueryOptions<string, TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useDateOnlyInQueryQuery<TSelectData = string, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<string, TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  let date: any = undefined;
  
  if (params.length > 0) {
    if (isParameterObject(params[0])) {
      ({ date,  } = params[0] as DateOnlyInQueryQueryQueryParameters);
      options = params[1];
      axiosConfig = params[2];
    } else {
      [date, options, axiosConfig] = params;
    }
  }

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<string, TError, TSelectData>({
    queryFn: __dateOnlyInQuery,
    queryKey: dateOnlyInQueryQueryKey(date),
    ...dateOnlyInQueryDefaultOptions as unknown as UseQueryOptions<string, TError, TSelectData>,
    ...options,
  });
}

export function setDateOnlyInQueryData(queryClient: QueryClient, updater: (data: string | undefined) => string, date?: Date | undefined) {
  queryClient.setQueryData(dateOnlyInQueryQueryKey(date),
    updater
  );
}

export function setDateOnlyInQueryDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: string | undefined) => string) {
  queryClient.setQueryData(queryKey, updater);
}
    
export function dateTimeInQueryUrl(date?: Date | undefined): string {
  let url_ = getBaseUrl() + "/query/DateTimeInQuery?";
if (date === null)
    throw new Error("The parameter 'date' cannot be null.");
else if (date !== undefined)
    url_ += "date=" + encodeURIComponent(date ? "" + date.toISOString() : "") + "&";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let dateTimeInQueryDefaultOptions: UseQueryOptions<string, unknown, string> = {
  queryFn: __dateTimeInQuery,
};
export function getDateTimeInQueryDefaultOptions(): UseQueryOptions<string, unknown, string> {
  return dateTimeInQueryDefaultOptions;
};
export function setDateTimeInQueryDefaultOptions(options: UseQueryOptions<string, unknown, string>) {
  dateTimeInQueryDefaultOptions = options;
}

export function dateTimeInQueryQueryKey(date?: Date | undefined): QueryKey;
export function dateTimeInQueryQueryKey(...params: any[]): QueryKey {
  if (params.length === 1 && isParameterObject(params[0])) {
    const { date,  } = params[0] as DateTimeInQueryQueryQueryParameters;

    return trimArrayEnd([
        'QueryClient',
        'dateTimeInQuery',
        date as any,
      ]);
  } else {
    return trimArrayEnd([
        'QueryClient',
        'dateTimeInQuery',
        ...params
      ]);
  }
}
function __dateTimeInQuery(context: QueryFunctionContext) {
  return Client.dateTimeInQuery(
      context.queryKey[2] as Date | undefined    );
}

export function useDateTimeInQueryQuery<TSelectData = string, TError = unknown>(dto: DateTimeInQueryQueryQueryParameters, options?: UseQueryOptions<string, TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;

export function useDateTimeInQueryQuery<TSelectData = string, TError = unknown>(date?: Date | undefined, options?: UseQueryOptions<string, TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useDateTimeInQueryQuery<TSelectData = string, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<string, TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  let date: any = undefined;
  
  if (params.length > 0) {
    if (isParameterObject(params[0])) {
      ({ date,  } = params[0] as DateTimeInQueryQueryQueryParameters);
      options = params[1];
      axiosConfig = params[2];
    } else {
      [date, options, axiosConfig] = params;
    }
  }

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<string, TError, TSelectData>({
    queryFn: __dateTimeInQuery,
    queryKey: dateTimeInQueryQueryKey(date),
    ...dateTimeInQueryDefaultOptions as unknown as UseQueryOptions<string, TError, TSelectData>,
    ...options,
  });
}

export function setDateTimeInQueryData(queryClient: QueryClient, updater: (data: string | undefined) => string, date?: Date | undefined) {
  queryClient.setQueryData(dateTimeInQueryQueryKey(date),
    updater
  );
}

export function setDateTimeInQueryDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: string | undefined) => string) {
  queryClient.setQueryData(queryKey, updater);
}
    
export function arrayInQueryUrl(data?: string[] | null | undefined): string {
  let url_ = getBaseUrl() + "/query/ArrayInQuery?";
if (data !== undefined && data !== null)
    data && data.forEach(item => { url_ += "data=" + encodeURIComponent("" + item) + "&"; });
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let arrayInQueryDefaultOptions: UseQueryOptions<string[], unknown, string[]> = {
  queryFn: __arrayInQuery,
};
export function getArrayInQueryDefaultOptions(): UseQueryOptions<string[], unknown, string[]> {
  return arrayInQueryDefaultOptions;
};
export function setArrayInQueryDefaultOptions(options: UseQueryOptions<string[], unknown, string[]>) {
  arrayInQueryDefaultOptions = options;
}

export function arrayInQueryQueryKey(data?: string[] | null | undefined): QueryKey;
export function arrayInQueryQueryKey(...params: any[]): QueryKey {
  if (params.length === 1 && isParameterObject(params[0])) {
    const { data,  } = params[0] as ArrayInQueryQueryQueryParameters;

    return trimArrayEnd([
        'QueryClient',
        'arrayInQuery',
        data as any,
      ]);
  } else {
    return trimArrayEnd([
        'QueryClient',
        'arrayInQuery',
        ...params
      ]);
  }
}
function __arrayInQuery(context: QueryFunctionContext) {
  return Client.arrayInQuery(
      context.queryKey[2] as string[] | null | undefined    );
}

export function useArrayInQueryQuery<TSelectData = string[], TError = unknown>(dto: ArrayInQueryQueryQueryParameters, options?: UseQueryOptions<string[], TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;

export function useArrayInQueryQuery<TSelectData = string[], TError = unknown>(data?: string[] | null | undefined, options?: UseQueryOptions<string[], TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useArrayInQueryQuery<TSelectData = string[], TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<string[], TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  let data: any = undefined;
  
  if (params.length > 0) {
    if (isParameterObject(params[0])) {
      ({ data,  } = params[0] as ArrayInQueryQueryQueryParameters);
      options = params[1];
      axiosConfig = params[2];
    } else {
      [data, options, axiosConfig] = params;
    }
  }

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<string[], TError, TSelectData>({
    queryFn: __arrayInQuery,
    queryKey: arrayInQueryQueryKey(data),
    ...arrayInQueryDefaultOptions as unknown as UseQueryOptions<string[], TError, TSelectData>,
    ...options,
  });
}

export function setArrayInQueryData(queryClient: QueryClient, updater: (data: string[] | undefined) => string[], data?: string[] | null | undefined) {
  queryClient.setQueryData(arrayInQueryQueryKey(data),
    updater
  );
}

export function setArrayInQueryDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: string[] | undefined) => string[]) {
  queryClient.setQueryData(queryKey, updater);
}
    
export function dictionaryInQueryUrl(data?: { [key: string]: string; } | null | undefined): string {
  let url_ = getBaseUrl() + "/query/DictionaryInQuery?";
if (data !== undefined && data !== null)
    data && Object.keys(data).forEach(key => { url_ += encodeURIComponent(key) +"=" + encodeURIComponent("" + data[key]) + "&"; });
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let dictionaryInQueryDefaultOptions: UseQueryOptions<{ [key: string]: string; }, unknown, { [key: string]: string; }> = {
  queryFn: __dictionaryInQuery,
};
export function getDictionaryInQueryDefaultOptions(): UseQueryOptions<{ [key: string]: string; }, unknown, { [key: string]: string; }> {
  return dictionaryInQueryDefaultOptions;
};
export function setDictionaryInQueryDefaultOptions(options: UseQueryOptions<{ [key: string]: string; }, unknown, { [key: string]: string; }>) {
  dictionaryInQueryDefaultOptions = options;
}

export function dictionaryInQueryQueryKey(data?: { [key: string]: string; } | null | undefined): QueryKey;
export function dictionaryInQueryQueryKey(...params: any[]): QueryKey {
  if (params.length === 1 && isParameterObject(params[0])) {
    const { data,  } = params[0] as DictionaryInQueryQueryQueryParameters;

    return trimArrayEnd([
        'QueryClient',
        'dictionaryInQuery',
        data as any,
      ]);
  } else {
    return trimArrayEnd([
        'QueryClient',
        'dictionaryInQuery',
        ...params
      ]);
  }
}
function __dictionaryInQuery(context: QueryFunctionContext) {
  return Client.dictionaryInQuery(
      context.queryKey[2] as { [key: string]: string; } | null | undefined    );
}

export function useDictionaryInQueryQuery<TSelectData = { [key: string]: string; }, TError = unknown>(dto: DictionaryInQueryQueryQueryParameters, options?: UseQueryOptions<{ [key: string]: string; }, TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;

export function useDictionaryInQueryQuery<TSelectData = { [key: string]: string; }, TError = unknown>(data?: { [key: string]: string; } | null | undefined, options?: UseQueryOptions<{ [key: string]: string; }, TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useDictionaryInQueryQuery<TSelectData = { [key: string]: string; }, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<{ [key: string]: string; }, TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  let data: any = undefined;
  
  if (params.length > 0) {
    if (isParameterObject(params[0])) {
      ({ data,  } = params[0] as DictionaryInQueryQueryQueryParameters);
      options = params[1];
      axiosConfig = params[2];
    } else {
      [data, options, axiosConfig] = params;
    }
  }

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<{ [key: string]: string; }, TError, TSelectData>({
    queryFn: __dictionaryInQuery,
    queryKey: dictionaryInQueryQueryKey(data),
    ...dictionaryInQueryDefaultOptions as unknown as UseQueryOptions<{ [key: string]: string; }, TError, TSelectData>,
    ...options,
  });
}

export function setDictionaryInQueryData(queryClient: QueryClient, updater: (data: { [key: string]: string; } | undefined) => { [key: string]: string; }, data?: { [key: string]: string; } | null | undefined) {
  queryClient.setQueryData(dictionaryInQueryQueryKey(data),
    updater
  );
}

export function setDictionaryInQueryDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: { [key: string]: string; } | undefined) => { [key: string]: string; }) {
  queryClient.setQueryData(queryKey, updater);
}
    
export function dictionaryInJsonQueryUrl(data?: { [key: string]: string; } | null | undefined): string {
  let url_ = getBaseUrl() + "/query/DictionaryInJsonQuery?";
if (data !== undefined && data !== null)
{
    const content_ = JSON.stringify(data);
    url_ += "data=" + encodeURIComponent(content_) + "&";
}
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let dictionaryInJsonQueryDefaultOptions: UseQueryOptions<{ [key: string]: string; }, unknown, { [key: string]: string; }> = {
  queryFn: __dictionaryInJsonQuery,
};
export function getDictionaryInJsonQueryDefaultOptions(): UseQueryOptions<{ [key: string]: string; }, unknown, { [key: string]: string; }> {
  return dictionaryInJsonQueryDefaultOptions;
};
export function setDictionaryInJsonQueryDefaultOptions(options: UseQueryOptions<{ [key: string]: string; }, unknown, { [key: string]: string; }>) {
  dictionaryInJsonQueryDefaultOptions = options;
}

export function dictionaryInJsonQueryQueryKey(data?: { [key: string]: string; } | null | undefined): QueryKey;
export function dictionaryInJsonQueryQueryKey(...params: any[]): QueryKey {
  if (params.length === 1 && isParameterObject(params[0])) {
    const { data,  } = params[0] as DictionaryInJsonQueryQueryQueryParameters;

    return trimArrayEnd([
        'QueryClient',
        'dictionaryInJsonQuery',
        data as any,
      ]);
  } else {
    return trimArrayEnd([
        'QueryClient',
        'dictionaryInJsonQuery',
        ...params
      ]);
  }
}
function __dictionaryInJsonQuery(context: QueryFunctionContext) {
  return Client.dictionaryInJsonQuery(
      context.queryKey[2] as { [key: string]: string; } | null | undefined    );
}

export function useDictionaryInJsonQueryQuery<TSelectData = { [key: string]: string; }, TError = unknown>(dto: DictionaryInJsonQueryQueryQueryParameters, options?: UseQueryOptions<{ [key: string]: string; }, TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;

export function useDictionaryInJsonQueryQuery<TSelectData = { [key: string]: string; }, TError = unknown>(data?: { [key: string]: string; } | null | undefined, options?: UseQueryOptions<{ [key: string]: string; }, TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useDictionaryInJsonQueryQuery<TSelectData = { [key: string]: string; }, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<{ [key: string]: string; }, TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  let data: any = undefined;
  
  if (params.length > 0) {
    if (isParameterObject(params[0])) {
      ({ data,  } = params[0] as DictionaryInJsonQueryQueryQueryParameters);
      options = params[1];
      axiosConfig = params[2];
    } else {
      [data, options, axiosConfig] = params;
    }
  }

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<{ [key: string]: string; }, TError, TSelectData>({
    queryFn: __dictionaryInJsonQuery,
    queryKey: dictionaryInJsonQueryQueryKey(data),
    ...dictionaryInJsonQueryDefaultOptions as unknown as UseQueryOptions<{ [key: string]: string; }, TError, TSelectData>,
    ...options,
  });
}

export function setDictionaryInJsonQueryData(queryClient: QueryClient, updater: (data: { [key: string]: string; } | undefined) => { [key: string]: string; }, data?: { [key: string]: string; } | null | undefined) {
  queryClient.setQueryData(dictionaryInJsonQueryQueryKey(data),
    updater
  );
}

export function setDictionaryInJsonQueryDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: { [key: string]: string; } | undefined) => { [key: string]: string; }) {
  queryClient.setQueryData(queryKey, updater);
}