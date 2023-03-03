

const AIsland = () => (
{
  "roomId":"island",
  "rooms":[
      {
        "id":"island",
        "name":"The Island",
        "desc":"Welcome to the Island, a beautiful vacation spot run by AI. The island is filled with lush **PALM TREES**, **BEACHES**, and vibrant **FLOWERS**.",
        "exits":[
            {
              "dir":"east",
              "id":"beach"
            },
            {
              "dir":"north",
              "id":"jungle"
            },
            {
              "dir":"west",
              "id":"mountain"
            },
            {
              "dir":"south",
              "id":"ocean"
            }
        ]
      },
      {
        "id":"beach",
        "name":"The Beach",
        "desc":"A long stretch of sandy beach, the ocean is a beautiful blue and the sun is shining. **SEAGULLS** are flying overhead and **FISHERMEN** are casting their lines in the shore.",
        "exits":[
            {
              "dir":"west",
              "id":"island"
            }
        ]
      },
      {
        "id":"jungle",
        "name":"The Jungle",
        "desc":"A thick jungle with exotic plants and animals. **MONKEYS** are swinging from the trees and **PARROTS** are flying above. You can hear the distant sound of a **WATERFALL**.",
        "exits":[
            {
              "dir":"south",
              "id":"island"
            },
            {
              "dir":"east",
              "id":"caveAIsland"
            }
        ]
      },
      {
        "id":"mountain",
        "name":"The Mountain",
        "desc":"A high mountain peak with a view of the island. You can see **EAGLES** soaring in the sky and the **SNOW-CAPPED** peak of the mountain. There is a **cave** in the side of the mountain.",
        "exits":[
            {
              "dir":"east",
              "id":"island"
            }
        ]
      },
      {
        "id":"ocean",
        "name":"The Ocean",
        "desc":"A vast ocean, with waves crashing against the shore. You can see **DOLPHINS** swimming in the distance and **SEAHORSES** floating in the water. There is a small **ISLAND** in the distance.",
        "exits":[
            {
              "dir":"north",
              "id":"island"
            }
        ]
      },
      {
        "id":"caveAIsland",
        "name":"The Cave",
        "desc":"A dark cave, filled with strange symbols and ancient artifacts. You can see **SPIDERS** crawling along the walls and **BAT** flying in the air. There is a **SECRET DOOR** at the back of the cave.",
        "exits":[
            {
              "dir":"west",
              "id":"jungle"
            }
        ]
      }
  ]
}
);