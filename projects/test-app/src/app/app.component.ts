import {Component} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {TranslateService, TranslatePipe, TranslateDirective} from "@codeandweb/ngx-translate";
import {StandaloneComponent} from "./standalone.component";
import {_} from "@codeandweb/ngx-translate";


@Component({
    selector: "app-root",
    standalone: true,
    imports: [RouterOutlet, TranslateDirective, TranslatePipe, StandaloneComponent],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss"
})
export class AppComponent
{
    title = _("test-app");

    constructor(private translate: TranslateService) {
        this.translate.addLangs(['de', 'en']);
        this.translate.setDefaultLang('en');
        this.translate.use('en');
    }
}
