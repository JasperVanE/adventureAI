import openai
import os
from dotenv import load_dotenv
import json
from pathlib import Path
from base64 import b64decode

# The description to create the game
# description = 'An desert where danger lurks.'
description = 'an off-planet space station collecting energy from a star shared with different species.'
# img_style = 'in a graphic novel style with a slightly yellowish tint'
img_style = 'in a sci-fi cyberpunk style cinematic, detailed, with a slightly blueish tint'
# img_size = "256x256"
img_size = "512x512"

# ----------------------------

# load the API key from a .env file placed in the same directory as script - .env file does not move to other environmnents.
load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

# directories to save created game data and images
IMG_DIR = Path.cwd() / "img"
IMG_DIR.mkdir(exist_ok=True)
DATA_DIR = Path.cwd() / "game-disks"
DATA_DIR.mkdir(exist_ok=True)

# Create the prompt to use with GPT, using the description
game_prompt = 'Describe 5 locations connected through exits in ' + description + """ Use two sentences for each description. Provide the answer in a javascript format of a function that returns JSON.
Example:
const adventureAI = () => (
{
  "roomId":"foyer",
  "rooms":[
      {
        "id":"foyer",
        "name":"The Foyer",
        "desc":"Welcome to the Foyer, a lovely room to meet people and start your adventure.",
        "exits":[
            {
              "dir":"north",
              "id":"reception"
            }
        ]
      },
      {
        "id":"reception",
        "name":"Reception Desk",
        "desc":"A basic desk for all kinds of information. **BENJI** is here.",
        "exits":[
            {
              "dir":"south",
              "id":"foyer"
            }
        ]
      }
  ]
}
);"""

# Get the response from GPT
response = openai.Completion.create(
  model="text-davinci-003",
  prompt=game_prompt,
  temperature=0.6,
  max_tokens=2000,
  frequency_penalty=0,
  presence_penalty=0
)

# Response data we need for game file
response_data = (response.choices[0].text)

# Getting the game name contained in the response_data by using find and removing spaces, regex might be better.
begin, end = response_data.find('const'), response_data.find('=')
game_name = response_data[begin+5: end]
game_name = game_name.strip()
# Getting JSON data contained in the GPT response by removing everything before and after the outer curly braces
begin, end = response_data.find('{'), response_data.rfind('}')
json_data = response_data[begin: end+1]

# Create file name for the gamefile based on  so we can use it from the game
filename = game_name + ".js"
game_file = DATA_DIR / filename
# write it to storage
with open(game_file, mode="w") as js_file:
    js_file.write(response_data)

# Load the JSON data from string into structured data
data = json.loads(json_data)

# Proces every room descibed in the JSON file
for room in data['rooms']:
    roomid = room["id"]
    # Create prompt
    imageprompt = room["name"]+ ' - ' + room["desc"] + ' in ' + description + ' ' + img_style
    print('...getting image for\nid: ' + roomid + ' prompt: ' + imageprompt)
    # Get image from DALL-E, response_format parameter asks for base64 encoded data in response. Other option is to get URL and retrieve using that.
    response_image = openai.Image.create(
    prompt=imageprompt,
    n=1,
    size=img_size,
    response_format="b64_json"
    )
    # Create file name for dumping of recieved data in a JSON file. We don't need it anymore, but could be handy.
    # file_name_json = IMG_DIR / f"{imageprompt[:5]}-{response_image['created']}.json"
    # with open(file_name_json, mode="w", encoding="utf-8") as file:
    #     json.dump(response_image, file)
    # decode base64 encoded image that was included in the response_image
    image_data = b64decode(response_image["data"][0]["b64_json"])
    # Create file name for the image based on room ID so we can use it from the game
    filename = roomid + ".png"
    image_file = IMG_DIR / filename
    # write it to storage
    with open(image_file, mode="wb") as png:
        png.write(image_data)