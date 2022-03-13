import { Request, Response, Router } from 'express';
import fs from 'fs';
import { Company, parseCSV } from '../models/company';
import { Filter } from '../models/filter';
import { initializeSort } from '../models/sort';

export function initializeRESTRoutes(router: Router): void {
	fs.readFile('/Users/Robert/EMTA/tax.csv', 'utf8', (err, data) => {
		handleError(err);
		const companies = parseCSV(data);
		router.get('', (req: Request, res: Response) => {
			const queryFilters = req.query.filters;
			if (queryFilters) {
				const filteredCompanies = filterCompanies(queryFilters, companies);
				const sortedCompanies = sortCompanies(queryFilters, filteredCompanies);
				res.json(sortedCompanies);
				return;
			}
			res.json(companies);
		});
	});
}

function handleError(err: NodeJS.ErrnoException | null): void {
	if (err) {
		console.error(err);
		return;
	}
}

function filterCompanies(queryFilters: any, companies: Array<Company>): Array<Company> {
	const filters = Object.keys(queryFilters).filter(key => key !== 'sort').map(key => new Filter(key, queryFilters[key]));
	return companies.filter(company => {
		return filters.reduce((p: boolean, c: Filter) => {
			return c.match(company) && p;
		}, true);
	});
}

function sortCompanies(queryFilters: any, companies: Array<Company>) {
	const sort = initializeSort(queryFilters);
	return sort.by ? companies.sort((a, b) => sort.sort(a, b)) : companies;
}