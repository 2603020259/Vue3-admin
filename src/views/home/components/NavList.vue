<template>
        <div v-for="(item, index ) in navList" :key="index">
            <NavListItem :itemContent="item"></NavListItem>
    </div>
</template>

<script>
import NavListItem from './NavListItem.vue';
export default {
    name:'NavList',
    props: ['navList'],
    components: {
        NavListItem,
    }
}

</script>