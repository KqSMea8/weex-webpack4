<!--
  function: formMoneyInput
  author  : wq
  update  : 2018/11/27 16:31
-->
<template>
  <div class="money-input-component">
    <text
       v-if="!isActive"
       class="money-display"
       @click="activeInput"
       :style="displayStyles"
    >{{ formatMoney(value) }}</text>
    <input
       v-else
       ref="input"
       :style="styles"
       class="money-input" type="number"
       :maxlength="maxlength"
       :disabled="disabled"
       :readonly="readonly"
       @input="$emit('input',$event.value)" :value="value" @blur="blurInput" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  name: 'formMoneyInput',
  props: {
    value: {
      type: [Number, String],
      default: 0
    },
    maxlength: {
      type: [String, Number]
    },
    readonly: {
      type: [String, Boolean]
    },
    disabled: {
      type: [String, Boolean]
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isActive: false,
      styles: {}
    };
  },
  computed: {
    isReadOnly() {
      return typeof this.readonly === 'boolean'
        ? this.readonly
        : this.readonly === 'true';
    },
    isDisabled() {
      return typeof this.disabled === 'boolean'
        ? this.disabled
        : this.disabled === 'true';
    },
    isEmpty() {
      return !this.value && this.value !== 0
    },
    displayStyles() {
      let color = this.isEmpty ? '#858585' : this.styles.color
      return { ...this.styles, color };
    }
  },
  mounted() {
    let {
      width, height, color, background, fontSize, backgroundColor, fontFamily, lineHeight
    } = this.$el.style
    this.styles = {
      width,
      lineHeight: lineHeight || height,
      height,
      color,
      fontSize,
      background,
      backgroundColor,
      fontFamily
    }
  },
  methods: {
    formatMoney(val) {
      if (val === '') {
        return this.placeholder;
      }
      let numVal = Number(val) || 0;
      return numVal.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    },
    blurInput() {
      this.isActive = false
      this.$emit('blur')
    },
    //激活输入框
    activeInput() {
      if (this.isReadOnly || this.isDisabled) {
        return false;
      }

      this.isActive = true;
      this.$emit('focus')
      setTimeout(() => {
        this.$refs.input.focus();
      }, 100)
    }
  }
}
</script>

<style lang="sass" type="text/scss" scoped>
  .money-input-component {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .money-input {
    color: $color_content;
    font-size: $font_nav;
    flex: 1;
  }
  .money-display {
    font-size: $font_nav;
    flex: 1;
  }
</style>
