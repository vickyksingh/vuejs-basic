<template>
    <div class="div">
        <slot></slot>
        <h3 v-hilight :class="{change: fontChange}" @mouseenter="fontChange = true" @mouseleave="fontChange = false">This Is Home Component</h3>
        <p>This data is coming from parent <b>{{childData}}</b></p>
        <p>{{datafromHello}}</p>
        <button @click="displayParentData()">DataFromParent</button>
        <button @click="sentToParent()">PassDatatoParent</button>
        <button @click="add()">Mixin alert</button>
        <button @click="confirm()">Mixin alert</button>
        <div ref="divValue">this is div</div>
        <input type="text" ref="inputvalue">
        <button @click="getInputRefValue">getRefsValue</button>
        <button @click="getDivRefValue">getDivRefsValue</button>

    </div>
</template>

<script>
import { eventBus } from '../main';
import { alertMixin} from  './mixIn'

export default {
    props: ['Input'],
    mixins: [alertMixin],
    directives:{

    },
    data(){
      return {
        fontChange: false,
        childData: 'static data',
        dataList: [
        {name: 'vicky', salary: 2300.123},
        {name: 'molu', salary: 2222.222},
        {name: 'sonu', salary: 6666.21},
        {name: 'monu', salary: 2222.0111},

      ],
      heading: 'Heading gets changed from Home component',
      datafromHello: '',
      }
    },

    methods:{
      displayParentData(){
        this.childData = this.Input
      },

      getInputRefValue(){
          console.log(this.$refs.inputvalue.value)
      },
      getDivRefValue(){
          console.log(this.$refs.divValue.innerText)
      },
     

      sentToParent(){
          this.$emit('changeValue', this.dataList)
          this.$emit('myvalue', this.heading)
      }
    },

    created(){
        eventBus.$on('passtoParrent', (event)=>{
            this.datafromHello = event
        })
    }
    
}
</script>

<style  scoped>
.div{
   border: 1px solid black;
   padding: 4px;
   background-color: #00ffff
   
  
}
.change{
    font-size: 34px;
    font-weight: bold
}
</style>