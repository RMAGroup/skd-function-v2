import { TableClient, TableEntity } from "@azure/data-tables";

export class AzureTableService {
    connection: string
    constructor(connection: string) {
        this.connection = connection
    }

    public async saveTableEntity<T extends TableEntity>(tableName: string, entity: T) {
        const tableClient = await this.getTableClient(tableName);
        await tableClient.createEntity(entity)
    }

    public async getTableClient(tableName: string): Promise<TableClient> {
        const client = TableClient.fromConnectionString(
            this.connection,
            tableName,
            {
                allowInsecureConnection: true
            }
        );
        await client.createTable();
        return client;
    }

    public genDateOffsetRowKey() {
        let offset = this.getMaxDateOffset()
        let rowKey = offset.toString().padStart(16, '0')
        return rowKey
    }

    public getMaxDateOffset() {
        const max = 8_640_000_000_000_000
        const current = new Date().getTime()
        return max - current;
    }
}

