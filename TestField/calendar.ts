const { writeFileSync } = require("fs");
const ics = require("ics");
import file from "./calendarJSON.json"

var eventTest = [
  {
    description: "Этика бизнеса и корпоративная социальная ответственность (анг)",
    location: "Online",
    start: [ 2020, 9, 1, 11, 10 ],
    duration: { hours: 2 }
  },
  {
    description: "Международный маркетинг (анг)",
    location: "online",
    start: [ 2020, 9, 3, 13, 20 ],
    duration: { hours: 2 }
  }
]

ics.createEvents(file, (error: any, value: any) => {
  if (error) {
    console.log(error);
  }

  writeFileSync(`${__dirname}/event.ics`, value);
});
