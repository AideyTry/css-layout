<template>
  <div class="note-box" ref="noteBox">
    <div class="note-view fl" v-for="(item, index) in noteList" :key="index">
      <div class="note">
        <div class="note-info">
          <div class="note-pic">
            <img :src="item.src" alt="">
          </div>
          <h3>{{item.explain}}
          </h3>
        </div>
        <div class="note-handle">
          <div class="comment">
            <img :src="item.avatarSrc" class="avatar" alt="">
            <span class="title">{{item.name}}</span>
          </div>
          <div class="like">
            <i></i>
            <span>{{item.like}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      noteList: [
        {
          src: '//ci.xiaohongshu.com/7507da43-ffe0-4b49-be7f-b199d5a26f8f@r_640w_640h.jpg',
          explain: `【Rita实验室】用垃圾做收纳盒
每次做【Rita实验室】都🤩🤩🤩水波纹拍照我不会，用美之泉泡泡拍照可还行😂😂
小红书最近ins镜面风卧室软装～
本来录了完整的卧室介绍～但是太长了放5⃣️部精彩到让人窒息的悬疑电影，不看太可惜了！丨
由于自己`,
          avatarSrc: 'https://img.xiaohongshu.com/avatar/5b3b6c6614de41475677f1cd.jpg@80w_80h_90q_1e_1c_1x.jpg',
          name: 'RitatawangRitatawang',
          like: '832'
        },
        {
          src: '//ci.xiaohongshu.com/9f2a6fc6-563c-43ea-b877-c9ee52e02bc3@r_640w_640h.jpg',
          explain: `Get切水果蔬菜神器！妈妈再也不担心我切到手手哈哈哈
很舒爽那些年我们一起追过的偶像剧(续)🍃
那些属于我们的美好回忆前几天我的初恋突然联系到我 我以为是他要结婚了 这一类的套路最新话题 | 王者荣耀吃鸡版正确打开方式
本薯今天就来给指甲油控再上线！
这次有bling bling的颜色出现，快`,
          avatarSrc: 'https://img.xiaohongshu.com/avatar/5ac85e23d1d3b90d20dc3c6e.jpg@80w_80h_90q_1e_1c_1x.jpg',
          name: 'Vier钟金琪',
          like: '1644'
        },
        {
          src: '//ci.xiaohongshu.com/72c715e8-62fd-49ec-807f-60f367033605@r_640w_640h.jpg',
          explain: `#app推荐  那些很文艺的app 简单明了给大家介绍一下
【美观又实惠的隐形矫正 | 360美牙】
其实我高中的时候就备婚季之出门服挑选！试的每套秀禾龙凤褂都美哭了😭！
婚礼准一分钟视频把我整崩溃了 😭你们将就看吧 #好物 这是小红书双眼皮做失败案例！！！！亲身经历！
2018.1.22做的～`,
          avatarSrc: 'https://img.xiaohongshu.com/avatar/5b4c0a8bd2c8a530d011a865.jpg@80w_80h_90q_1e_1c_1x.jpg',
          name: 'FrannieJerne洪辰瑶Kelly张嘉倪nicole豆豆豆豆豆皮儿',
          like: '764'
        },
        {
          src: '//ci.xiaohongshu.com/923532aa-2ada-4171-99fb-3f4daf6daaad@r_640w_640h.jpg',
          explain: `比《延禧攻略》更赞的是乾隆爱了富察皇后40年，堪比如今任何一怀孕的那些事，你必须知道的这些事1️⃣
用宝贝冉冉的照片做封#治愈系书单  ｜《母爱的羁绊》
✨简介：爱来自父母 令人悲强烈安利——为了你我愿意热爱整个世界‼️
爽妹子也迎来了荧幕异地恋＋军恋4⃣  奔现💑
在经历两个月网恋后我们终于奔现`,
          avatarSrc: 'https://img.xiaohongshu.com/avatar/5a30eb1fd1d3b923952b080b.jpg@80w_80h_90q_1e_1c_1x.jpg',
          name: '吾皇万万sui冉冉momzombie是Tianhui呀💕巴咔拉嚓S',
          like: '783'
        },
        {
          src: '//ci.xiaohongshu.com/005eed21-9e28-4bc0-854f-74f87a4e3dea@r_640w_640h.jpg',
          explain: `这几天上海的天气忽冷忽热的，热的时候就像掉到了火坑，冷起来好备��季之出门服挑选！试的每套秀禾龙凤褂都美哭了😭！
婚礼准怀孕的那些事，你必须知道的这些事1️⃣
用宝贝冉冉的照片做封《爸爸去哪儿6》明星阵容曝光，瞬间觉得还是想pick她！😍最新话题 | 王者荣耀吃鸡版正确打开方式
本薯今天就来给`,
          avatarSrc: 'https://img.xiaohongshu.com/avatar/5b53488414de4103e019b4a1.jpg@80w_80h_90q_1e_1c_1x.jpg',
          name: '念华华洪辰瑶Kelly冉冉mom娱老爷游戏薯',
          like: '373'
        },
        {
          src: '//ci.xiaohongshu.com/af8ea21e-d420-4e36-aab0-9bfb644c0b8a@r_640w_640h.jpg',
          explain: `【美观又实惠的隐形矫正 | 360美牙】
其实我高中的时候就各行业大佬轮番被爆性骚扰，而处于弱势依然不敢发声的女生又有多Get切水果蔬菜神器！妈妈再也不担心我切到手手哈哈哈
很舒爽简单到极致的蒜蓉粉丝娃娃菜，上锅蒸就好吃到爆
孙大爷小吃部第我是这样培养Eva自信乐观的性格 个人认为自信乐观的性格非常`,
          avatarSrc: 'https://img.xiaohongshu.com/avatar/5b487acd14de411ec3b830b5.jpg@80w_80h_90q_1e_1c_1x.jpg',
          name: 'JerneNikko大宁Vier孙大爷的小吃部混血Eva妈',
          like: '126'
        },
        {
          src: '//ci.xiaohongshu.com/ff977d39-3ff6-4a55-879a-a68fd17dfb5a@r_640w_640h.jpg',
          explain: `先祝一下🎂
💙美丽漂亮而又有才华的16岁小美女生日快乐�Nabi 日常穿搭😈
今日穿搭⋯
紫色系算是今年我最愛之一世上好看的裙子那么多，我偏偏宠爱这九个品牌。
最近一直在挑选腹黑女主、最美清装、高级色🌟这样的于妈剧竟好看到犯规💫
买小包必看 | 经典款迷你包，都能放下多少东西？
迷你包轻巧`,
          avatarSrc: 'https://img.xiaohongshu.com/avatar/5b04fd9714de41169539202f.jpg@80w_80h_90q_1e_1c_1x.jpg',
          name: 'Rob🌲欧阳娜娜Nana凌听雨小妖娱包先生',
          like: '121'
        },
        {
          src: '//ci.xiaohongshu.com/a5a9a27f-dbe2-4dd4-b965-8dfc16c889b7@r_640w_640h.jpg',
          explain: `🥗大甜甜探店 | O-POKE波奇饭，颜值与美味并存
🌾帽子、帽子、帽子、重要的喜好说三遍……👮
进组拍戏带了几十夜间出街造型推荐
大家好 今天我是在夜里出没的最靓的仔 一身系统性总结一些日常拍照pose
拍照嘛 首先姿势是不能输的！碎花少女穿搭&滤镜分享`,
          avatarSrc: 'https://img.xiaohongshu.com/avatar/5b2637b1b46c5d71de4f5794.jpg@80w_80h_90q_1e_1c_1x.jpg',
          name: 'Sour大甜甜菅纫姿艾福杰尼hello我���沱沱Ritatawang',
          like: '585'
        },
        {
          src: '//ci.xiaohongshu.com/43cb20cf-ed85-4577-8394-96d135c86d21@r_640w_640h.jpg',
          explain: `Nabi 日常穿搭🍒
今天收工晚⋯
但是还是拍了个穿搭⋯
💜BIGBANG《花路》原创编舞，旁边的小朋友太抢镜了#每日穿分享一下香港日常碎碎念👏🏻👏🏻
这几天在HK太忙了 防弹少年团《Not today》
现在的人为了拍照真的是太拼`,
          avatarSrc: 'https://img.xiaohongshu.com/avatar/5a896612b46c5d03574748c1.jpg@80w_80h_90q_1e_1c_1x.jpg',
          name: '欧阳娜娜NanaRitatawang不齐舞团陈白羊队长CAIN',
          like: '222'
        },
        {
          src: '//ci.xiaohongshu.com/cc874f6c-fc85-4eb4-85db-a6f06af56325@r_640w_640h.jpg',
          explain: `🦀️韩国正宗的酱油蟹在上海就能吃到！
非常怀念上海的古羊路五台山之旅|朝圣，在佛国净土洗礼
六月参加了大五朝台之旅40哈利波特的蒸汽小火车🚂
乘火车去Windermere。
慢Ins被遗忘的矿区“天空之城”拍摄地（中国台湾）
——为了迅观摩世界上最著名足球场之一ꉂ ೭(˵¯̴͒ꇴ¯̴͒˵)౨”`,
          avatarSrc: 'https://img.xiaohongshu.com/avatar/5ae8a7d3d2c8a52d144570a2.jpg@80w_80h_90q_1e_1c_1x.jpg',
          name: '田大官人SAINT大睿睿思远Glenindiv启豪Kaiho',
          like: '277'
        },
        {
          src: '//ci.xiaohongshu.com/6ebc16bd-0ed0-48b0-ad95-1cc4f473644a@r_640w_640h.jpg',
          explain: `希望这样美好的瞬间未来不要成为一种痛苦的回忆【保护海龟】
海国产进口疫苗攻略👶🏻
今天看到那么多关于疫苗报道
作为老☀️周末#三源里菜市场#
第一次来三源里超市，传说中的网红菜👪北京十三陵 景点打卡👪
最近爸妈来北京了
老头子特别爱周迅的脱口秀，狠狠打脸了流量明星
今天小慈想跟大家聊聊中国演`,
          avatarSrc: 'https://img.xiaohongshu.com/avatar/5b3e6912d2c8a551c976b60f.jpg@80w_80h_90q_1e_1c_1x.jpg',
          name: '鹤鹤予陈白羊迟恺ChikaiAntony.W于念慈',
          like: '1082'
        },
        {
          src: '//ci.xiaohongshu.com/c9eb74d5-0d2f-4aa0-8202-bcfdaec56daa@r_640w_640h.jpg',
          explain: `踏入非洲般的餐厅-The Animal Café
喜欢猫的朋“就在这里守望，直到世界尽头。”🏀
坐着小火车去了《灌篮高江浙沪附近最美欧式庄园民宿，分分钟拍出ins大片
前段时间和「日系风格男生怎么穿搭？」分享给小仙女的小哥哥们
第一次分享Supreme X Rimowa 日默瓦 一款巨帅的行李箱`,
          avatarSrc: 'https://img.xiaohongshu.com/avatar/5b3e6912d2c8a551c976b60f.jpg@80w_80h_90q_1e_1c_1x.jpg',
          name: 'Fino飞龙Irene林恩如凌听雨刘元凯KK李星默',
          like: '815'
        },
        {
          src: '//ci.xiaohongshu.com/2a9a50d9-f4ad-44a9-9c70-dcd767a430bd@r_640w_640h.jpg',
          explain: `闪现英国🇬🇧
#旅行 #英国旅行 #旅行记录 #最美旅行【旅行必备💊药品大全】应对国内外一切出行，一个小包就能收纳找个两米多的IT大叔老哥哥就结婚呗年轻“冲动”过了值啦！🐱#东京 Day 2 Vlog🦉猫头鹰也太可爱了吧！！！
#Peepo Cafe，可能是全上海最懂少女心的cafe了
就`,
          avatarSrc: 'https://img.xiaohongshu.com/avatar/57ec20f102f37d648645cde7.jpg@80w_80h_90q_1e_1c_1x.jpg',
          name: '大睿睿十六院长SilviaIrene林恩如汤汤圆滚滚',
          like: '643'
        },
        {
          src: '//ci.xiaohongshu.com/c895e891-2477-4bbf-b65f-ed73f94c7951@r_640w_640h.jpg',
          explain: `#ootd 是男朋友在UR挑的印花衬衫啊[活力]
如题，花衣西藏游记 | 在冈仁波齐和普兰边贸市场分享它们的馈赠
开到冈闪现英国🇬🇧
#��行 #英国旅行 #旅行记录 #最美旅行很少穿浅色系的衣服，不过夏天还是浅色比较清爽一点。所以最近特欧洲宫廷风+年度最污英剧💅🏻名姝第二季你追了吗？
✨He`,
          avatarSrc: 'https://img.xiaohongshu.com/avatar/59d11266b46c5d33c9a83f2f.jpg@80w_80h_90q_1e_1c_1x.jpg',
          name: '洪辰瑶Kelly黄雅莉大睿睿詹小猪Cocociciwestwood',
          like: '2741'
        }
      ]
    }
  },
  mounted () {
    this.waterFall()
  },
  methods: {
    getClient () {
      return {
        width: window.innerWidth || document.codumentElement.clientWidth || document.body.clientWidth || 0,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
      }
    },
    getScroll () {
      return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
      }
    },
    getMin (arr) {
      let min = arr[0]
      let index = 0
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
          min = arr[i]
          index = i
        }
      }
      return index
    },
    waterFall () {
      // 1、确定一行有多少张图片
      let pageWidth = this.$refs.noteBox.offsetWidth
      let items = this.$refs.noteBox.children
      let itemWidth = items[0].offsetWidth
      let columns = parseInt(pageWidth / itemWidth)
      // 2.把第一行所有的盒子的高度存到一个数组里面去
      let arr = []
      for (let i = 0; i < columns; i++) {
        arr.push(items[i].offsetHeight)
      }
      //  3.对于后面的图片使用定位
      let assign = (div) => {
        div.style.position = 'absolute'
        let index = this.getMin(arr)
        div.style.left = items[index].offsetLeft - 15 + 'px'
        div.style.top = arr[index] + 'px'
        arr[index] = arr[index] + div.offsetHeight
      }
      for (let i = columns; i < items.length; i++) {
        let div = items[i]
        assign(div)
      }
      let vm = this
      window.onscroll = function () {
        let pageHeight = vm.getClient().height
        let scrollTop = vm.getScroll().top
        let lastTop = items[items.length - 1].offsetTop
        if (pageHeight + scrollTop >= lastTop) {
          for (let i = 0; i < vm.noteList.length; i++) {
            let div = document.createElement('div')
            div.style = 'width:250px;margin: 0 15px;'
            div.innerHTML = `<div style="display:block;
        background-color: #fff;
        box-shadow:0 1px 2px 0 rgba(0,0,0,0.1);
        border-radius:8px;
        overflow:hidden;
        position:relative;"><div style="position:relative;
          overflow:hidden;
          width:100%;
          height:100%;
          display:block;"><div><img style="width:250px;" src="${vm.noteList[i].src}" alt=""></div><h3 style="display:-webkit-box;
            -webkit-box-orient:vertical;
            -webkit-line-clamp:2;
            color:#000;
            font-size:16px;
            font-weight: normal;
            white-space:initial;
            margin:13px 15px 11px 15px;
            line-height:23px;
            overflow:hidden;
            text-overflow:ellipsis;">{{${vm.noteList[i].explain}}}</h3></div><div style="padding:0 15px 10px 15px;
          overflow:hidden;
          display:flex;"><div style="flex:1;"><img style="display:block;
              float:left;
              width:28px;
              height:28px;
              border-radius:50%;" src="${vm.noteList[i].avatarSrc}"><span style="display: block;
              float:left;
              margin-left: 10px;
              line-height: 31px;
              color: #555;
              font-weight: 350;
              width: 115px;
              height: 26px;
              overflow: hidden;
              white-space: nowrap;
              word-wrap: normal;
              -o-text-overflow: ellipsis;
              text-overflow: ellipsis;">${vm.noteList[i].name}</span></div><div style="margin:3px 0 0 0;"><i></i><span style="vertical-align: middle;
            color: #555;">${vm.noteList[i].like}</span></div></div></div>`
            console.log('div=', div)
            vm.$refs.noteBox.appendChild(div)
            assign(div)
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/index";
@import "./index";
</style>
