const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const {setTemperaments} = require('./helpers/temperamentData')
const {setRoles} = require('./helpers/rolesData')
const {setSpecies} = require('./helpers/speciesData')
const {setAge} = require('./helpers/ageData')
const {setPetStatus} = require('./helpers/petStatusData')
const {setCountries} = require('./helpers/countryData')
const {setStates} = require('./helpers/stateData')
const {setCities} = require('./helpers/cityData')


// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  
  server.listen(3001, async() => {
    await setTemperaments()
    await setRoles()
    await setSpecies()
    await setAge()
    await setPetStatus()
    await setCountries()
    await setStates()
    await setCities()

    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
