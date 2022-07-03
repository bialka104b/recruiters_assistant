<template>class HelloWorld extends AppVue</template>
<script lang="ts">
import AppVue from "@/App.vue"
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class HelloWorld extends AppVue{
  public clickMe(): void {
    console.log('clicked')
    console.log(this.addNum(4, 2))
  }
  public addNum(num1: number, num2: number): number {
    return num1 + num2
  }
}
</script>