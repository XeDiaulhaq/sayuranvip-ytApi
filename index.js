const axios = require('axios');

function getApiData() {
    const videoUrl = 'https://youtu.be/Uoox9fpmDP0?si=WyhxSSt4hwk-cdRg';  // YouTube video URL
    const apiUrl = `https://sayuran.vip/api/download/yt?url=${encodeURIComponent(videoUrl)}&type=mp4&quality=480`;  // Encoded API URL

    axios.get(apiUrl)
    .then(response => {
        // Print the response data or error message based on the status
        console.log(response.data.status ? 'Data fetched successfully:' : 'Error fetching data:', response.data);
    })
    .catch(error => {
        // Print a generic error message
        console.error('An error occurred:', error.message);
    });
}

getApiData();

// const axios = require('axios');

// function youtube(data) {
//     return new Promise(async (resolve, reject) => {
//         try {
//             // Validate input data
//             if (!data.trim()) {
//                 return reject("Please provide a YouTube link.");
//             }

//             // Check if input is a valid YouTube link
//             const isYouTubeLink = /youtu(\.)?be/gi.test(data);
//             if (!isYouTubeLink) {
//                 return reject("Only YouTube links are supported.");
//             }

//             // Request to the API with the YouTube link
//             const response = await axios.get(`https://sayuran.vip/api/download/yt?url=${encodeURIComponent(data)}&type=mp4&quality=480`);
//             const apiData = response.data;

//             // Check API response status
//             if (!apiData.status) {
//                 return reject("Failed to fetch video data from the API");
//             }

//             // Extract and structure the necessary data
//             const { metadata, download } = apiData.result;
//             const videoInfo = {
//                 title: metadata.title,
//                 description: metadata.description,
//                 thumbnail: metadata.thumbnail,
//                 duration: metadata.duration,
//                 views: metadata.views,
//                 uploadDate: metadata.uploadDate,
//                 author: metadata.author,
//                 downloadLink: download.url,
//                 filename: download.filename,
//             };

//             // Return the structured video information
//             resolve({ type: "download", video: videoInfo });

//         } catch (error) {
//             // Handle errors and provide meaningful messages
//             if (error.response) {
//                 reject(`API error: ${error.response.data.message || 'Unknown error'}`);
//             } else if (error.request) {
//                 reject("No response from the API");
//             } else {
//                 reject(`Error: ${error.message}`);
//             }
//         }
//     });
// }

// // Example usage
// youtube('https://youtu.be/Uoox9fpmDP0?si=WyhxSSt4hwk-cdRg')
//     .then(result => {
//         console.log('Video information:', result);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });


