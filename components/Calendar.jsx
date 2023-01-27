import React, { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

import CalendarHeader from "./CalendarHeader";

function Calendar() {
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selected) => {
        const title = prompt("Veuillez entrer un nouveau titre pour votre événement");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            });
        }
    };

    const handleEventClick = (selected) => {
        if (
            window.confirm(
                `Êtes-vous sûr de vouloir supprimer l'événement '${selected.event.title}'`
            )
        ) {
            selected.event.remove();
        }
    };

    return (
        <div m="20px">

            <CalendarHeader title="Agenda" />

            <div className="globCalendar">
                {/* CALENDAR SIDEBAR */}
                <div className="globCalendarSidebar">
                    <h4 className="event">Events</h4>
                    <div>
                        {currentEvents.map((event) => (
                            <div key={event.id} className="globCalendarSidebarList">
                                <div>
                                    <h5>{event.title}</h5>
                                    <p>
                                        {formatDate(event.start, { year: "numeric", month: "short", day: "numeric", })}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CALENDAR */}
                <div className="globCalendarFull">
                    <FullCalendar
                        height="150vh"
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin,
                        ]}
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)}
                        initialEvents={[
                            {
                                id: "12315",
                                title: "All-day event",
                                date: "2022-09-14",
                            },
                            {
                                id: "5123",
                                title: "Timed event",
                                date: "2022-09-28",
                            },
                        ]}
                    />
                </div>
            </div>

        </div>
    )
}

export default Calendar
