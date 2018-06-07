import {
    createClient
  } from 'contentful'
  
  var contentfulClient = createClient({
      space: 'qjse02h6ntwf',
      accessToken: '11831735a43ec8323b20feeea9434daee218a36f946b521b38651c231a04ef9f'
    })
  
  var ContentfulPlugin = {}
  ContentfulPlugin.install = function (Vue, options) {
    Vue.prototype.$c = contentfulClient
  }
  
//   ContentfulPlugin.getLang = function(lang) {
//     return contentfulClient.getEntry("7svtXlu1aM6e6e2Q6IqweU",{locale:lang})
//   }
  
  export default ContentfulPlugin;