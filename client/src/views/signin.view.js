import ExampleComponent from "../components/example.component.js";

export default class SigninView {
    static render() {
        return `
            <div class="Sign in">
                <h1>Sign in</h1>
                <p>This is the Sign in page</p>
                ${ExampleComponent.render()}
            </div>
        `;
    }
}