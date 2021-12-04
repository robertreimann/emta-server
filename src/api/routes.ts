import { Request, Response, Router } from 'express';

export function initRestRoutes(router: Router): void {
	const prefix = '/api/v1';
	router.get(prefix, (req: Request, res: Response) => res.send('PING'));
	router.get(`${prefix}/data`, (req: Request, res: Response) => res.send('here be dragons'));
}