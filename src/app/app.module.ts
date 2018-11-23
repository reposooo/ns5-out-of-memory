import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {ItemDetailComponent} from "~/app/item/item-detail.component";
import {ItemsComponent} from "~/app/item/items.component";
import {HomeComponent} from "~/app/home/home.component";
import {ItemService} from "~/app/item/item.service";
import {ExampleComponent} from "~/app/example/component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        HomeComponent,
        ItemsComponent,
        ItemDetailComponent,
        ExampleComponent,
        AppComponent
    ],
    providers: [
        ItemService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
