export class StaffDTO {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	isApproved: boolean;
	isAdmin: boolean;

	constructor(id: number, firstName: string, lastName: string, email: string, isApproved: boolean = false, isAdmin: boolean = false) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.isApproved = isApproved;
		this.isAdmin = isAdmin;
	}

}
