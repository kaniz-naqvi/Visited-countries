const allowedTables = ["users", "visited_countries", "countries"];
const allowedColumns = [
  "id",
  "username",
  "user_name",
  "email",
  "password",
  "country_code",
  "country_name",
  "user_id",
];

export const validateTable = (table) => {
  if (!allowedTables.includes(table)) {
    throw new Error(`Invalid table name: '${table}'`);
  }
};

export const validateColumns = (columns) => {
  for (let col of columns) {
    if (!allowedColumns.includes(col)) {
      throw new Error(`Invalid column name: '${col}'`);
    }
  }
};
