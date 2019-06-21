<template>
    <div>
        <generate-form insite="true" :data="widgetForm" :value="widgetModels" :remote="remoteFuncs" ref="generateForm">

            <template v-slot:blank="scope">
                宽度：<el-input v-model="scope.model.blank.width" style="width: 100px"></el-input>
                高度：<el-input v-model="scope.model.blank.height" style="width: 100px"></el-input>
            </template>
        </generate-form>
    </div>
</template>

<script>
    import GenerateForm from '../components/GenerateForm'
    export default {
        name: "use_form",
        components: {
            GenerateForm
        },
        data(){
            return {
                widgetForm: null,
                widgetModels: null,
                remoteFuncs: null
            }
        }
    }
</script>

<style scoped>

</style>