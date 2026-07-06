import { defineField, defineType } from "sanity";

export default defineType({
  name: "menuSection",
  title: "Menu Section",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "tab",
      title: "Menu Tab",
      type: "string",
      options: {
        list: [
          { title: "Food", value: "food" },
          { title: "Desserts", value: "desserts" },
          { title: "Wine", value: "wine" },
          { title: "Drinks", value: "drinks" },
        ],
      },
    }),
    defineField({ name: "note", title: "Section Note", type: "text", rows: 2 }),
    defineField({ name: "sortOrder", title: "Sort Order", type: "number" }),
  ],
});
