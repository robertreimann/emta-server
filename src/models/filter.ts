import { Company } from './company';

export class Filter {
	type: FilterType;
	field: string;
	values: Array<string>;

	constructor(key: string, values: string) {
		const valuesSplit = values.split(',');
		this.type = getType(valuesSplit[0]);
		this.field = key;
		this.values = valuesSplit.slice(1);
	}

	match(company: Company): boolean {
		switch (this.type) {
		case FilterType.GREATER_THAN:
			return (company[this.field] > Number(this.values[0]));
		case FilterType.LESSER_THAN:
			return (company[this.field] < Number(this.values[0]));
		case FilterType.INCLUDES:
			return this.values.includes(company[this.field]);
		}
	}
}

const getType = (element: string): FilterType => {
	switch (element) {
	case FilterType.GREATER_THAN:
		return FilterType.GREATER_THAN;
	case FilterType.LESSER_THAN:
		return FilterType.LESSER_THAN;
	default:
		return FilterType.INCLUDES;
	}
};



enum FilterType {
    INCLUDES = 'includes',
    GREATER_THAN = '>',
    LESSER_THAN = '<'
}