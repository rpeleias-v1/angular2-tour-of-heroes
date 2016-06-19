@Component{
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <my-heroes></my-heroes>
    `,
    directives: [HeroesComponent],
    providers: [
        HeroService
    ]
}
export class AppComponent {
    title = "Tour of Heroes"
}