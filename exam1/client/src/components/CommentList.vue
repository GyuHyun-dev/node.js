<template>
    <div class="card">
        <div class="card-header">댓글 목록</div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item" :key="idx" v-for="(comment, idx) in CommentList">
                    <div class="container">
                        <div class="row text-start">
                            {{ comment.CONTENT }}
                        </div>
                        <div class="row">
                            <div class="col-9 text-end">
                                {{ comment.WRITER }}
                            </div>
                            <div class="col-3 text-center">
                                {{ comment.CREATED_DATE }}
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
// CommentList.vue
import axios from 'axios';
export default {
    props : ['bno'],
    data() {
        return {
            CommentList : []
        }
    },
    created() {
        this.getCommentList();
    },
    methods : {
        async getCommentList() {
            let result = await axios.get(`/api/comments?bno=${this.bno}`)
                                    .catch(err => console.log(err));
            this.CommentList = result.data;
        }
    }
}
</script>