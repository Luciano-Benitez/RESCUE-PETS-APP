const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const {setTemperaments} = require('./helpers/temperamentData')
const {setRoles} = require('./helpers/rolesData')
const {setSpecies} = require('./helpers/speciesData')
const {setAge} = require('./helpers/ageData')
const {setPetStatus} = require('./helpers/petStatusData')

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  
  server.listen(3001, async() => {
    await setTemperaments()
    await setRoles()
    await setSpecies()
    await setAge()
    await setPetStatus()
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
