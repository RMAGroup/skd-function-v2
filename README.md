# RMA SKD Azure Functions

Handle automated import and export of interface files between Ford and RMA.

## function

- BOM: Import bill of material from flat file
- Shipment: Import shipment detail from flat file
- VIN: Import VIN numbers from flat file
- Incoming: distribute incoming blob to appropriate function / blob trigger
- GenPartnerStatus: triggerd generation of kit snapshot and partner status flat files
- EnsureIncomingFolder: triggered generation of "incoming" container on function startup

## local settings

create `local.setting.json`

```
touch local.settings.json
```

With the following content. Change the server grapgql server endpoint if different.

```json
{
  "IsEncrypted": false,
  "Values": {
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "AzureWebJobsStorage": "UseDevelopmentStorage=true",
    "AzureWebJobsDashboard": "UseDevelopmentStorage=true",
    "ActivityLogTable": "ActivityLog",
    "SkdGraphqlURI": "http://0.0.0.0:5100/graphql",
    "EnginComponentCode": "EN"
  }
}
```

## run

- First start `skd-server` and it's assocated sql database
- then run `func start`

## azure storage explorer


- Download [azure storage explorer](https://azure.microsoft.com/en-us/features/storage-explorer/)

## azurite 

This is the azure storage emulator.

### via npm

```bash
npm i -g azurite
azurite --loose
```

### azurite storage emulator

```bash
docker run -d \
  -p 10000:10000 \
  -p 10001:10001 \
  -v azurite:/data \
  --name azurite \
  mcr.microsoft.com/azure-storage/azurite
```
