module.exports = {
  title: "Vue.js 정복 캠프 학습 노트",
  description: "나는 오늘 무엇을 배웠는가",
  base: "/learning-note/",
  // head: [
  //   ['link', {
  //     rel: 'icon',
  //     href: '/static/logo.jpg'
  //   }]
  // ],
  themeConfig: {
    sidebar: [
      {
        title: "Reference",
        collapsable: true,
        children: ["/common/fav", "/common/markdown"]
      },
      {
        title: "Day 1",
        collapsable: false,
        children: [
          "/day1/day1",
          "/day1/day1-task",
          "/day1/vuepress",
          "/day1/instance"
        ]
      },
      {
        title: "Day 2",
        collapsable: false,
        children: [
          "/day2/day2",
          "/day2/day2-task",
          "/day2/components",
          "/day2/components-communication",
          "/day2/props",
          "/day2/event-emit"
        ]
      },
      {
        title: "Day 3",
        collapsable: false,
        children: [
          "/day3/day3",
          "/day3/day3-task",
          "/day3/template",
          "/day3/axios",
          "/day3/vue-cli"
        ]
      },
      {
        title: "Day 4",
        collapsable: false,
        children: [
          "/day4/day4", 
          "/day4/day4-task"
        ]
      },
      {
        title: "Day 5",
        collapsable: false,
        children: [
          "/day5/day5", 
          "/day5/day5-task"
        ]
      }
    ]
  }
};
