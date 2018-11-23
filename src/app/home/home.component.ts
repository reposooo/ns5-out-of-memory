import {Component} from "@angular/core";
import {GC} from "tns-core-modules/utils/utils";
import {NavigationEnd, Router} from "@angular/router";

@Component({
    selector: "ns-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
})
export class HomeComponent {

    private totalLoops: number = 0;
    public currentLoop: number = 0;

    currentExampleLoop;
    totalExampleLoops;

    private routerSubscription: any;


    constructor(private router: Router) {
        console.log(">>> HomeComponent constructor");
    }

    ngOnInit(): void {

        this.routerSubscription = this.router.events.subscribe((e) => {
            if (e instanceof NavigationEnd && e.url === "/home") {
                console.log(">> nav end " + this.currentLoop, this.totalLoops);
                if (this.currentLoop < this.totalLoops) {

                    ++this.currentLoop;
                    this.goToListView('/items');
                }
                if (this.currentExampleLoop < this.totalExampleLoops) {
                    ++this.currentExampleLoop;
                    this.goToListView('/example');
                }
            }
        });
    };

    loop(nrOfTimes: number): void {
        this.currentLoop = 0;
        this.currentExampleLoop = 0;
        this.totalLoops = nrOfTimes;
        this.goToListView('./items');
    }

    setExampleLoop() {
        this.currentLoop = 0;
        this.currentExampleLoop = 0;
        this.totalExampleLoops = 10;
        this.goToListView('./example');
    }

    goToListView(route): void {
        this.router.navigate([route]);
    }

    doGC(): void {
        GC();
    }
}