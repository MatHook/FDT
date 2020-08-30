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
  delete item.duration;
  delete item.endLesson;
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
});

var parsedLessons = { ...data.Lessons };

//console.log(parsedLessons)

var groupedByType = _.groupBy(parsedLessons, "kindOfWork");

var groupedByAuditorium = _.groupBy(groupedByType["Лекция"], "auditorium");

console.log(Object.keys(groupedByAuditorium["4315"]).length + " 4315");
console.log(Object.keys(groupedByAuditorium["Online"]).length + " Online");
console.log(Object.keys(groupedByAuditorium["online"]).length + " online");
console.log(Object.keys(groupedByAuditorium["R503"]).length + " R503");
console.log(Object.keys(groupedByAuditorium["501 "]).length + " 501");

console.log(
  Object.keys(groupedByAuditorium["online"]).length +
    Object.keys(groupedByAuditorium["Online"]).length +
    " online " +
    (Object.keys(groupedByAuditorium["4315"]).length +
      Object.keys(groupedByAuditorium["R503"]).length +
      Object.keys(groupedByAuditorium["501 "]).length) +
    " irl"
);

// console.log(groupedByAuditorium)
// console.log(counter)

let info = JSON.stringify(groupedByAuditorium);
fs.writeFileSync("LessonsParsed.json", info);
