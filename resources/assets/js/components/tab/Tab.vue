<template>
    <div class="container">

        <h2>Z keep alive</h2>

            <button
                    v-for="tab in tabs"
                    v-bind:key="tab+'1'"
                    v-bind:class="['tab-button', { active: currentTab === tab }]"
                    v-on:click="currentTab = tab"
            >{{ tab }}</button>

            <keep-alive>
                <component
                        v-bind:is="currentTabComponent"
                        class="tab"
                >
                </component>
            </keep-alive>

        <h2>Bez keep alive</h2>

            <button
                    v-for="tab in tabs"
                    v-bind:key="tab+'2'"
                    v-bind:class="['tab-button', { active: currentTab2 === tab }]"
                    v-on:click="currentTab2 = tab"
            >{{ tab }}</button>

                <component
                        v-bind:is="currentTabComponent2"
                        class="tab"
                >
                </component>
    </div>
</template>

<script>

    import TabPosts from './TabPosts.vue'
    import TabArchive from './TabArchive.vue'

    export default  {
        components: {
            TabPosts,
            TabArchive
        },
        data() {
            return {
                currentTab: 'Posts',
                currentTab2: 'Posts',
                tabs: ['Posts', 'Archive']
            }
        },
        computed: {
            currentTabComponent: function () {
                return 'tab-' + this.currentTab.toLowerCase()
            },
            currentTabComponent2: function () {
                return 'tab-' + this.currentTab2.toLowerCase()
            }
        }
    }
</script>

<style>
    .tab-button {
        padding: 6px 10px;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border: 1px solid #ccc;
        cursor: pointer;
        background: #f0f0f0;
        margin-bottom: -1px;
        margin-right: -1px;
    }
    .tab-button:hover {
        background: #e0e0e0;
    }
    .tab-button.active {
        background: #e0e0e0;
    }
    .tab {
        border: 1px solid #ccc;
        padding: 10px;
    }
    .posts-tab {
        display: flex;
    }
    .posts-sidebar {
        max-width: 40vw;
        margin: 0;
        padding: 0 10px 0 0;
        list-style-type: none;
        border-right: 1px solid #ccc;
    }
    .posts-sidebar li {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        cursor: pointer;
    }
    .posts-sidebar li:hover {
        background: #eee;
    }
    .posts-sidebar li.selected {
        background: lightblue;
    }
    .selected-post-container {
        padding-left: 10px;
    }
    .selected-post > :first-child {
        margin-top: 0;
        padding-top: 0;
    }
</style>
