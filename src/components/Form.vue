<template>
    <div>
        <!-- フォームの表示ボタン-->
        <v-btn
            color="blue"
            dark
            center
            fab
            fixed
            right
            @click="showCreateForm"
        >
            <v-icon>comment</v-icon>
        </v-btn>
        <v-dialog v-model="displayForm" max-width="500px">
            <!-- コメント入力フォーム -->
            <v-card>
                <v-container>
                    <h2>コメント追加</h2>
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field
                            v-model="inputComment"
                            :rules="commentRules"
                            label="コメント"
                            required
                        >
                        </v-text-field>
                        <v-btn
                            :disabled="!valid"
                            @click="addComment"
                        > 投稿する
                        </v-btn>
                    </v-form>
                </v-container>
            </v-card>
        </v-dialog>    
    </div>
</template>

<script>
    import {db} from '../plugins/firebase';

    export default {
        
        name: 'ChatForm',
        data: () => ({
            // form入力データ
            inputComment: "",
            // バリデーション
            vaild: true,
            commentRules: [
                v => !!v || ' コメントは必須項目です',
            ],
            // Formダイアログの表示可否
            displayForm: false,
        }),
        methods: {
            // コメント追加
            addComment() {
                const now = new Date()
                // コメントをFirestoreへ登録
                db.collection('comments').add({
                    content: this.inputComment,
                    createdAt: now
                })
                // ダイアログを閉じる
                this.hideCreateForm()
            },
            //Formの初期化
            clear() {
                this.$refs.form.reset()
            },
            // Formダイアログの表示
            showCreateForm() {
                this.displayForm = true
            },
            // Formダイアログの非表示
            hideCreateForm() {
                this.clear()
                this.displayForm = false
            },
        },
    }
</script>