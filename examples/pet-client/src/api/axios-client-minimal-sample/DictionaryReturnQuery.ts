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
import * as Client from './DictionaryReturnClient'
export { Client };
import type { AxiosRequestConfig } from 'axios';



export function stringUrl(): string {
  let url_ = getBaseUrl() + "/dictionary/String";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let stringDefaultOptions: UseQueryOptions<{ [key: string]: string; }, unknown, { [key: string]: string; }> = {
  queryFn: __string,
};
export function getStringDefaultOptions(): UseQueryOptions<{ [key: string]: string; }, unknown, { [key: string]: string; }> {
  return stringDefaultOptions;
};
export function setStringDefaultOptions(options: UseQueryOptions<{ [key: string]: string; }, unknown, { [key: string]: string; }>) {
  stringDefaultOptions = options;
}

export function stringQueryKey(): QueryKey;
export function stringQueryKey(...params: any[]): QueryKey {
  return trimArrayEnd([
      'DictionaryReturnClient',
      'string',
    ]);
}
function __string() {
  return Client.string(
    );
}

export function useStringQuery<TSelectData = { [key: string]: string; }, TError = unknown>(options?: UseQueryOptions<{ [key: string]: string; }, TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useStringQuery<TSelectData = { [key: string]: string; }, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<{ [key: string]: string; }, TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  

  options = params[0] as any;
  axiosConfig = params[1] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<{ [key: string]: string; }, TError, TSelectData>({
    queryFn: __string,
    queryKey: stringQueryKey(),
    ...stringDefaultOptions as unknown as UseQueryOptions<{ [key: string]: string; }, TError, TSelectData>,
    ...options,
  });
}

export function setStringData(queryClient: QueryClient, updater: (data: { [key: string]: string; } | undefined) => { [key: string]: string; }, ) {
  queryClient.setQueryData(stringQueryKey(),
    updater
  );
}

export function setStringDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: { [key: string]: string; } | undefined) => { [key: string]: string; }) {
  queryClient.setQueryData(queryKey, updater);
}
    
export function numberUrl(): string {
  let url_ = getBaseUrl() + "/dictionary/Number";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let numberDefaultOptions: UseQueryOptions<{ [key: string]: number; }, unknown, { [key: string]: number; }> = {
  queryFn: __number,
};
export function getNumberDefaultOptions(): UseQueryOptions<{ [key: string]: number; }, unknown, { [key: string]: number; }> {
  return numberDefaultOptions;
};
export function setNumberDefaultOptions(options: UseQueryOptions<{ [key: string]: number; }, unknown, { [key: string]: number; }>) {
  numberDefaultOptions = options;
}

export function numberQueryKey(): QueryKey;
export function numberQueryKey(...params: any[]): QueryKey {
  return trimArrayEnd([
      'DictionaryReturnClient',
      'number',
    ]);
}
function __number() {
  return Client.number(
    );
}

export function useNumberQuery<TSelectData = { [key: string]: number; }, TError = unknown>(options?: UseQueryOptions<{ [key: string]: number; }, TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useNumberQuery<TSelectData = { [key: string]: number; }, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<{ [key: string]: number; }, TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  

  options = params[0] as any;
  axiosConfig = params[1] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<{ [key: string]: number; }, TError, TSelectData>({
    queryFn: __number,
    queryKey: numberQueryKey(),
    ...numberDefaultOptions as unknown as UseQueryOptions<{ [key: string]: number; }, TError, TSelectData>,
    ...options,
  });
}

export function setNumberData(queryClient: QueryClient, updater: (data: { [key: string]: number; } | undefined) => { [key: string]: number; }, ) {
  queryClient.setQueryData(numberQueryKey(),
    updater
  );
}

export function setNumberDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: { [key: string]: number; } | undefined) => { [key: string]: number; }) {
  queryClient.setQueryData(queryKey, updater);
}
    
