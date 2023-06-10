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
import * as Client from './PrimitiveReturnClient'
export { Client };
import type { AxiosRequestConfig } from 'axios';



export function stringUrl(): string {
  let url_ = getBaseUrl() + "/primitive/String";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let stringDefaultOptions: UseQueryOptions<string, unknown, string> = {
  queryFn: __string,
};
export function getStringDefaultOptions(): UseQueryOptions<string, unknown, string> {
  return stringDefaultOptions;
};
export function setStringDefaultOptions(options: UseQueryOptions<string, unknown, string>) {
  stringDefaultOptions = options;
}

export function stringQueryKey(): QueryKey;
export function stringQueryKey(...params: any[]): QueryKey {
  return trimArrayEnd([
      'PrimitiveReturnClient',
      'string',
    ]);
}
function __string() {
  return Client.string(
    );
}

export function useStringQuery<TSelectData = string, TError = unknown>(options?: UseQueryOptions<string, TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useStringQuery<TSelectData = string, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<string, TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  

  options = params[0] as any;
  axiosConfig = params[1] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<string, TError, TSelectData>({
    queryFn: __string,
    queryKey: stringQueryKey(),
    ...stringDefaultOptions as unknown as UseQueryOptions<string, TError, TSelectData>,
    ...options,
  });
}

export function setStringData(queryClient: QueryClient, updater: (data: string | undefined) => string, ) {
  queryClient.setQueryData(stringQueryKey(),
    updater
  );
}

export function setStringDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: string | undefined) => string) {
  queryClient.setQueryData(queryKey, updater);
}
    
export function numberUrl(): string {
  let url_ = getBaseUrl() + "/primitive/Number";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let numberDefaultOptions: UseQueryOptions<number, unknown, number> = {
  queryFn: __number,
};
export function getNumberDefaultOptions(): UseQueryOptions<number, unknown, number> {
  return numberDefaultOptions;
};
export function setNumberDefaultOptions(options: UseQueryOptions<number, unknown, number>) {
  numberDefaultOptions = options;
}

export function numberQueryKey(): QueryKey;
export function numberQueryKey(...params: any[]): QueryKey {
  return trimArrayEnd([
      'PrimitiveReturnClient',
      'number',
    ]);
}
function __number() {
  return Client.number(
    );
}

export function useNumberQuery<TSelectData = number, TError = unknown>(options?: UseQueryOptions<number, TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useNumberQuery<TSelectData = number, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<number, TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  

  options = params[0] as any;
  axiosConfig = params[1] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<number, TError, TSelectData>({
    queryFn: __number,
    queryKey: numberQueryKey(),
    ...numberDefaultOptions as unknown as UseQueryOptions<number, TError, TSelectData>,
    ...options,
  });
}

export function setNumberData(queryClient: QueryClient, updater: (data: number | undefined) => number, ) {
  queryClient.setQueryData(numberQueryKey(),
    updater
  );
}

export function setNumberDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: number | undefined) => number) {
  queryClient.setQueryData(queryKey, updater);
}
    
export function booleanUrl(): string {
  let url_ = getBaseUrl() + "/primitive/Bool";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let booleanDefaultOptions: UseQueryOptions<boolean, unknown, boolean> = {
  queryFn: __boolean,
};
export function getBooleanDefaultOptions(): UseQueryOptions<boolean, unknown, boolean> {
  return booleanDefaultOptions;
};
export function setBooleanDefaultOptions(options: UseQueryOptions<boolean, unknown, boolean>) {
  booleanDefaultOptions = options;
}

export function booleanQueryKey(): QueryKey;
export function booleanQueryKey(...params: any[]): QueryKey {
  return trimArrayEnd([
      'PrimitiveReturnClient',
      'boolean',
    ]);
}
function __boolean() {
  return Client.boolean_(
    );
}

export function useBooleanQuery<TSelectData = boolean, TError = unknown>(options?: UseQueryOptions<boolean, TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useBooleanQuery<TSelectData = boolean, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<boolean, TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  

  options = params[0] as any;
  axiosConfig = params[1] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<boolean, TError, TSelectData>({
    queryFn: __boolean,
    queryKey: booleanQueryKey(),
    ...booleanDefaultOptions as unknown as UseQueryOptions<boolean, TError, TSelectData>,
    ...options,
  });
}

export function setBooleanData(queryClient: QueryClient, updater: (data: boolean | undefined) => boolean, ) {
  queryClient.setQueryData(booleanQueryKey(),
    updater
  );
}

export function setBooleanDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: boolean | undefined) => boolean) {
  queryClient.setQueryData(queryKey, updater);
}
    
