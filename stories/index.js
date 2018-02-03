'use strict'

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { checkA11y } from '@storybook/addon-a11y'

import Input from './../'
import styles from './styles.css' // eslint-disable-line no-unused-vars

storiesOf('Input', module)
	.addDecorator(checkA11y)
	.add('types', () => (
		<section>
			<fieldset>
				<Input
					placeholder="Type text"
					label="Username"
					name="username"
					onChange={action('typing...')}
				/>
			</fieldset>

			<fieldset>
				<Input
					type="email"
					placeholder="Type email"
					label="E-mail"
					name="email"
					onChange={action('typing...')}
				/>
			</fieldset>

			<fieldset>
				<Input
					type="password"
					placeholder="Type password"
					label="Password"
					name="password"
					onChange={action('typing...')}
				/>
			</fieldset>
		</section>
	))
	.add('states', () => (
		<section>
			<fieldset>
				<Input
					type="password"
					label="Password"
					placeholder="Type password"
					name="password"
					error="Your password must be at least 6 characters"
					onChange={action('typing...')}
				/>
			</fieldset>

			<fieldset>
				<Input
					placeholder="Repository name"
					label="Repository"
					name="repository"
					hint="Great repository names are short and memorable. Need inspiration? How about shiny-broccoli."
					onChange={action('typing...')}
				/>
			</fieldset>

			<fieldset>
				<Input
					label="Country"
					name="country"
					readOnly={true}
					value="Brazil"
					hint="This is a ready only input"
				/>
			</fieldset>

			<fieldset>
				<Input
					label="City"
					name="city"
					disabled={true}
					value="São Paulo"
					hint="This is a disabled input"
				/>
			</fieldset>
		</section>
	))
