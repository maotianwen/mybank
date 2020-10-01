<template>
  <div class="about">
    <Header title="关于" :needBack="true" />
    <p class="title">关于此应用</p>
    <article>
      这个建设银行是我的毕业设计，其源代码都部署在https://github.com/maotianwen/mybank。主要技术栈也就是Vue和Echarts相关的一些东西。金融类APP都很复杂，我只是脑海中有些想法想实现一下，就做了这个demo。
      <br />
      <p>
        为什么我推荐大家用支付宝扫码体验呢？因为有的功能是通过调用Alipay
        JSSDK实现的，而且支付宝和微信每个人都有，扫码体验很方便。更重要的是，微信的webview只要有路由变化底下就会有个很丑的栏，还会把页面往上挤，那就只能就选择支付宝了。
      </p>
      <p>
        登录是假的，点一下按钮就算登录了，当然这个流程还是要走一下的。搜索我在前端设置了几个关键词，例如“我”、“金”、“登录”、“消息”什么的，主要还是觉得滑出去的效果还不错，就做了这个页面，输入什么都没反应的时候还是有点莫名其妙吧哈哈？？
      </p>
      <p>最后还是要感谢任老师，感谢工作室小伙伴的帮助，也谢谢您能看到这里^_^</p>
    </article>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'About',
  components: {
    Header
  }
};
</script>

<style lang="less" scoped>
.about {
  padding-top: 100px;
  text-align: justify;
  overflow: hidden;
  .title {
    font-size: 46px;
    margin-left: 24px;
    color: @my-blue;
    font-weight: bold;
  }
  article {
    font-size: 26px;
    padding: 12px 24px;
    text-indent: 1em;
    line-height: 2;
    white-space: wrap;
    p {
      margin: 6px 0;
    }
  }
}
</style>