export function dateOnlyUrl(): string {
  let url_ = getBaseUrl() + "/primitive/DateOnly";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let dateOnlyDefaultOptions: UseQueryOptions<Date, unknown, Date> = {
  queryFn: __dateOnly,
};
export function getDateOnlyDefaultOptions(): UseQueryOptions<Date, unknown, Date> {
  return dateOnlyDefaultOptions;
};
export function setDateOnlyDefaultOptions(options: UseQueryOptions<Date, unknown, Date>) {
  dateOnlyDefaultOptions = options;
}

export function dateOnlyQueryKey(): QueryKey;
export function dateOnlyQueryKey(...params: any[]): QueryKey {
  return trimArrayEnd([
      'PrimitiveReturnClient',
      'dateOnly',
    ]);
}
function __dateOnly() {
  return Client.dateOnly(
    );
}

export function useDateOnlyQuery<TSelectData = Date, TError = unknown>(options?: UseQueryOptions<Date, TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useDateOnlyQuery<TSelectData = Date, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<Date, TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  

  options = params[0] as any;
  axiosConfig = params[1] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<Date, TError, TSelectData>({
    queryFn: __dateOnly,
    queryKey: dateOnlyQueryKey(),
    ...dateOnlyDefaultOptions as unknown as UseQueryOptions<Date, TError, TSelectData>,
    ...options,
  });
}

export function setDateOnlyData(queryClient: QueryClient, updater: (data: Date | undefined) => Date, ) {
  queryClient.setQueryData(dateOnlyQueryKey(),
    updater
  );
}

export function setDateOnlyDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: Date | undefined) => Date) {
  queryClient.setQueryData(queryKey, updater);
}
    
export function dateTimeUrl(): string {
  let url_ = getBaseUrl() + "/primitive/DateTime";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let dateTimeDefaultOptions: UseQueryOptions<Date, unknown, Date> = {
  queryFn: __dateTime,
};
export function getDateTimeDefaultOptions(): UseQueryOptions<Date, unknown, Date> {
  return dateTimeDefaultOptions;
};
export function setDateTimeDefaultOptions(options: UseQueryOptions<Date, unknown, Date>) {
  dateTimeDefaultOptions = options;
}

export function dateTimeQueryKey(): QueryKey;
export function dateTimeQueryKey(...params: any[]): QueryKey {
  return trimArrayEnd([
      'PrimitiveReturnClient',
      'dateTime',
    ]);
}
function __dateTime() {
  return Client.dateTime(
    );
}

export function useDateTimeQuery<TSelectData = Date, TError = unknown>(options?: UseQueryOptions<Date, TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useDateTimeQuery<TSelectData = Date, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<Date, TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  

  options = params[0] as any;
  axiosConfig = params[1] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<Date, TError, TSelectData>({
    queryFn: __dateTime,
    queryKey: dateTimeQueryKey(),
    ...dateTimeDefaultOptions as unknown as UseQueryOptions<Date, TError, TSelectData>,
    ...options,
  });
}

export function setDateTimeData(queryClient: QueryClient, updater: (data: Date | undefined) => Date, ) {
  queryClient.setQueryData(dateTimeQueryKey(),
    updater
  );
}

export function setDateTimeDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: Date | undefined) => Date) {
  queryClient.setQueryData(queryKey, updater);
}