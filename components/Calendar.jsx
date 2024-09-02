'use client'
import {useRef, useEffect} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

const key = process.env.NEXT_PUBLIC_CALENDAR_API_KEY || 'AIzaSyBb6HC-Kho3FKvbE_57ph1ZJTECch95pa8'
const id =
  process.env.NEXT_PUBLIC_CALENDAR_ID ||
  '63739436a2ea120a341ec13abffc4b1289f77240a837d12043bed81ce6c78e1c@group.calendar.google.com'

export default function Calendar() {
  const calendarRef = useRef(null)

  useEffect(() => {
    if (calendarRef.current) {
      // Add any additional setup or modifications here if needed
    }
  }, [])

  return (
    <FullCalendar
      plugins={[dayGridPlugin, googleCalendarPlugin]}
      googleCalendarApiKey={key}
      events={{
        googleCalendarId: id,
        textColor: 'white',
        borderColor: '#00ceff',
        backgroundColor: '#b567ad',
      }}
      eventClick={(arg) => {
        window.open(arg.event.url, '_blank', 'width=700,height=600')
        arg.jsEvent.preventDefault()
      }}
      initialView='dayGridMonth'
      headerToolbar={{
        left: 'prev',
        center: 'title',
        right: 'next',
      }}
      buttonText={{
        prev: '←',
        next: '→',
      }}
      views={{
        dayGridMonth: {
          titleFormat: {month: 'long', year: 'numeric'},
        },
      }}
    />
  )
}
