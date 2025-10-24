export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceGroup {
  title: string;
  items: ServiceItem[];
}

export const serviceGroups: ServiceGroup[] = [
  {
    title: "维修与保养",
    items: [
      {
        title: "维修服务",
        description: "提供各类摩托车维修，已有稳定业务（现有在修车辆约 10 台）。",
        icon: "🔧"
      },
      {
        title: "保养服务",
        description: "除发动机大修外，常规与专项保养均可；支持定期保养套餐，保障长期性能稳定。",
        icon: "⚙️"
      },
      {
        title: "长期维护",
        description: "可签长期维护协议，含定期检查、保养与优化。",
        icon: "📋"
      }
    ]
  },
  {
    title: "买卖与寄售",
    items: [
      {
        title: "摩托车买卖",
        description: "二手与新车买卖（业务正在积极推进）。",
        icon: "🏍️"
      },
      {
        title: "电动摩托/电助力车",
        description: "销售及代售服务。",
        icon: "⚡"
      },
      {
        title: "寄卖服务",
        description: "提供车辆寄售渠道与交易撮合。",
        icon: "🤝"
      },
      {
        title: "长期寄存",
        description: "提供长期车辆寄存，含基础维护与定期检查。",
        icon: "🏠"
      }
    ]
  },
  {
    title: "改装与周边",
    items: [
      {
        title: "车辆改装",
        description: "各类改装服务 + 改装零部件销售。",
        icon: "🔧"
      },
      {
        title: "骑行装备",
        description: "提供专业皮衣定制服务（个性化与安全需求）。",
        icon: "👕"
      }
    ]
  },
  {
    title: "教学与培训",
    items: [
      {
        title: "新手培训",
        description: "面向零基础骑手的系统化入门教学。",
        icon: "🎓"
      },
      {
        title: "赛道培训",
        description: "专业赛道课程，提升技术与安全意识。",
        icon: "🏁"
      }
    ]
  },
  {
    title: "运输与道路支持",
    items: [
      {
        title: "包车/拖车/接车",
        description: "到店与赛道往返的运输与救援。",
        icon: "🚛"
      },
      {
        title: "道路救援",
        description: "途中故障的快速响应救援。",
        icon: "🆘"
      }
    ]
  },
  {
    title: "保险与理赔",
    items: [
      {
        title: "保险定损",
        description: "事故车辆定损、保险代办与理赔全流程协助。",
        icon: "📄"
      }
    ]
  }
];

export const emphasisCard = {
  title: "特点总结",
  description: "覆盖维修、保养、改装、买卖、培训、救援的全生命周期服务。提供灵活的长期维护与寄存方案（适合多车或赛道需求用户）。一站式服务，减少多点奔波，提升体验。",
  icon: "⭐"
};
