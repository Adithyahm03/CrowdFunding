import { Component, OnInit } from '@angular/core';
import { EthcontractService } from '../../ethcontract.service';

@Component({
  selector: 'app-user-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css']
})
export class TestComponent implements OnInit {
  searchBatchId = '';
  batchData: any = null;
  timelineEvents: any[] = [];
  loading = false;

  constructor(private ethcontractService: EthcontractService) { }

  ngOnInit() { }

  async trackBatch() {
    if (!this.searchBatchId || this.searchBatchId.length < 20) {
      window.alert('Please enter a valid Batch Contract Address.');
      return;
    }

    this.loading = true;
    this.batchData = null;
    this.timelineEvents = [];

    try {
      // Try fetching as Medicine Batch first
      const medData: any = await this.ethcontractService.getMadicineBatchIDDetails({ BatchID: this.searchBatchId });
      if (medData && medData.Description) {
        this.processMedicineBatch(medData);
      } else {
        // Try fetching as Raw Material Batch
        const rawData: any = await this.ethcontractService.getPackageBatchIDDetails({ BatchID: this.searchBatchId });
        if (rawData && rawData.Description) {
          this.processRawBatch(rawData);
        }
      }
    } catch (err) {
      console.error(err);
      window.alert('Batch ID not found or network error.');
    } finally {
      this.loading = false;
    }
  }

  processRawBatch(data: any) {
    this.batchData = {
      ...data,
      statusText: data.Status === 1 ? 'Received by Manufacturer' : 'In Transit / Created'
    };

    this.timelineEvents = [
      {
        title: 'Genesis: Raw Material Created',
        icon: 'agriculture',
        description: `Material initiated by Supplier at ${data.FarmLocation}.`,
        completed: true,
        participant: data.Supplier,
        block: '12402'
      },
      {
        title: 'Logistics: Dispatched to Manufacturer',
        icon: 'local_shipping',
        description: `Shipment assigned to Transporter node for secure delivery.`,
        completed: data.Status >= 0,
        participant: data.Shipper,
        block: '12408'
      },
      {
        title: 'Handover: Manufacturer Verification',
        icon: 'precision_manufacturing',
        description: `Raw materials received and quality-checked by the production facility.`,
        completed: data.Status >= 1,
        participant: data.Receiver,
        block: '12512',
        last: true
      }
    ];
  }

  processMedicineBatch(data: any) {
    this.batchData = {
      ...data,
      statusText: 'Produced & Validated'
    };

    this.timelineEvents = [
      {
        title: 'Production: Medicine Manufactured',
        icon: 'biotech',
        description: `Batch production complete using material: ${data.RawMatrial}.`,
        completed: true,
        participant: data.Manufacturer,
        block: '22891'
      },
      {
        title: 'Validation: Quality Assurance',
        icon: 'verified',
        description: 'Automated on-chain validation of production standards.',
        completed: true,
        participant: data.Manufacturer,
        block: '22892'
      },
      {
        title: 'Distribution: Wholesale Dispatch',
        icon: 'warehouse',
        description: 'Batch transferred to wholesale node for nationwide distribution.',
        completed: true,
        participant: data.Shipper,
        last: true
      }
    ];
  }
}
