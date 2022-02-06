<template>
    <div class="card">
        <div class="card-content">
            <div class="field">
                <label class="label">Product Name</label>
                <div class="control">
                    <input type="text" class="input is-primary" placeholder="Product name" v-model="productName" />
                </div>
            </div>
            <div class="field">
                <label class="label">Price</label>
                <div class="control">
                    <input type="text" class="input is-primary" placeholder="Price" v-model="productPrice" />
                </div>
            </div>
            <div class="control">
                <button class="button is-link is-rounded" @click="updateProduct">
                    Update
                </button>
            </div>
        </div>
    </div>
</template>

<script>
// Import axios.
import axios from "axios";

export default {
    name: "EditProduct",
    data() {
        return {
            productName: "",
            productPrice: "",
        };
    },
    created: function() {
        this.getProductById();
    },
    methods: {
        // Get data.
        async getProductById() {
            try {
                const response = await axios.get(`http://localhost:5000/products/${this.$route.params.id}`);
                this.productName = response.data.product_name;
                this.productPrice = response.data.product_price;
            } catch (err) {
                console.log(err);
            }
        },
        // Update data.
        async updateProduct() {
            try {
                await axios.put(`http://localhost:5000/products/${this.$route.params.id}`,
                {
                    product_name: this.productName,
                    product_price: this.productPrice,
                }
                );
                this.productName = "";
                this.productPrice = "";
                this.$router.push("/");
            } catch (err) {
                console.log(err);
            }
        },
    },
};
</script>

<style>
</style>
