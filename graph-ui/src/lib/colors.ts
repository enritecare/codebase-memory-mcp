/* Node label → color mapping for sidebar/tooltips (structural meaning) */

const LABEL_COLORS: Record<string, string> = {
  // ── Project structure ─────────────────────────────
  Project: "#e11d48",
  Package: "#94a3b8",
  Module:  "#94a3b8",
  Folder:  "#64748b",
  File:    "#475569",

  // ── UI Layer (Salesforce front-end) ───────────────
  LWCComponent:    "#f97316",   // orange
  FlexiPage:       "#fb923c",   // lighter orange
  LightningPageType: "#fbbf24", // amber

  // ── Apex code ─────────────────────────────────────
  Class:     "#a855f7",   // purple  (general Apex)
  Interface: "#c084fc",   // lighter purple
  Enum:      "#d946ef",   // fuchsia

  // ── fflib layers ──────────────────────────────────
  Service:   "#06b6d4",   // cyan
  Domain:    "#0ea5e9",   // sky blue
  Selector:  "#3b82f6",   // blue

  // ── Data model ────────────────────────────────────
  SObject:      "#22c55e",   // green  (schema table)
  SObjectField: "#4ade80",   // lighter green (schema column)

  // ── Code internals ────────────────────────────────
  Function: "#2dd4bf",   // teal
  Method:   "#2dd4bf",   // teal
  Field:    "#64748b",   // slate
  Variable: "#475569",   // darker slate

  // ── Other ─────────────────────────────────────────
  Route:   "#eab308",
  Section: "#475569",
};

const DEFAULT_COLOR = "#94a3b8";

export function colorForLabel(label: string): string {
  return LABEL_COLORS[label] ?? DEFAULT_COLOR;
}

/* Stellar spectral type legend (for the graph view) */
export const STELLAR_LEGEND = [
  { type: "O (Blue Giant)", color: "#80a0ff", description: "50+ connections" },
  { type: "B (Blue-White)", color: "#c0d0ff", description: "26-50 connections" },
  { type: "A (White)", color: "#e8e8ff", description: "13-25 connections" },
  { type: "F (Yellow-White)", color: "#fff0c0", description: "7-12 connections" },
  { type: "G (Yellow/Sun)", color: "#ffe080", description: "4-6 connections" },
  { type: "K (Orange)", color: "#ffa060", description: "2-3 connections" },
  { type: "M (Red Dwarf)", color: "#ff6050", description: "0-1 connections" },
];
