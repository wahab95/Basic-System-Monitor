module.exports = {
  packagerConfig: {
    //asar:true,
  },
  
  makers: [
    {
      name: '@electron-forge/maker-wix',
      config:{
        language: 1033,
        manufacturer: 'Abdulwahhab'
      },
      icon:'./file.icon'
    },
  ],

  
};