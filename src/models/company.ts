class Company {
	name: string;
	registryCode: string;
	type: string;
	registeredInNationalVATregister: boolean;
	fieldOfActivityInEMTAK: string;
	county: string;
	stateTaxes: string;
	labourTaxesAndPayments: string;
	turnover: string;
	numberOfEmployees: string;

	constructor(
		registryCode: string,
		name: string,
		type: string,
		registeredInNationalVATregister: boolean,
		fieldOfActivityInEMTAK: string,
		county: string,
		stateTaxes: string,
		labourTaxesAndPayments: string,
		turnover: string,
		numberOfEmployees: string,
	) {
		this.name = name;
		this.registryCode = registryCode;
		this.type = type;
		this.registeredInNationalVATregister = registeredInNationalVATregister;
		this.fieldOfActivityInEMTAK = fieldOfActivityInEMTAK;
		this.stateTaxes = stateTaxes;
		this.county = county;
		this.labourTaxesAndPayments = labourTaxesAndPayments;
		this.turnover = turnover;
		this.numberOfEmployees = numberOfEmployees;
	}
}

const createCompanyFromCSVLine = (line: string): Company => {
	const lineSplit = line.split(/(;)(?=(?:[^"]|["][^"]*["])*$)/g).reduce((p: Array<string>, c: string) => {
		if (c !== ';') {
			p.push(c.replace(/"/g, '').replace(/\\/g, ''));
		}
		return p;
	}, []);
	return new Company(
		lineSplit[0],
		lineSplit[1],
		lineSplit[2],
		!!lineSplit[3],
		lineSplit[4],
		lineSplit[5],
		lineSplit[6],
		lineSplit[7],
		lineSplit[8],
		lineSplit[9]
	);
};

const parseCSV = (fileString: string): Array<Company> => {
	return fileString.split('\r\n').slice(1).map(line => {
		return createCompanyFromCSVLine(line);
	}).slice(0, 1000);
};

export { Company, parseCSV };