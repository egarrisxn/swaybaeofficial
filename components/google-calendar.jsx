"use client";
import { useRef, useEffect, useCallback } from "react";
import debounce from "lodash.debounce";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

const key = process.env.NEXT_PUBLIC_CALENDAR_API_KEY;
const id = process.env.NEXT_PUBLIC_CALENDAR_ID;

export default function GoogleCalendar() {
  const calendarRef = useRef(null);

  const handleViewChange = (view) => {
    const calendarApi = calendarRef.current?.getApi();
    if (calendarApi) {
      calendarApi.changeView(view);
    }
  };

  const debouncedResizeHandler = useRef(
    debounce(() => {
      const calendarApi = calendarRef.current?.getApi();
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      if (calendarApi) {
        calendarApi.changeView(isMobile ? "listMonth" : "dayGridMonth");
      }
    }, 200),
  ).current;

  const handleWindowResize = useCallback(() => {
    debouncedResizeHandler();
  }, [debouncedResizeHandler]);

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  return (
    <FullCalendar
      ref={calendarRef}
      plugins={[dayGridPlugin, listPlugin, googleCalendarPlugin]}
      googleCalendarApiKey={key}
      events={{
        googleCalendarId: id,
      }}
      eventClick={(arg) => {
        window.open(arg.event.url, "_blank", "width=700,height=600");
        arg.jsEvent.preventDefault();
      }}
      initialView={"dayGridMonth"}
      height={"auto"}
      customButtons={{
        dayGridMonth: {
          text: "Calendar",
          click: () => handleViewChange("dayGridMonth"),
        },
        listMonth: {
          text: "List",
          click: () => handleViewChange("listMonth"),
        },
      }}
      buttonIcons={{
        prev: "chevron-left",
        next: "chevron-right",
      }}
      headerToolbar={{
        left: "prev,next",
        center: "title",
        right: "dayGridMonth,listMonth",
      }}
      views={{
        listMonth: {
          titleFormat: { month: "long", year: "numeric" },
        },
        dayGridMonth: {
          titleFormat: { month: "long", year: "numeric" },
        },
      }}
    />
  );
}
