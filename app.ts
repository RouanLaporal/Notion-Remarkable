
import 'dotenv/config';



// const getUsers = async () => {
// 	const listUsersResponse = await client.users.list({})
//     console.log(listUsersResponse)
//     return listUsersResponse
// }


// const getSpecifiedPage = async (page_id: string) => {
//     const page = await client.pages.retrieve({
//      page_id: page_id
//     });
//     console.log(page);
// };


// const retrieveRemarkableDatabase = async (databaseId: string) => {
//     return await client.databases.retrieve({
//         database_id: databaseId
//     })
// }


// const main = async (remarkableDatabaseId: string)=>  {
//     const listPageId:string[] = []
//     if(!remarkableDatabaseId){
//         const remarkableDatabase = await createRemarkableDatabase();
//         remarkableDatabaseId = remarkableDatabase.id;
//     }
//     const databaseContent = await retrievePageFromDatabase(remarkableDatabaseId);
//     databaseContent.results.forEach((databaseElement) => {
//         if(databaseElement.object == 'page'){
//             listPageId.push(databaseElement.id)
//         }
//     })
//     listPageId.forEach((page_id: string) => {
//         getSpecifiedPage(page_id);
//     })
// }

// main(remarkableDatabaseId);

//personal home id = '1043c30ec17645e7a7c72dbf0ab0f942'
/*const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

(async () => {
  const response = await notion.databases.create({
      parent: {
        type: "page_id",
        page_id: "98ad959b-2b6a-4774-80ee-00246fb0ea9b",
      },
      icon: {
        type: "emoji",
        emoji: "📝",
      },
      cover: {
        type: "external",
        external: {
          url: "https://website.domain/images/image.png",
        },
      },
      title: [
        {
          type: "text",
          text: {
            content: "Grocery List",
            link: null,
          },
        },
      ],
      properties: {
        Name: {
          title: {},
        },
        Description: {
          rich_text: {},
        },
        "In stock": {
          checkbox: {},
        },
        "Food group": {
          select: {
            options: [
              {
                name: "🥦Vegetable",
                color: "green",
              },
              {
                name: "🍎Fruit",
                color: "red",
              },
              {
                name: "💪Protein",
                color: "yellow",
              },
            ],
          },
        },
        Price: {
          number: {
            format: "dollar",
          },
        },
        "Last ordered": {
          date: {},
        },
        Meals: {
          relation: {
            database_id: "668d797c-76fa-4934-9b05-ad288df2d136",
            single_property: {},
          },
        },
        "Number of meals": {
          rollup: {
            rollup_property_name: "Name",
            relation_property_name: "Meals",
            function: "count",
          },
        },
        "Store availability": {
          type: "multi_select",
          multi_select: {
            options: [
              {
                name: "Duc Loi Market",
                color: "blue",
              },
              {
                name: "Rainbow Grocery",
                color: "gray",
              },
              {
                name: "Nijiya Market",
                color: "purple",
              },
              {
                name: "Gus'''s Community Market",
                color: "yellow",
              },
            ],
          },
        },
        "+1": {
          people: {},
        },
        Photo: {
          files: {},
        },
      },
    });
  console.log(response);
})();
*/