import { v4 as uuidv4 } from 'uuid';
import * as oscal from '../types/oscal/v1.0.0-rc1/oscal_ssp_schema'

export class SystemSecurityPlan implements oscal.SystemSecurityPlanSSP {
    run() {
        console.log('Testing123!');
    }
}

let ssp: SystemSecurityPlan = new SystemSecurityPlan({
    uuid: uuidv4()
});