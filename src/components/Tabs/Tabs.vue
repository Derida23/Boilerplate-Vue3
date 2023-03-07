<script setup>
import { toRef, computed } from "vue";

const props = defineProps({
  options: {
    type: Array,
    required: true,
    default: () => [],
  },
  modelValue: {
    type: [String, Number],
    default: null,
  },
});

const emit = defineEmits(["update:modelValue"]);

const active = toRef(props, "modelValue");

const activeIndex = computed(() => {
  return props.options.findIndex((option) => option.key === active.value);
});

const onTabChange = (value) => {
  emit("update:modelValue", value);
};

const indicatorWidth = 100 / props.options.length;

const leftPosition = computed(() => {
  const left = activeIndex.value * indicatorWidth;
  const position = left === 0 ? 3 : left - 3;

  return `${position}%`;
});
</script>

<template>
  <div>
    <div :class="['tab-wrapper pointer', `grid-cols-${props.options.length}`]">
      <div
        v-for="tab in props.options"
        :key="tab.key"
        :class="['tab-item', { active: modelValue === tab.key }]"
        @click="onTabChange(tab.key)"
      >
        {{ tab.label }}
      </div>
      <div
        class="indicator"
        :style="{
          width: `${indicatorWidth}%`,
          left: leftPosition,
        }"
      />
    </div>
  </div>
</template>

<style src="./style.scss"></style>
