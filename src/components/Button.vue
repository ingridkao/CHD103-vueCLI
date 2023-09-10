<template>
    <button @click="clickChildEvent">{{ text }}</button>
</template>

<script>
export default{
    // props: ['text'],
    emits: ['clickEvent'],
    props: {
        "text": {
            type: String || Number,
            default: "我是誰"
        }
    },
    data(){
        return {
            // text: '按鈕'
        }
    },
    methods:{
        clickChildEvent(){
            console.log('clickChildEvent');
            this.$emit('clickEvent', this.text)
        }
    }
}
</script>