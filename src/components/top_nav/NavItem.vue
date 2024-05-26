<template>
    <div id="btn-container" @click="selectField">
        <div class="btn" :class="{ selected: field.isSelected }">
            <p>{{ field.name }}</p>
        </div>
        <div class="tab" v-if="field.isSelected"></div>
    </div>
</template>
<script>
export default {
    props: {
        field: {
            type: Object,
            required: true
        }
    },
    methods: {
        selectField() {
            this.$store.commit('selectField', this.field.name);
        }
    }
}
</script>
<style scoped>
.btn {
    padding: 4px 8px;
    color: white;
    font-weight: normal;
}


.tab {
    height: 3px;
    border-radius: 4px;
    background-color: rgb(80, 247, 71);
    width: 100px;
    margin-bottom: 8px;
}

.selected {
    color: rgb(80, 247, 71);
    /* font-weight: bold; */
}

#btn-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    min-width: 110px;
}
</style>