<template>
    <div class="err">
        <img src="../../assets/404.png">
    </div>
</template>

<script>
export default{
    name:'Errer'
}
</script>

<style lang="less" scoped>
.err{
    position: fixed;
    z-index: 9999;
    height: 100%;
    width: 100%;
    background-color: #fff;
    img{
        width: 100%;
        height: 100%;
    }
}
</style>