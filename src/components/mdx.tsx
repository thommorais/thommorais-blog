import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { highlight } from 'sugar-high'

interface TableData {
	headers: string[]
	rows: string[][]
}

interface TableProps {
	data: TableData
}

function Table({ data }: TableProps) {
	const headers = data.headers.map(header => <th key={header}>{header}</th>)
	const rows = data.rows.map((row, index) => (
		// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
		<tr key={index}>
			{row.map((cell, cellIndex) => (
				<td key={cell}>{cell}</td>
			))}
		</tr>
	))

	return (
		<table>
			<thead>
				<tr>{headers}</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	)
}

interface LinkProps {
	href: string
	children: React.ReactNode
	[key: string]: unknown
}

function CustomLink(props: LinkProps) {
	if (props.href.startsWith('/')) {
		return (
			<Link {...props} href={props.href}>
				{props.children}
			</Link>
		)
	}

	if (props.href.startsWith('#')) {
		return <a {...props} />
	}

	return <a target='_blank' rel='noopener noreferrer' {...props} />
}

interface ImageProps {
	alt: string
	src: string
	width?: number
	height?: number
	[key: string]: unknown
}

function RoundedImage(props: ImageProps) {
	return <Image {...props} alt={props.alt} className='rounded-lg' />
}

interface CodeProps {
	children: string
	[key: string]: unknown
}

function Code({ children, ...props }: CodeProps) {
	const codeHTML = highlight(children)
	// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
	return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str: string): string {
	return str
		.toString()
		.toLowerCase()
		.trim() // Remove whitespace from both ends of a string
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/&/g, '-and-') // Replace & with 'and'
		.replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
		.replace(/\-\-+/g, '-') // Replace multiple - with single -
}

interface HeadingProps {
	children: React.ReactNode
}

function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
	const Heading = ({ children }: HeadingProps) => {
		const slug = slugify(String(children))
		return React.createElement(
			`h${level}`,
			{ id: slug },
			[
				React.createElement('a', {
					href: `#${slug}`,
					key: `link-${slug}`,
					className: 'anchor',
				}),
			],
			children,
		)
	}

	Heading.displayName = `Heading${level}`

	return Heading
}

const components = {
	h1: createHeading(1),
	h2: createHeading(2),
	h3: createHeading(3),
	h4: createHeading(4),
	h5: createHeading(5),
	h6: createHeading(6),
	Image: RoundedImage,
	a: CustomLink,
	code: Code,
	Table,
}

interface CustomMDXProps extends Omit<MDXRemoteProps, 'components'> {
	components?: Record<string, React.ComponentType<unknown>>
}

export function CustomMDX(props: CustomMDXProps) {
	return <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />
}
