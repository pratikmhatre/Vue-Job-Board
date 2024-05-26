<template>
    <form>
        <input-box :label="'Job Title'" :placeholder="'Enter Job Title'" @onChanged="titleChanged"></input-box>
        <input-box :label="'Job Description'" :placeholder="'Enter Job Description'"
            @onChanged="descriptionChanged"></input-box>
        <input-container :label="'Select Field'">
            <label for="fields">
                <select name="job-fields" id="fields" v-model="field">
                    <option v-for="f in getFields" :value="f" :key="f">{{ f }}</option>
                </select>
            </label>
        </input-container>
        <input-container :label="'Select Job Type'">
            <div id="job-types">
                <div>
                    <input type="radio" id="full-time" name="job-type" value="full-time" v-model="type">
                    <label for="full-time">Full-Time</label>
                </div>

                <div>
                    <input type="radio" id="part-time" name="job-type" value="part-time" v-model="type">
                    <label for="part-time">Part-Time</label>
                </div>

                <div>
                    <input type="radio" id="contract" name="job-type" value="contract" v-model="type">
                    <label for="contract">Contract</label>
                </div>
                <div>
                    <input type="radio" id="freelance" name="job-type" value="freelance" v-model="type">
                    <label for="freelance">Freelance</label>
                </div>
            </div>
        </input-container>
        <button @click.prevent="saveJobDetails">Post Job</button>
    </form>
</template>
<style scoped>
.text-input {
    border: 0px;
}

#job-types {
    display: flex;
    flex-direction: row;
    gap: 16px;
    margin-top: 10px;
}

form {
    padding: 50px 250px;
    background: rgb(245, 236, 225);
}

.google-form-input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #ccc;
    padding: 10px;
    font-size: 16px;
    outline: none;
}

.google-form-input:focus {
    border-bottom: 2px solid blue;
    /* Google blue */
}

select {
    border: none;
    border-bottom: 1px solid darkgray;
    padding: 8px 12px;
    margin-top: 4px;
}
</style>
<script>
import InputBox from './InputBox.vue';
import InputContainerSlot from './InputContainerSlot.vue';
import { mapState, mapActions } from 'vuex';
export default {
    components: { InputBox, 'input-container': InputContainerSlot },
    computed: {
        ...mapState(['fields']),
        getFields() {
            return this.fields.filter(field => field !== 'All');
        }
    },
    methods: {
        saveJobDetails() {
            this.saveJob({
                jobTitle : this.title,
                jobDescription : this.description,
                jobType : this.type,
                jobField : this.field,
                isActive : true
            })
            this.$router.back();
        },
        titleChanged(value) {
            this.title = value
        },
        descriptionChanged(value) { this.description = value },

        ...mapActions(['saveJob'])
    },
    data() {
        return {
            title: '',
            description: '',
            type: '',
            field: '',
        }
    },
}
</script>