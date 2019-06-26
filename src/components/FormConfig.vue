<template>
  <div class="form-config-container">
    <el-form label-position="top">
      <el-form-item label="标签对齐方式">
        <el-radio-group v-model="data.labelPosition">
          <el-radio-button label="left">左对齐</el-radio-button>
          <el-radio-button label="right">右对齐</el-radio-button>
          <el-radio-button label="top">顶部对齐</el-radio-button>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="表单字段宽度">
        <el-input-number v-model="data.labelWidth" :min="0" :max="200" :step="10"></el-input-number>
      </el-form-item>

      <el-form-item label="组件尺寸">
        <el-radio-group v-model="data.size">
          <el-radio-button label="medium">medium</el-radio-button>
          <el-radio-button label="small">small</el-radio-button>
          <el-radio-button label="mini">mini</el-radio-button>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="数据库存储位置">
        <!--<el-radio-group v-model="data.sql">-->
          <!--<el-radio-button v-for="v in sql_" :label="v.label">{{v.value}}</el-radio-button>-->
        <!--</el-radio-group>-->
          <el-select v-model="data.sql">
              <el-option v-for="v in sql_" :value="v.value" :label="v.label"></el-option>
          </el-select>
      </el-form-item>

      <el-form-item label="表单格式">
        <el-radio-group v-model="data.layout">
          <el-radio-button label="default">默认</el-radio-button>
          <el-radio-button label="tables">表格</el-radio-button>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data(){
    return {
        sql_: null
    }
  },
  mounted(){
      this.$data.sql_=[
          {
              label: '表格1',
              value: 'table1'
          },
          {
              label: '表格2',
              value: 'table2'
          },
          {
              label: '表格3',
              value: 'table3'
          },
          {
              label: '表格4',
              value: 'table4'
          }
      ]
    console.log('数据库可存储表：',this.sql_)
  }
}
</script>
