<template>
    <div class="container">
            <content-placeholders :animated="false" :centered="true">
                <content-placeholders-img class="vue-content-placeholders-img-custom-1"></content-placeholders-img>
                <content-placeholders-text :lines="11">
                </content-placeholders-text>
                <content-placeholders-img class="vue-content-placeholders-img-custom-1"></content-placeholders-img>
            </content-placeholders>
    </div>
</template>

<script>
export default{
    mounted() {
        console.log('mounted')
    }
}
</script>

<style>
    .vue-content-placeholders-img-custom-1 {
        width:45% !important;
        height: 60px !important;
    }

    .vue-content-placeholders-text {
        margin-top: 0 !important;
    }

    .vue-content-placeholders-text__line {
        width: 100% !important;
        margin-bottom: 1px !important;
        height: 48px;
    }
    .vue-content-placeholders-text__line:nth-child(2n+1) {
        background-color: #f5f8fa !important;
    }

</style>