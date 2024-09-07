'use client'
import '../app/styles/index.css'
import {useRef, useEffect} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

const key = process.env.NEXT_PUBLIC_CALENDAR_API_KEY
const id = process.env.NEXT_PUBLIC_CALENDAR_ID

export default function Calendar() {
  const calendarRef = useRef(null)

  useEffect(() => {
    if (calendarRef.current) {
    }
  }, [])

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, googleCalendarPlugin]}
        googleCalendarApiKey={key}
        events={{
          googleCalendarId: id,
          textColor: '#f8fafc',
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
    </div>
  )
}
