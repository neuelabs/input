'use strict'

import test from 'ava'
import React from 'react'
import render from 'react-test-renderer'
import Input from './../'

test('Input text component', t => {
	const tree = render
		.create(
			<Input
				placeholder="Type text"
				label="Username"
				name="username"
				onChange={() => console.log('typing...')}
			/>
		)
		.toJSON()
	t.snapshot(tree)
})

test('Input email component', t => {
	const tree = render
		.create(
			<Input
				type="email"
				placeholder="Type email"
				label="E-mail"
				name="email"
				onChange={() => console.log('typing...')}
			/>
		)
		.toJSON()
	t.snapshot(tree)
})

test('Input password component', t => {
	const tree = render
		.create(
			<Input
				type="password"
				placeholder="Type password"
				label="Password"
				name="password"
				onChange={() => console.log('typing...')}
			/>
		)
		.toJSON()
	t.snapshot(tree)
})

test('Input error component', t => {
	const tree = render
		.create(
			<Input
				type="password"
				label="Password"
				placeholder="Type password"
				name="password"
				error="Your password must be at least 6 characters"
				onChange={() => console.log('typing...')}
			/>
		)
		.toJSON()
	t.snapshot(tree)
})

test('Input hint component', t => {
	const tree = render
		.create(
			<Input
				placeholder="Repository name"
				label="Repository"
				name="repository"
				hint="Great repository names are short and memorable. Need inspiration? How about shiny-broccoli."
				onChange={() => console.log('typing...')}
			/>
		)
		.toJSON()
	t.snapshot(tree)
})

test('Input read only component', t => {
	const tree = render
		.create(
			<Input
				label="Country"
				name="country"
				readOnly={true}
				value="Brazil"
				hint="This is a ready only input"
			/>
		)
		.toJSON()
	t.snapshot(tree)
})

test('Input disabled component', t => {
	const tree = render
		.create(
			<Input
				label="City"
				name="city"
				disabled={true}
				value="São Paulo"
				hint="This is a disabled input"
			/>
		)
		.toJSON()
	t.snapshot(tree)
})
