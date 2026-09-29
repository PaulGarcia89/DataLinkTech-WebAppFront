import assert from "node:assert/strict";
import metrics from "../tools/oportunidades/metrics.js";
const { normalize, valid, summary } = metrics;
const old = {
  id: "a",
  client: "Example",
  contact: "",
  service: "IT",
  source: "Referido",
  stage: "Consulta",
  value: "",
  next: "",
  due: "",
  reference: "",
  notes: "",
  created: "2026-09-01T12:00:00Z",
  updated: "2026-09-01T12:00:00Z",
};
assert.ok(
  valid(normalize(old)),
  "Legacy records must load without losing fields",
);
const qualified = {
  ...normalize(old),
  qualification: "Cualificada",
  qualificationReason: "Scope and follow-up confirmed",
};
const won = {
  ...qualified,
  id: "b",
  stage: "Ganada",
  saleValue: "500",
  paid: "100",
  closedAt: "2026-09-29",
};
assert.ok(valid(won));
assert.ok(!valid({ ...won, paid: "501" }));
assert.ok(!valid({ ...won, qualificationReason: "" }));
assert.ok(!valid({ ...won, closedAt: "2026-02-30" }));
assert.ok(!valid({ ...won, stage: "Consulta" }));
const m = summary([
  qualified,
  won,
  { ...normalize(old), id: "c", stage: "Ganada" },
]);
assert.equal(m.qualified, 2);
assert.equal(m.won, 2);
assert.equal(m.conversion, 0.5);
assert.equal(m.contracted, 500);
assert.equal(m.paid, 100);
assert.equal(m.unknownSale, 1);
assert.equal(summary([], "", "").conversion, null);
assert.equal(summary([won], "2026-09-02").total, 0);
assert.equal(summary([won], "2026-09-01", "2026-09-01").total, 1);
assert.equal(m.sources[0].won, 2);
console.log(
  "Opportunity migration, validation, amounts and cohort metrics passed.",
);
