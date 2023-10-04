import { HttpError } from 'routing-controllers';
import { Customer } from '../models/Customer';


export async function mapToCustomer([[results]]: any[]): Promise<Customer> {

	if (!results) {
		throw new HttpError(406, 'No customer found');
	}

	return new Customer(results.account_number, results.name);
}