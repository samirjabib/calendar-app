import {format, parse, startOfWeek, getDay } from 'date-fns' //these  libraries help us to managent the date
import enUs from 'date-fns/locale/en-US'; //these libraries make the calendar component by us
import { dateFnsLocalizer } from "react-big-calendar";

const  locales = { //change the format data.
    'en-US':enUs
}

export const localizer = dateFnsLocalizer({// Get propierties for the date data. 
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})