export function booleanUrl(): string {
  let url_ = getBaseUrl() + "/dictionary/Bool";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let booleanDefaultOptions: UseQueryOptions<{ [key: string]: boolean; }, unknown, { [key: string]: boolean; }> = {
  queryFn: __boolean,
};
export function getBooleanDefaultOptions(): UseQueryOptions<{ [key: string]: boolean; }, unknown, { [key: string]: boolean; }> {
  return booleanDefaultOptions;
};
export function setBooleanDefaultOptions(options: UseQueryOptions<{ [key: string]: boolean; }, unknown, { [key: string]: boolean; }>) {
  booleanDefaultOptions = options;
}

export function booleanQueryKey(): QueryKey;
export function booleanQueryKey(...params: any[]): QueryKey {
  return trimArrayEnd([
      'DictionaryReturnClient',
      'boolean',
    ]);
}
function __boolean() {
  return Client.boolean_(
    );
}

export function useBooleanQuery<TSelectData = { [key: string]: boolean; }, TError = unknown>(options?: UseQueryOptions<{ [key: string]: boolean; }, TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useBooleanQuery<TSelectData = { [key: string]: boolean; }, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<{ [key: string]: boolean; }, TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  

  options = params[0] as any;
  axiosConfig = params[1] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<{ [key: string]: boolean; }, TError, TSelectData>({
    queryFn: __boolean,
    queryKey: booleanQueryKey(),
    ...booleanDefaultOptions as unknown as UseQueryOptions<{ [key: string]: boolean; }, TError, TSelectData>,
    ...options,
  });
}

export function setBooleanData(queryClient: QueryClient, updater: (data: { [key: string]: boolean; } | undefined) => { [key: string]: boolean; }, ) {
  queryClient.setQueryData(booleanQueryKey(),
    updater
  );
}

export function setBooleanDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: { [key: string]: boolean; } | undefined) => { [key: string]: boolean; }) {
  queryClient.setQueryData(queryKey, updater);
}
    
export function dateOnlyUrl(): string {
  let url_ = getBaseUrl() + "/dictionary/DateOnly";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let dateOnlyDefaultOptions: UseQueryOptions<{ [key: string]: Date; }, unknown, { [key: string]: Date; }> = {
  queryFn: __dateOnly,
};
export function getDateOnlyDefaultOptions(): UseQueryOptions<{ [key: string]: Date; }, unknown, { [key: string]: Date; }> {
  return dateOnlyDefaultOptions;
};
export function setDateOnlyDefaultOptions(options: UseQueryOptions<{ [key: string]: Date; }, unknown, { [key: string]: Date; }>) {
  dateOnlyDefaultOptions = options;
}

export function dateOnlyQueryKey(): QueryKey;
export function dateOnlyQueryKey(...params: any[]): QueryKey {
  return trimArrayEnd([
      'DictionaryReturnClient',
      'dateOnly',
    ]);
}
function __dateOnly() {
  return Client.dateOnly(
    );
}

export function useDateOnlyQuery<TSelectData = { [key: string]: Date; }, TError = unknown>(options?: UseQueryOptions<{ [key: string]: Date; }, TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useDateOnlyQuery<TSelectData = { [key: string]: Date; }, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<{ [key: string]: Date; }, TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  

  options = params[0] as any;
  axiosConfig = params[1] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<{ [key: string]: Date; }, TError, TSelectData>({
    queryFn: __dateOnly,
    queryKey: dateOnlyQueryKey(),
    ...dateOnlyDefaultOptions as unknown as UseQueryOptions<{ [key: string]: Date; }, TError, TSelectData>,
    ...options,
  });
}

export function setDateOnlyData(queryClient: QueryClient, updater: (data: { [key: string]: Date; } | undefined) => { [key: string]: Date; }, ) {
  queryClient.setQueryData(dateOnlyQueryKey(),
    updater
  );
}

export function setDateOnlyDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: { [key: string]: Date; } | undefined) => { [key: string]: Date; }) {
  queryClient.setQueryData(queryKey, updater);
}
    
