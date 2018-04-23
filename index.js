

const warning = 'DO NOT USE THIS SCRIPT, THE AWS-TTS one is way better. Amazing! Look at the README.md file!'
console.log(warning)



// const fs = require('fs')
// const AWS = require('aws-sdk')
// const polly = new AWS.Polly({
//   region: 'us-east-1'
// })
// const s3 = new AWS.S3({
//   region: 'us-east-1'
// })
//
// fs.readFile("./input/the-everything-store-jeff-bezos-and-the-age-of-amazon.txt", "utf8", function(err, data) {
//   console.log('===> Successfully read text from file...')
//   // console.log(data)
//   const limit = 1400
//   const totalChars = data.length
//   const totalLoops = totalChars / limit
//
//   let start = 0
//   let end = 1200
//   for (let x = 0; x < 2; x++) {
//     setTimeout(() => {
//       initiatePolly(data.slice(start, end), x)
//     }, 100*x)
//     start = end
//     end = end + limit
//   }
// })
//
//
// const initiatePolly = (inputText, index) => {
//   console.log('===> Initiating AWS Polly...')
//   console.log(inputText)
//   var params = {
//     OutputFormat: "mp3",
//     SampleRate: "8000",
//     Text: inputText,
//     TextType: "text",
//     VoiceId: "Matthew"
//   }
//   polly.synthesizeSpeech(params, function(err, data) {
//    if (err) {
//      // an error occurred
//      console.log(err, err.stack)
//    } else {
//      console.log('===> Successfully synthesized speech...')
//      // successful response
//      /*
//        data = {
//         AudioStream: <Binary String>,
//         ContentType: "audio/mpeg",
//         RequestCharacters: 37
//        }
//      */
//      console.log(data)
//      uploadToS3(data.AudioStream, index)
//    }
//   })
// }
//
// const uploadToS3 = (AudioBinaryString, index) => {
//   console.log('===> Uploading audio to S3...')
//   const timeStamp = new Date().getTime()
//   var params = {
//     ACL: 'public-read',
//     Body: AudioBinaryString,
//     Bucket: "audible-pirate-by-aws",
//     Key: `${timeStamp}-pt-${index}-the-everything-store-jeff-bezos-and-the-age-of-amazon.mp3`,
//   }
//   s3.putObject(params, function(err, data) {
//      if (err) {
//        // an error occurred
//        console.log(err, err.stack)
//      } else {
//        console.log('===> Successfully saved audio to S3')
//        // successful response
//        /*
//          data = {
//           ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"",
//           ServerSideEncryption: "AES256",
//           VersionId: "Ri.vC6qVlA4dEnjgRV4ZHsHoFIjqEMNt"
//          }
//        */
//        console.log('========== SUCCESSFULLY UPLOADED POLLY SPEECH ==========')
//        console.log(data)
//      }
//   })
// }
