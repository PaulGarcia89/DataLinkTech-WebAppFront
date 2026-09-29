/* Pure local calculations. No analytics or network requests. */
(function (root) {
  const legacyFields = [
    "id",
    "client",
    "contact",
    "service",
    "source",
    "stage",
    "value",
    "next",
    "due",
    "reference",
    "notes",
    "created",
    "updated",
  ];
  const fields = [
    ...legacyFields,
    "qualification",
    "qualificationReason",
    "saleValue",
    "paid",
    "closedAt",
  ];
  const stages = ["Consulta", "Contactado", "Propuesta", "Ganada", "Perdida"];
  const qualifications = ["Pendiente", "Cualificada", "No cualificada"];
  function normalize(row) {
    if (!row || typeof row !== "object") return row;
    return {
      qualification: "Pendiente",
      qualificationReason: "",
      saleValue: "",
      paid: "",
      closedAt: "",
      ...row,
    };
  }
  const amount = (value) =>
    value === "" || (/^\d+(\.\d{1,2})?$/.test(value) && Number(value) <= 1e9);
  const date = (value) =>
    value === "" ||
    (/^\d{4}-\d{2}-\d{2}$/.test(value) &&
      !Number.isNaN(Date.parse(value + "T12:00:00Z")) &&
      new Date(value + "T12:00:00Z").toISOString().slice(0, 10) === value);
  function valid(row) {
    return (
      !!row &&
      fields.every(
        (k) => typeof row[k] === "string" && row[k].length <= 3000,
      ) &&
      !!row.id &&
      !!row.client.trim() &&
      stages.includes(row.stage) &&
      qualifications.includes(row.qualification) &&
      ["value", "saleValue", "paid"].every((k) => amount(row[k])) &&
      date(row.due) &&
      date(row.closedAt) &&
      (row.qualification !== "Cualificada" ||
        !!row.qualificationReason.trim()) &&
      (!row.saleValue || row.stage === "Ganada") &&
      (!row.paid || row.stage === "Ganada") &&
      (!row.paid ||
        (row.saleValue !== "" && Number(row.paid) <= Number(row.saleValue))) &&
      (!row.saleValue || !!row.closedAt) &&
      Number.isFinite(Date.parse(row.created)) &&
      Number.isFinite(Date.parse(row.updated))
    );
  }
  function summary(rows, from = "", to = "") {
    // Cohort by inquiry creation date, not revenue booked during this period.
    const cohort = rows.filter(
      (row) =>
        (!from || row.created.slice(0, 10) >= from) &&
        (!to || row.created.slice(0, 10) <= to),
    );
    const qualified = cohort.filter(
      (row) => row.qualification === "Cualificada",
    );
    const won = cohort.filter((row) => row.stage === "Ganada");
    const qualifiedWon = qualified.filter((row) => row.stage === "Ganada");
    return {
      total: cohort.length,
      qualified: qualified.length,
      won: won.length,
      qualifiedWon: qualifiedWon.length,
      conversion: qualified.length
        ? qualifiedWon.length / qualified.length
        : null,
      contracted: won.reduce((n, row) => n + Number(row.saleValue || 0), 0),
      paid: won.reduce((n, row) => n + Number(row.paid || 0), 0),
      unknownSale: won.filter((row) => row.saleValue === "").length,
      sources: [...new Set(cohort.map((row) => row.source))].map((source) => ({
        source,
        total: cohort.filter((row) => row.source === source).length,
        qualified: qualified.filter((row) => row.source === source).length,
        won: won.filter((row) => row.source === source).length,
      })),
    };
  }
  const api = { fields, normalize, valid, summary };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.DataLinkMetrics = api;
})(globalThis);
