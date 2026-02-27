import { Component, OnInit } from '@angular/core';
import { EthcontractService } from '../../ethcontract.service';

@Component({
    selector: 'app-wholesaler',
    templateUrl: './wholesaler.component.html',
    styleUrls: ['./wholesaler.component.css']
})
export class WholesalerComponent implements OnInit {
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
        // Modal logic
    }

    loadBatches() {
        this.ethcontractService.getBatchesCountWD().then((count: any) => {
            this.batchCount = count;
        });
    }
}
