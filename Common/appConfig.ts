export interface AppConfig {
    AzureWebJobsStorage: string
    SkdGraphqlURI: string
}

export function getAppConfig(): AppConfig {
    const config: AppConfig = {
        AzureWebJobsStorage: process.env.AzureWebJobsStorage,
        SkdGraphqlURI: process.env.SkdGraphqlURI,
    }

    return config;
}