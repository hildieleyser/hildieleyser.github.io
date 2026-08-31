/**
 * These diagrams were authored as standalone files, so each paints its own
 * full-canvas white rectangle. Inlined on a warm plate that reads as a second
 * tone inside the first, so strip it and let the plate colour show through.
 */
export function stripBackdrop(svg: string): string {
  return svg.replace(/<rect\s+width="1600"\s+height="820"\s+fill="#ffffff"\s*\/>/i, '');
}
