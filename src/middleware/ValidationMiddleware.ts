import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const loginRequestBodySchema = z.object({
	email: z.string({ required_error: "Email is required." }).email(),
	password: z.string({ required_error: "Password is required." }).min(8, { message: "Invalid password" }),
});

export const validateLoginRequestBody = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		await loginRequestBodySchema.parseAsync(req.body);
		next();
	} catch (error) {
		res.status(400).json(
			{
				status: "Failed",
				message: error.errors[0].message,
			}
		);
	}
};

const registerRequestBodySchema = z.object({
	firstName: z.string({ required_error: "Firt name is required" }).min(3, { message: "First name minimum 3 characters required" }),
	lastName: z.string().min(3, { message: "Last name minimum 3 characters required" }),
	email: z.string({ required_error: "Password is required." }).email({ message: "Invalid email" }),
	password: z.string({ required_error: "Password is required." }).min(8, { message: "Password minimum 8 characters required" }),
});

export const validateRegisterRequestBody = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		await registerRequestBodySchema.parseAsync(req.body);
		next();
	} catch (error) {
		res.status(400).json(
			{
				status: "Failed",
				message: error.errors[0].message,
			}
		);
	}
};

const accountNumberRequestParamsSchema = z.object({
	accountNumber: z
		.string()
		.regex(/^\d{8}$/, { message: "Account number must be 8 digit number" })
		.transform((value) => parseInt(value, 10))
		.refine((value) => value >= 10000001, {
			message: "Account number must be 8 digits",
		})
		.refine((value) => value <= 99999999, {
			message: "Account number must be 8 digits",
		})
});

export const validateAccountNumberRequestParams = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		await accountNumberRequestParamsSchema.parseAsync(req.params);
		next();
	} catch (error) {
		res.status(400).json(
			{
				status: "Failed",
				message: error.errors[0].message,
			}
		);
	}
};


const meterReadingRequestBodySchema = z.object({
	accountNumber: z
		.number({
			required_error: "Account number is required",
			invalid_type_error: "Account number must be a 8 digit number",
		})
		.int()
		.min(10000001, { message: "Account number must be 8 digits" })
		.max(99999999, { message: "Account number must be 8 digits" }),
	readingDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
	meterReading: z.number().int(),
});

export const validateMeterReadingRequestBody = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		await meterReadingRequestBodySchema.parseAsync(req.body);
		next();
	} catch (error) {
		res.status(400).json(
			{
				status: "Failed",
				message: error.errors[0].message,
			}
		);
	}
};