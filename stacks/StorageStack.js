import * as sst from "serverless-stack/resources";


export default class StorageStack extends sst.Stack {
    // Public reference to table
    table;

    constructor(scope, id, props) {
        super(scope, id, props);

        // Create the DynamoDB Table
        this.table = new sst.Table(this, "Notes", {
            fields: {
                userId: sst.TableFieldType.STRING,
                noteID: sst.TableFieldType.STRING
            },
            primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
        });
    }
}


