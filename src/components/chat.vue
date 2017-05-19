<template lang="pug">

  div
    b-btn(v-b-toggle="'chat'") chattons gaiment !
    b-collapse#chat(@newMessage='io')
      textarea(@keydown.13="submit" v-model="msg" placeholder="poutre du texte")
      .discussion
        ul
          li(v-for="msg in discussion", v-text='msg')

</template>

<script >
export default{
  data(){
    return{
      msg: "",
      discussion: [],
    }
  },
  methods:{
    io(){
      console.log('io');
    },
    submit(){
      if (this.msg.length > 0) {
        this.$socket.emit('newMsg', this.msg)
        this.msg = '';
      }
    }
  }
}
</script>

<style lang="sass">
  
  #chat
    display: flex
  .discussion
    overflow: scroll
    width: 100%
    height: 20vh
    background-color: grey     
    color: white


</style>