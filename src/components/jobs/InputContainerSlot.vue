
<template>
    <div class="input-container">
        <label for="input">{{ label }}</label>
        <slot></slot>
    </div>
</template>
<style scoped>
.input-container{
    border: 1px solid #EEEEEE;
    border-radius: 8px;
    background-color: white;
    /* margin: 20px 250px; */
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: start;
}
label{
    margin-left: 6px;
    color: darkgray;
}

</style>
<script>
export default{
    props : {
        label : String,
    }
}
</script>