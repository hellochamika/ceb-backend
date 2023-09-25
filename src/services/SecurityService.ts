import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export class SecurityService {
	async hashPassword(password: string): Promise<string> {

		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(password, salt);

		return hash;
	}

	async comparePassword(password: string, hash: string): Promise<boolean> {
		return await bcrypt.compare(password, hash);
	}

	async generateToken(id: number): Promise<string> {
		const token = await jwt.sign({ id: id }, process.env.JWT_SECRET, { expiresIn: '30d' });

		return token;
	}

	async verifyToken(token: string): Promise<number> {
		const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);

		return JSON.parse(JSON.stringify(decodedToken)).id;
	}
}

export default new SecurityService();