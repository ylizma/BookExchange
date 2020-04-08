<template>
              <div class="col-md-9">
                <div>
                    <h3>My books</h3>
                    <div class="bg-white p-3"><button class="btn btn-outline-primary mb-3 float-right" type="button">Add a new book</button>
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th class="table-secondary">Book</th>
                                        <th class="table-secondary">Added on</th>
                                        <th class="table-secondary">Status</th>
                                        <th class="table-secondary"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="table-light"><img src="https://dummyimage.com/128x200/000000/ffffff"></td>
                                        <td class="table-light">22-02-2020 19:34</td>
                                        <td class="table-light">Available</td>
                                        <td class="table-light">
                                            <div class="row" style="width: 120px;">
                                                <div class="col-auto"><a class="action-link" href="#"><i class="fa fa-edit mr-3"></i></a></div>
                                                <div class="col-auto"><a class="action-link" href="#"><i class="fa fa-remove"></i></a></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="table-light"><img src="https://dummyimage.com/128x200/000000/ffffff"></td>
                                        <td class="table-light">26-02-2020 15:44</td>
                                        <td class="table-light">Not available</td>
                                        <td class="table-light">
                                            <div class="row" style="width: 120px;">
                                                <div class="col-auto"><a class="action-link" href="#"><i class="fa fa-edit mr-3"></i></a></div>
                                                <div class="col-auto"><a class="action-link" href="#"><i class="fa fa-remove"></i></a></div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <nav class="mt-2">
                            <ul class="pagination">
                                <li class="page-item"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">4</a></li>
                                <li class="page-item"><a class="page-link" href="#">5</a></li>
                                <li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
</template>

<script>
export default {

}
</script>

<style>

</style>