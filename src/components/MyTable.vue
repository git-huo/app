<template>
  <table class="table table-bordered table-stripped">
    <!-- 表格标题区域 -->
    <thead>
      <tr>
        <!-- <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th> -->
        <slot name="header">

        </slot>
      </tr>
    </thead>
    <!-- 表格主体区域 -->
    <tbody>
      <tr v-for="(item,index) in arr" :key="item.id">
        <!-- <td>1</td>
        <td>商品</td>
        <td>998</td>
        <td>xxx</td>
        <td>xxx</td> -->
        <slot name="content" :row='item' :index='index'>

        </slot>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "MyTable",
  props: {
    arr: {
      type: Array,
      default: () => [],
    },
  },
};
</script>


<style scoped lang="less">
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
</style>