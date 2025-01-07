# RMA SKD Azure Functions

Handle automated import and export of interface files between Ford and RMA.

## function

- BOM: Import bill of material from flat file
- Shipment: Import shipment detail from flat file
- UpdateKitsToBuildStart: Find kits where at least one component serial has been captured and update the kit status to "Build Start"
- UpdatePartnerStatus: Finds kits where there are KitStatus's that have not be marked as updated and updates the status to "Updated"
- Incoming: distribute incoming blob to appropriate function / blob trigger
- EnsureIncomingFolder: triggered generation of "incoming" container on function startup

## local settings

```json
{
  "IsEncrypted": false,
  "Values": {
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "AzureWebJobsStorage": "UseDevelopmentStorage=true",
    "AzureWebJobsDashboard": "UseDevelopmentStorage=true",
    "ActivityLogTable": "ActivityLog",
    "SkdGraphqlURI": "http://0.0.0.0:5100/graphql"
  }
}
```

With the following content. Change the server GraphQL server endpoint if different.

```json
{
  "IsEncrypted": false,
  "Values": {
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "AzureWebJobsStorage": "UseDevelopmentStorage=true",
    "AzureWebJobsDashboard": "UseDevelopmentStorage=true",
    "ActivityLogTable": "ActivityLog",
    "SkdGraphqlURI": "http://0.0.0.0:5100/graphql",
  }
}
```

## run

- First start `skd-server`
- then run `func start`

## azure storage explorer

- Download [azure storage explorer](https://azure.microsoft.com/en-us/features/storage-explorer/)

## azurite 

This is the azure storage emulator.

### via npm

```bash
npm i -g azurite
~/Documents/azurite
azurite --loose --silent
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

Run act locally
```sh
act -j build-and-deploy -W .github/workflows/main_skd-function-prod.yml
```