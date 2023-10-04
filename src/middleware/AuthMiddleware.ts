import { Request, Response, NextFunction } from 'express';
import SecurityService from '../services/SecurityService';
import StaffService from '../services/StaffService';

export const auth = async (req: Request, res: Response, next: NextFunction) => {
	let token;

	if (!(req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer"))
	) {
		res.status(401).json({ message: "Unauthorized, No bearer token!" });
		return
	}

	try {
		token = req.headers.authorization.split(" ")[1];
		const id = await SecurityService.verifyToken(token);
		const staff = await StaffService.getStaffById(id);
		req.body.staff = staff;

	} catch (error) {
		res.status(401).json({ message: "Unauthorized" });
		return
	}

	next();
};
