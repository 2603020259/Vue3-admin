<template>
<div class="empty">
    <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-tubiaozhizuomoban"></use>
</svg>
<span>暂无商品</span>
</div>
</template>

<script>
export default{
    name:'Empty',
}
</script>

<style lang="less" scoped>
.empty{
    flex: 1;
    margin: 20px;
    font-size: 16px;
    overflow-y: auto;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 10px;
    height: 72vh;
    .icon{
        margin-bottom: 10px;
    }
}
</style>