import { ImageResponse } from "next/og.js";
import { createElement as h } from "react";
import fs from "node:fs";

const iso =
  "data:image/png;base64," +
  fs.readFileSync("public/datalink-isotipo.png").toString("base64");

const SERVICES = [
  "IA y Automatización",
  "Marketing Digital",
  "Software a Medida",
  "Redes e Infraestructura",
  "Seguridad y Control",
  "Soporte IT",
];

const chip = (text) =>
  h(
    "div",
    {
      style: {
        display: "flex",
        fontSize: 20,
        color: "#a9bcd4",
        border: "1px solid #1f3550",
        borderRadius: 999,
        padding: "7px 16px",
      },
    },
    text,
  );

const response = new ImageResponse(
  h(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        background: "#050a12",
        backgroundImage:
          "radial-gradient(circle at 78% 22%, #0066ff33, transparent 55%)",
        padding: "64px",
        color: "#fff",
        justifyContent: "space-between",
      },
    },
    h(
      "div",
      { style: { display: "flex", alignItems: "center", gap: 18 } },
      h("img", { src: iso, width: 76, height: 63, alt: "" }),
      h(
        "div",
        { style: { display: "flex", flexDirection: "column" } },
        h(
          "div",
          {
            style: {
              display: "flex",
              fontSize: 34,
              fontWeight: 700,
              letterSpacing: -1,
            },
          },
          "DATALINK",
        ),
        h(
          "div",
          {
            style: {
              display: "flex",
              fontSize: 16,
              color: "#8ba0bd",
              letterSpacing: 6,
            },
          },
          "TECH CORP",
        ),
      ),
    ),
    h(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          fontSize: 66,
          lineHeight: 1.06,
          fontWeight: 700,
          letterSpacing: -2,
        },
      },
      "Seis frentes.",
      h("span", { style: { color: "#00d1ff" } }, "Un solo aliado técnico."),
    ),
    h(
      "div",
      { style: { display: "flex", flexWrap: "wrap", gap: 10, maxWidth: 1000 } },
      ...SERVICES.map(chip),
    ),
    h(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          fontSize: 21,
          color: "#00d1ff",
        },
      },
      h("span", {}, "www.datalinkcorporation.com"),
      h("span", { style: { color: "#7c8fab" } }, "Miami · South Florida"),
    ),
  ),
  { width: 1200, height: 630 },
);

response
  .arrayBuffer()
  .then((data) =>
    fs.writeFileSync("public/opengraph-image.png", Buffer.from(data)),
  );
