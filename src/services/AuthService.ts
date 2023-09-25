import StaffRepository from '../repository/StaffRepository';
import SecurityService from './SecurityService';
import { HttpError } from 'routing-controllers';

export class AuthService {

	async loginStaff(email: string, password: string): Promise<string> {

		const staff = await StaffRepository.getStaffLogin(email);

		const isAuthenticated = await SecurityService.comparePassword(password, staff.password);

		if (!isAuthenticated) {
			throw new HttpError(401, 'Invalid credentials');
		}

		const token = await SecurityService.generateToken(staff.id);

		return token;
	}
}

export default new AuthService();