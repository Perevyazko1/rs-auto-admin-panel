import {OrganizationType} from "./OrganizationType";

export interface ClientType {
    'phone': string
    'communication_method': string
    'car': string
    'gos_number': string
    'vin_code': string
    'amount_of_orders': string
    'bonus_card': number
    'first_name': string
    'last_name': string
    'name_organization': OrganizationType

}