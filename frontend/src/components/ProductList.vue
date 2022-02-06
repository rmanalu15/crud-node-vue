<template>
    <div class="card">
        <div class="card-header">
            <p class="card-header-title">
                List Data Products
            </p>
            <router-link :to="{ name: 'Create' }" class="button is-success mt-5">
                Create
            </router-link>
        </div>
        <div class="card-content">
            <table class="table is-striped mt-0 is-fullwidth">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th class="has-text-centered">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items" :key="item.product_id">
                        <td>{{ item.product_name }}</td>
                        <td>{{ item.product_price }}</td>
                        <td class="has-text-centered">
                            <router-link :to="{ name: 'Edit', params: { id: item.product_id } }" class="button is-info is-small is-rounded">
                                Edit
                            </router-link>
                            <a class="button is-danger is-small is-rounded" @click="deleteProduct(item.product_id)">
                                Delete
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
// Import axios.
import axios from "axios";

export default {
    name: "ProductList",
    data() {
        return {
            items: [],
        };
    },
    created() {
        this.getProducts();
    },
    methods: {
        // Get all data.
        async getProducts() {
            try {
                const response = await axios.get("http://localhost:5000/products");
                this.items = response.data;
            } catch (err) {
                console.log(err);
            }
        },
        // Delete data.
        async deleteProduct(id) {
            try {
                await axios.delete(`http://localhost:5000/products/${id}`);
                this.getProducts();
            } catch (err) {
                console.log(err);
            }
        },
    },
};
</script>

<style>
</style>