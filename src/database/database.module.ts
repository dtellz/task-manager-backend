import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import * as ormcofig from '../ormconfig'

@Module({
    imports: [TypeOrmModule.forRoot(ormcofig)]
})
export class DatabaseModule { }
