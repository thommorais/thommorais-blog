export type Param = string | string[] | undefined
export type Params = Record<string, Param>

export type SearchParams = {
	[param: string]: Param
}

export type PageProps = Readonly<{
	params: Promise<Params>
	searchParams: Promise<SearchParams>
}>

export type LayoutProps = Readonly<{ params: Promise<Params>; children: React.ReactNode }>

export type MetaDataProps = {
	params: Promise<Params>
}
