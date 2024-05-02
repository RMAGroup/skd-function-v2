import type { CodegenConfig } from '@graphql-codegen/cli'

export const config: CodegenConfig = {
    overwrite: true,
    schema: 'http://0.0.0.0:5100/graphql',
    documents: "Common/graphql/**/*.ts",
    generates: {
        'shared/graphql/generated/graphql.ts': {
            plugins: [
                'typescript',
                'typescript-operations',
            ]
        }
    }
}

export default config