import { AuthResponseDTO } from "../dto/AuthResponseDTO";
import { StaffDTO } from "../dto/StaffDTO";
import { HttpError } from 'routing-controllers';

export async function mapToStaff([results]: any[]): Promise<StaffDTO[]> {
	const staff: StaffDTO[] = [];

	for (const result of results) {
		const staffMember = new StaffDTO(
			result.id,
			result.first_name,
			result.last_name,
			result.email,
			result.is_approved,
			result.is_admin
		);

		staff.push(staffMember);
	}

	return staff;
}

export async function mapToStaffMember([[result]]: any[]): Promise<StaffDTO> {
	try {
		const staffMember = new StaffDTO(
			result.id,
			result.first_name,
			result.last_name,
			result.email,
			result.is_approved,
			result.is_admin
		);
		
		return staffMember;

	} catch (error) {
		throw new HttpError(404, "Staff member not found");
	}

}

export async function mapToAuthResponseDTO([[result]]: any[]): Promise<AuthResponseDTO> {
	try {
		const authResponseDTO = new AuthResponseDTO(
			result.id,
			result.first_name,
			result.last_name,
			result.email,
			result.password
		);

		return authResponseDTO;

	} catch (error) {
		throw new HttpError(404, "Staff member not found");
	}


}