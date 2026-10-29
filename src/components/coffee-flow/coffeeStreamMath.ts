/**
 * Analytical mathematical utilities for the A-Town Café scroll-linked coffee stream.
 */

/**
 * Analytical function to get the exact (x, y) coordinates of the stream tip
 * at any normalized scroll progress p (0 to 1).
 */
export function getStreamPoint(
  p: number,
  startX: number,
  startY: number,
  endY: number,
  amplitude: number,
  wavelength: number
): { x: number; y: number } {
  const currentY = startY + (endY - startY) * p
  const neckY = startY + 16

  if (currentY <= neckY) {
    return { x: startX, y: currentY }
  }

  const waveDistance = currentY - neckY
  const angle = (waveDistance / wavelength) * Math.PI * 2
  const currentX = startX + amplitude * Math.sin(angle)

  return {
    x: Number(currentX.toFixed(2)),
    y: Number(currentY.toFixed(2)),
  }
}

/**
 * Builds a smooth, natural quadratic Bézier stream path that follows
 * the analytical sine wave from (startX, startY) down to (startX, endY).
 */
export function generateStreamSvgPath(
  startX: number,
  startY: number,
  endY: number,
  amplitude: number,
  wavelength: number
): string {
  if (endY <= startY) {
    return `M ${startX} ${startY} L ${startX} ${startY + 1}`
  }

  let path = `M ${startX} ${startY}`
  const neckY = startY + 16
  path += ` L ${startX} ${neckY}`

  const step = 28
  let prevX = startX
  let prevY = neckY

  for (let y = neckY + step; y < endY; y += step) {
    const angle = ((y - neckY) / wavelength) * Math.PI * 2
    const x = startX + amplitude * Math.sin(angle)
    const midX = (prevX + x) / 2
    const midY = (prevY + y) / 2
    path += ` Q ${prevX.toFixed(2)} ${prevY.toFixed(2)}, ${midX.toFixed(2)} ${midY.toFixed(2)}`
    prevX = x
    prevY = y
  }

  // Final endpoint segment to actual bottom
  const finalAngle = ((endY - neckY) / wavelength) * Math.PI * 2
  const finalX = startX + amplitude * Math.sin(finalAngle)
  path += ` Q ${prevX.toFixed(2)} ${prevY.toFixed(2)}, ${finalX.toFixed(2)} ${endY.toFixed(2)}`

  return path
}
