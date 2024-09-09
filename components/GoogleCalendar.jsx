'use client'
import {useRef} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

const key = process.env.NEXT_PUBLIC_CALENDAR_API_KEY
const id = process.env.NEXT_PUBLIC_CALENDAR_ID

export default function GoogleCalendar() {
  const calendarRef = useRef(null)

  const handleViewChange = (view) => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi()
      calendarApi.changeView(view)
    }
  }

  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches

  return (
    <>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, listPlugin, googleCalendarPlugin]}
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
        initialView={isMobile ? 'listMonth' : 'dayGridMonth'}
        headerToolbar={{
          left: 'prev,next',
          center: 'title',
          right: 'listMonth,dayGridMonth',
        }}
        customButtons={{
          listMonth: {
            text: 'List',
            click: () => handleViewChange('listMonth'),
          },
          dayGridMonth: {
            text: 'Month',
            click: () => handleViewChange('dayGridMonth'),
          },
        }}
        buttonText={{
          prev: '←',
          next: '→',
        }}
        views={{
          listMonth: {
            titleFormat: {month: 'short', year: 'numeric'},
          },
          dayGridMonth: {
            titleFormat: {month: 'long', year: 'numeric'},
          },
        }}
      />
    </>
  )
}
