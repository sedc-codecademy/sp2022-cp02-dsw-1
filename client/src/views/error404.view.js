export default class Error404View {
    static render() {
        return `
            <div class="error">
                <h1>Page not found</h1>
                <p>The page you are looking for does not exist</p>
            </div>
        `;
    }
}