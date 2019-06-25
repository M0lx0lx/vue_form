<template>
    <div>
        <div style="display: flex;justify-content: space-between;padding: 30px;">
            <div>{{title}}</div>
            <el-button-group>
                <el-button type="primary" @click='submit_v'>提交</el-button>
                <el-button type="primary" @click='save_v'>保存</el-button>
                <el-button type="primary" @click='print_v'>打印</el-button>
            </el-button-group>
        </div>
        <generate-form insite="true" id="print_area" :data="test_data" :value="widgetModels" :remote="remoteFuncs" ref="generateForm" style="max-width: 960px;margin: 100px auto auto;">
            <template v-slot:blank="scope">
                宽度：<el-input v-model="scope.model.blank.width" style="width: 100px"></el-input>
                高度：<el-input v-model="scope.model.blank.height" style="width: 100px"></el-input>
            </template>
        </generate-form>
    </div>
</template>

<script>
    import GenerateForm from '../components/GenerateForm'
    import {print_page} from '../util/index.js'
    export default {
        name: "use_form",
        components: {
            GenerateForm
        },
        data(){
            return {
                widgetForm: null,
                widgetModels: null,
                remoteFuncs: null,
                hint: '员工 键盘侠 在开始时间2019-06-20 17:00和结束时间2019-06-2 19:00的时间段内已经存在记录！',
                title: '流程处理-请假申请个人-退回',
                title_sub: '请假申请',
                test_data: {
                    "list": [
                        {
                            "type": "textarea",
                            "name": "多行文本",
                            "icon": "icon-diy-com-textarea",
                            "options": {
                                "width": "100%",
                                "defaultValue": "",
                                "required": true,
                                "disabled": false,
                                "pattern": "",
                                "placeholder": "",
                                "remoteFunc": "func_1561355481000_45032"
                            },
                            "key": "1561355481000_45032",
                            "model": "textarea_1561355481000_45032",
                            "rules": [
                                {
                                    "required": true,
                                    "message": "多行文本必须填写"
                                }
                            ]
                        },
                        {
                            "type": "checkbox",
                            "name": "多选框组",
                            "icon": "icon-check-box",
                            "options": {
                                "inline": false,
                                "defaultValue": [],
                                "showLabel": false,
                                "options": [
                                    {
                                        "value": "选项1"
                                    },
                                    {
                                        "value": "选项2"
                                    },
                                    {
                                        "value": "选项3"
                                    }
                                ],
                                "required": true,
                                "width": "",
                                "remote": false,
                                "remoteOptions": [],
                                "props": {
                                    "value": "value",
                                    "label": "label"
                                },
                                "remoteFunc": ""
                            },
                            "key": "1561355484000_99812",
                            "model": "checkbox_1561355484000_99812",
                            "rules": [
                                {
                                    "required": true,
                                    "message": "多选框组必须填写"
                                }
                            ]
                        },
                        {
                            "type": "imgupload",
                            "name": "图片",
                            "icon": "icon-tupian",
                            "options": {
                                "defaultValue": [],
                                "size": {
                                    "width": 100,
                                    "height": 100
                                },
                                "width": "",
                                "tokenFunc": "funcGetToken",
                                "token": "",
                                "domain": "http://pfp81ptt6.bkt.clouddn.com/",
                                "disabled": false,
                                "length": 8,
                                "multiple": false,
                                "isQiniu": false,
                                "isDelete": true,
                                "min": 0,
                                "isEdit": true,
                                "action": "https://jsonplaceholder.typicode.com/photos/",
                                "remoteFunc": "func_1561355057000_60781"
                            },
                            "key": "1561355057000_60781",
                            "model": "imgupload_1561355057000_60781",
                            "rules": []
                        }
                    ],
                    "config": {
                        "labelWidth": 100,
                        "labelPosition": "top",
                        "size": "small",
                        "sql": "table2"
                    }
                }
            }
        },
        methods: {
            show_info() {
                this.$notify({
                    title: '信息提示',
                    message: this.hint,
                    type: 'info',
                    duration: 0,
                    position: 'top-left',
                    offset: 80
                });
            },
            lodding(v,{text= 'Loading'}={}){
                const loading = this.$loading({
                    lock: true,
                    text,
                    spinner: 'el-icon-loading',
                });
                v(({message,type='success'})=>{
                    loading.close()
                    this.$message({
                        message,
                        type
                    });
                })
            },
            submit_v(){
                this.$refs.generateForm.getData().then(data => {
                    // this.$alert(data, '').catch(e=>{})
                    this.lodding((v)=>{
                        setTimeout(() => {
                            console.log('提交：',data)
                            //do something
                            v({message: '提交成功'})
                        }, 2000);
                    })
                }).catch(e => {
                    console.log('验证不通过：',e)
                })

            },
            save_v(){
                console.log('保存：',this.test_data)
            },
            print_v(){
                console.log('打印：')
                print_page('print_area', document.getElementsByTagName('head')[0].innerHTML)
            }
        },
        mounted(){
            this.show_info()
            document.title= this.title
        }
    }
</script>

<style scoped>

</style>