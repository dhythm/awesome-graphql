# awesome-graphql
## frontend
```bash
npx create-react-app [APP_NAME] --template typescript
npm install -D typescript @types/node @types/react @types/react-dom @types/jest
```

## backend
```bash
npm install --save apollo-server-express@1 graphql-tools graphql express body-parser
npm i -D typescript ts-node ts-jest @types/node @types/express @types/cors
touch tsconfig.json tsconfig-paths
npm i -D @graphql-codegen/cli @graphql-codegen/typescript
graphql-codegen init
```