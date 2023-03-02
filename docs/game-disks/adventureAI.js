

const adventureAI = () => (
{
  "roomId":"spaceStation",
  "rooms":[
      {
        "id":"spaceStation",
        "name":"Space Station",
        "desc":"This is the main hub of the off-planet space station, collecting energy from the star shared with different species.",
        "exits":[
            {
              "dir":"north",
              "id":"lab"
            },
            {
              "dir":"east",
              "id":"engineering"
            },
            {
              "dir":"south",
              "id":"dockingBay"
            },
            {
              "dir":"west",
              "id":"observatory"
            }
        ]
      },
      {
        "id":"lab",
        "name":"Laboratory",
        "desc":"The laboratory is used to study the energy collected from the star.",
        "exits":[
            {
              "dir":"south",
              "id":"spaceStation"
            }
        ]
      },
      {
        "id":"engineering",
        "name":"Engineering Room",
        "desc":"This is where the engineers work to maintain the space station.",
        "exits":[
            {
              "dir":"west",
              "id":"spaceStation"
            }
        ]
      },
      {
        "id":"dockingBay",
        "name":"Docking Bay",
        "desc":"This is where ships from different species come to dock and trade.",
        "exits":[
            {
              "dir":"north",
              "id":"spaceStation"
            }
        ]
      },
      {
        "id":"observatory",
        "name":"Observatory",
        "desc":"This is where the scientists observe the star and its energy.",
        "exits":[
            {
              "dir":"east",
              "id":"spaceStation"
            }
        ]
      }
  ]
}
);