const yaml = require('js-yaml');
const fs = require('fs');

const re =new RegExp(  "^(?<year>-?(?:[1-9][0-9]*)?[0-9]{4})-(?<month>1[0-2]|0[1-9])-(?<day>3[01]|0[1-9]|[12][0-9])T(?<hour>2[0-3]|[01][0-9]):(?<minute>[0-5][0-9])(?<timezone>Z|[+-](?:2[0-3]|[01][0-9]):[0-5][0-9])?$")
function isValidDate(stringDate) {
  return re.test(stringDate)
}

test('check registration date format', () => {
  const eventsYamlFile = yaml.load(fs.readFileSync('_data/events.yaml', 'utf8'));

  const x = eventsYamlFile.map(x => [x["registration_till"], x["name"]])
    .filter(x => x[0])
    .reduce((acc, cur) => {
      if (isValidDate(cur[0])) {
        return acc
      } else {
        acc.push(cur);
        return acc
      }
    }, [])

  expect(x).toEqual([]);
});
