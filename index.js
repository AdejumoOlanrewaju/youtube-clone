// let videoCardContainer = document.getElementById("Videos-grid")
// // console.log(videoCardContainer)

// let api_key = "AIzaSyA_vB-TuvO3uJ5onJFhDgCJHe8Sr0DRZNs"
// let video_http = "https://www.googleapis.com/youtube/v3/videos?"
// let channel_http = "https://www.googleapis.com/youtube/v3/channels?"

// fetch(video_http + new URLSearchParams({
//   key : api_key,
//   part : 'snippet',
//   chart : 'mostPopular',
//   maxResults : 50,
//   regionCode : 'NG'
// }))
// .then(res => res.json())
// .then(data => {
//   // console.log(data)
//   data.items.forEach(item =>{
//       getChannelIcon(item)
//   })
// })
// .catch(err => console.log(err))

// let getChannelIcon = (video_data) => {(
//       fetch(channel_http + new URLSearchParams({
//         key : api_key,
//         part : 'snippet',
//         id : video_data.snippet.channelId,
//       }))
//       .then(res => res.json())
//       .then(data => {
//         video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url
//         makeVideoCard(video_data)
//       })
// )}

// let makeVideoCard = (data)=>{
//   videoCardContainer.innerHTML += `
//   <div class = "Videos" onclick = "location.href = 'https://youtube.com/watch?v=${data.id}'">
//     <img src = "${data.snippet.thumbnails.high.url}" alt = "" class = "money">
//     <div class = "content">
//       <div>
//         <img src = "${data.channelThumbnail}" alt = "" class = "channel-icon"/>
//       </div>

//       <div class = "context-text-container">
//         <h3 class = "context-text">${data.snippet.title}</h3>             
//         <p class = "context-text2">${data.snippet.channelTitle}</p>
//         <p class = "context-text3">4.6K views ° 4 months ago</p>
//       </div>

//       <div class = "more">
//         <img src = "./images2/more.png" alt = "more-icon" class = "more-icon">
//       </div>
//   </div>
//   `
// }


// let searchInput = document.getElementById("search-input")
// let searchBtn = document.getElementById("search-btn")

// let searchLink = "https://www.youtube.com/results?search_query="

// searchBtn.addEventListener("click", function(){
//   if(searchInput.value.length){
//        location.href = searchLink + searchInput.value 
//   }
// })