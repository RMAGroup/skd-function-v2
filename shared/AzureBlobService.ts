import { BlobServiceClient, ContainerClient, BlobClient } from '@azure/storage-blob'
import { ContainerName } from './types'

export class AzureBlobService<ContainerNameType extends string> {
    private blobServicClient: BlobServiceClient
    private connection: string = ''
    /**
     *
     */
    constructor(connection: string) {
        this.connection = connection
        this.blobServicClient = BlobServiceClient.fromConnectionString(connection)    
    }

    public async saveBlob(
        containerName: ContainerNameType,
        blobName: string, 
        fileContent: string
    ): Promise<string> {
        const containerClient = await this.getCreateContainer(containerName)  
        const blockBlobClient = containerClient.getBlockBlobClient(blobName)
        const resp = await blockBlobClient.upload(fileContent, fileContent.length)
        return resp.requestId
    }

    public  deleteBlob(containerName: ContainerNameType, blobName: string) {
        const blobClient = new BlobClient(this.connection, containerName, blobName);
        if (blobClient.exists()) {
            blobClient.delete();
        }
    }
    
    async  getCreateContainer(containerName: ContainerNameType): Promise<ContainerClient> {
        const containerClient = this.blobServicClient.getContainerClient(containerName);
        const containerExists = await containerClient.exists();
        if (!containerExists) {
            await containerClient.create();
        } 
        return containerClient
    }

    async blobExists(
        containerName: ContainerNameType,
        blobName: string
    ): Promise<boolean> {
        const containerClient = await this.getCreateContainer(containerName)  
        for await (const blob of containerClient.listBlobsFlat()) {
            if (blobName === blob.name) {
                return true;
            }
        }
        return false;
    }

}