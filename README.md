# Audible Pirate by AWS

## What is it?
Audible Pirate is a way to convert txt files to mp3 using AWS Polly voice synthesizer. Great for reading any document on the go, without wifi! See documentation at: https://github.com/eheikes/aws-tts <br/>

## You Will Need
- An AWS Account (ideally a free tier)
- Your AWS CLI access token and secret key
- `ffmpeg` installed from https://ffmpeg.org/ and saved and unzipped to this root folder as `ffmpeg`
- NodeJS environment setup
- `npm install aws-tts`

## Example Command
The below command is run from this folder's root directory and output
`aws-tts ./input/the-everything-store-jeff-bezos-and-the-age-of-amazon.txt ./output/the-everything-store-jeff-bezos-and-the-age-of-amazon.mp3 --voice Matthew --ffmpeg ./ffmpeg/bin/ffmpeg --access-key AKIAIAKVN6CY6JNSCJMQ --secret-key gifyXnp9BKGlJ2lUSFze2y7WasR4BkrNQ3s3Jvw0`

`aws-tts ./input/example.txt ./output/example.mp3 --voice Matthew --ffmpeg ./ffmpeg/bin/ffmpeg --access-key AKIAIAKVN6CY6JNSCJMQ --secret-key gifyXnp9BKGlJ2lUSFze2y7WasR4BkrNQ3s3Jvw0`
