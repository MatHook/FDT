const { writeFileSync } = require("fs");
const ics = require("ics");
import lectures from "./calendarLectureJSON.json";
import seminars from "./calendarSeminarJSON.json";

ics.createEvents(seminars, (error: any, value: any) => {
  if (error) {
    console.log(error);
  }

  writeFileSync(`${__dirname}/seminars.ics`, value);
});

ics.createEvents(lectures, (error: any, value: any) => {
  if (error) {
    console.log(error);
  }

  writeFileSync(`${__dirname}/lectures.ics`, value);
});