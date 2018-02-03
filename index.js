'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Input = ({
	type,
	name,
	label,
	placeholder,
	value,
	onChange,
	autoFocus,
	readOnly,
	disabled,
	error,
	hint
}) => {
	const classNames = classnames({ error }, { readOnly }, { disabled })

	return (
		<div>
			<label htmlFor={name}>{label}</label>

			<input
				type={type}
				name={name}
				id={name}
				className={classNames}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				autoFocus={autoFocus}
				readOnly={readOnly}
				disabled={disabled}
				title={label}
			/>

			{error ? (
				<span className="error-text">
					*<p>{error}</p>
				</span>
			) : null}

			{hint ? <span className="hint">{hint}</span> : null}

			<style jsx>{`
				div {
					position: relative;
				}

				input {
					width: 100%;
					max-width: 100%;
					padding: 15px;
					font-size: 12px;
					border: none;
					border-bottom: 1px solid #eeeeee;
					outline: none;
					transition: 0.2s;
					color: #000000;
					background: transparent;
				}

				input:focus {
					border-color: #000000;
				}

				label {
					margin-left: 15px;
					font-size: 12px;
					font-weight: 500;
				}

				.error {
					border-color: #cc2936;
				}

				.error:focus {
					border-color: #cc2936;
				}

				.error-text {
					color: #cc2936;
				}

				.readOnly {
					cursor: default;
					border: none;
					pointer-events: none;
					font-weight: 500;
					color: #60737c;
				}

				.disabled {
					cursor: not-allowed;
					color: #60737c;
				}

				.hint {
					color: #60737c;
					font-style: italic;
					font-weight: 400;
				}

				span {
					font-size: 12px;
					display: block;
					width: 100%;
					font-weight: 400;
					margin-top: 8px;
				}

				p {
					display: inline-block;
					margin-left: 5px;
					color: #60737c;
				}
			`}</style>
		</div>
	)
}

Input.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.any,
	onChange: PropTypes.func,
	autoFocus: PropTypes.bool,
	readOnly: PropTypes.bool,
	disabled: PropTypes.bool,
	error: PropTypes.string,
	hint: PropTypes.string
}

Input.defaultProps = {
	type: 'text',
	autoFocus: false,
	readOnly: false,
	disabled: false
}

export default Input
