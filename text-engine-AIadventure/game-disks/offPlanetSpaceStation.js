const offPlanetSpaceStation = () => ({
roomId: 'energyCollector', // the ID of the room the player starts in
rooms: [
  {
    id: 'energyCollector', // unique ID for this room
    name: 'Energy Collector', // room name (shown when player enters the room)
    // room description (shown when player first enters the room)
    desc:  "You have arrived at the off-planet space station, a hub of energy collection from the star shared with different species. In this station, there are 10 locations that are collecting energy.",
    exits: [
      // GO NORTH command leads to the Reception Desk
      {dir: 'north', id: 'starObservationDeck'},
      {dir: 'east', id: 'solarPanelAccelerator'},
      {dir: 'south', id: 'energyConversionPlant'},
      {dir: 'west', id: 'asteroidCollectionVessel'},
    ],
  },
  {
    id: 'starObservationDeck',
    name: 'Star Observation Deck',
    desc: 'This is the observation deck where a panoramic view of the star shared with different species is visible. You can see scientists and engineers conducting research here.',
    exits: [
      {dir: 'north', id: 'orbitalMirrorArray'},
      {dir: 'south', id: 'energyCollector'},
    ],
  },
  {
    id: 'solarPanelAccelerator',
    name: 'Solar Panel Accelerator',
    desc: 'This is the solar panel accelerator, where advanced solar panels are used to accelerate the collection of energy. Here, you can see engineers working with the latest technology to maximize the energy output.',
    exits: [
      {dir: 'east', id: 'magneticFluxCompressor'},
      {dir: 'west', id: 'energyCollector'},
    ],
  },
  {
    id: 'energyConversionPlant',
    name: 'Energy Conversion Plant',
    desc: 'This is the energy conversion plant, where energy from the star is converted into a form that is usable by the different species. Here, scientists are working to perfect the conversion process.',
    exits: [
      {dir: 'north', id: 'energyCollector'},
      {dir: 'east', id: 'gravityHarnessingMechanism'},
    ],
  },
  {
    id: 'asteroidCollectionVessel',
    name: 'Asteroid Collection Vessel',
    desc: 'This is the asteroid collection vessel, where asteroids are collected from the star system and brought back to the station. Here, you can see robotic probes being launched to gather the asteroids.',
    exits: [
      {dir: 'east', id: 'energyCollector'},
      {dir: 'south', id: 'asteroidProcessingFacility'},
    ],
  },
  {
    id: 'orbitalMirrorArray',
    name: 'Orbital Mirror Array',
    desc: 'This is the orbital mirror array, where large mirrors are used to redirect and focus the energy from the star onto the station. Here, engineers are calibrating the mirrors to maximize energy efficiency.',
    exits: [
      {dir: 'south', id: 'starObservationDeck'},
      {dir: 'west', id: 'magneticFluxCompressor'},
      {dir: 'east', id: 'gravityHarnessingMechanism'},
    ],
  },
  {
    id: 'magneticFluxCompressor',
    name: 'Magnetic Flux Compressor',
    desc: 'This is the magnetic flux compressor, where powerful magnets are used to compress the energy from the star. Here, scientists are studying the properties of the energy to maximize efficiency.',
    exits: [
      {dir: 'west', id: 'solarPanelAccelerator'},
      {dir: 'east', id: 'orbitalMirrorArray'},
    ],
  },
  {
    id: 'gravityHarnessingMechanism',
    name: 'Gravity Harnessing Mechanism',
    desc: 'This is the gravity harnessing mechanism, where advanced technology is used to harness the energy of gravity. Here, engineers are working to perfect the mechanism for better energy output.',
    exits: [
      {dir: 'west', id: 'orbitalMirrorArray'},
      {dir: 'south', id: 'energyConversionPlant'},
    ],
  },
  {
    id: 'asteroidProcessingFacility',
    name: 'Asteroid Processing Facility',
    desc: 'This is the asteroid processing facility, where the asteroids collected from the star system are processed and refined into usable materials. Here, robotic probes are being used to refine the asteroids.',
    exits: [
      {dir: 'north', id: 'asteroidCollectionVessel'},
      {dir: 'east', id: 'fuelRefinery'},
    ],
  },
  {
    id: 'fuelRefinery',
    name: 'Fuel Refinery',
    desc: 'This is the fuel refinery, where the materials from the asteroids are processed and refined into usable fuel. Here, engineers are using the latest technology to refine the fuel for better efficiency.',
    exits: [
      {dir: 'west', id: 'asteroidProcessingFacility'},
    ],
  },
],
});