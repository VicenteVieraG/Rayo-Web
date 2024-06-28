import { defineDb, defineTable, column } from "astro:db";

const WaitList = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        mail: column.text()
    }
});

export default defineDb({
    tables: { WaitList }
});
