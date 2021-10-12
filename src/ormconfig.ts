import { ConnectionOptions } from 'typeorm';

// For usage with .env vars -> npm dotenv, set .env file and proceed as follows:
// import * as dotenv from 'dotenv';
// import * as fs from 'fs';
// const environment = process.env.NODE_ENV || 'development';
// const data: any = dotenv.parse(fs.readFileSync(`${environment}.env`));


const config: ConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'curie-team-db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],

    // We are using migrations, synchronize should be set to false.
    synchronize: false,
    // Set to run migrations automatically....set to false to make it manually
    migrationsRun: true,
    logging: true,
    logger: 'file',
    // Allow both start:prod and start:dev to use migrations
    // __dirname is either dist or src folder, meaning either
    // the compiled js in prod or the ts in dev.
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    cli: {
        // Location of migration should be inside src folder
        // to be compiled into dist/ folder.
        migrationsDir: 'src/migrations',
    },
};

export = config