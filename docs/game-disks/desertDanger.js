

const desertDanger = () => (
{
  "roomId":"oasis",
  "rooms":[
      {
        "id":"oasis",
        "name":"The Oasis",
        "desc":"A lush oasis in the middle of the desert, with plenty of water and life.",
        "exits":[
            {
              "dir":"north",
              "id":"canyon"
            },
            {
              "dir":"east",
              "id":"cave"
            },
            {
              "dir":"south",
              "id":"desert"
            }
        ]
      },
      {
        "id":"canyon",
        "name":"The Canyon",
        "desc":"A deep and winding canyon, filled with danger and adventure.",
        "exits":[
            {
              "dir":"south",
              "id":"oasis"
            },
            {
              "dir":"east",
              "id":"mine"
            }
        ]
      },
      {
        "id":"cave",
        "name":"The Cave",
        "desc":"A dark and mysterious cave, with secrets and creatures inside.",
        "exits":[
            {
              "dir":"west",
              "id":"oasis"
            },
            {
              "dir":"south",
              "id":"desert"
            }
        ]
      },
      {
        "id":"mine",
        "name":"The Mine",
        "desc":"An abandoned mine, filled with danger and riches.",
        "exits":[
            {
              "dir":"west",
              "id":"canyon"
            },
            {
              "dir":"south",
              "id":"desert"
            }
        ]
      },
      {
        "id":"desert",
        "name":"The Desert",
        "desc":"A vast and unforgiving desert, with hidden danger lurking in the sand.",
        "exits":[
            {
              "dir":"north",
              "id":"oasis"
            },
            {
              "dir":"north",
              "id":"cave"
            },
            {
              "dir":"north",
              "id":"mine"
            }
        ]
      }
  ]
}
);