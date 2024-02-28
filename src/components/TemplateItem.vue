<template>
    <p>ID {{ id }} - {{ name }}</p>
</template>

<script>
export default {
    props: {
        id: Number,
        name: String,
    }
};
</script>
