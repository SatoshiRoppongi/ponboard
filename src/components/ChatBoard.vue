<template>
    <v-list three-line>
        <template v-for="(comment, index) in comments">
            <v-list-tile :key="index">
                <v-list-tile-content>
                    <v-list-tile-sub-title class="text--primary subheading">{{comment.content}}</v-list-tile-sub-title>
                    <v-list-tile-sub-title>
                        {{comment.createdAt.toDate().toLocaleString()}}
                    </v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                </v-list-tile-action>
            </v-list-tile>
            <v-divider :key="comment.id"></v-divider>
        </template>
    </v-list>
</template>

<script>
    import {db} from '../plugins/firebase';

    export default {
        name: "ChatBoard",
        data: () => ({
            comments: [],
        }),
        firestore() {
            return {
                // firestoreのcommentsコレクションを参照
                comments: db.collection('comments').orderBy('createdAt')
            }
        },
    }
</script>