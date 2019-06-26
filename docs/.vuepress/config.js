module.exports = {
    title: 'Vue.js 정복 캠프 학습 노트',
    description: '나는 오늘 무엇을 배웠는가',
    base: "/learning-note/",
    head: [
    //   ['link', {
    //     rel: 'icon',
    //     href: '/logo.png'
    //   }]
    ],
    themeConfig: {
      sidebar: [
        {
          title: 'Day 1',
          collapsable: false,
          children: [
              '/day1',
              '/day1-task'
          ]
        },
        {
          title: 'Day 2',
          collapsable: false,
          children: [
              '/day2',
              '/day2-task'
          ]
        }
      ],
    }
  }