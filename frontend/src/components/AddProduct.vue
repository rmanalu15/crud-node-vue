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
                <button class="button is-link is-rounded" @click="saveProduct">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
// Import axios.
import axios from "axios";

export default {
    name: "AddProduct",
    data() {
        return {
            productName: "",
            productPrice: "",
        };
    },
    methods: {
        // Post data.
        async saveProduct() {
            try {
                await axios.post("http://localhost:5000/products", {
                    product_name: this.productName,
                    product_price: this.productPrice,
                });
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
