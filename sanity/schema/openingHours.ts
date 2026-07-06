import { defineField, defineType } from "sanity";

export default defineType({
  name: "openingHours",
  title: "Opening Hours",
  type: "document",
  fields: [
    defineField({ name: "day", title: "Day", type: "string" }),
    defineField({ name: "hours", title: "Hours", type: "string" }),
    defineField({ name: "sortOrder", title: "Sort Order", type: "number" }),
    defineField({ name: "note", title: "Note", type: "text", rows: 2 }),
  ],
});
