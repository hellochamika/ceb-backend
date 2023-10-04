import { Customer } from './../models/Customer';
import pool from "../config/database";
import { mapToCustomer } from '../utils/CustomerUtils';


class CustomerRepository {
	static async getCustomerById(accountNumber: number): Promise<Customer> {

		const result = await mapToCustomer(await pool.query(
			"SELECT * FROM customers WHERE account_number = ?",
			[accountNumber]
		));

		return result;
	}

}

export default CustomerRepository;
