/** Generate static English pages from the shared Spanish source and dictionary. */
import ts from "typescript";
import fs from "node:fs";
import path from "node:path";
const dictionary = JSON.parse(fs.readFileSync("src/i18n/en.json", "utf8"));
const routes = new Set([
  "/",
  "/soluciones/",
  "/industrias/",
  "/nosotros/",
  "/contacto/",
  "/industrias/restaurantes/",
  "/industrias/warehouse/",
  "/ia-y-automatizacion/",
  "/marketing-digital/",
  "/software-a-medida/",
  "/redes-e-infraestructura/",
  "/seguridad-y-control/",
  "/soporte-it/",
]);
function translate(text) {
  if (Object.hasOwn(dictionary, text)) return dictionary[text];
  const clean = text.replace(/\s+/g, " ").trim();
  if (Object.hasOwn(dictionary, clean))
    return text.replace(/\S(?:[\s\S]*\S)?/, dictionary[clean]);
  return text;
}
function literal(text) {
  if (text.startsWith("@/components/"))
    return text.replace("@/components/", "@/generated/en/components/");
  if (text.startsWith("@/lib/"))
    return text.replace("@/lib/", "@/generated/en/lib/");
  if (routes.has(text)) return "/en" + text;
  return translate(text);
}
const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
function generate(source, destination) {
  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const from = path.join(source, entry.name),
      to = path.join(destination, entry.name);
    if (entry.isDirectory()) {
      generate(from, to);
      continue;
    }
    if (!/\.tsx?$/.test(entry.name)) continue;
    const file = ts.createSourceFile(
      from,
      fs.readFileSync(from, "utf8"),
      ts.ScriptTarget.Latest,
      true,
      entry.name.endsWith("tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
    );
    const result = ts.transform(file, [
      (context) => {
        function visit(node) {
          if (ts.isJsxText(node))
            return context.factory.createJsxText(translate(node.text));
          if (ts.isStringLiteral(node))
            return context.factory.createStringLiteral(literal(node.text));
          if (ts.isNoSubstitutionTemplateLiteral(node))
            return context.factory.createNoSubstitutionTemplateLiteral(
              literal(node.text),
            );
          if (ts.isTemplateHead(node))
            return context.factory.createTemplateHead(literal(node.text));
          if (ts.isTemplateMiddle(node))
            return context.factory.createTemplateMiddle(translate(node.text));
          if (ts.isTemplateTail(node))
            return context.factory.createTemplateTail(
              node.text === "/" ? "/" : literal(node.text),
            );
          return ts.visitEachChild(node, visit, context);
        }
        return (root) => ts.visitNode(root, visit);
      },
    ]);
    fs.mkdirSync(path.dirname(to), { recursive: true });
    fs.writeFileSync(to, printer.printFile(result.transformed[0]));
    result.dispose();
  }
}
for (const dir of ["src/generated/en", "src/app/en"])
  fs.rmSync(dir, { recursive: true, force: true });
generate("src/components", "src/generated/en/components");
generate("src/lib", "src/generated/en/lib");
generate("src/app/(es)", "src/app/en");
console.log("Generated English routes and components.");
