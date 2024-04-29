import {ClientType} from "./ClientType";
import {OrganizationType} from "./OrganizationType";

export interface TableRowType {
    'id': string
    'date_time_record': string
    'type_of_work': string
    'variety_of_work': string
    'client': ClientType
    'status_record': string
    'complaint': string
    'cost': number
    'organization': OrganizationType

}