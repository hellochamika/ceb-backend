import { Staff } from "../models/Staff";
import { StaffDTO } from "../dto/StaffDTO";
import StaffRepository from "../repository/StaffRepository";

class StaffService {
	static async getStaff(): Promise<Array<StaffDTO>> {
		return await StaffRepository.getAllStaff();
	}

	static async getStaffById(id: number): Promise<StaffDTO> {
		return await StaffRepository.getStaffById(id);
	}

	static async createStaff(staff: Staff): Promise<StaffDTO> {
		return await StaffRepository.createStaff(staff);
	}

	static async updateStaff(staffDTO: StaffDTO): Promise<StaffDTO> {
		return await StaffRepository.updateStaff(staffDTO);
	}

	static async deleteStaff(id: number): Promise<Boolean> {
		return await StaffRepository.deleteStaff(id);
	}

}

export default StaffService;