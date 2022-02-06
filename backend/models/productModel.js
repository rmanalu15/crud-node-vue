// Import connection.
import db from '../config/database.js';

// Get all data.
export const getProducts = (result) => {
    db.query("SELECT * FROM products", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Get data.
export const getProductById = (id, result) => {
    db.query("SELECT * FROM products WHERE product_id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

// Post data.
export const insertProduct = (data, result) => {
    db.query("INSERT INTO products SET ?", [data], (err, results) => {
        if (err) {
            console.log(err, null);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Update data.
export const updateProductById = (data, id, result) => {
    db.query("UPDATE products SET product_name = ?, product_price = ? WHERE product_id = ?", [data.product_name, data.product_price, id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Delete data.
export const deleteProductById = (id, result) => {
    db.query("DELETE FROM products WHERE product_id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}