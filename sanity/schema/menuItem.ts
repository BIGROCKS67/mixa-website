import { defineField, defineType } from "sanity";

export default defineType({
  name: "menuItem",
  title: "Menu Item",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "price", title: "Price", type: "string" }),
    defineField({ name: "allergens", title: "Allergens", type: "string" }),
    defineField({
      name: "section",
      title: "Section",
      type: "reference",
      to: [{ type: "menuSection" }],
    }),
    defineField({ name: "sortOrder", title: "Sort Order", type: "number" }),
    defineField({ name: "featured", title: "Featured on Homepage", type: "boolean" }),
  ],
});
