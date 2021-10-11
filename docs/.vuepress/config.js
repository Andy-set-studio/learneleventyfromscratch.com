module.exports = {
  head: [
    [
      'script',
      {
        'src': 'https://cdn.usefathom.com/script.js',
        'data-site': 'IAIRUTCT',
        'defer': true
      },
      ''
    ],
    [
      'script',
      {defer: true},
      `
      navigator.serviceWorker.getRegistrations().then(function(registrations) {
       for(let registration of registrations) {
        registration.unregister()
      } })
    `
    ]
  ],
  themeConfig: {
    sidebar: [
      ['/', 'Learn Eleventy From Scratch'],
      '/lesson/1',
      '/lesson/2',
      '/lesson/3',
      '/lesson/4',
      '/lesson/5',
      '/lesson/6',
      '/lesson/7',
      '/lesson/8',
      '/lesson/9',
      '/lesson/10',
      '/lesson/11',
      '/lesson/12',
      '/lesson/13',
      '/lesson/14',
      '/lesson/15',
      '/lesson/16',
      '/lesson/17',
      '/lesson/18',
      '/lesson/19',
      '/lesson/20',
      '/lesson/21',
      '/lesson/22',
      '/lesson/23',
      '/lesson/24',
      '/lesson/25',
      '/lesson/26',
      '/lesson/27',
      '/lesson/28',
      '/lesson/29',
      '/lesson/30',
      '/lesson/31'
    ]
  },
  title: 'Learn Eleventy From Scratch',
  description:
    'Learn how to build a stunning website from scratch with this Eleventy course.'
};
