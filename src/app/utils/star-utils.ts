export function generateStarPoints(
  cx: number,
  cy: number,
  outerRadius: number,
  innerRadius: number,
  numPoints: number
): string {
  const step = Math.PI / numPoints;
  const angleOffset = -Math.PI / 2;
  let path = '';
  for (let i = 0; i < 2 * numPoints; i++) {
    const r = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = i * step + angleOffset;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    path += `${x},${y} `;
  }
  return path.trim();
}
