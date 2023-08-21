import { Client } from "@notionhq/client";
import { CreateDatabaseResponse, QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

export default class Notion{
    
    private client =  new Client({
        auth: process.env.NOTION_ACCESS_TOKEN,
        notionVersion: '2022-06-28'
    })
    
    private parent = '1043c30ec17645e7a7c72dbf0ab0f942';
    
    private remarkableDatabaseId = '90dbfc0d71e2461da93f60dfab08905f';

     
    public get Getclient() : Client {
        return this.client;
    }
    

    public async createRemarkableDatabase(): Promise<CreateDatabaseResponse>{
        
        const database = await this.client.databases.create({
            parent:{
                type:"page_id",
                page_id:this.parent
            },
            icon: {
                type: "emoji",
                emoji: "📝"
            },
            cover: {
                type: "external",
                external: {
                    url: "https://website.domain/images/image.png"
                }
              },
            title: [
                {
                    type: "text",
                    text: {
                        content: "Remarkable File",
                        link: null
                    }
                }
            ],
            properties: {
                Name: {
                  title: {},
                },
            }
        })
        return database;
    }

    public async retrievePageFromDatabase(database_id: string): Promise<QueryDatabaseResponse>{
        return await this.client.databases.query({
            database_id: database_id
        })
    }
}