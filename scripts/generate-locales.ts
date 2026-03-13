import fs from "fs";
import path from "path";

const locales = fs
  .readdirSync(path.join(process.cwd(), "locale"))
  .filter((f) => f.endsWith(".ts"))
  .map((f) => f.replace(".ts", ""));

fs.mkdirSync(path.join(process.cwd(), "src/generated"), { recursive: true });

fs.writeFileSync(
  path.join(process.cwd(), "src/generated/locales.json"),
  JSON.stringify(locales)
);
