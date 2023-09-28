//========================= GraphQL test =========================
export async function housingData() {
	const response = await fetch(
		"https://devbuildingbetter.fc9.sandbox.net.nz/graphql/",
		{
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				query: `
			query {
				pageBy(pageId: 252) {
					timeLine {
						housingRate {
						rate
						year
						}
					}
				}
			}
		`,
			}),
		}
	);
	const data = await response.json();
	return data.data.pageBy.timeLine.housingRate;
}

//========================= home ownership data =========================
export const homeOwnershipRate = [
	{ year: 1890, rate: 100 },
	{ year: 1936, rate: 70.5 },
	{ year: 1945, rate: 54.9 },
	{ year: 1950, rate: 51.3 },
	{ year: 1951, rate: 54.5 },
	{ year: 1961, rate: 49.8 },
	{ year: 1966, rate: 51.2 },
	{ year: 1971, rate: 46.7 },
	{ year: 1976, rate: 46.4 },
	{ year: 1981, rate: 54.7 },
	{ year: 1986, rate: 53.9 },
	{ year: 1991, rate: 57.4 },
	{ year: 1996, rate: 52.3 },
	{ year: 2001, rate: 47 },
	{ year: 2006, rate: 45.2 },
	{ year: 2013, rate: 43.1 },
	{ year: 2018, rate: 38.5 },
	{ year: 2024, rate: 35.5 },
	{ year: 2030, rate: 35.5 },
];

