import pool from "../config/database";
import { Staff } from "../models/Staff";
import { StaffDTO } from "../dto/StaffDTO";
import { mapToAuthResponseDTO, mapToStaff, mapToStaffMember } from "../utils/StaffUtils";
import { AuthResponseDTO } from "../dto/AuthResponseDTO";

class StaffRepository {
	static async getAllStaff(): Promise<Array<StaffDTO>> {

		const result = await mapToStaff(await pool.query(
			"SELECT * FROM staff"
		));

		return result;
	}

	static async getStaffById(id: number): Promise<StaffDTO> {

		const result = await mapToStaffMember(await pool.query(
			"SELECT * FROM staff WHERE id = ?",
			[id]
		));

		return result;
	}

	static async createStaff(staff: Staff): Promise<StaffDTO> {

		const result = await pool.query(
			`INSERT INTO staff (first_name, last_name, email, password) VALUES (?,?,?,?)`,
			[
				staff.firstName,
				staff.lastName,
				staff.email,
				staff.password,
			]
		);

		const [newResult] = JSON.parse(JSON.stringify(result));

		return new StaffDTO(
			newResult.insertId,
			staff.firstName,
			staff.lastName,
			staff.email,
		);
	}

	static async updateStaff(staffDTO: StaffDTO): Promise<StaffDTO> {

		const result = await pool.query(
			`UPDATE staff SET first_name = ?, last_name = ?, email = ? WHERE id = ?`,
			[
				staffDTO.firstName,
				staffDTO.lastName,
				staffDTO.email,
				staffDTO.id,
			]
		);

		const [newResult] = JSON.parse(JSON.stringify(result));

		if (newResult.affectedRows === 0) {
			throw new Error("Staff member not found");
		}

		return staffDTO;
	}

	static async approveStaff(id: number, isApproved: boolean): Promise<StaffDTO> {

		const result = await pool.query(
			`UPDATE staff SET is_approved = ? WHERE id = ?`,
			[
				isApproved,
				id,
			]
		);

		const [newResult] = JSON.parse(JSON.stringify(result));

		if (newResult.affectedRows === 0) {
			throw new Error("Staff member not found");
		}

		return await this.getStaffById(id);
	}

	static async deleteStaff(id: number): Promise<Boolean> {

		const result = await pool.query(
			`DELETE FROM staff WHERE id = ?`,
			[id]
		);

		const [newResult] = JSON.parse(JSON.stringify(result));

		if (newResult.affectedRows === 0) {
			throw new Error("Staff member not found");
		}

		return true;
	}


	static async getStaffLogin(email: string): Promise<AuthResponseDTO> {

		const authResponseDTO = await mapToAuthResponseDTO(await pool.query(
			"SELECT * FROM staff WHERE email = ?",
			[email]
		));

		return authResponseDTO;
	}
}

export default StaffRepository;
