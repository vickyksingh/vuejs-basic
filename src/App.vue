<template>
  <div>
    <h1 class="h1"  >{{heading |upper-case}}</h1>
    <p style="background-color:lightgreen">{{receivingFromBus}}</p>
    <button  v-on:click="onChange()">Change Heading</button>
    <button @click="addition(10)">add</button>
    <div class="row">
      <div class="col-6">
        <app-hello v-bind:Input="text">
          <h3 slot="heading1">This Heading getting passed by SLOT 1</h3>
          <h2 slot="heading2">This Heading getting passed by SLOT 2</h2>
        </app-hello>
      </div>
      <div class="col-6">
        <app-home v-bind:Input="text" @changeValue ="receiveFromParent = $event" @myvalue="headingFromHome = $event">
          <h4 style="color:#1234ff" >This Heading getting passed by SLOT</h4>
        </app-home>
      </div>
    </div>
    <div >
      <app-contact></app-contact>
    </div>
    <p >
      This Randering DOM using string interpolletion <b>{{ message |titleCase }}</b>
    </p>
    <span v-bind:title="message">Hover your mouse over me for a few seconds
    to see my dynamically bound title!</span>
    <p v-text="message"></p>
    <p v-html="passingHtmlContent"></p>
    <input type="text" v-model.lazy="message">
    <p>this is mouse hover position{{x}},{{y}}</p>
    <img v-if="!isImage" @mousemove="getMousePostion($event)" v-bind:src="img"/>
    <img v-if="isImage" v-bind:src="bgImage"/>
    <button @click="chnageBgImage()">Chnage Image</button>
    <div>
      <p v-if="boolenValue">Now you can see me </p>
       <p v-else-if="boolenValue">Now you can see me  if else block</p>
      <p v-else>Now you can see me because condition is false</p>
    </div>
    <button @click="onAdd()">ADD</button>
    <input type="text" v-model="inputValue" placeholder="serch item" >
    <table>
      <tr>
        <th>Serial No.</th>
        <th> Customer Name</th>
        <th> Per/Day Income</th>
      </tr>
      <tr v-for="(list, index) in filterValue" v-bind:key="index">
        <td>{{index+1}}</td>
        <td>{{list.name}}</td>
        <td>{{list.salary  |toFixed(1) |priceConvert }}</td>
      </tr>
    </table>
    
     
     
    
  </div>
</template>

<script>
import Home from './components/home.vue';

import {eventBus} from './main';
export default {
  // data: function() {
  //   return {
  //     message: "this is vue js class"
  //   };
  // }

  filters:{
    'upper-case': function(value){
      return value.toUpperCase()
    } ,

    titleCase(value){
       return value.replace(/\b\w/g, first => first.toUpperCase()) 
        
    },
    priceConvert(value){
      return `$${value}`
    },
    
  },
  components:{  
    'app-home': Home,
    
  },

  data(){
    return {
      inputValue:'',
      passingHtmlContent: '<h4>passing HTML content from script to view</h4>',
      headingFromHome:'',
      receiveFromParent: [],
      heading:"This is Vue Js", 
      message : 'vue js tutorial',
      img: 'https://i.pinimg.com/originals/aa/7c/82/aa7c829eb316ab1d077a5768188ee622.jpg',
      boolenValue : false,
      istrue:true,
      toggel: true,
      vModel: 'this is from component',
      bgImage: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
      isImage: false,
      text: 'Data from parent',
      receivingFromBus: '',
      x:'',
      y:'',
      
    }
  },
  methods:{

    getMousePostion(e){
      this.x= e.offsetX,
      this.y = e.offsetY
    },

     onChange(){
      this.heading = this.headingFromHome;
      
      
    },
    onAdd(){
      this.receiveFromParent.push(
        {name:'deelip', salary:1111}
      )
    },
    chnageBgImage(){
      this.isImage = !this.isImage
      return this.bgImage;
      
    },

    addition(a){
      console.log(10+a)
    }
  },

  created(){
      eventBus.$on('passtoParrent', (event)=>{
        this.receivingFromBus = event
      })
  },
  computed: {

    filterValue(){
      return this.receiveFromParent.filter((element)=>{
        return element.name.match(this.inputValue)
      })
    } 
  }

};
</script>

<style scoped>
.h1 {
  text-align: center;
  font-weight: bold;
  background-color: #ff1fff;
  margin: 0;
  color: white;
}
img{
  height: 300px;
  width: 100%;
  box-shadow: 3px 3px 5px black;
  margin-top: 8px;
  cursor: pointer;
}
input{
  display: block;
  width: 50%;
  padding: 4px;
  margin: 0
 
}
button{
  background-color: #b2b222;
  color: white

}
input:focus{
   border: 1px solid blue;
}
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even){background-color: #f2f2f2}

th {
  background-color: #4CAF50;
  color: white;
}

.header{
  display: flex;
  flex-direction: row;

}

</style>
