<template>
    <input-container :label="label">
        <div id="input-box">
            <input type="text" id="input" :placeholder="placeholder" name="input" @input="handleChange" ref="input">
        </div>
    </input-container>
</template>
<style scoped>
#input-box {
    padding-right: 20px;
}

#input {
    width: 300px;
    border: none;
    outline: none;
    border-bottom: 1px solid gray;
    padding: 10px;
    font-size: 16px;
}

#input:focus {
    border: none;
    outline: none;
    border-bottom: 1px solid blue;
}
</style>
<script>
import InputContainerSlot from './InputContainerSlot.vue';
export default {
    components: {
        'input-container': InputContainerSlot
    },
    props: {
        label: {
            type: String, default: 'Enter text below'
        },
        placeholder: {
            type: String, required: true
        },
    },
    methods:{
        handleChange(){
            this.$emit('onChanged', this.$refs.input.value);
        }
    }
}
</script>