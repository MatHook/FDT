import data from "./lessons.json";
import moment from "moment";
import _ from "lodash";
import fs from "fs";

moment.locale("ru");

data.Lessons.forEach((item) => {
  delete item.auditoriumAmount;
  delete item.auditoriumOid;
  delete item.author;
  delete item.contentOfLoadOid;
  delete item.contentOfLoadUID;
  delete item.createddate;
  delete item.dateOfNest;
  delete item.dayOfWeek;
  delete item.dayOfWeekString;
  delete item.detailInfo;
  delete item.disciplineinplan;
  delete item.disciplinetypeload;
  delete item.disciplineOid;
  delete item.disciplinetypeload;
  delete item.group;
  delete item.groupOid;
  delete item.group_facultyoid;
  delete item.hideincapacity;
  delete item.isBan;
  delete item.kindOfWorkOid;
  delete item.kindOfWorkUid;
  delete item.lecturerCustomUID;
  delete item.lecturerOid;
  delete item.lecturerUID;
  delete item.lessonNumberEnd;
  delete item.lessonNumberStart;
  delete item.lessonOid;
  delete item.modifieddate;
  delete item.note;
  delete item.parentschedule;
  delete item.replaces;
  delete item.stream;
  delete item.streamOid;
  delete item.stream_facultyoid;
  delete item.subGroup;
  delete item.subGroupOid;
  delete item.subgroup_facultyoid;
  delete item.url1;
  delete item.url1_description;
  delete item.url2;
  delete item.url2_description;
  delete item.lecturer;
});

var parsedLessons = { ...data.Lessons };

var groupedByType = _.groupBy(parsedLessons, "kindOfWork");
var lectureLessons = groupedByType["Лекция"];
var seminarLessons = groupedByType["Семинар"];

var groupedLectionsByAuditorium = _.groupBy(lectureLessons, "auditorium");
var parsedLectureLessons = groupedLectionsByAuditorium["Online"];

var groupedSeminarsByAuditorium = _.groupBy(seminarLessons, "auditorium");
var parsedSeminarLessons: {
  discipline: String;
  auditorium: String;
  date: String;
  beginLesson: String;
  endLesson: String;
  kindOfWork: String;
  building: String;
}[] = [];

Object.getOwnPropertyNames(groupedSeminarsByAuditorium).forEach(
  (item, index, array) => {
    if (
      item === "3201" ||
      item === "4405" ||
      item === "4414" ||
      item === "5407" ||
      item === "3210" ||
      item === "5409" ||
      item === "2208" ||
      item === "5410" ||
      item === "3202" ||
      item === "3313"
    )
      groupedSeminarsByAuditorium[item].forEach((les) => {
        parsedSeminarLessons.push(les);
      });
  }
);

var lectureCalendarArray: {
  title: String;
  description: String;
  location: String;
  start: Array<Number>;
  end: Array<Number>;
}[] = [];

var seminarCalendarArray: {
  title: String;
  description: String;
  location: String;
  start: Array<Number>;
  end: Array<Number>;
}[] = [];

for (let i = 0; i < parsedLectureLessons.length; i++) {
  let title = parsedLectureLessons[i].discipline;
  let location = parsedLectureLessons[i].auditorium;
  let begin =
    parsedLectureLessons[i].date + "." + parsedLectureLessons[i].beginLesson;
  let end =
    parsedLectureLessons[i].date + "." + parsedLectureLessons[i].endLesson;
  let description =
    parsedLectureLessons[i].kindOfWork + " " + parsedLectureLessons[i].building;

  lectureCalendarArray.push({
    title: title,
    location: location,
    description: description,
    start: begin.split(/[.:]+/).map(Number),
    end: end.split(/[.:]+/).map(Number),
  });
}

for (let i = 0; i < parsedSeminarLessons.length; i++) {
  let title = parsedSeminarLessons[i].discipline;
  let location = parsedSeminarLessons[i].auditorium;
  let begin =
    parsedSeminarLessons[i].date + "." + parsedSeminarLessons[i].beginLesson;
  let end =
    parsedSeminarLessons[i].date + "." + parsedSeminarLessons[i].endLesson;
  let description =
    parsedSeminarLessons[i].kindOfWork + " " + parsedSeminarLessons[i].building;

  seminarCalendarArray.push({
    title: title,
    location: location,
    description: description,
    start: begin.split(/[.:]+/).map(Number),
    end: end.split(/[.:]+/).map(Number),
  });
}

let info = JSON.stringify(parsedSeminarLessons);
fs.writeFileSync("LessonsParsed.json", info);

let calendarLecture = JSON.stringify(lectureCalendarArray);
fs.writeFileSync("calendarLectureJSON.json", calendarLecture);

let calendarSeminar = JSON.stringify(seminarCalendarArray);
fs.writeFileSync("calendarSeminarJSON.json", calendarSeminar);

//console.log(calendarArray);
