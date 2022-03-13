import { Company } from './company';

export class Sort {
	by: keyof Company | undefined;
	order: 1 | -1;

	constructor(by?: keyof Company, order?: 1 | -1) {
		this.by = by;
		this.order = order || 1;
	}

	sort(a: Company, b: Company): number {
		if (!this || !this.by) {
			return 1;
		}
		return Number(a[this.by]) > Number(b[this.by]) ? 1 * this.order : -1 * this.order;
	}
}

export const initializeSort = (filters: any): Sort => {
	const sort = new Sort();
	if (filters['sort']) {
		const sortSplit = filters['sort'].split(',');
		sort.by = sortSplit[0] as keyof Company;
		sort.order = Number(sortSplit[1]) === -1 ? -1 : 1;
	}
	return sort;
};