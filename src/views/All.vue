<template>
  <div class="all add-padding-bottom">
    <Header title="全部功能" :needBack="true" />
    <Draggable v-model="menuList" v-bind="dragOptions" class="drag-wrapper">
      <transition-group>
        <div v-for="element in menuList" :key="element.id" class="custom-item">
          {{ element.name }}
        </div>
      </transition-group>
    </Draggable>
    <button @click="() => editMenu(menuList)">确定</button>
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
  },
  data() {
    return {
      menuList: [],
      dragOptions: {
        ghostClass: 'ghost',
        chosenClass: 'chosen',
        animation: 200
      }
    };
  },
  methods: {
    ...mapMutations(['editMenu', 'hideLoading']),
    // checkMove(event) {
    //   console.log(event.draggedContext.element.id);
    // },
    choosePhoto() {
      const options = { type: 0 };
      this.$AP.getLocation(options, res => {
        this.$AP.alert(`${res.city}`);
      });
    }
  },
  computed: {
    ...mapState(['customMenu'])
  }
};
</script>

<style lang="less" scoped>
.all {
  padding-top: 120px;
  .custom-item {
    display: inline-block;
    border: 1px solid black;
    padding: 60px;
    width: 25%;
  }
}
.chosen {
  border: 1px solid black;
}
.drag-wrapper {
  overflow: hidden;
  white-space: pre-wrap;
}
.ghost {
  opacity: 0.1;
  background: #c8ebfb;
}
</style>
