<template>
  <div>
    <MyTable :arr="list">
      <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #content="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <!-- {{ scope.row.tags }} -->

          <input
            class="tag-input form-control"
            style="width: 100px"
            type="text"
            v-focus
            v-if="scope.row.inputVisible"
            @blur="scope.row.inputVisible = false"
            @keyup.enter="enterFn(scope.row)"
            @keyup.esc="scope.row.inputVisible = false"
            v-model="scope.row.inputValue"
          />
          <button
            v-else
            style="display: block"
            class="btn btn-primary btn-sm add-tag"
            @click="scope.row.inputVisible = true"
          >
            +Tag
          </button>
          <span
            v-for="(str, ind) in scope.row.tags"
            :key="ind"
            class="badge badge-warning"
          >
            {{ str }}
          </span>
        </td>
        <td>
          <button
            class="btn btn-danger btn-sm"
            @click="removeBtn(scope.row.id)"
          >
            删除
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "../components/MyTable.vue";
import axios from "axios";
export default {
  components: {
    MyTable,
  },
  data() {
    return {
      list: [],
    };
  },
  created() {
    axios({
      url: "/api/goods",
    }).then((res) => {
      console.log(res);
      this.list = res.data.data;
    });
  },
  methods: {
    removeBtn(id) {
      let index = this.list.findIndex((obj) => obj.id === id);
      this.list.splice(index, 1);
    },
    enterFn(val) {
      if (val.inputVisible.trim() == "") {
        val.inputVisible = "";
        return alert("请输入值");
      }
      val.tags.push(val.inputVisible);
      val.inputVisible = "";
    },
  },
};
</script>

<style lang="less" scoped>
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
</style>