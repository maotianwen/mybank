<template>
  <div class="all add-padding-bottom">
    <Header title="全部功能" :needBack="true" />
    <Draggable
      v-model="menuList"
      v-bind="dragOptions"
      class="drag-wrapper"
      group="function"
    >
      <div v-for="item in menuList" :key="item.id" class="custom-item">
        <svg-icon :iconClass="item.icon" :className="'flex-icon'" />
        <p>{{ item.name }}</p>
      </div>
    </Draggable>
    <div class="split-line">
      <i></i>
      <p>请长按拖拽自定义您的常用功能</p>
      <i></i>
    </div>
    <Draggable
      v-model="remainList"
      v-bind="dragOptions"
      class="drag-wrapper"
      group="function"
    >
      <div v-for="item in remainList" :key="item.id" class="custom-item">
        <svg-icon :iconClass="item.icon" :className="'flex-icon'" />
        <p>{{ item.name }}</p>
      </div>
    </Draggable>
  </div>
</template>

<script>
import Draggable from 'vuedraggable';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'All',
  components: {
    Draggable
  },
  mounted() {
    this.hideLoading();
    this.menuList = this.customMenu;
    this.remainList = this.remainCustomMenu;
  },
  data() {
    return {
      menuList: [],
      remainList: [],
      dragOptions: {
        ghostClass: 'ghost',
        chosenClass: 'chosen',
        animation: 200
      }
    };
  },
  methods: {
    ...mapMutations(['editMenu', 'hideLoading'])
    // checkMove(event) {
    //   console.log(event.draggedContext.element.id);
    // },
  },
  computed: {
    ...mapState(['customMenu', 'remainCustomMenu'])
  }
};
</script>

<style lang="less" scoped>
.all {
  padding-top: 120px;
  text-align: left;
  // overflow: hidden;
  .drag-wrapper {
    padding-top: 32px;
    font-size: 26px;
    white-space: pre-wrap;
    overflow: hidden;
  }
  .custom-item {
    display: inline-block;
    width: 20%;
    height: 100px;
    margin-bottom: 45px;
    text-align: center;
    .flex-icon {
      transform: scale(1.2);
      margin-bottom: 10px;
    }
  }
}
.chosen {
  // border: 1px solid black;
}
.drag-wrapper {
  overflow: hidden;
  white-space: pre-wrap;
}
.ghost {
  opacity: 0.1;
  background: #c8ebfb;
}
.split-line {
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  color: @my-grey;
  p {
    margin: 0 14px;
  }
  i {
    width: 100px;
    background-color: @my-grey;
    height: 2px;
    border-radius: 4px;
  }
}
</style>
