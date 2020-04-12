<template>
<div class="col-md-9">
    <div>
                    <h3>Add a new book</h3>
        <div class="bg-white p-3">
                <div>
                    <form>
                                <div class="form-group"><label>Title</label>
                                    <div class="form-row">
                                        <div class="col-9">
                                            <input v-model="book.title" class="form-control" type="text" required="">
                                        </div>
                                        <div class="mt-1 ml-3 text-right">
                                            <button class="btn btn-primary btn-sm" type="button">Search</button>
                                        </div>
                                    </div>
                                </div>
                        
                        <div class="form-group"><label>ISBN</label><input v-model="book.isbn" class="form-control" type="text" required=""></div>
                        <div class="form-group"><label>Auteurs</label><input v-model="book.author" class="form-control" type="text" required=""></div>
                        <div class="form-group">
                            <label>Type</label>
                            <select v-model="book.type" class="form-control" style="height: 42px;" required="">
                                    <option value="12" selected="">This is item 1</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Category</label>
                            <select v-model="book.category" class="form-control" style="height: 42px;" required="">
                                    <option value="12" selected="">This is item 1</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Statuts</label>
                            <select v-model="book.status" class="form-control" style="height: 42px;" required="">
                                    <option value="12" selected="">This is item 1</option>
                            </select>
                        </div>
                        <div class="form-group"><label>Resume</label><textarea v-model="book.tiresume" class="form-control" required=""></textarea></div>
                        <div
                            class="form-row">
                            <div class="col offset-xl-10 text-right"><button class="btn btn-outline-success" type="submit">Add book</button></div>
                        </div>  
                    </form>
                </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            book:{
                title:'',
                type:'',
                category:'',
                author:'',
                resume:'',
                isbn:'',
                status:'',
                imgs:null
            }
        }
    },
    methods:{

    }
}
</script>

<style>

</style>