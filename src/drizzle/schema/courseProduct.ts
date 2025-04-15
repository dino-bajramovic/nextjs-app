import { pgTable, uuid } from "drizzle-orm/pg-core";
import { CourseTable } from "./course";
import { ProductTable } from "./product";
import { primaryKey } from "drizzle-orm/gel-core";

export const CourseProductTable = pgTable("course_products", {
  courseId: uuid()
    .notNull()
    .references(() => CourseTable.id, { onDelete: "restrict" }),
  productId: uuid()
    .notNull()
    .references(() => ProductTable.id, { onDelete: "cascade" }),
    createdAt,
    updatedAt,
}, t => [primaryKey({columns: [t.courseId, t.productId]})]);