//========================= government period data =========================
export const singleEvents = [
	{
		date: { year: 1941, month: "March", day: 26 },
		title: "Needy Families Scheme - starts",
		category: "Housing Schemes & Funds",
		description:
			"The Child Welfare Branch of the Department of Education established the Needy Families Scheme, which aimed to provide support primarily through the relocation of large or economically disadvantaged families in order to maintain the integrity of the household unit. By 1946, this initiative had already aided more than 900 families and over 5,000 children. This scheme's inception was largely driven by the acute shortage of suitable housing in inner-city regions. It was overseen by a Committee composed of representatives from the State Advances Corporation, the Social Security Department, and the Child Welfare Branch (part of the Department of Education). As time progressed, the Committee recognized that the need for assistance extended beyond mere rent subsidies. In 1942, the Committee was granted the authority to approve a broader range of aid through a dedicated supplementary fund. This encompassed various forms of support, including modest grants to acquire essential items like food, clothing, and bedding. By 1947, the Child Welfare Branch assumed full responsibility for the scheme, broadening its scope to encompass families classified as 'needy' or facing specific challenges. This shift extended the program's reach to a wider range of families requiring support.",
		source:
			"https://www.msd.govt.nz/about-msd-and-our-work/about-msd/history/social-assistance-chronology-programme-history.html",
	},
	{
		date: { year: 1941, month: "April", day: 29 },
		title: "Rehabilitation Act - passed",
		category: "Legal Framework",
		description:
			"As with post WW1, Māori veterans were not accorded the same economic rehabilitation and land access as other veterans:",
		source:
			"https://forms.justice.govt.nz/search/Documents/WT/wt_DOC_137836128/Wai%202500%2C%20A248.pdf",
	},
	{
		date: { year: 1941, month: "March", day: 26 },
		title: "2-1 Needy Families Scheme - starts",
		category: "Housing Schemes & Funds",
		description:
			"The Child Welfare Branch of the Department of Education established the Needy Families Scheme, which aimed to provide support primarily through the relocation of large or economically disadvantaged families in order to maintain the integrity of the household unit. By 1946, this initiative had already aided more than 900 families and over 5,000 children. This scheme's inception was largely driven by the acute shortage of suitable housing in inner-city regions. It was overseen by a Committee composed of representatives from the State Advances Corporation, the Social Security Department, and the Child Welfare Branch (part of the Department of Education). As time progressed, the Committee recognized that the need for assistance extended beyond mere rent subsidies. In 1942, the Committee was granted the authority to approve a broader range of aid through a dedicated supplementary fund. This encompassed various forms of support, including modest grants to acquire essential items like food, clothing, and bedding. By 1947, the Child Welfare Branch assumed full responsibility for the scheme, broadening its scope to encompass families classified as 'needy' or facing specific challenges. This shift extended the program's reach to a wider range of families requiring support.",
		source:
			"https://www.msd.govt.nz/about-msd-and-our-work/about-msd/history/social-assistance-chronology-programme-history.html",
	},
	{
		date: { year: 1941, month: "April", day: 29 },
		title: "2-2 Rehabilitation Act - passed",
		category: "Legal Framework",
		description:
			"As with post WW1, Māori veterans were not accorded the same economic rehabilitation and land access as other veterans:",
		source:
			"https://forms.justice.govt.nz/search/Documents/WT/wt_DOC_137836128/Wai%202500%2C%20A248.pdf",
	},
	{
		date: { year: 1941, month: "March", day: 26 },
		title: "3-1 Needy Families Scheme - starts",
		category: "Housing Schemes & Funds",
		description:
			"The Child Welfare Branch of the Department of Education established the Needy Families Scheme, which aimed to provide support primarily through the relocation of large or economically disadvantaged families in order to maintain the integrity of the household unit. By 1946, this initiative had already aided more than 900 families and over 5,000 children. This scheme's inception was largely driven by the acute shortage of suitable housing in inner-city regions. It was overseen by a Committee composed of representatives from the State Advances Corporation, the Social Security Department, and the Child Welfare Branch (part of the Department of Education). As time progressed, the Committee recognized that the need for assistance extended beyond mere rent subsidies. In 1942, the Committee was granted the authority to approve a broader range of aid through a dedicated supplementary fund. This encompassed various forms of support, including modest grants to acquire essential items like food, clothing, and bedding. By 1947, the Child Welfare Branch assumed full responsibility for the scheme, broadening its scope to encompass families classified as 'needy' or facing specific challenges. This shift extended the program's reach to a wider range of families requiring support.",
		source:
			"https://www.msd.govt.nz/about-msd-and-our-work/about-msd/history/social-assistance-chronology-programme-history.html",
	},
	{
		date: { year: 1941, month: "April", day: 29 },
		title: "3-2 Rehabilitation Act - passed",
		category: "Legal Framework",
		description:
			"As with post WW1, Māori veterans were not accorded the same economic rehabilitation and land access as other veterans:",
		source:
			"https://forms.justice.govt.nz/search/Documents/WT/wt_DOC_137836128/Wai%202500%2C%20A248.pdf",
	},
	{
		date: { year: 1941, month: "March", day: 26 },
		title: "4-1 Needy Families Scheme - starts",
		category: "Housing Schemes & Funds",
		description:
			"The Child Welfare Branch of the Department of Education established the Needy Families Scheme, which aimed to provide support primarily through the relocation of large or economically disadvantaged families in order to maintain the integrity of the household unit. By 1946, this initiative had already aided more than 900 families and over 5,000 children. This scheme's inception was largely driven by the acute shortage of suitable housing in inner-city regions. It was overseen by a Committee composed of representatives from the State Advances Corporation, the Social Security Department, and the Child Welfare Branch (part of the Department of Education). As time progressed, the Committee recognized that the need for assistance extended beyond mere rent subsidies. In 1942, the Committee was granted the authority to approve a broader range of aid through a dedicated supplementary fund. This encompassed various forms of support, including modest grants to acquire essential items like food, clothing, and bedding. By 1947, the Child Welfare Branch assumed full responsibility for the scheme, broadening its scope to encompass families classified as 'needy' or facing specific challenges. This shift extended the program's reach to a wider range of families requiring support.",
		source:
			"https://www.msd.govt.nz/about-msd-and-our-work/about-msd/history/social-assistance-chronology-programme-history.html",
	},
	{
		date: { year: 1941, month: "April", day: 29 },
		title: "4-2 Rehabilitation Act - passed",
		category: "Legal Framework",
		description:
			"As with post WW1, Māori veterans were not accorded the same economic rehabilitation and land access as other veterans:",
		source:
			"https://forms.justice.govt.nz/search/Documents/WT/wt_DOC_137836128/Wai%202500%2C%20A248.pdf",
	},
	{
		date: { year: 1941, month: "March", day: 26 },
		title: "5-1 Needy Families Scheme - starts",
		category: "Housing Schemes & Funds",
		description:
			"The Child Welfare Branch of the Department of Education established the Needy Families Scheme, which aimed to provide support primarily through the relocation of large or economically disadvantaged families in order to maintain the integrity of the household unit. By 1946, this initiative had already aided more than 900 families and over 5,000 children. This scheme's inception was largely driven by the acute shortage of suitable housing in inner-city regions. It was overseen by a Committee composed of representatives from the State Advances Corporation, the Social Security Department, and the Child Welfare Branch (part of the Department of Education). As time progressed, the Committee recognized that the need for assistance extended beyond mere rent subsidies. In 1942, the Committee was granted the authority to approve a broader range of aid through a dedicated supplementary fund. This encompassed various forms of support, including modest grants to acquire essential items like food, clothing, and bedding. By 1947, the Child Welfare Branch assumed full responsibility for the scheme, broadening its scope to encompass families classified as 'needy' or facing specific challenges. This shift extended the program's reach to a wider range of families requiring support.",
		source:
			"https://www.msd.govt.nz/about-msd-and-our-work/about-msd/history/social-assistance-chronology-programme-history.html",
	},
	{
		date: { year: 1941, month: "April", day: 29 },
		title: "5-2 Rehabilitation Act - passed",
		category: "Legal Framework",
		description:
			"As with post WW1, Māori veterans were not accorded the same economic rehabilitation and land access as other veterans:",
		source:
			"https://forms.justice.govt.nz/search/Documents/WT/wt_DOC_137836128/Wai%202500%2C%20A248.pdf",
	},
	{
		date: { year: 1941, month: "March", day: 26 },
		title: "6-1 Needy Families Scheme - starts",
		category: "Housing Schemes & Funds",
		description:
			"The Child Welfare Branch of the Department of Education established the Needy Families Scheme, which aimed to provide support primarily through the relocation of large or economically disadvantaged families in order to maintain the integrity of the household unit. By 1946, this initiative had already aided more than 900 families and over 5,000 children. This scheme's inception was largely driven by the acute shortage of suitable housing in inner-city regions. It was overseen by a Committee composed of representatives from the State Advances Corporation, the Social Security Department, and the Child Welfare Branch (part of the Department of Education). As time progressed, the Committee recognized that the need for assistance extended beyond mere rent subsidies. In 1942, the Committee was granted the authority to approve a broader range of aid through a dedicated supplementary fund. This encompassed various forms of support, including modest grants to acquire essential items like food, clothing, and bedding. By 1947, the Child Welfare Branch assumed full responsibility for the scheme, broadening its scope to encompass families classified as 'needy' or facing specific challenges. This shift extended the program's reach to a wider range of families requiring support.",
		source:
			"https://www.msd.govt.nz/about-msd-and-our-work/about-msd/history/social-assistance-chronology-programme-history.html",
	},
	{
		date: { year: 1941, month: "April", day: 29 },
		title: "6-2 Rehabilitation Act - passed",
		category: "Legal Framework",
		description:
			"As with post WW1, Māori veterans were not accorded the same economic rehabilitation and land access as other veterans:",
		source:
			"https://forms.justice.govt.nz/search/Documents/WT/wt_DOC_137836128/Wai%202500%2C%20A248.pdf",
	},
	{
		date: { year: 1941, month: "March", day: 26 },
		title: "7-1 Needy Families Scheme - starts",
		category: "Housing Schemes & Funds",
		description:
			"The Child Welfare Branch of the Department of Education established the Needy Families Scheme, which aimed to provide support primarily through the relocation of large or economically disadvantaged families in order to maintain the integrity of the household unit. By 1946, this initiative had already aided more than 900 families and over 5,000 children. This scheme's inception was largely driven by the acute shortage of suitable housing in inner-city regions. It was overseen by a Committee composed of representatives from the State Advances Corporation, the Social Security Department, and the Child Welfare Branch (part of the Department of Education). As time progressed, the Committee recognized that the need for assistance extended beyond mere rent subsidies. In 1942, the Committee was granted the authority to approve a broader range of aid through a dedicated supplementary fund. This encompassed various forms of support, including modest grants to acquire essential items like food, clothing, and bedding. By 1947, the Child Welfare Branch assumed full responsibility for the scheme, broadening its scope to encompass families classified as 'needy' or facing specific challenges. This shift extended the program's reach to a wider range of families requiring support.",
		source:
			"https://www.msd.govt.nz/about-msd-and-our-work/about-msd/history/social-assistance-chronology-programme-history.html",
	},
	{
		date: { year: 1941, month: "April", day: 29 },
		title: "7-2 Rehabilitation Act - passed",
		category: "Legal Framework",
		description:
			"As with post WW1, Māori veterans were not accorded the same economic rehabilitation and land access as other veterans:",
		source:
			"https://forms.justice.govt.nz/search/Documents/WT/wt_DOC_137836128/Wai%202500%2C%20A248.pdf",
	},
	{
		date: { year: 1941, month: "March", day: 26 },
		title: "8-1 Needy Families Scheme - starts",
		category: "Housing Schemes & Funds",
		description:
			"The Child Welfare Branch of the Department of Education established the Needy Families Scheme, which aimed to provide support primarily through the relocation of large or economically disadvantaged families in order to maintain the integrity of the household unit. By 1946, this initiative had already aided more than 900 families and over 5,000 children. This scheme's inception was largely driven by the acute shortage of suitable housing in inner-city regions. It was overseen by a Committee composed of representatives from the State Advances Corporation, the Social Security Department, and the Child Welfare Branch (part of the Department of Education). As time progressed, the Committee recognized that the need for assistance extended beyond mere rent subsidies. In 1942, the Committee was granted the authority to approve a broader range of aid through a dedicated supplementary fund. This encompassed various forms of support, including modest grants to acquire essential items like food, clothing, and bedding. By 1947, the Child Welfare Branch assumed full responsibility for the scheme, broadening its scope to encompass families classified as 'needy' or facing specific challenges. This shift extended the program's reach to a wider range of families requiring support.",
		source:
			"https://www.msd.govt.nz/about-msd-and-our-work/about-msd/history/social-assistance-chronology-programme-history.html",
	},
	{
		date: { year: 1941, month: "April", day: 29 },
		title: "8-2 Rehabilitation Act - passed",
		category: "Legal Framework",
		description:
			"As with post WW1, Māori veterans were not accorded the same economic rehabilitation and land access as other veterans:",
		source:
			"https://forms.justice.govt.nz/search/Documents/WT/wt_DOC_137836128/Wai%202500%2C%20A248.pdf",
	},
	{
		date: { year: 1941, month: "March", day: 26 },
		title: "9-1 Needy Families Scheme - starts",
		category: "Housing Schemes & Funds",
		description:
			"The Child Welfare Branch of the Department of Education established the Needy Families Scheme, which aimed to provide support primarily through the relocation of large or economically disadvantaged families in order to maintain the integrity of the household unit. By 1946, this initiative had already aided more than 900 families and over 5,000 children. This scheme's inception was largely driven by the acute shortage of suitable housing in inner-city regions. It was overseen by a Committee composed of representatives from the State Advances Corporation, the Social Security Department, and the Child Welfare Branch (part of the Department of Education). As time progressed, the Committee recognized that the need for assistance extended beyond mere rent subsidies. In 1942, the Committee was granted the authority to approve a broader range of aid through a dedicated supplementary fund. This encompassed various forms of support, including modest grants to acquire essential items like food, clothing, and bedding. By 1947, the Child Welfare Branch assumed full responsibility for the scheme, broadening its scope to encompass families classified as 'needy' or facing specific challenges. This shift extended the program's reach to a wider range of families requiring support.",
		source:
			"https://www.msd.govt.nz/about-msd-and-our-work/about-msd/history/social-assistance-chronology-programme-history.html",
	},
	{
		date: { year: 1941, month: "April", day: 29 },
		title: "9-2 Rehabilitation Act - passed",
		category: "Legal Framework",
		description:
			"As with post WW1, Māori veterans were not accorded the same economic rehabilitation and land access as other veterans:",
		source:
			"https://forms.justice.govt.nz/search/Documents/WT/wt_DOC_137836128/Wai%202500%2C%20A248.pdf",
	},
	{
		date: { year: 1941, month: "March", day: 26 },
		title: "10-1 Needy Families Scheme - starts",
		category: "Housing Schemes & Funds",
		description:
			"The Child Welfare Branch of the Department of Education established the Needy Families Scheme, which aimed to provide support primarily through the relocation of large or economically disadvantaged families in order to maintain the integrity of the household unit. By 1946, this initiative had already aided more than 900 families and over 5,000 children. This scheme's inception was largely driven by the acute shortage of suitable housing in inner-city regions. It was overseen by a Committee composed of representatives from the State Advances Corporation, the Social Security Department, and the Child Welfare Branch (part of the Department of Education). As time progressed, the Committee recognized that the need for assistance extended beyond mere rent subsidies. In 1942, the Committee was granted the authority to approve a broader range of aid through a dedicated supplementary fund. This encompassed various forms of support, including modest grants to acquire essential items like food, clothing, and bedding. By 1947, the Child Welfare Branch assumed full responsibility for the scheme, broadening its scope to encompass families classified as 'needy' or facing specific challenges. This shift extended the program's reach to a wider range of families requiring support.",
		source:
			"https://www.msd.govt.nz/about-msd-and-our-work/about-msd/history/social-assistance-chronology-programme-history.html",
	},
	{
		date: { year: 1941, month: "April", day: 29 },
		title: "10-2 Rehabilitation Act - passed",
		category: "Legal Framework",
		description:
			"As with post WW1, Māori veterans were not accorded the same economic rehabilitation and land access as other veterans:",
		source:
			"https://forms.justice.govt.nz/search/Documents/WT/wt_DOC_137836128/Wai%202500%2C%20A248.pdf",
	},
	{
		date: { year: 1942, month: "January", day: 1 },
		title: "Māori War Effort Organisation - starts",
		category: "Public Sector Organisation",
		description:
			"The process of urbanization was expedited through the efforts of the Māori War Effort Organisation (MWEO), founded in 1942 with the aim of channeling Māori involvement to bolster wartime endeavors. The MWEO established an intricate system of tribal committees tasked with sustaining recruitment efforts, ensuring adequate food production, and facilitating the mobilization of manpower. As the organization evolved, it encompassed a broader array of domains, including housing conditions, education, vocational training, land management, and concerns related to the potential misappropriation of social security benefits. Over time, the MWEO grew into the most expansive and comprehensive national Māori entity, effectively shaping various aspects of Māori life and engagement.",
		source: "http://www.nzjh.auckland.ac.nz/docs/2002/NZJH_36_2_03.pdf",
	},
];

