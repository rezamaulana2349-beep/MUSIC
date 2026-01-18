

module.exports = {
  TOKEN: "MTQ2MDM0NzI3Mzg5OTkzMzcwNg.GjjmFh.xUI1FPI3O8XzURzvCfFp7cfzOUYmFlh9Qttoos",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://shiva:shiva@musicbotyt.ouljywv.mongodb.net/?retryWrites=true&w=majority",
  spotifyClientId : "1462317621323104256",
  spotifyClientSecret : "1462317621323104256",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5,
  showProgressBar: false,  // Show progress bar in track embed
  showVisualizer: false,  // Show visualizer on music card (disabled for low-memory optimization)
  generateSongCard: true,  // custom song card image, if false uses thumbnail
  // Performance optimizations for low-memory environments (512MB RAM)
  lowMemoryMode: true,  // Enable optimizations for low-memory hosting
  errorLog: "", 
  nodes: [
     {
      name: "GlceYT",
      password: "glace",
      host: "de-01.strixnodes.com",
      port: 2010,
      secure: false
    }
  ]
}
