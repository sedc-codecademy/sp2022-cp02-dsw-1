export default class FilteredProductsView {
    static async render({ request: { id }, data }) {
        console.log("ID", id)
        return `
            <div class="filtered-products">
                <h1>Filtered Products</h1>
                <p>Filtered Products</p>
            </div>
        `;
    }
}