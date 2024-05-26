import {createStore} from 'vuex';

export default createStore({
    namespaced : false,
    state(){
        return {
            jobs : [],
            selectedField : 'Android Development',
            fields : ['Android Development', 'Frontend Development', 'Backend Development', 'Fullstack Development', 'Blockchain Development']
        };
    },
    mutations : {
        addJob(state, jobData){
            const id = state.jobs[state.jobs.length - 1].id || 1;
            const job = {
                id : id,
                ...jobData
            }
            state.jobs.push(job);
        },
        selectField(state, name){
            console.log('Selecting field : ', name);
            state.selectedField = name;
        }

    },
    actions : {},
    getters : {
        fieldsList(state){
            return state.fields.map(f => {
                return {name : f, isSelected : f == state.selectedField}
            });
        }        
    }
});