//========================= government period data =========================
export const governments = [
	{
		start: { year: 1935, month: 1, day: 1 },
		end: { year: 1949, month: 1, day: 1 },
		government: "First Labour Government",
		color: "red",
		details: "Some details about First Labour Government.",
	},
	{
		start: { year: 1949, month: 1, day: 1 },
		end: { year: 1957, month: 1, day: 1 },
		government: "First National Government",
		color: "blue",
		details: "Some details about First National Government.",
	},
	{
		start: { year: 1957, month: 1, day: 1 },
		end: { year: 1960, month: 1, day: 1 },
		government: "Second Labour Government",
		color: "red",
		details: "Some details about Second Labour Government.",
	},
	{
		start: { year: 1960, month: 1, day: 1 },
		end: { year: 1972, month: 1, day: 1 },
		government: "Second National Government",
		color: "blue",
		details: "Some details about Second National Government.",
	},
];

//========================= period event data =========================

export const events = [
	{
		start: { year: 1929, month: 5, day: 21 },
		end: { year: 1936, month: 11, day: 17 },
		event: "551 houses built under Native Land Development scheme",
		color: "gold",
		details:
			"Some details about 551 houses built under Native Land Development scheme.",
		link: "https://forms.justice.govt.nz/search/Documents/WT/wt_DOC_94029549/Wai%2060%2C%20A002.pdf",
	},
	{
		start: { year: 1936, month: 1, day: 18 },
		end: { year: 1945, month: 9, day: 7 },
		event: "2289 houses built under Native Housing Act",
		color: "gold",
		details:
			"The 1935 Native Housing Act and its 1938 Amendment delivered only a limited number of houses during the period. The Board of Maori Affairs cost recovery programme meant that the quality of houses delivered were well below those expected for Pakeha.'Baths, sinks, sewerage, hot water supplies and ranges [were cut out] in that order'.",
		link: "https://forms.justice.govt.nz/search/Documents/WT/wt_DOC_94029549/Wai%2060%2C%20A002.pdf",
	},
	{
		start: { year: 1951, month: 1, day: 11 },
		end: { year: 1961, month: 7, day: 7 },
		event: "Department of Māori Affairs builds 7,312  houses",
		color: "gold",
		details:
			"The shortage in Māori housing remained an issue at the start of the 1950s, with the DMA estimating in 1950 that in excess of 2000 houses per year would be required over the next three decades to meet demand. The DMA aimed to provide 800–1000 houses per year over the next decade but never met this target, with 5662 new houses built between 1951 and 1961 and an additional 1650 purchased, repaired or renovated. The DMA did not deliver the numbers needed, though at 7312 over the decade, it was not too far from its lower target",
		link: "https://mro.massey.ac.nz/handle/10179/6503",
	},
	{
		start: { year: 1961, month: 7, day: 11 },
		end: { year: 1971, month: 1, day: 7 },
		event: "DMA and SAC build 12,903 houses for Māori",
		color: "gold",
		details: "Some details about DMA and SAC build 12,903 houses for Māori.",
		link: "https://mro.massey.ac.nz/handle/10179/6503",
	},
];
