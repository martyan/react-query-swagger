# react-query-swagger
This projects autogenerates [react-query](https://react-query.tanstack.com) hooks based on Swagger API definitions.
So, given that you have a [petstore-like API definition](https://petstore.swagger.io/), you could autogenerate a list of [react-query hooks](https://github.com/Shaddix/nswag-react-query/blob/master/examples/pet-client/src/api/axios-client.ts#L1151), to call GET methods from the API (queries). Mutations (POST/PUT/PATCH/DELETE methods) are not yet supported.


****This library requires, [dotnet runtime](https://dotnet.microsoft.com/download/dotnet/2.1) (2.1) installed on your machine! If you have .NET Core 3+ or 5+ you'll need to add a switch (e.g. /runtime:Net50) to all commands.****

## How to add
Install the package into your project using yarn/npm (as a dev-dependency). You'll also need to add react-query (which you probably already have if you are interested in this library).
```
yarn add -D react-query-swagger
```
Then create/update your autogenerated hooks by calling (adjusting the URL and output path)
```
yarn react-query-swagger /input:https://petstore.swagger.io/v2/swagger.json /output:src/api/axios-client.ts /template:Axios
```
This will generate API clients based on Axios. If you prefer `fetch`, just use it as a template (mind the last parameter)
```
yarn react-query-swagger /input:https://petstore.swagger.io/v2/swagger.json /output:src/api/axios-client.ts /template:Fetch
```
You will probably want to add this script to your package.json to call it every time your API changes.

All parameters are passed to NSwag, you could read about them [in NSwag documentation](https://github.com/RicoSuter/NJsonSchema/wiki/TypeScriptGeneratorSettings).
Personally I tend to use it with few additional parameters:
```
yarn react-query-swagger /input:https://petstore.swagger.io/v2/swagger.json /output:src/api/axios-client.ts /template:Axios /serviceHost:. /generateConstructorInterface:true /markOptionalProperties:true /generateOptionalParameters:true /nullValue:undefined
```

## How to use

You could check a [pet-client example](https://github.com/Shaddix/react-query-swagger/tree/master/examples/pet-client), which shows the list of pets.
It's a standard react-query setup, to query some pet data you just need to write:
```
  const petsQuery = AxiosQuery.ClientQuery.useFindPetsByStatusQuery([
    Status.Available,
    Status.Pending,
    Status.Sold,
  ]);
```
## Configuration
##### setBaseUrl(baseUrl: string)
Sets base URL for all queries

##### setAxiosFactory(factory: () => AxiosInstance)
Sets the function which returns Axios instance to be used in http request.
By default `axios.create()` is called for every http request 
(this method only exists if you generated client using Axios template).

##### setFetchFactory(factory: () => { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> })
Sets the function to return the `fetch`function to be used in http request.
By default `window` is returned, which contains the default `fetch` function.
This method only exists if you used Fetch template.

## How to configure queries
You could define additional `UseQueryOptions` for each query by setting `*queryName*DefaultOptions`
```
AxiosQuery.ClientQuery.findPetsByStatusDefaultOptions = {
  cacheTime: 10000
}
```


### QueryMetaProvider
Injects `meta` option to all queries in children components. Might be useful if e.g. you want to refetch all queries in certain part of your app.

First wrap your component in `QueryMetaProvider` and specify your meta tags (make sure they are constant):
```
<QueryMetaProvider meta={headerMeta}>
    { /* Your app components (e.g. AppHeader */ }
</QueryMetaProvider>

const headerMeta = { region: 'header' }
```

You could refetch based on meta via the following call:
```
queryClient.refetchQueries({ predicate: (query) => ((query as any).observers as QueryObserver[]).find((observer) => observer.options.meta?.region === 'header') })
```


## How does it work
Under the cover it's just 2 template files for [NSwag](https://github.com/RicoSuter/NSwag) and a small script to easily use them.

## Contributions and support
Issues and Pull Requests are welcome.

For any kind of private consulting or support you could contact [Artur Drobinskiy](https://github.com/Shaddix) directly via email.