export function dateTimeUrl(): string {
  let url_ = getBaseUrl() + "/dictionary/DateTime";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let dateTimeDefaultOptions: UseQueryOptions<{ [key: string]: Date; }, unknown, { [key: string]: Date; }> = {
  queryFn: __dateTime,
};
export function getDateTimeDefaultOptions(): UseQueryOptions<{ [key: string]: Date; }, unknown, { [key: string]: Date; }> {
  return dateTimeDefaultOptions;
};
export function setDateTimeDefaultOptions(options: UseQueryOptions<{ [key: string]: Date; }, unknown, { [key: string]: Date; }>) {
  dateTimeDefaultOptions = options;
}

export function dateTimeQueryKey(): QueryKey;
export function dateTimeQueryKey(...params: any[]): QueryKey {
  return trimArrayEnd([
      'DictionaryReturnClient',
      'dateTime',
    ]);
}
function __dateTime() {
  return Client.dateTime(
    );
}

export function useDateTimeQuery<TSelectData = { [key: string]: Date; }, TError = unknown>(options?: UseQueryOptions<{ [key: string]: Date; }, TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useDateTimeQuery<TSelectData = { [key: string]: Date; }, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<{ [key: string]: Date; }, TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  

  options = params[0] as any;
  axiosConfig = params[1] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<{ [key: string]: Date; }, TError, TSelectData>({
    queryFn: __dateTime,
    queryKey: dateTimeQueryKey(),
    ...dateTimeDefaultOptions as unknown as UseQueryOptions<{ [key: string]: Date; }, TError, TSelectData>,
    ...options,
  });
}

export function setDateTimeData(queryClient: QueryClient, updater: (data: { [key: string]: Date; } | undefined) => { [key: string]: Date; }, ) {
  queryClient.setQueryData(dateTimeQueryKey(),
    updater
  );
}

export function setDateTimeDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: { [key: string]: Date; } | undefined) => { [key: string]: Date; }) {
  queryClient.setQueryData(queryKey, updater);
}
    
export function dummyDtoUrl(): string {
  let url_ = getBaseUrl() + "/dictionary/Dummy";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let dummyDtoDefaultOptions: UseQueryOptions<{ [key: string]: Types.DummyDto; }, unknown, { [key: string]: Types.DummyDto; }> = {
  queryFn: __dummyDto,
};
export function getDummyDtoDefaultOptions(): UseQueryOptions<{ [key: string]: Types.DummyDto; }, unknown, { [key: string]: Types.DummyDto; }> {
  return dummyDtoDefaultOptions;
};
export function setDummyDtoDefaultOptions(options: UseQueryOptions<{ [key: string]: Types.DummyDto; }, unknown, { [key: string]: Types.DummyDto; }>) {
  dummyDtoDefaultOptions = options;
}

export function dummyDtoQueryKey(): QueryKey;
export function dummyDtoQueryKey(...params: any[]): QueryKey {
  return trimArrayEnd([
      'DictionaryReturnClient',
      'dummyDto',
    ]);
}
function __dummyDto() {
  return Client.dummyDto(
    );
}

export function useDummyDtoQuery<TSelectData = { [key: string]: Types.DummyDto; }, TError = unknown>(options?: UseQueryOptions<{ [key: string]: Types.DummyDto; }, TError, TSelectData>, axiosConfig?: Partial<AxiosRequestConfig>): UseQueryResult<TSelectData, TError>;
export function useDummyDtoQuery<TSelectData = { [key: string]: Types.DummyDto; }, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<{ [key: string]: Types.DummyDto; }, TError, TSelectData> | undefined = undefined;
  let axiosConfig: AxiosRequestConfig |undefined;
  

  options = params[0] as any;
  axiosConfig = params[1] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  if (axiosConfig) {
    options = options ?? { } as any;
    options!.meta = { ...options!.meta, axiosConfig };
  }

  return useQuery<{ [key: string]: Types.DummyDto; }, TError, TSelectData>({
    queryFn: __dummyDto,
    queryKey: dummyDtoQueryKey(),
    ...dummyDtoDefaultOptions as unknown as UseQueryOptions<{ [key: string]: Types.DummyDto; }, TError, TSelectData>,
    ...options,
  });
}

export function setDummyDtoData(queryClient: QueryClient, updater: (data: { [key: string]: Types.DummyDto; } | undefined) => { [key: string]: Types.DummyDto; }, ) {
  queryClient.setQueryData(dummyDtoQueryKey(),
    updater
  );
}

export function setDummyDtoDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: { [key: string]: Types.DummyDto; } | undefined) => { [key: string]: Types.DummyDto; }) {
  queryClient.setQueryData(queryKey, updater);
}