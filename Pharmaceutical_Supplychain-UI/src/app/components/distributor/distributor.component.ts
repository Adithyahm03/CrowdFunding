import { Component, OnInit } from '@angular/core';
import { EthcontractService } from '../../ethcontract.service';

@Component({
    selector: 'app-distributor',
    templateUrl: './distributor.component.html',
    styleUrls: ['./distributor.component.css']
})
export class DistributorComponent implements OnInit {
    userProfile = {
        name: '',
        location: '',
        ethAddress: '',
        balance: ''
    };
    batchCount = 0;
    batches: any[] = [];

    constructor(private ethcontractService: EthcontractService) { }

    ngOnInit() {
        this.ethcontractService.getAccountInfo().then((info: any) => {
            this.userProfile.ethAddress = info.Account;
            this.userProfile.balance = info.Balance;
        });
        this.ethcontractService.getRole().then((role: any) => {
            this.userProfile.name = role.Role.Name;
            this.userProfile.location = role.Role.Location;
        });
        this.loadBatches();
    }

    openCreateModal() {
        // Implementation for the modal expected by the template
    }

    loadBatches() {
        this.ethcontractService.getBatchesCountDP().then((count: any) => {
            this.batchCount = count;
        });
    }
}
