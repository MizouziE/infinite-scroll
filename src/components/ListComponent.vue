<template>
    <div class="scrolling-component" ref="scrollComponent">
        <post-component
            v-for="(post, index) in posts"
            :post="post"
            :key="index"
        />
    </div>
</template>

<script>
import getPosts from '../api/get-posts'
import PostComponent from './PostComponent.vue'
import { ref, onMounted, onUnmounted } from 'vue'

export default {
    components: {
        PostComponent
    },
    setup () {
        const posts = ref(getPosts(10))
        const scrollComponent = ref(null)

        const loadMorePosts = () => {
            let newPosts = getPosts(10)
            posts.value.push(...newPosts)
        }

        onMounted(() => {
            window.addEventListener("scroll", handleScroll)
        })

        onUnmounted(() => {
            window.addEventListener("scroll", handleScroll)
        })

        const handleScroll = () => {
            let element = scrollComponent.value
            if ( element.getBoundingClientRect().bottom < window.innerHeight ) {
                loadMorePosts()
            }
        }

        return {
            posts,
            scrollComponent
        }
    },
}
</script>
