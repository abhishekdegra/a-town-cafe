export interface CafeLiveStatus {
  isOpen: boolean
  label: string
  detail: string
  closingOrOpeningTime: string
}

/**
 * Calculates real-time café open/closed status based on local time and operating hours:
 * - Weekdays (Mon-Fri): 8:00 AM – 10:30 PM
 * - Weekends (Sat-Sun): 8:00 AM – 11:30 PM
 */
export function getCafeLiveStatus(date = new Date()): CafeLiveStatus {
  const day = date.getDay() // 0 = Sunday, 6 = Saturday
  const isWeekend = day === 0 || day === 6

  const openHour = 8
  const openMinute = 0
  const closeHour = isWeekend ? 23 : 22
  const closeMinute = 30

  const currentMinutes = date.getHours() * 60 + date.getMinutes()
  const openMinutes = openHour * 60 + openMinute
  const closeMinutes = closeHour * 60 + closeMinute

  const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes

  if (isOpen) {
    const closeTimeStr = isWeekend ? '11:30 PM' : '10:30 PM'
    return {
      isOpen: true,
      label: 'Open Now',
      detail: `Serving freshly brewed coffee until ${closeTimeStr}`,
      closingOrOpeningTime: closeTimeStr,
    }
  } else {
    return {
      isOpen: false,
      label: 'Closed Now',
      detail: 'Doors open tomorrow at 8:00 AM',
      closingOrOpeningTime: '8:00 AM',
    }
  }
}
