import {Component, OnInit} from "@angular/core";
import {RouterExtensions} from "nativescript-angular";



@Component({
    selector: 'example',
    moduleId: module.id,
    templateUrl: './index.html',
    providers: [

    ]
})
export class ExampleComponent implements OnInit{
    item;

    constructor(private routerExtensions: RouterExtensions) {}

    ngOnInit() {
        console.log('!!!!!!:::::::');
        this.item = {
            "waId": "11da4825-c147-4e18-997c-4cd17d85f3d4",
            "wjStatus": "PROPOSED",
            "waReadableId": "60180000030",
            "waName": "Toast Job London",
            "companyName": "Test company name",
            "hourlyWage": {
                "amount": 50,
                "currencyId": 3
            },
            "salary": {
                "amount": 29.17,
                "currencyId": 3
            },
            "hourlyWageWithHolidayPay": {
                "amount": 56.04,
                "currencyId": 3
            },
            "salaryWithHolidayPay": {
                "amount": 32.69,
                "currencyId": 3
            },
            "duration": 375,
            "requirements": "15 cooks on 1 day",
            "dresscodeDescription": "Good dress required",
            "companyIcon": "http://localhost:8080//tvds/images/company/default-company-logo.png",
            "contactInfo": {
                "email": "info@coople.com",
                "mobileNumber": "+442083389333",
                "type": "TENANT_CONTACT",
                "imageUrl": "http://localhost:8080/resources/api/tenants/00000000-0000-0000-0000-000000000004/icon/9543377d-1f17-4073-871c-adc76a695fdd.png",
                "tenantName": "COOPLE UK"
            },
            "periodFrom": 1540712758000,
            "periodTo": 1542282178000,
            "jobAddress": {
                "addressStreet": "Unnamed road",
                "extraAddress": "",
                "zip": "NW1",
                "city": "London",
                "countryId": 78
            },
            "safetyRisks": "Good dress required",
            "jobSkill": {
                "jobProfileId": 4
            },
            "expenses": [],
            "isExternalPayroll": false,
            "waDates": [] || [
                {
                    "correlationId": "25b711b9-ed3f-4bdc-b37e-eaa93160e351",
                    "waDateStatus": "HIRING",
                    "workAssignmentId": "11da4825-c147-4e18-997c-4cd17d85f3d4",
                    "overlappedBy": {
                        "calendarRanges": [],
                        "otherJobs": []
                    },
                    "estimatedSalary": {
                        "amount": 168.1,
                        "currencyId": 3
                    },
                    "waDate": {
                        "startDateTime": 1540712758000,
                        "endDateTime": 1540723558000,
                        "breakDuration": 0
                    }
                },
                {
                    "correlationId": "4ddd2bc9-415a-4b10-be7c-71afc94b4469",
                    "waDateStatus": "STAFFING",
                    "workAssignmentId": "11da4825-c147-4e18-997c-4cd17d85f3d4",
                    "overlappedBy": {
                        "calendarRanges": [],
                        "otherJobs": []
                    },
                    "estimatedSalary": {
                        "amount": 93.39,
                        "currencyId": 3
                    },
                    "waDate": {
                        "startDateTime": 1540812178000,
                        "endDateTime": 1540818178000,
                        "breakDuration": 0
                    }
                },
                {
                    "correlationId": "6608b34c-4d85-49cd-a0ff-cd91ac27e2da",
                    "waDateStatus": "STAFFING",
                    "workAssignmentId": "11da4825-c147-4e18-997c-4cd17d85f3d4",
                    "overlappedBy": {
                        "calendarRanges": [],
                        "otherJobs": []
                    },
                    "estimatedSalary": {
                        "amount": 46.7,
                        "currencyId": 3
                    },
                    "waDate": {
                        "startDateTime": 1540898578000,
                        "endDateTime": 1540901578000,
                        "breakDuration": 0
                    }
                },
                {
                    "correlationId": "5bc4e1d5-c94f-4917-a5f3-78deb7452aae",
                    "waDateStatus": "STAFFING",
                    "workAssignmentId": "11da4825-c147-4e18-997c-4cd17d85f3d4",
                    "overlappedBy": {
                        "calendarRanges": [],
                        "otherJobs": []
                    },
                    "estimatedSalary": {
                        "amount": 9.34,
                        "currencyId": 3
                    },
                    "waDate": {
                        "startDateTime": 1541416978000,
                        "endDateTime": 1541417578000,
                        "breakDuration": 0
                    }
                },
                {
                    "correlationId": "1ad1acbe-9b8d-43b2-b187-b8bc87f5d5ba",
                    "waDateStatus": "STAFFING",
                    "workAssignmentId": "11da4825-c147-4e18-997c-4cd17d85f3d4",
                    "overlappedBy": {
                        "calendarRanges": [],
                        "otherJobs": []
                    },
                    "estimatedSalary": {
                        "amount": 14.01,
                        "currencyId": 3
                    },
                    "waDate": {
                        "startDateTime": 1541848978000,
                        "endDateTime": 1541849878000,
                        "breakDuration": 0
                    }
                },
                {
                    "correlationId": "0cb5894c-54b3-4a5d-a9d7-47a6f399d64c",
                    "waDateStatus": "STAFFING",
                    "workAssignmentId": "11da4825-c147-4e18-997c-4cd17d85f3d4",
                    "overlappedBy": {
                        "calendarRanges": [],
                        "otherJobs": []
                    },
                    "estimatedSalary": {
                        "amount": 18.68,
                        "currencyId": 3
                    },
                    "waDate": {
                        "startDateTime": 1542280978000,
                        "endDateTime": 1542282178000,
                        "breakDuration": 0
                    }
                }
            ]
        };

        setTimeout(() => {
            this.routerExtensions.back();
        }, 1500);

    }

}