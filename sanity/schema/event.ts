import { defineField, defineType } from "sanity";

export default defineType({
  name: "event",
  title: "Event / Offer",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
    defineField({ name: "startDate", title: "Start Date", type: "date" }),
    defineField({ name: "endDate", title: "End Date", type: "date" }),
    defineField({ name: "active", title: "Active", type: "boolean", initialValue: true }),
  ],
});
