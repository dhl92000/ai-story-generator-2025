# ☁️🤱🏻OpenAI Bedtime Story Generator

Created with the OpenAI API and Express.js, the story generator displays a peaceful bedtime story for children.  

## The Inspiration
I wanted to create a simple project to play with the OpenAI API. Prompting a language model to to generate text seemed like the first step, so I thought of a fun theme to go along with it.

## How It's Made
![Kapture 2025-05-24 at 17 49 15](https://github.com/user-attachments/assets/d939763b-438a-4ae8-a1d4-899fb13569a8)
Users can press the button to generate a story that's displayed on a simple interface written with EJS.

This project was made with Express.js. The input for the OpenAI language model is located in a request handler and is as follows: "Write a 6 sentence bedtime story about a cute animal". 

## Future Features
- Using the image API to generate  a new image based on the initially generated story.
- The OpenAPI also has a speech feature to turn text into naturally sounding speech.
