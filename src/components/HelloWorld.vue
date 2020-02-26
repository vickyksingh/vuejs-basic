<template>
  <div class="div">
    <slot name="heading2"></slot>
    <h3 :class="{class1:hover}" @mouseenter="hover = true" @mouseleave="hover = false">This is HelloWorld component</h3>
    <slot name="heading1"></slot>
    <p v-bgDirective  >This data is coming from parent <b>{{childData}}</b></p>
    <button @click="displayParentData()">DataFromParent</button>
    <button @click="passtoParentWithBus()">DataToParentBus</button>
    <p v-bgOnUserValue="'red'">this is value</p>
  </div>
</template>
<script>
import {eventBus} from '../main.js'
export default {
  directives:{
    'bgDirective' : {
      bind(el){
        el.style.backgroundColor = 'gray'
      }
    },
    'bgOnUserValue':{
      bind(el, binding){
        el.style.color = binding.value
      }
    }
  },
    props:['Input'],
    data(){
      return {
        childData: 'static data',
        childtoParent: 'data passing through event bus',
        hover: false
      }
    },

    methods:{
      displayParentData(){
        this.childData = this.Input
      },

      passtoParentWithBus(){

          eventBus.$emit('passtoParrent', this.childtoParent)
      },
      mouseEffect(el){
        el.style.color = 'green'
      }
    }
    
}

</script>
<style scoped >
.class1{
  background-color: aqua
}
 h3{
   text-align: center;
 }
 .div{
   background-color: antiquewhite;
   border: 1px solid black
   
 } 
</style>