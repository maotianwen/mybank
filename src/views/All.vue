<template>
  <div class="all">
    <Draggable v-model="test" v-bind="dragOptions">
      <transition-group>
        <div v-for="element in test" :key="element.id" class="custom-item">
          {{ element.text }}
        </div>
      </transition-group>
    </Draggable>
    <StairAnimation :list="otherTest" />
    <p @click="choosePhoto">点击选照片</p>
  </div>
</template>

<script>
import Draggable from 'vuedraggable';
import StairAnimation from '@/components/StairAnimation';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export default {
  name: 'All',
  components: {
    Draggable,
    StairAnimation
  },
  data() {
    return {
      test: arr.map(item => {
        return { text: `${item}号`, id: item };
      }),
      otherTest: arr.map(item => {
        return { text: `${item}号`, id: item };
      }),
      dragOptions: {
        ghostClass: 'ghost',
        chosenClass: 'chosen',
        animation: 200
      }
    };
  },
  methods: {
    checkMove(event) {
      console.log(event.draggedContext.element.id);
    },
    choosePhoto() {
      const options = { type: 0 };
      this.$AP.getLocation(options, res => {
        this.$AP.alert(`${res.city}`);
      });
    }
  },
  computed: {}
};
</script>

<style lang="less" scoped>
.all {
  .custom-item {
    display: inline-block;
    border: 1px solid black;
    padding: 60px;
  }
}
.chosen {
  border: 1px solid black;
}
.ghost {
  opacity: 0.1;
  background: #c8ebfb;
}

.list-move {
  transition: all 0.5s;
}
.tt {
  border: 1px solid black;
}
</style>
